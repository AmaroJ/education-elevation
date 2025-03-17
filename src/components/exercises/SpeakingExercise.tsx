
import { Button } from '@/components/ui/button';
import { Mic } from 'lucide-react';

interface SpeakingExerciseProps {
  examples: string[];
  onRepeatPhrase: (phrase: string) => void;
  isListening: boolean;
  transcript: string;
  spokenText: string;
}

const SpeakingExercise = ({
  examples,
  onRepeatPhrase,
  isListening,
  transcript,
  spokenText
}: SpeakingExerciseProps) => {
  return (
    <div className="space-y-6">
      <div className="p-6 bg-secondary/30 rounded-xl">
        <h3 className="text-lg font-medium mb-4">Ejercicios de conversación</h3>
        <p className="mb-4">Practica tu expresión oral repitiendo estas frases:</p>
        
        <div className="space-y-6">
          {examples.map((example, index) => (
            <div key={index} className="p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-3">
                <span className="font-medium">Frase {index + 1}</span>
                <Button 
                  variant="secondary" 
                  size="sm" 
                  className="flex items-center gap-1"
                  onClick={() => onRepeatPhrase(example)}
                >
                  <Mic size={14} />
                  Repetir frase
                </Button>
              </div>
              <p className="mb-3">{example}</p>
              
              {isListening && spokenText === example && (
                <div className="text-center p-3 rounded bg-yellow-50 border border-yellow-200">
                  <p className="text-yellow-600 animate-pulse">Escuchando... Habla claramente.</p>
                </div>
              )}
              
              {transcript && spokenText === example && !isListening && (
                <div className="mt-3">
                  <h4 className="text-sm font-medium mb-1">Tu respuesta:</h4>
                  <div className="p-2 bg-primary/5 border border-primary/20 rounded">
                    {transcript}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpeakingExercise;
