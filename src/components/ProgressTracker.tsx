
import { BarChart3, Trophy, Calendar, BookOpen } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { userProgress, modules } from '@/lib/data';

const ProgressTracker = () => {
  // Calculate overall progress
  const totalTopics = modules.reduce((acc, module) => acc + module.topics.length, 0);
  const completedTopics = userProgress.completedTopics.length;
  const overallProgress = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;
  
  const stats = [
    { 
      icon: <BookOpen className="text-emerald-500" size={24} />, 
      value: completedTopics, 
      label: 'Lecciones completadas',
      color: 'bg-emerald-100' 
    },
    { 
      icon: <Trophy className="text-amber-500" size={24} />, 
      value: userProgress.totalScore, 
      label: 'Puntos obtenidos',
      color: 'bg-amber-100' 
    },
    { 
      icon: <Calendar className="text-blue-500" size={24} />, 
      value: userProgress.streak, 
      label: 'Días consecutivos',
      color: 'bg-blue-100' 
    }
  ];
  
  return (
    <div className="glass-card p-6 md:p-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold">Tu progreso</h3>
        <span className="text-sm text-muted-foreground">Último 30 días</span>
      </div>
      
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center gap-4 flex-1">
            <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center`}>
              {stat.icon}
            </div>
            <div>
              <p className="text-2xl font-semibold">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-secondary/50 rounded-xl p-6 mb-8">
        <div className="flex justify-between items-center mb-3">
          <div>
            <h4 className="font-medium">Progreso general</h4>
            <p className="text-sm text-muted-foreground">Todos los módulos</p>
          </div>
          <span className="text-xl font-semibold">{overallProgress}%</span>
        </div>
        <Progress value={overallProgress} className="h-3" />
      </div>
      
      <div>
        <div className="flex justify-between items-center mb-4">
          <h4 className="font-medium">Progreso por módulo</h4>
          <button className="text-sm text-primary font-medium">Ver todos</button>
        </div>
        
        <div className="space-y-4">
          {modules.slice(0, 3).map((module) => (
            <div key={module.id} className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <h5 className="font-medium">{module.title}</h5>
                <span className="text-sm font-medium">{module.progress}%</span>
              </div>
              <Progress value={module.progress} className="h-2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressTracker;
