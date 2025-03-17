
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import ModuleDetail from '@/components/ModuleDetail';
import { modules } from '@/lib/data';
import { toast } from '@/components/ui/use-toast';

const Module = () => {
  const { moduleId } = useParams<{ moduleId: string }>();
  const navigate = useNavigate();
  const [module, setModule] = useState(modules.find(m => m.id === moduleId));
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    setIsLoading(true);
    
    // Find the module
    const foundModule = modules.find(m => m.id === moduleId);
    
    if (!foundModule) {
      toast({
        title: "Módulo no encontrado",
        description: "El módulo que buscas no existe.",
        variant: "destructive"
      });
      navigate('/');
      return;
    }
    
    // Check if browser supports the Web Speech API
    const speechSynthesisSupported = 'speechSynthesis' in window;
    const speechRecognitionSupported = 
      'SpeechRecognition' in window || 'webkitSpeechRecognition' in window;
    
    if (!speechSynthesisSupported) {
      toast({
        title: "Funcionalidad limitada",
        description: "Tu navegador no soporta la síntesis de voz. No podrás usar la función de escucha.",
        variant: "destructive"
      });
    }
    
    if (!speechRecognitionSupported) {
      toast({
        title: "Funcionalidad limitada",
        description: "Tu navegador no soporta el reconocimiento de voz. No podrás usar las funciones de pronunciación y habla.",
        variant: "destructive"
      });
    }
    
    setModule(foundModule);
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, [moduleId, navigate]);
  
  if (isLoading || !module) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-28 pb-16 px-4 sm:px-6 md:px-8 lg:px-12 max-w-6xl mx-auto">
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
      
      <main className="pt-28 pb-16 px-4 sm:px-6 md:px-8 lg:px-12 max-w-6xl mx-auto">
        <ModuleDetail module={module} />
      </main>
    </div>
  );
};

export default Module;
