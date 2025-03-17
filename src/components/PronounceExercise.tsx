
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Check, X, Mic, MicOff, Volume2, RefreshCw } from 'lucide-react';
import useSpeechSynthesis from '@/hooks/useSpeechSynthesis';
import useSpeechRecognition from '@/hooks/useSpeechRecognition';

interface PronounceExerciseProps {
  text: string;
  onComplete: (isCorrect: boolean) => void;
}

const PronounceExercise = ({ text, onComplete }: PronounceExerciseProps) => {
  const [transcription, setTranscription] = useState('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [feedback, setFeedback] = useState('');
  const [hasListened, setHasListened] = useState(false);
  const { toast } = useToast();
  
  const { speak, isSpeaking, isSupported: isSpeechSupported } = useSpeechSynthesis();
  
  const { 
    isListening, 
    transcript, 
    startListening, 
    stopListening, 
    isSupported: isRecognitionSupported 
  } = useSpeechRecognition({
    onResult: (result) => setTranscription(result),
    language: 'en-US'
  });

  // Update transcription when transcript changes
  useEffect(() => {
    if (transcript) {
      setTranscription(transcript);
    }
  }, [transcript]);

  const playAudio = () => {
    if (!isSpeechSupported) {
      toast({
        title: "Función no disponible",
        description: "Tu navegador no soporta la síntesis de voz.",
        variant: "destructive"
      });
      return;
    }
    
    speak(text);
    setHasListened(true);
  };

  const handleStartListening = () => {
    if (!isRecognitionSupported) {
      toast({
        title: "Función no disponible",
        description: "Tu navegador no soporta el reconocimiento de voz.",
        variant: "destructive"
      });
      return;
    }
    
    setTranscription('');
    startListening();
  };

  const handleStopListening = () => {
    stopListening();
    
    if (!transcription.trim()) {
      toast({
        title: "No se detectó audio",
        description: "No pudimos escuchar lo que dijiste. Intenta de nuevo.",
        variant: "destructive"
      });
      return;
    }
    
    checkPronunciation();
  };

  const checkPronunciation = () => {
    if (!transcription.trim()) {
      toast({
        title: "No hay texto para verificar",
        description: "Por favor, habla para que podamos evaluar tu pronunciación.",
        variant: "destructive"
      });
      return;
    }

    // Clean up the texts for comparison
    const userClean = transcription.trim().toLowerCase().replace(/[.,!?;:]/g, '');
    const textClean = text.trim().toLowerCase().replace(/[.,!?;:]/g, '');
    
    // Simple word-by-word comparison
    const userWords = userClean.split(/\s+/);
    const textWords = textClean.split(/\s+/);
    
    let correctWords = 0;
    userWords.forEach(word => {
      if (textWords.includes(word)) correctWords++;
    });
    
    // Calculate accuracy
    const accuracy = textWords.length > 0 ? correctWords / textWords.length : 0;
    
    if (accuracy >= 0.9) { // 90% accuracy
      setIsCorrect(true);
      setFeedback("¡Excelente pronunciación! Tu habla fue reconocida correctamente.");
      onComplete(true);
    } else if (accuracy >= 0.7) { // 70% accuracy
      setIsCorrect(true);
      setFeedback("¡Buena pronunciación! La mayoría de las palabras fueron reconocidas correctamente.");
      onComplete(true);
    } else {
      setIsCorrect(false);
      setFeedback(`Tu pronunciación tiene áreas de mejora. El texto era: "${text}" y se reconoció: "${transcription}"`);
      onComplete(false);
    }
  };

  const resetExercise = () => {
    setTranscription('');
    setIsCorrect(null);
    setFeedback('');
  };

  return (
    <div className="bg-white/60 rounded-lg p-6 shadow-sm border border-border">
      <h3 className="text-lg font-medium mb-4">Ejercicio de pronunciación</h3>
      
      <div className="mb-4">
        <p className="font-medium mb-2">Instrucciones:</p>
        <p>Escucha la frase y luego pronúnciala lo mejor que puedas. Habla cuando el micrófono esté activo.</p>
      </div>
      
      <div className="mb-6 bg-secondary p-4 rounded-md">
        <p className="font-medium mb-2">Frase a pronunciar:</p>
        <p className="text-lg">{text}</p>
        
        <Button 
          variant="outline" 
          size="sm" 
          className="mt-2 flex items-center gap-1"
          onClick={playAudio}
          disabled={isSpeaking}
        >
          <Volume2 className="h-4 w-4" />
          {isSpeaking ? 'Reproduciendo...' : 'Escuchar pronunciación'}
        </Button>
      </div>
      
      <div className="mb-6">
        <div className="flex justify-center mb-4">
          {isListening ? (
            <Button 
              variant="destructive" 
              size="lg" 
              className="h-16 w-16 rounded-full flex items-center justify-center"
              onClick={handleStopListening}
            >
              <MicOff className="h-8 w-8" />
            </Button>
          ) : (
            <Button 
              variant="outline" 
              size="lg" 
              className="h-16 w-16 rounded-full flex items-center justify-center bg-primary text-white hover:bg-primary/90"
              onClick={handleStartListening}
              disabled={isCorrect !== null}
            >
              <Mic className="h-8 w-8" />
            </Button>
          )}
        </div>
        
        {transcription && (
          <div className="bg-white p-3 rounded-md mb-4">
            <p className="font-medium mb-1">Lo que dijiste:</p>
            <p>{transcription}</p>
          </div>
        )}
      </div>
      
      {feedback && (
        <div className={`mb-4 p-3 rounded-md ${
          isCorrect ? 'bg-green-50 text-green-800 border border-green-200' :
          'bg-red-50 text-red-800 border border-red-200'
        }`}>
          <div className="flex items-start gap-2">
            {isCorrect ? 
              <Check className="h-5 w-5 text-green-600 mt-0.5" /> : 
              <X className="h-5 w-5 text-red-600 mt-0.5" />
            }
            <p>{feedback}</p>
          </div>
        </div>
      )}
      
      {isCorrect !== null && (
        <div className="flex justify-end">
          <Button
            onClick={resetExercise}
            variant="outline"
            className="flex items-center gap-1"
          >
            <RefreshCw className="h-4 w-4" />
            Intentar otra vez
          </Button>
        </div>
      )}
    </div>
  );
};

export default PronounceExercise;
