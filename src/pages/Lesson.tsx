
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
  
  useEffect(() => {
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
    
    // Get lesson content
    const content = getLessonContent(topicId);
    setLessonContent(content);
  }, [moduleId, topicId, navigate]);
  
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
