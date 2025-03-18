
import { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

interface VideoPlayerProps {
  videoUrl?: string;
  videoPoster?: string;
  videoCaption?: string;
}

const VideoPlayer = ({
  videoUrl,
  videoPoster,
  videoCaption
}: VideoPlayerProps) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [videoError, setVideoError] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { toast } = useToast();

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

  if (!videoUrl) return null;

  return (
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
  );
};

export default VideoPlayer;
