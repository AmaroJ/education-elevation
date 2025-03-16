
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
  
  useEffect(() => {
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
    
    setModule(foundModule);
  }, [moduleId, navigate]);
  
  if (!module) {
    return <div>Cargando...</div>;
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
