
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import AITutor from '@/components/AITutor';
import { LessonContent } from '@/lib/data';

interface LessonHeaderProps {
  moduleId: string;
  lessonTitle: string;
  progress: number;
  practiceTotal: number;
  practiceCompleted: number;
}

const LessonHeader = ({
  moduleId,
  lessonTitle,
  progress,
  practiceTotal,
  practiceCompleted,
}: LessonHeaderProps) => {
  const navigate = useNavigate();
  const [showAITutor, setShowAITutor] = useState(false);
  
  const handleBack = () => {
    navigate(`/module/${moduleId}`);
  };
  
  const toggleAITutor = () => {
    setShowAITutor(!showAITutor);
  };
  
  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <button 
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          onClick={handleBack}
        >
          <ArrowLeft size={16} /> 
          Volver al módulo
        </button>
        
        <div className="flex items-center gap-4">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex items-center gap-2"
            onClick={toggleAITutor}
          >
            <MessageCircle size={16} />
            Tutor IA
          </Button>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Progreso de la lección</span>
            <Progress 
              value={progress} 
              className="w-24 h-2" 
            />
          </div>
        </div>
      </div>
      
      {showAITutor && (
        <AITutor 
          lessonTitle={lessonTitle} 
          lessonContent={""}
          onClose={() => setShowAITutor(false)}
        />
      )}
    </>
  );
};

export default LessonHeader;
