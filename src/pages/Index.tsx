
import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ModuleCard from '@/components/ModuleCard';
import ProgressTracker from '@/components/ProgressTracker';
import { modules } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Search, BookOpen, Filter } from 'lucide-react';

const Index = () => {
  const [filterLevel, setFilterLevel] = useState<string | null>(null);
  
  const filteredModules = filterLevel 
    ? modules.filter(module => module.level === filterLevel)
    : modules;
  
  const handleFilterChange = (level: string) => {
    setFilterLevel(level === filterLevel ? null : level);
  };
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <Hero />
        
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <h2 className="text-2xl font-semibold">Módulos de aprendizaje</h2>
                    <p className="text-muted-foreground">Selecciona un módulo para comenzar</p>
                  </div>
                  
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                    <input 
                      type="text"
                      placeholder="Buscar módulos..."
                      className="input-glass pl-10 w-full sm:w-auto"
                    />
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <Button
                    variant="outline"
                    size="sm"
                    className={`${
                      filterLevel === null ? 'bg-primary text-primary-foreground' : 'bg-secondary/50'
                    }`}
                    onClick={() => setFilterLevel(null)}
                  >
                    <BookOpen size={16} className="mr-2" />
                    Todos
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className={`${
                      filterLevel === 'Beginner' ? 'bg-emerald-100 text-emerald-700' : 'bg-secondary/50'
                    }`}
                    onClick={() => handleFilterChange('Beginner')}
                  >
                    Principiante
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className={`${
                      filterLevel === 'Intermediate' ? 'bg-blue-100 text-blue-700' : 'bg-secondary/50'
                    }`}
                    onClick={() => handleFilterChange('Intermediate')}
                  >
                    Intermedio
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className={`${
                      filterLevel === 'Advanced' ? 'bg-violet-100 text-violet-700' : 'bg-secondary/50'
                    }`}
                    onClick={() => handleFilterChange('Advanced')}
                  >
                    Avanzado
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-secondary/50"
                  >
                    <Filter size={16} className="mr-2" />
                    Más filtros
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredModules.map(module => (
                    <ModuleCard key={module.id} module={module} />
                  ))}
                </div>
              </div>
              
              <div>
                <ProgressTracker />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
