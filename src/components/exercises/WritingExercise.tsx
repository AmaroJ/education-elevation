
import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface WritingExercise {
  prompt: string;
  answer: string;
}

interface WritingExerciseProps {
  writingExercises: WritingExercise[];
  onCheckAnswer: (userAnswer: string, correctAnswer: string) => boolean;
}

const WritingExerciseComponent = ({
  writingExercises,
  onCheckAnswer
}: WritingExerciseProps) => {
  const [currentWritingIndex, setCurrentWritingIndex] = useState(0);
  const [writtenAnswer, setWrittenAnswer] = useState('');
  const [writingSubmitted, setWritingSubmitted] = useState(false);

  const handleCheckWritingAnswer = () => {
    const exercise = writingExercises[currentWritingIndex];
    const isCorrect = onCheckAnswer(writtenAnswer, exercise.answer);
    setWritingSubmitted(true);
    return isCorrect;
  };

  const handleWritingNext = () => {
    if (currentWritingIndex < writingExercises.length - 1) {
      setCurrentWritingIndex(currentWritingIndex + 1);
      setWrittenAnswer('');
      setWritingSubmitted(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="p-6 bg-secondary/30 rounded-xl">
        <h3 className="text-lg font-medium mb-4">Ejercicios de escritura</h3>
        <p className="mb-4">Practica tu escritura completando los siguientes ejercicios:</p>
        
        <div className="p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg shadow-sm">
          <div className="mb-4">
            <h4 className="font-medium mb-2">Ejercicio {currentWritingIndex + 1} de {writingExercises.length}</h4>
            <p className="mb-3">{writingExercises[currentWritingIndex].prompt}</p>
            
            <textarea
              className="w-full p-3 border rounded-md min-h-[100px]"
              placeholder="Escribe tu respuesta aquí..."
              value={writtenAnswer}
              onChange={(e) => setWrittenAnswer(e.target.value)}
              disabled={writingSubmitted}
            />
          </div>
          
          {writingSubmitted ? (
            <div className="flex justify-between">
              <div className="p-3 rounded bg-secondary">
                <p className="font-medium">Respuesta sugerida:</p>
                <p>{writingExercises[currentWritingIndex].answer}</p>
              </div>
              
              <Button
                variant="secondary"
                onClick={handleWritingNext}
              >
                {currentWritingIndex < writingExercises.length - 1 ? 'Siguiente ejercicio' : 'Finalizar'}
              </Button>
            </div>
          ) : (
            <Button
              variant="secondary"
              onClick={handleCheckWritingAnswer}
              disabled={!writtenAnswer.trim()}
            >
              Verificar respuesta
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default WritingExerciseComponent;
