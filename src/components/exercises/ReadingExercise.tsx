
import { useState, useRef, useEffect } from 'react';
import { ArrowRight, Play, Pause, Volume, VolumeX, BookOpen, Music } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { type LessonContent } from '@/lib/data';
import { useToast } from '@/components/ui/use-toast';

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
  const [videoError, setVideoError] = useState<string | null>(null);
  const [storyAudioPlaying, setStoryAudioPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const storyAudioRef = useRef<HTMLAudioElement | null>(null);
  const { toast } = useToast();

  // Initialize story audio element if available
  useEffect(() => {
    if (content.storyAudio) {
      storyAudioRef.current = new Audio(content.storyAudio);
      
      storyAudioRef.current.onplay = () => setStoryAudioPlaying(true);
      storyAudioRef.current.onpause = () => setStoryAudioPlaying(false);
      storyAudioRef.current.onended = () => setStoryAudioPlaying(false);
    }
    
    return () => {
      if (storyAudioRef.current) {
        storyAudioRef.current.pause();
      }
    };
  }, [content.storyAudio]);

  // Auto-play video when component mounts
  useEffect(() => {
    const playVideo = async () => {
      if (videoRef.current && videoUrl) {
        try {
          // Reset error state
          setVideoError(null);
          
          // Attempt to play the video
          await videoRef.current.play();
          setIsVideoPlaying(true);
          console.log("Video started playing automatically");
        } catch (error) {
          console.error("Error auto-playing video:", error);
          // Don't show a toast for autoplay error - this is expected on many browsers
          // and will be handled by the user clicking play
        }
      }
    };
    
    playVideo();
  }, [videoUrl]);
  
  // Handle video error
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    
    const handleError = () => {
      console.error("Video error:", video.error);
      setVideoError("No se pudo reproducir el video. Comprueba que la URL del video es válida.");
      setIsVideoPlaying(false);
      
      toast({
        title: "Error con el video",
        description: "No se pudo cargar el video. Intenta reproducirlo manualmente.",
        variant: "destructive"
      });
    };
    
    video.addEventListener('error', handleError);
    
    return () => {
      video.removeEventListener('error', handleError);
    };
  }, [toast]);

  const handleTogglePlay = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      } else {
        videoRef.current.play().catch(error => {
          console.error("Error playing video:", error);
          toast({
            title: "Error al reproducir",
            description: "No se pudo reproducir el video. Verifique la URL del video.",
            variant: "destructive"
          });
        });
        setIsVideoPlaying(true);
      }
    }
  };

  const handleToggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };
  
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

  // Determine if this is a story or karaoke
  const isStory = !!content.storyText;
  const isKaraoke = !!content.karaokeLyrics;

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
              preload="metadata"
              playsInline
              controls={false}
            />
            
            {videoError && (
              <div className="absolute inset-0 flex items-center justify-center bg-red-500/10">
                <div className="bg-red-50 text-red-700 p-4 rounded-md max-w-md text-center">
                  <h3 className="font-bold text-lg mb-2">Error</h3>
                  <p>{videoError}</p>
                </div>
              </div>
            )}
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
      
      {isStory && content.storyText && (
        <div className="mt-8 bg-secondary/30 rounded-xl p-6 border border-secondary/20">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium flex items-center gap-2">
              <BookOpen size={18} />
              Historia completa
            </h3>
            {content.storyAudio && (
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
            {content.storyText}
          </div>
        </div>
      )}
      
      {isKaraoke && content.karaokeLyrics && (
        <div className="mt-8 bg-primary/10 rounded-xl p-6 border border-primary/20">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium flex items-center gap-2">
              <Music size={18} />
              Letra de la canción
            </h3>
            {content.karaokeUrl && (
              <Button 
                variant="default" 
                size="sm" 
                className="bg-primary"
              >
                <Play size={16} className="mr-1" />
                Iniciar karaoke
              </Button>
            )}
          </div>
          <div className="bg-background rounded-lg p-4 text-secondary-foreground">
            {content.karaokeLyrics.map((line, index) => (
              <p key={index} className="mb-2 last:mb-0">{line}</p>
            ))}
          </div>
        </div>
      )}
      
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
