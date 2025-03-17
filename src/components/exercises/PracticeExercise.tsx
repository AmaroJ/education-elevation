
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';

interface PracticeQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
}

interface PracticeExerciseProps {
  practice: PracticeQuestion[];
  onComplete: () => void;
}

const PracticeExercise = ({
  practice,
  onComplete
}: PracticeExerciseProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>(Array(practice.length).fill(''));
  const [isCompleted, setIsCompleted] = useState(false);

  const handleAnswerSelect = (answer: string) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = answer;
    setSelectedAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < practice.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Calculate score
      const correctAnswers = practice.filter((q, index) => 
        q.correctAnswer === selectedAnswers[index]
      ).length;
      
      const score = Math.round((correctAnswers / practice.length) * 100);
      
      setIsCompleted(true);
      onComplete();
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  if (isCompleted) {
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
  }

  const currentQuestion = practice[currentQuestionIndex];
  const isAnswerSelected = selectedAnswers[currentQuestionIndex] !== '';
  const isAnswerCorrect = selectedAnswers[currentQuestionIndex] === currentQuestion?.correctAnswer;

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex justify-between text-sm text-muted-foreground mb-6">
        <span>Pregunta {currentQuestionIndex + 1} de {practice.length}</span>
        <span>Selecciona la respuesta correcta</span>
      </div>
      
      <h3 className="text-xl font-medium mb-6">{currentQuestion.question}</h3>
      
      <div className="space-y-3 mb-8">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            className={`w-full p-4 rounded-lg border text-left transition-all ${
              selectedAnswers[currentQuestionIndex] === option
                ? isAnswerCorrect
                  ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                  : 'border-red-500 bg-red-50 text-red-700'
                : 'border-border hover:border-primary/30 hover:bg-primary/5'
            }`}
            onClick={() => handleAnswerSelect(option)}
            disabled={isAnswerSelected}
          >
            <div className="flex items-center justify-between">
              <span>{option}</span>
              {selectedAnswers[currentQuestionIndex] === option && (
                isAnswerCorrect 
                  ? <CheckCircle className="text-emerald-500" size={18} />
                  : <AlertCircle className="text-red-500" size={18} />
              )}
            </div>
          </button>
        ))}
      </div>
      
      {isAnswerSelected && !isAnswerCorrect && (
        <div className="bg-secondary/50 p-4 rounded-lg mb-6">
          <p className="font-medium">Respuesta correcta: {currentQuestion.correctAnswer}</p>
        </div>
      )}
      
      <div className="flex justify-between">
        <Button
          variant="outline"
          className="secondary-button"
          onClick={handlePrevQuestion}
          disabled={currentQuestionIndex === 0}
        >
          <ArrowLeft className="mr-2" size={16} />
          Anterior
        </Button>
        
        <Button
          className="primary-button"
          onClick={handleNextQuestion}
          disabled={!isAnswerSelected}
        >
          {currentQuestionIndex < practice.length - 1 ? (
            <>
              Siguiente
              <ArrowRight className="ml-2" size={16} />
            </>
          ) : (
            'Finalizar'
          )}
        </Button>
      </div>
    </div>
  );
};

export default PracticeExercise;
