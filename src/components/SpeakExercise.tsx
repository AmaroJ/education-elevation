
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Check, X, Mic, MicOff, RefreshCw } from 'lucide-react';
import useSpeechRecognition from '@/hooks/useSpeechRecognition';

interface SpeakExerciseProps {
  prompt: string;
  keywords: string[];
  onComplete: (isCorrect: boolean) => void;
}

const SpeakExercise = ({ prompt, keywords, onComplete }: SpeakExerciseProps) => {
  const [transcription, setTranscription] = useState('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [feedback, setFeedback] = useState('');
  const [keywordsFound, setKeywordsFound] = useState<string[]>([]);
  const [keywordsMissing, setKeywordsMissing] = useState<string[]>([]);
  const { toast } = useToast();
  
  const { 
    isListening, 
    transcript, 
    startListening, 
    stopListening, 
    isSupported 
  } = useSpeechRecognition({
    onResult: (result) => setTranscription(result),
    language: 'en-US'
  });

  const handleStartListening = () => {
    if (!isSupported) {
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
    
    evaluateSpeech();
  };

  const evaluateSpeech = () => {
    if (!transcription.trim()) {
      toast({
        title: "No hay texto para verificar",
        description: "Por favor, habla para que podamos evaluar tu respuesta.",
        variant: "destructive"
      });
      return;
    }

    // Convert to lowercase for easier comparison
    const userSpeech = transcription.toLowerCase();
    
    // Check which keywords were found in the user's speech
    const found: string[] = [];
    const missing: string[] = [];
    
    keywords.forEach(keyword => {
      if (userSpeech.includes(keyword.toLowerCase())) {
        found.push(keyword);
      } else {
        missing.push(keyword);
      }
    });
    
    setKeywordsFound(found);
    setKeywordsMissing(missing);
    
    // Calculate success based on percentage of keywords found
    const successRate = keywords.length > 0 ? found.length / keywords.length : 0;
    
    if (successRate >= 0.8) { // 80% of keywords
      setIsCorrect(true);
      setFeedback("¡Excelente! Has usado la mayoría de las palabras clave en tu respuesta.");
      onComplete(true);
    } else if (successRate >= 0.5) { // 50% of keywords
      setIsCorrect(true);
      setFeedback("¡Buen trabajo! Has usado algunas de las palabras clave importantes.");
      onComplete(true);
    } else {
      setIsCorrect(false);
      setFeedback("Intenta usar más palabras clave en tu respuesta. Revisa las palabras que deberías incluir.");
      onComplete(false);
    }
  };

  const resetExercise = () => {
    setTranscription('');
    setIsCorrect(null);
    setFeedback('');
    setKeywordsFound([]);
    setKeywordsMissing([]);
  };

  return (
    <div className="bg-white/60 rounded-lg p-6 shadow-sm border border-border">
      <h3 className="text-lg font-medium mb-4">Ejercicio de conversación</h3>
      
      <div className="mb-4">
        <p className="font-medium mb-2">Situación:</p>
        <div className="bg-secondary p-3 rounded-md">
          <p>{prompt}</p>
        </div>
      </div>
      
      <div className="mb-4">
        <p className="font-medium mb-2">Palabras clave a utilizar:</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {keywords.map((keyword, index) => (
            <span 
              key={index} 
              className={`px-2 py-1 rounded-full text-sm font-medium ${
                keywordsFound.includes(keyword)
                  ? 'bg-green-100 text-green-800 border border-green-200'
                  : keywordsMissing.includes(keyword)
                    ? 'bg-red-100 text-red-800 border border-red-200'
                    : 'bg-gray-100 text-gray-800 border border-gray-200'
              }`}
            >
              {keyword}
            </span>
          ))}
        </div>
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
        
        {isListening && (
          <p className="text-center text-sm text-muted-foreground animate-pulse">
            Escuchando... Habla ahora
          </p>
        )}
        
        {transcription && (
          <div className="bg-white p-3 rounded-md">
            <p className="font-medium mb-1">Tu respuesta:</p>
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

export default SpeakExercise;
