
import Header from '@/components/Header';
import ProgressChart from '@/components/ProgressChart';
import { userProgress, modules } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { ChevronRight, Award, Clock, BookOpen, Calendar } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const ProgressPage = () => {
  // Calculate some stats
  const totalTopics = modules.reduce((acc, module) => acc + module.topics.length, 0);
  const completedTopics = userProgress.completedTopics.length;
  const completionRate = Math.round((completedTopics / totalTopics) * 100);
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-28 pb-16 px-4 sm:px-6 md:px-8 lg:px-12 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold mb-2">Mi Progreso</h1>
          <p className="text-muted-foreground">Visualiza y analiza tu avance en el aprendizaje</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <ProgressChart />
          </div>
          
          <div>
            <div className="glass-card p-6 md:p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Award className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Resumen general</h3>
                  <p className="text-sm text-muted-foreground">Tu camino de aprendizaje</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Progreso general</span>
                    <span className="font-medium">{completionRate}%</span>
                  </div>
                  <Progress value={completionRate} className="h-2" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/80 rounded-lg p-4 border border-border shadow-sm">
                    <div className="flex items-center gap-3">
                      <Clock className="text-blue-500" size={18} />
                      <div>
                        <p className="text-lg font-semibold">{userProgress.streak} días</p>
                        <p className="text-xs text-muted-foreground">Racha actual</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/80 rounded-lg p-4 border border-border shadow-sm">
                    <div className="flex items-center gap-3">
                      <BookOpen className="text-emerald-500" size={18} />
                      <div>
                        <p className="text-lg font-semibold">{completedTopics}</p>
                        <p className="text-xs text-muted-foreground">Lecciones completadas</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-secondary/50 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <Calendar className="text-accent" size={18} />
                    <p className="font-medium">Próxima meta</p>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Completa 3 lecciones más esta semana para ganar 50 puntos extra.
                  </p>
                  <Progress value={30} className="h-2 mb-2" />
                  <p className="text-xs text-right">1 de 3 lecciones</p>
                </div>
                
                <Button className="primary-button w-full">
                  Ver detalles completos
                  <ChevronRight size={16} className="ml-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="glass-card p-6 md:p-8">
          <h3 className="text-xl font-semibold mb-6">Progreso por módulo</h3>
          
          <div className="space-y-6">
            {modules.map((module) => (
              <div key={module.id} className="bg-white/90 rounded-lg p-4 border border-border shadow-sm">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      {/* This would normally be an image */}
                      <div className="text-xl">{module.image === '/conversation.svg' ? '💬' : 
                                        module.image === '/grammar.svg' ? '📝' : 
                                        module.image === '/vocabulary.svg' ? '📚' : 
                                        module.image === '/pronunciation.svg' ? '🔊' : 
                                        module.image === '/business.svg' ? '💼' : '🌎'}</div>
                    </div>
                    <div>
                      <h4 className="font-medium">{module.title}</h4>
                      <p className="text-sm text-muted-foreground">{module.level}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{module.progress}%</p>
                    <p className="text-sm text-muted-foreground">
                      {module.topics.filter(t => t.completed).length} de {module.topics.length} temas
                    </p>
                  </div>
                </div>
                <Progress value={module.progress} className="h-2" />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProgressPage;
