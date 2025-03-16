
import { CheckCircle2, Clock, ChevronRight, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { type Module, type Topic } from '@/lib/data';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';

interface ModuleDetailProps {
  module: Module;
}

const ModuleDetail = ({ module }: ModuleDetailProps) => {
  const navigate = useNavigate();
  
  const handleStartTopic = (topicId: string) => {
    navigate(`/lesson/${module.id}/${topicId}`);
  };
  
  // Level badge colors
  const levelColors = {
    'Beginner': 'bg-emerald-100 text-emerald-700',
    'Intermediate': 'bg-blue-100 text-blue-700',
    'Advanced': 'bg-violet-100 text-violet-700'
  };
  
  const levelColor = levelColors[module.level];
  
  return (
    <div className="animate-slide-in">
      <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 mb-8">
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-xl flex items-center justify-center shadow-sm">
            {/* This would normally be an image */}
            <div className="text-3xl md:text-4xl">{module.image === '/conversation.svg' ? '💬' : 
                                  module.image === '/grammar.svg' ? '📝' : 
                                  module.image === '/vocabulary.svg' ? '📚' : 
                                  module.image === '/pronunciation.svg' ? '🔊' : 
                                  module.image === '/business.svg' ? '💼' : '🌎'}</div>
          </div>
          
          <div className="flex-1">
            <div className="flex flex-wrap gap-3 mb-3">
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${levelColor}`}>
                {module.level}
              </span>
              <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">
                {module.topics.length} temas
              </span>
            </div>
            
            <h1 className="text-2xl md:text-3xl font-semibold mb-2">{module.title}</h1>
            <p className="text-muted-foreground">{module.description}</p>
          </div>
        </div>
        
        <div className="mt-6">
          <div className="flex justify-between text-sm mb-2">
            <span>Progreso del módulo</span>
            <span className="font-medium">{module.progress}%</span>
          </div>
          <Progress value={module.progress} className="h-2" />
        </div>
      </div>
      
      <div className="glass-card p-6 md:p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Contenido del módulo</h2>
          <Button variant="outline" size="sm" className="secondary-button">
            <Clock size={16} className="mr-2" />
            Ordenar por duración
          </Button>
        </div>
        
        <div className="space-y-4">
          {module.topics.map((topic, index) => (
            <TopicItem 
              key={topic.id} 
              topic={topic} 
              index={index + 1} 
              onClick={() => handleStartTopic(topic.id)} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

interface TopicItemProps {
  topic: Topic;
  index: number;
  onClick: () => void;
}

const TopicItem = ({ topic, index, onClick }: TopicItemProps) => {
  return (
    <div 
      className="bg-white/80 hover:bg-white rounded-xl p-4 border border-border shadow-sm transition-all hover-lift cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center gap-4">
        <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-medium shrink-0">
          {index}
        </div>
        
        <div className="flex-1">
          <h3 className="font-medium mb-1">{topic.title}</h3>
          <p className="text-sm text-muted-foreground">{topic.description}</p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center text-muted-foreground text-sm">
            <Clock size={16} className="mr-1" />
            {topic.duration}
          </div>
          
          {topic.completed ? (
            <CheckCircle2 className="text-emerald-500" size={20} />
          ) : (
            <div className="w-8 h-8 rounded-full bg-primary hover:bg-primary/90 text-white flex items-center justify-center transition-colors">
              <ChevronRight size={16} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModuleDetail;
