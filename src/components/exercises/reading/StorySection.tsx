
import { useRef, useEffect, useState } from 'react';
import { BookOpen, Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

interface StorySectionProps {
  storyText: string;
  storyAudio?: string;
}

const StorySection = ({ storyText, storyAudio }: StorySectionProps) => {
  const [storyAudioPlaying, setStoryAudioPlaying] = useState(false);
  const storyAudioRef = useRef<HTMLAudioElement | null>(null);
  const { toast } = useToast();

  // Initialize story audio element if available
  useEffect(() => {
    if (storyAudio) {
      storyAudioRef.current = new Audio(storyAudio);
      
      storyAudioRef.current.onplay = () => setStoryAudioPlaying(true);
      storyAudioRef.current.onpause = () => setStoryAudioPlaying(false);
      storyAudioRef.current.onended = () => setStoryAudioPlaying(false);
    }
    
    return () => {
      if (storyAudioRef.current) {
        storyAudioRef.current.pause();
      }
    };
  }, [storyAudio]);

  const toggleStoryAudio = () => {
    if (!storyAudioRef.current) return;
    
    if (storyAudioPlaying) {
      storyAudioRef.current.pause();
    } else {
      storyAudioRef.current.play().catch(error => {
        console.error("Error playing story audio:", error);
        toast({
          title: "Error al reproducir audio",
          description: "No se pudo reproducir el audio de la historia.",
          variant: "destructive"
        });
      });
    }
  };

  return (
    <div className="mt-8 bg-secondary/30 rounded-xl p-6 border border-secondary/20">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium flex items-center gap-2">
          <BookOpen size={18} />
          Historia completa
        </h3>
        {storyAudio && (
          <Button 
            variant="outline" 
            size="sm" 
            className="flex items-center gap-1"
            onClick={toggleStoryAudio}
          >
            {storyAudioPlaying ? <Pause size={16} /> : <Play size={16} />}
            {storyAudioPlaying ? "Pausar narración" : "Escuchar narración"}
          </Button>
        )}
      </div>
      <div className="bg-background rounded-lg p-4 text-secondary-foreground">
        {storyText}
      </div>
    </div>
  );
};

export default StorySection;
