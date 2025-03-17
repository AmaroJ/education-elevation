
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Volume2 } from 'lucide-react';

interface ListeningExerciseProps {
  examples: string[];
  onPlayAudio: (text: string, index: number) => void;
  activeAudioExample: number | null;
}

interface ListeningScore {
  correct: boolean;
  attempted: boolean;
}

const ListeningExercise = ({ 
  examples, 
  onPlayAudio, 
  activeAudioExample 
}: ListeningExerciseProps) => {
  const [spokenText, setSpokenText] = useState('');
  const [listeningScores, setListeningScores] = useState<ListeningScore[]>(
    examples.map(() => ({ correct: false, attempted: false }))
  );

  const checkListeningAnswer = (index: number, userAnswer: string) => {
    const correctAnswer = examples[index];
    // Case-insensitive comparison and ignore punctuation
    const normalizedUserAnswer = userAnswer.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").trim();
    const normalizedCorrectAnswer = correctAnswer.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").trim();
    
    const isCorrect = normalizedUserAnswer === normalizedCorrectAnswer;
    
    const newScores = [...listeningScores];
    newScores[index] = { correct: isCorrect, attempted: true };
    setListeningScores(newScores);
    
    return isCorrect;
  };

  return (
    <div className="space-y-6">
      <div className="p-6 bg-secondary/30 rounded-xl">
        <h3 className="text-lg font-medium mb-4">Ejercicios de escucha</h3>
        <p className="mb-4">Escucha cada ejemplo y escribe lo que oyes:</p>
        
        <div className="space-y-6">
          {examples.map((example, index) => (
            <div key={index} className="p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-3">
                <span className="font-medium">Ejemplo {index + 1}</span>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className={`flex items-center gap-1 ${activeAudioExample === index ? 'bg-primary/20' : ''}`}
                  onClick={() => onPlayAudio(example, index)}
                  disabled={activeAudioExample !== null && activeAudioExample !== index}
                >
                  <Volume2 size={14} />
                  {activeAudioExample === index ? 'Reproduciendo...' : 'Escuchar'}
                </Button>
              </div>
              
              <div className="mt-4">
                <label className="block text-sm font-medium mb-1">Escribe lo que oyes:</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    className="flex-1 p-2 border rounded-md"
                    placeholder="Escribe aquí..."
                    value={spokenText === example ? example : ''}
                    onChange={(e) => setSpokenText(e.target.value)}
                    disabled={listeningScores[index].attempted}
                  />
                  <Button
                    variant="outline"
                    onClick={() => {
                      const isCorrect = checkListeningAnswer(index, spokenText);
                      // We need to inform the parent about the result through a toast
                      // Toast logic is handled in the parent component
                    }}
                    disabled={listeningScores[index].attempted || !spokenText}
                  >
                    Verificar
                  </Button>
                </div>
              </div>
              
              {listeningScores[index].attempted && (
                <div className={`mt-3 p-2 rounded ${listeningScores[index].correct ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {listeningScores[index].correct 
                    ? "¡Correcto! Has escrito correctamente lo que escuchaste."
                    : `Incorrecto. La respuesta correcta era: "${example}"`}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListeningExercise;
