
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Play, Pause, Volume2, VolumeX, Maximize, SkipBack, SkipForward, RefreshCw } from 'lucide-react';

interface VideoLessonProps {
  videoUrl: string;
  title: string;
  subtitle?: string;
}

const VideoLesson = ({ videoUrl, title, subtitle }: VideoLessonProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  // Public URLs for common example videos
  const publicVideos = [
    "https://www.w3schools.com/html/mov_bbb.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
  ];

  // Try to load backup video if original fails
  const handleLoadError = () => {
    const currentVideo = videoRef.current?.src;
    if (!currentVideo) return;
    
    // If this video URL is not from our backup list, try the first backup
    if (!publicVideos.includes(currentVideo)) {
      console.log("Loading backup video source");
      
      if (videoRef.current) {
        videoRef.current.src = publicVideos[0];
        videoRef.current.load();
      }
    }
  };

  // Initialize video
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    
    // Reset error on new videoUrl
    setError(null);
    setIsLoading(true);
    
    const handleLoadedMetadata = () => {
      setDuration(video.duration);
      setIsLoading(false);
      console.log("Video metadata loaded successfully", { duration: video.duration });
      
      // Auto-play video when loaded
      video.play().catch(err => {
        console.log("Autoplay prevented by browser, user needs to interact:", err);
      });
    };

    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime);
    };

    const handleError = () => {
      console.error("Video loading error:", video.error);
      
      // Try different video URL format if possible (add backup logic)
      handleLoadError();
      
      setError('Error al cargar el video. Por favor, intenta de nuevo más tarde.');
      setIsLoading(false);
      toast({
        title: "Error con el video",
        description: "No se pudo cargar el video. Verifica tu conexión a internet o la URL del video.",
        variant: "destructive"
      });
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('error', handleError);
    
    // Add these additional event listeners for better debugging
    video.addEventListener('canplay', () => console.log("Video can play"));
    video.addEventListener('playing', () => {
      console.log("Video is playing");
      setIsPlaying(true);
    });
    video.addEventListener('waiting', () => console.log("Video is waiting/buffering"));
    video.addEventListener('pause', () => {
      console.log("Video is paused");
      setIsPlaying(false);
    });

    // Try to load the video
    video.src = videoUrl;
    video.load();

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('error', handleError);
      video.removeEventListener('canplay', () => {});
      video.removeEventListener('playing', () => {});
      video.removeEventListener('waiting', () => {});
      video.removeEventListener('pause', () => {});
    };
  }, [toast, videoUrl]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play().catch(err => {
        console.error('Error playing video:', err);
        toast({
          title: "Error al reproducir",
          description: "No se pudo reproducir el video automáticamente. Intenta hacer clic en reproducir nuevamente.",
          variant: "destructive"
        });
      });
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;

    const newTime = parseFloat(e.target.value);
    video.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.requestFullscreen) {
      video.requestFullscreen();
    }
  };

  const skipBack = () => {
    const video = videoRef.current;
    if (!video) return;

    video.currentTime = Math.max(0, video.currentTime - 10);
  };

  const skipForward = () => {
    const video = videoRef.current;
    if (!video) return;

    video.currentTime = Math.min(video.duration, video.currentTime + 10);
  };
  
  const retryVideo = () => {
    setError(null);
    setIsLoading(true);
    
    if (videoRef.current) {
      videoRef.current.src = videoUrl;
      videoRef.current.load();
    }
  };

  // Format time (seconds) to MM:SS
  const formatTime = (timeInSeconds: number) => {
    if (isNaN(timeInSeconds)) return '00:00';
    
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-white/80 rounded-xl shadow-sm border border-border overflow-hidden">
      <div className="relative bg-black">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10">
            <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        
        {error && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/80 z-10">
            <div className="text-white text-center p-4 max-w-md">
              <p className="text-xl font-bold mb-2">Error de Video</p>
              <p>{error}</p>
              <Button 
                variant="outline" 
                className="mt-4 bg-white/20 text-white hover:bg-white/30 flex items-center gap-2"
                onClick={retryVideo}
              >
                <RefreshCw size={16} />
                Reintentar
              </Button>
            </div>
          </div>
        )}
        
        <video
          ref={videoRef}
          className="w-full aspect-video"
          onClick={togglePlay}
          playsInline
          preload="auto"
        />
        
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-white hover:bg-white/20"
                onClick={togglePlay}
              >
                {isPlaying ? <Pause size={18} /> : <Play size={18} />}
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-white hover:bg-white/20"
                onClick={skipBack}
              >
                <SkipBack size={18} />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-white hover:bg-white/20"
                onClick={skipForward}
              >
                <SkipForward size={18} />
              </Button>
              
              <span className="text-white text-sm">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-white hover:bg-white/20"
                onClick={toggleMute}
              >
                {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-white hover:bg-white/20"
                onClick={handleFullscreen}
              >
                <Maximize size={18} />
              </Button>
            </div>
          </div>
          
          <input
            type="range"
            min="0"
            max={duration || 100}
            value={currentTime}
            onChange={handleSeek}
            className="w-full h-1 bg-white/30 rounded-full appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, white ${(currentTime / (duration || 1)) * 100}%, rgba(255, 255, 255, 0.3) ${(currentTime / (duration || 1)) * 100}%)`
            }}
          />
        </div>
      </div>
      
      <div className="p-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
      </div>
    </div>
  );
};

export default VideoLesson;
