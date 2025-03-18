
import { Volume } from 'lucide-react';

interface ExamplesSectionProps {
  examples: string[];
  onPlayAudio: (text: string, index: number) => void;
  activeAudioExample: number | null;
}

const ExamplesSection = ({ 
  examples, 
  onPlayAudio, 
  activeAudioExample 
}: ExamplesSectionProps) => {
  return (
    <div className="mt-8 bg-secondary/50 rounded-xl p-6">
      <h3 className="text-lg font-medium mb-4">Ejemplos prácticos</h3>
      <div className="space-y-4">
        {examples.map((example, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center font-medium shrink-0 mt-0.5">
              {index + 1}
            </div>
            <div className="flex-1">
              <p className="text-secondary-foreground">{example}</p>
              <button 
                className="flex items-center gap-1 text-primary/80 hover:text-primary text-sm mt-1"
                onClick={() => onPlayAudio(example, index)}
              >
                <Volume size={14} />
                Escuchar pronunciación
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExamplesSection;
