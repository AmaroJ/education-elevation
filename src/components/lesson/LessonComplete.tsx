
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

interface LessonCompleteProps {
  onComplete: () => void;
}

const LessonComplete = ({ onComplete }: LessonCompleteProps) => {
  return (
    <div className="text-center max-w-md mx-auto py-10">
      <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle className="text-emerald-500" size={32} />
      </div>
      <h2 className="text-2xl font-semibold mb-3">¡Lección completada!</h2>
      <p className="text-muted-foreground mb-8">
        Has terminado esta lección exitosamente. Sigue practicando para mejorar tu dominio del idioma.
      </p>
      <Button 
        className="primary-button"
        onClick={onComplete}
      >
        Volver al módulo
      </Button>
    </div>
  );
};

export default LessonComplete;
