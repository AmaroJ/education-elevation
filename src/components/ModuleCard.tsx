
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { type Module } from '@/lib/data';
import { Progress } from '@/components/ui/progress';

interface ModuleCardProps {
  module: Module;
}

const ModuleCard = ({ module }: ModuleCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  
  const handleOpenModule = () => {
    navigate(`/module/${module.id}`);
  };
  
  // Determine badge color based on level
  const levelColors = {
    'Beginner': 'bg-emerald-100 text-emerald-700',
    'Intermediate': 'bg-blue-100 text-blue-700',
    'Advanced': 'bg-violet-100 text-violet-700'
  };
  
  const levelColor = levelColors[module.level];
  
  return (
    <div 
      className={`glass-card transition-all duration-300 ${
        isHovered ? 'shadow-lg -translate-y-1' : 'shadow-sm'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleOpenModule}
    >
      <div className="overflow-hidden rounded-t-xl">
        <div 
          className={`h-48 bg-gradient-to-br from-primary/10 to-accent/5 flex items-center justify-center transition-transform duration-500 ${
            isHovered ? 'scale-105' : 'scale-100'
          }`}
        >
          <div className="w-20 h-20 bg-white/90 rounded-2xl flex items-center justify-center shadow-sm">
            {/* This would normally be an image */}
            <div className="text-4xl">{module.image === '/conversation.svg' ? '💬' : 
                                      module.image === '/grammar.svg' ? '📝' : 
                                      module.image === '/vocabulary.svg' ? '📚' : 
                                      module.image === '/pronunciation.svg' ? '🔊' : 
                                      module.image === '/business.svg' ? '💼' : '🌎'}</div>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${levelColor}`}>
            {module.level}
          </span>
          <span className="text-sm text-muted-foreground">
            {module.topics.length} temas
          </span>
        </div>
        
        <h3 className="text-xl font-semibold mb-2">{module.title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{module.description}</p>
        
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span>Progreso</span>
            <span className="font-medium">{module.progress}%</span>
          </div>
          <Progress value={module.progress} className="h-2" />
        </div>
        
        <button 
          className={`flex items-center gap-2 mt-6 text-primary font-medium transition-all duration-300 ${
            isHovered ? 'translate-x-1' : ''
          }`}
        >
          Comenzar módulo
          <ArrowRight size={16} className={`transition-transform duration-300 ${
            isHovered ? 'translate-x-1' : ''
          }`} />
        </button>
      </div>
    </div>
  );
};

export default ModuleCard;
