
import { useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle, AlertCircle, Volume2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { type LessonContent as LessonContentType } from '@/lib/data';
import { toast } from '@/components/ui/use-toast';

interface LessonContentProps {
  content: LessonContentType;
  moduleId: string;
  topicId: string;
}

const LessonContent = ({ content, moduleId, topicId }: LessonContentProps) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('content');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>(Array(content.practice.length).fill(''));
  const [isCompleted, setIsCompleted] = useState(false);
  
  const handleBack = () => {
    navigate(`/module/${moduleId}`);
  };
  
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };
  
  const handleAnswerSelect = (answer: string) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = answer;
    setSelectedAnswers(newAnswers);
  };
  
  const handleNextQuestion = () => {
    if (currentQuestionIndex < content.practice.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Calculate score
      const correctAnswers = content.practice.filter((q, index) => 
        q.correctAnswer === selectedAnswers[index]
      ).length;
      
      const score = Math.round((correctAnswers / content.practice.length) * 100);
      
      // Show completion message
      toast({
        title: "¡Lección completada!",
        description: `Has obtenido ${correctAnswers} de ${content.practice.length} respuestas correctas (${score}%)`,
      });
      
      setIsCompleted(true);
    }
  };
  
  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  
  const handleComplete = () => {
    // This would normally update the user progress in a real app
    navigate(`/module/${moduleId}`);
  };
  
  const currentQuestion = content.practice[currentQuestionIndex];
  const isAnswerSelected = selectedAnswers[currentQuestionIndex] !== '';
  const isAnswerCorrect = selectedAnswers[currentQuestionIndex] === currentQuestion?.correctAnswer;
  
  return (
    <div className="animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <button 
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          onClick={handleBack}
        >
          <ArrowLeft size={16} /> 
          Volver al módulo
        </button>
        
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Progreso de la lección</span>
          <Progress 
            value={activeTab === 'practice' 
              ? ((currentQuestionIndex + 1) / content.practice.length) * 100 
              : 50} 
            className="w-24 h-2" 
          />
        </div>
      </div>
      
      <div className="glass-card overflow-hidden">
        <div className="border-b">
          <div className="flex">
            <button
              className={`px-6 py-4 font-medium text-sm transition-colors ${
                activeTab === 'content'
                  ? 'border-b-2 border-primary text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              onClick={() => handleTabChange('content')}
            >
              Contenido
            </button>
            <button
              className={`px-6 py-4 font-medium text-sm transition-colors ${
                activeTab === 'practice'
                  ? 'border-b-2 border-primary text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              onClick={() => handleTabChange('practice')}
            >
              Práctica
            </button>
          </div>
        </div>
        
        <div className="p-6 md:p-8 min-h-[400px]">
          {activeTab === 'content' ? (
            <div className="max-w-3xl mx-auto">
              <h1 className="text-2xl font-semibold mb-6">{content.title}</h1>
              
              <div 
                className="prose prose-slate max-w-none"
                dangerouslySetInnerHTML={{ __html: content.content }}
              />
              
              <div className="mt-8 bg-secondary/50 rounded-xl p-6">
                <h3 className="text-lg font-medium mb-4">Ejemplos prácticos</h3>
                <div className="space-y-4">
                  {content.examples.map((example, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center font-medium shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <p className="text-secondary-foreground">{example}</p>
                        <button className="flex items-center gap-1 text-primary/80 hover:text-primary text-sm mt-1">
                          <Volume2 size={14} />
                          Escuchar pronunciación
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-8 flex justify-end">
                <Button 
                  className="primary-button"
                  onClick={() => handleTabChange('practice')}
                >
                  Ir a la práctica
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </div>
            </div>
          ) : isCompleted ? (
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
                onClick={handleComplete}
              >
                Volver al módulo
              </Button>
            </div>
          ) : (
            <div className="max-w-2xl mx-auto">
              <div className="flex justify-between text-sm text-muted-foreground mb-6">
                <span>Pregunta {currentQuestionIndex + 1} de {content.practice.length}</span>
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
                  {currentQuestionIndex < content.practice.length - 1 ? (
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
          )}
        </div>
      </div>
    </div>
  );
};

export default LessonContent;
