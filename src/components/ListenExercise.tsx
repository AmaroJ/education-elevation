
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { Check, X, Play, Square, Volume2 } from 'lucide-react';
import useSpeechSynthesis from '@/hooks/useSpeechSynthesis';

interface ListenExerciseProps {
  text: string;
  onComplete: (isCorrect: boolean) => void;
}

const ListenExercise = ({ text, onComplete }: ListenExerciseProps) => {
  const [userInput, setUserInput] = useState('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [feedback, setFeedback] = useState('');
  const [hasPlayed, setHasPlayed] = useState(false);
  const { toast } = useToast();
  
  const { speak, cancel, isSpeaking, isSupported } = useSpeechSynthesis({
    onEnd: () => setHasPlayed(true)
  });

  const playAudio = () => {
    if (!isSupported) {
      toast({
        title: "Función no disponible",
        description: "Tu navegador no soporta la síntesis de voz.",
        variant: "destructive"
      });
      return;
    }
    
    speak(text);
    setHasPlayed(true);
  };

  const stopAudio = () => {
    cancel();
  };

  const checkAnswer = () => {
    if (!userInput.trim()) {
      toast({
        title: "Respuesta vacía",
        description: "Por favor, escribe lo que escuchaste antes de verificar.",
        variant: "destructive"
      });
      return;
    }

    if (!hasPlayed) {
      toast({
        title: "No has escuchado el audio",
        description: "Por favor, escucha el audio antes de verificar tu respuesta.",
        variant: "destructive"
      });
      return;
    }

    // Clean up the text for comparison
    const userClean = userInput.trim().toLowerCase().replace(/[.,!?;:]/g, '');
    const textClean = text.trim().toLowerCase().replace(/[.,!?;:]/g, '');
    
    // Calculate similarity (basic word overlap)
    const userWords = userClean.split(/\s+/);
    const textWords = textClean.split(/\s+/);
    
    let correctWords = 0;
    userWords.forEach(word => {
      if (textWords.includes(word)) correctWords++;
    });
    
    const similarity = textWords.length > 0 ? correctWords / textWords.length : 0;
    
    if (similarity >= 0.9) { // 90% accuracy
      setIsCorrect(true);
      setFeedback("¡Excelente! Has escrito correctamente lo que escuchaste.");
      onComplete(true);
    } else if (similarity >= 0.7) { // 70% accuracy
      setIsCorrect(true);
      setFeedback("¡Muy bien! Tu respuesta es bastante cercana a lo que se dijo.");
      onComplete(true);
    } else {
      setIsCorrect(false);
      setFeedback(`Tu respuesta tiene diferencias con el texto original. El texto era: "${text}"`);
      onComplete(false);
    }
  };

  const resetExercise = () => {
    setUserInput('');
    setIsCorrect(null);
    setFeedback('');
    setHasPlayed(false);
  };

  return (
    <div className="bg-white/60 rounded-lg p-6 shadow-sm border border-border">
      <h3 className="text-lg font-medium mb-4">Ejercicio de escucha</h3>
      
      <div className="mb-6">
        <p className="font-medium mb-2">Instrucciones:</p>
        <p>Escucha el audio y escribe lo que oyes. Puedes reproducirlo varias veces si es necesario.</p>
        
        <div className="flex justify-center mt-4">
          <div className="bg-primary/10 p-4 rounded-full">
            {isSpeaking ? (
              <Button 
                variant="outline" 
                size="icon" 
                className="h-12 w-12 rounded-full"
                onClick={stopAudio}
              >
                <Square className="h-6 w-6" />
              </Button>
            ) : (
              <Button 
                variant="outline" 
                size="icon" 
                className="h-12 w-12 rounded-full"
                onClick={playAudio}
              >
                {hasPlayed ? (
                  <Volume2 className="h-6 w-6" />
                ) : (
                  <Play className="h-6 w-6 ml-1" />
                )}
              </Button>
            )}
          </div>
        </div>
      </div>
      
      <div className="mb-4">
        <label className="font-medium mb-2 block">Tu respuesta:</label>
        <Input
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Escribe lo que escuchas..."
          className="bg-white"
          disabled={isCorrect !== null}
        />
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
      
      <div className="flex justify-end gap-2">
        {isCorrect === null ? (
          <Button 
            onClick={checkAnswer}
            className="bg-primary hover:bg-primary/90"
          >
            Verificar respuesta
          </Button>
        ) : (
          <Button
            onClick={resetExercise}
            variant="outline"
          >
            Intentar otra vez
          </Button>
        )}
      </div>
    </div>
  );
};

export default ListenExercise;
