
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import LessonContent from '@/components/LessonContent';
import AITutorModal from '@/components/AITutorModal';
import { modules, getLessonContent } from '@/lib/data';
import { toast } from '@/components/ui/use-toast';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Lesson = () => {
  const { moduleId, topicId } = useParams<{ moduleId: string; topicId: string }>();
  const navigate = useNavigate();
  const [lessonContent, setLessonContent] = useState(getLessonContent(topicId || ''));
  const [isLoading, setIsLoading] = useState(true);
  const [showAITutorModal, setShowAITutorModal] = useState(false);
  
  useEffect(() => {
    setIsLoading(true);
    
    if (!moduleId || !topicId) {
      toast({
        title: "Lección no encontrada",
        description: "La lección que buscas no existe.",
        variant: "destructive"
      });
      navigate('/');
      return;
    }
    
    // Verify that the module and topic exist
    const module = modules.find(m => m.id === moduleId);
    
    if (!module) {
      toast({
        title: "Módulo no encontrado",
        description: "El módulo que buscas no existe.",
        variant: "destructive"
      });
      navigate('/');
      return;
    }
    
    const topic = module.topics.find(t => t.id === topicId);
    
    if (!topic) {
      toast({
        title: "Tema no encontrado",
        description: "El tema que buscas no existe.",
        variant: "destructive"
      });
      navigate(`/module/${moduleId}`);
      return;
    }
    
    // Check if browser supports the Web Speech API
    const speechSynthesisSupported = 'speechSynthesis' in window;
    const speechRecognitionSupported = 
      'SpeechRecognition' in window || 'webkitSpeechRecognition' in window;
    
    if (!speechSynthesisSupported || !speechRecognitionSupported) {
      toast({
        title: "Funcionalidad limitada",
        description: "Algunas funciones de audio pueden no estar disponibles en tu navegador.",
      });
    }
    
    // Preload content based on topic type
    const content = getLessonContent(topicId);
    setLessonContent(content);
    
    // Pre-load media based on content type
    if (content.videoUrl) {
      const preloadVideo = new Audio(content.videoUrl);
      preloadVideo.preload = 'metadata';
      preloadVideo.onloadedmetadata = () => {
        console.log("Video metadata preloaded successfully");
      };
      preloadVideo.onerror = (e) => {
        console.error("Error preloading video metadata:", e);
      };
    }
    
    // Preload audio for stories or karaoke if available
    if (content.storyAudio) {
      const preloadAudio = new Audio(content.storyAudio);
      preloadAudio.preload = 'metadata';
    }
    
    if (content.karaokeUrl) {
      const preloadKaraoke = new Audio(content.karaokeUrl);
      preloadKaraoke.preload = 'metadata';
    }
    
    // We'll set loading to false after a short delay
    // This helps ensure the UI is ready for the media
    setTimeout(() => {
      setIsLoading(false);
      console.log("Lesson loading completed", { content });
    }, 500);
  }, [moduleId, topicId, navigate]);
  
  const toggleAITutorModal = () => {
    setShowAITutorModal(!showAITutorModal);
  };
  
  // Show appropriate loading placeholder based on topic type
  if (isLoading) {
    // Determine the topic type if available to show appropriate skeleton
    const topicType = moduleId && topicId 
      ? modules.find(m => m.id === moduleId)?.topics.find(t => t.id === topicId)?.type 
      : 'lesson';
    
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-28 pb-16 px-4 sm:px-6 md:px-8 lg:px-12 max-w-5xl mx-auto">
          <div className="flex items-center justify-center h-64">
            <div className="animate-pulse flex flex-col items-center w-full">
              <div className="h-12 w-2/3 bg-gray-200 rounded mb-4"></div>
              
              {topicType === 'karaoke' && (
                <div className="w-full aspect-w-16 aspect-h-9 bg-gray-300 rounded mb-4"></div>
              )}
              
              {topicType === 'story' && (
                <>
                  <div className="h-4 w-full bg-gray-200 rounded mb-3"></div>
                  <div className="h-4 w-11/12 bg-gray-200 rounded mb-3"></div>
                  <div className="h-4 w-10/12 bg-gray-200 rounded mb-3"></div>
                  <div className="h-8 w-1/3 bg-gray-300 rounded mb-3"></div>
                </>
              )}
              
              <div className="h-4 w-full bg-gray-200 rounded mb-3"></div>
              <div className="h-4 w-11/12 bg-gray-200 rounded mb-3"></div>
              <div className="h-4 w-10/12 bg-gray-200 rounded"></div>
            </div>
          </div>
        </main>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-28 pb-16 px-4 sm:px-6 md:px-8 lg:px-12 max-w-5xl mx-auto">
        <div className="fixed bottom-6 right-6 z-50">
          <Button 
            onClick={toggleAITutorModal}
            className="h-14 w-14 rounded-full"
            variant="default"
            title="Abrir Tutor IA"
          >
            <MessageCircle size={24} />
          </Button>
        </div>
        
        <LessonContent 
          content={lessonContent} 
          moduleId={moduleId || ''} 
          topicId={topicId || ''} 
        />
        
        <AITutorModal 
          isOpen={showAITutorModal} 
          onClose={toggleAITutorModal} 
          lessonContent={lessonContent.content}
        />
      </main>
    </div>
  );
};

export default Lesson;
