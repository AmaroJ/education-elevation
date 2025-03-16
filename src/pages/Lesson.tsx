
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import LessonContent from '@/components/LessonContent';
import { modules, getLessonContent } from '@/lib/data';
import { toast } from '@/components/ui/use-toast';

const Lesson = () => {
  const { moduleId, topicId } = useParams<{ moduleId: string; topicId: string }>();
  const navigate = useNavigate();
  const [lessonContent, setLessonContent] = useState(getLessonContent(topicId || ''));
  const [isLoading, setIsLoading] = useState(true);
  
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
    const speechRecognitionSupported = 'SpeechRecognition' in window || 'webkitSpeechRecognition' in window;
    
    if (!speechSynthesisSupported || !speechRecognitionSupported) {
      toast({
        title: "Funcionalidad limitada",
        description: "Algunas funciones de audio pueden no estar disponibles en tu navegador.",
      });
    }
    
    // Get lesson content
    const content = getLessonContent(topicId);
    setLessonContent(content);
    setIsLoading(false);
    
    // Preload video if it exists
    if (content.videoUrl) {
      const video = new Audio();
      video.src = content.videoUrl;
      video.preload = 'metadata';
    }
  }, [moduleId, topicId, navigate]);
  
  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-28 pb-16 px-4 sm:px-6 md:px-8 lg:px-12 max-w-5xl mx-auto">
          <div className="flex items-center justify-center h-64">
            <div className="animate-pulse flex flex-col items-center">
              <div className="h-12 w-2/3 bg-gray-200 rounded mb-4"></div>
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
        <LessonContent 
          content={lessonContent} 
          moduleId={moduleId || ''} 
          topicId={topicId || ''} 
        />
      </main>
    </div>
  );
};

export default Lesson;
