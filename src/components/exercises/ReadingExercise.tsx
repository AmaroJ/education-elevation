
import { useState, useRef } from 'react';
import { ArrowRight, Play, Pause, Volume, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { type LessonContent } from '@/lib/data';

interface ReadingExerciseProps {
  content: LessonContent;
  onGoToPractice: () => void;
  examples: string[];
  onPlayAudio: (text: string, index: number) => void;
  activeAudioExample: number | null;
  videoUrl?: string;
  videoPoster?: string;
  videoCaption?: string;
}

const ReadingExercise = ({
  content,
  onGoToPractice,
  examples,
  onPlayAudio,
  activeAudioExample,
  videoUrl,
  videoPoster,
  videoCaption
}: ReadingExerciseProps) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleTogglePlay = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(error => {
          console.error("Error playing video:", error);
        });
      }
    }
  };

  const handleToggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      {videoUrl && (
        <div className="mb-6 rounded-xl overflow-hidden relative">
          <div className="aspect-w-16 aspect-h-9 bg-black">
            <video 
              ref={videoRef}
              src={videoUrl}
              className="w-full h-full object-contain"
              poster={videoPoster || ""}
              onEnded={() => setIsVideoPlaying(false)}
              onPlay={() => setIsVideoPlaying(true)}
              onPause={() => setIsVideoPlaying(false)}
              controls={false}
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-white hover:bg-white/20" 
                onClick={handleTogglePlay}
              >
                {isVideoPlaying ? <Pause size={20} /> : <Play size={20} />}
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-white hover:bg-white/20" 
                onClick={handleToggleMute}
              >
                {isMuted ? <VolumeX size={20} /> : <Volume size={20} />}
              </Button>
            </div>
            <div className="text-white text-sm">{videoCaption || "Material visual de apoyo"}</div>
          </div>
        </div>
      )}
      
      <div 
        className="prose prose-slate max-w-none"
        dangerouslySetInnerHTML={{ __html: content.content }}
      />
      
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

      <div className="mt-8 flex justify-end">
        <Button 
          className="primary-button"
          onClick={onGoToPractice}
        >
          Ir a la práctica
          <ArrowRight className="ml-2" size={16} />
        </Button>
      </div>
    </div>
  );
};

export default ReadingExercise;
