
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Check, X, RefreshCw } from 'lucide-react';

interface WriteExerciseProps {
  prompt: string;
  modelAnswer: string;
  onComplete: (isCorrect: boolean) => void;
}

const WriteExercise = ({ prompt, modelAnswer, onComplete }: WriteExerciseProps) => {
  const [userAnswer, setUserAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [feedback, setFeedback] = useState('');
  const [isChecking, setIsChecking] = useState(false);
  const { toast } = useToast();

  const checkAnswer = () => {
    if (!userAnswer.trim()) {
      toast({
        title: "Respuesta vacía",
        description: "Por favor, escribe una respuesta antes de verificar.",
        variant: "destructive"
      });
      return;
    }

    setIsChecking(true);

    // Simple answer checking logic
    // This would ideally use more sophisticated NLP for better comparison
    setTimeout(() => {
      const userAnswerClean = userAnswer.trim().toLowerCase().replace(/[.,!?;:]/g, '');
      const modelAnswerClean = modelAnswer.trim().toLowerCase().replace(/[.,!?;:]/g, '');
      
      // Check for exact match or very close match
      const exactMatch = userAnswerClean === modelAnswerClean;
      
      // Check for partial match (contains most of the important words)
      const modelWords = new Set(modelAnswerClean.split(/\s+/));
      const userWords = userAnswerClean.split(/\s+/);
      const matchedWords = userWords.filter(word => modelWords.has(word)).length;
      const percentMatched = modelWords.size > 0 ? matchedWords / modelWords.size : 0;
      
      const partialMatch = percentMatched >= 0.7; // 70% of important words match
      
      if (exactMatch) {
        setIsCorrect(true);
        setFeedback("¡Excelente! Tu respuesta es correcta.");
        onComplete(true);
      } else if (partialMatch) {
        setIsCorrect(true);
        setFeedback("¡Muy bien! Tu respuesta es bastante cercana a la respuesta modelo.");
        onComplete(true);
      } else {
        setIsCorrect(false);
        setFeedback(`Tu respuesta es diferente a la esperada. La respuesta modelo es: "${modelAnswer}"`);
        onComplete(false);
      }
      
      setIsChecking(false);
    }, 1000);
  };

  const resetExercise = () => {
    setUserAnswer('');
    setIsCorrect(null);
    setFeedback('');
  };

  return (
    <div className="bg-white/60 rounded-lg p-6 shadow-sm border border-border">
      <h3 className="text-lg font-medium mb-4">Ejercicio de escritura</h3>
      
      <div className="mb-4">
        <p className="font-medium mb-2">Instrucción:</p>
        <p className="bg-secondary p-3 rounded-md">{prompt}</p>
      </div>
      
      <div className="mb-4">
        <label className="font-medium mb-2 block">Tu respuesta:</label>
        <Textarea
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          placeholder="Escribe tu respuesta aquí..."
          className="min-h-[100px] bg-white"
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
            disabled={!userAnswer.trim() || isChecking}
            className="bg-primary hover:bg-primary/90"
          >
            {isChecking ? 'Verificando...' : 'Verificar respuesta'}
          </Button>
        ) : (
          <Button
            onClick={resetExercise}
            variant="outline"
            className="flex items-center gap-1"
          >
            <RefreshCw className="h-4 w-4" />
            Reintentar
          </Button>
        )}
      </div>
    </div>
  );
};

export default WriteExercise;
