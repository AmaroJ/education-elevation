
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Volume2, Mic } from 'lucide-react';

interface PronunciationExerciseProps {
  examples: string[];
  onPlayAudio: (text: string, index: number) => void;
  activeAudioExample: number | null;
  onSpeechRecognition: () => void;
  isListening: boolean;
  transcript: string;
  spokenText: string;
}

const PronunciationExercise = ({
  examples,
  onPlayAudio,
  activeAudioExample,
  onSpeechRecognition,
  isListening,
  transcript,
  spokenText
}: PronunciationExerciseProps) => {
  return (
    <div className="space-y-6">
      <div className="p-6 bg-secondary/30 rounded-xl">
        <h3 className="text-lg font-medium mb-4">Ejercicios de pronunciación</h3>
        <p className="mb-4">Escucha cada ejemplo y luego intenta repetirlo con la mejor pronunciación posible:</p>
        
        <div className="space-y-6">
          {examples.map((example, index) => (
            <div key={index} className="p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-3">
                <span className="font-medium">Ejemplo {index + 1}</span>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex items-center gap-1"
                    onClick={() => onPlayAudio(example, index)}
                    disabled={activeAudioExample !== null && activeAudioExample !== index}
                  >
                    <Volume2 size={14} />
                    {activeAudioExample === index ? 'Reproduciendo...' : 'Escuchar'}
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className={`flex items-center gap-1 ${isListening ? 'bg-red-100 text-red-600 border-red-300' : ''}`}
                    onClick={onSpeechRecognition}
                  >
                    <Mic size={14} />
                    {isListening ? 'Detener' : 'Grabar'}
                  </Button>
                </div>
              </div>
              <p className="mb-3">{example}</p>
              
              {transcript && (
                <div className="mt-3">
                  <h4 className="text-sm font-medium mb-1">Tu pronunciación:</h4>
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

export default PronunciationExercise;
