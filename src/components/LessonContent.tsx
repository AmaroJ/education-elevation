
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { type LessonContent as LessonContentType } from '@/lib/data';
import { toast } from '@/components/ui/use-toast';
import AITutor from '@/components/AITutor';
import { ArrowLeft, MessageCircle, BookOpen, Headphones, Volume2, Mic, Edit3 } from 'lucide-react';

// Import the new components
import ReadingExercise from './exercises/ReadingExercise';
import ListeningExercise from './exercises/ListeningExercise';
import PronunciationExercise from './exercises/PronunciationExercise';
import SpeakingExercise from './exercises/SpeakingExercise';
import WritingExerciseComponent from './exercises/WritingExercise';
import PracticeExercise from './exercises/PracticeExercise';

interface LessonContentProps {
  content: LessonContentType;
  moduleId: string;
  topicId: string;
}

const writingExercisesData = [
  { prompt: "Write the greeting for morning time:", answer: "Good morning" },
  { prompt: "Write how to introduce yourself:", answer: "My name is..." },
  { prompt: "Write how to ask someone's name:", answer: "What's your name?" },
  { prompt: "Write how to say goodbye:", answer: "Goodbye" }
];

const LessonContent = ({ content, moduleId, topicId }: LessonContentProps) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('content');
  const [activeMode, setActiveMode] = useState('read');
  const [isCompleted, setIsCompleted] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [spokenText, setSpokenText] = useState('');
  const [showAITutor, setShowAITutor] = useState(false);
  const [activeAudioExample, setActiveAudioExample] = useState<number | null>(null);
  
  const speechRecognitionRef = useRef<SpeechRecognition | null>(null);
  
  useEffect(() => {
    // Initialize speech recognition if supported
    const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (SpeechRecognitionAPI) {
      speechRecognitionRef.current = new SpeechRecognitionAPI();
      speechRecognitionRef.current.continuous = false;
      speechRecognitionRef.current.interimResults = true;
      speechRecognitionRef.current.lang = 'en-US';
      
      speechRecognitionRef.current.onresult = (event) => {
        const current = event.resultIndex;
        const transcript = event.results[current][0].transcript;
        setTranscript(transcript);
      };
      
      speechRecognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }
    
    return () => {
      // Stop any ongoing audio when component unmounts
      speechSynthesis.cancel();
    };
  }, []);
  
  const handleBack = () => {
    navigate(`/module/${moduleId}`);
  };
  
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    
    // Stop any ongoing audio
    speechSynthesis.cancel();
  };
  
  const handleModeChange = (mode: string) => {
    setActiveMode(mode);
    
    // Stop any ongoing activities when changing modes
    if (isListening && speechRecognitionRef.current) {
      speechRecognitionRef.current.stop();
      setIsListening(false);
    }
    
    // Stop any speech synthesis
    speechSynthesis.cancel();
    
    // Reset audio example selection
    setActiveAudioExample(null);
  };
  
  const handlePlayAudio = (text: string, index: number) => {
    // Stop any previous speech synthesis
    speechSynthesis.cancel();
    
    // Set the active example
    setActiveAudioExample(index);
    
    // Use the Web Speech API for text-to-speech
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.onend = () => {
      setActiveAudioExample(null);
    };
    
    speechSynthesis.speak(utterance);
  };
  
  const handleSpeechRecognition = () => {
    if (!speechRecognitionRef.current) {
      toast({
        title: "No disponible",
        description: "Tu navegador no soporta reconocimiento de voz.",
        variant: "destructive"
      });
      return;
    }
    
    if (isListening) {
      speechRecognitionRef.current.stop();
      setIsListening(false);
    } else {
      setTranscript('');
      speechRecognitionRef.current.start();
      setIsListening(true);
      
      toast({
        title: "Escuchando...",
        description: "Habla claramente en inglés."
      });
    }
  };
  
  const handleRepeatPhrase = (phrase: string) => {
    setSpokenText(phrase);
    
    // First cancel any ongoing speech
    speechSynthesis.cancel();
    
    // Then speak the new phrase
    const utterance = new SpeechSynthesisUtterance(phrase);
    utterance.lang = 'en-US';
    utterance.onend = () => {
      setTimeout(() => {
        handleSpeechRecognition();
      }, 1000);
    };
    
    speechSynthesis.speak(utterance);
  };

  const checkListeningAnswer = (userAnswer: string, correctAnswer: string) => {
    // Case-insensitive comparison and ignore punctuation
    const normalizedUserAnswer = userAnswer.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").trim();
    const normalizedCorrectAnswer = correctAnswer.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").trim();
    
    const isCorrect = normalizedUserAnswer === normalizedCorrectAnswer;
    
    toast({
      title: isCorrect ? "¡Correcto!" : "Incorrecto",
      description: isCorrect 
        ? "Has escrito correctamente lo que escuchaste." 
        : `La respuesta correcta era: "${correctAnswer}"`,
      variant: isCorrect ? "default" : "destructive"
    });

    return isCorrect;
  };
  
  const checkWritingAnswer = (userAnswer: string, correctAnswer: string) => {
    const normalizedUserAnswer = userAnswer.toLowerCase().trim();
    const normalizedCorrectAnswer = correctAnswer.toLowerCase().trim();
    
    const isCorrect = normalizedUserAnswer.includes(normalizedCorrectAnswer) || 
                     normalizedCorrectAnswer.includes(normalizedUserAnswer);
    
    toast({
      title: isCorrect ? "¡Correcto!" : "Necesita mejorar",
      description: isCorrect 
        ? "Tu respuesta es correcta." 
        : `Una respuesta correcta sería: "${correctAnswer}"`,
      variant: isCorrect ? "default" : "destructive"
    });

    return isCorrect;
  };
  
  const handlePracticeComplete = () => {
    // Calculate score based on selectedAnswers
    const score = Math.round((content.practice.length / content.practice.length) * 100);
    
    // Show completion message
    toast({
      title: "¡Lección completada!",
      description: `Has completado esta lección con éxito.`,
    });
    
    setIsCompleted(true);
  };
  
  const handleComplete = () => {
    // This would normally update the user progress in a real app
    navigate(`/module/${moduleId}`);
  };
  
  const toggleAITutor = () => {
    setShowAITutor(!showAITutor);
  };
  
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
              value={activeTab === 'practice' 
                ? ((content.practice.length) / content.practice.length) * 100 
                : 50} 
              className="w-24 h-2" 
            />
          </div>
        </div>
      </div>
      
      {showAITutor && (
        <AITutor 
          lessonTitle={content.title} 
          lessonContent={content.content}
          onClose={() => setShowAITutor(false)}
        />
      )}
      
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
              
              <div className="mb-6">
                <Tabs value={activeMode} onValueChange={handleModeChange} className="w-full">
                  <TabsList className="grid grid-cols-5 mb-6">
                    <TabsTrigger value="read" className="flex gap-2 items-center">
                      <BookOpen size={16} />
                      <span className="hidden sm:inline">Leer</span>
                    </TabsTrigger>
                    <TabsTrigger value="listen" className="flex gap-2 items-center">
                      <Headphones size={16} />
                      <span className="hidden sm:inline">Escuchar</span>
                    </TabsTrigger>
                    <TabsTrigger value="pronounce" className="flex gap-2 items-center">
                      <Volume2 size={16} />
                      <span className="hidden sm:inline">Pronunciar</span>
                    </TabsTrigger>
                    <TabsTrigger value="speak" className="flex gap-2 items-center">
                      <Mic size={16} />
                      <span className="hidden sm:inline">Hablar</span>
                    </TabsTrigger>
                    <TabsTrigger value="write" className="flex gap-2 items-center">
                      <Edit3 size={16} />
                      <span className="hidden sm:inline">Escribir</span>
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="read">
                    <ReadingExercise 
                      content={content}
                      onGoToPractice={() => handleTabChange('practice')}
                      examples={content.examples}
                      onPlayAudio={handlePlayAudio}
                      activeAudioExample={activeAudioExample}
                      videoUrl={content.videoUrl}
                      videoPoster={content.videoPoster}
                      videoCaption={content.videoCaption}
                    />
                  </TabsContent>
                  
                  <TabsContent value="listen">
                    <ListeningExercise 
                      examples={content.examples}
                      onPlayAudio={handlePlayAudio}
                      activeAudioExample={activeAudioExample}
                    />
                  </TabsContent>
                  
                  <TabsContent value="pronounce">
                    <PronunciationExercise 
                      examples={content.examples}
                      onPlayAudio={handlePlayAudio}
                      activeAudioExample={activeAudioExample}
                      onSpeechRecognition={handleSpeechRecognition}
                      isListening={isListening}
                      transcript={transcript}
                      spokenText={spokenText}
                    />
                  </TabsContent>
                  
                  <TabsContent value="speak">
                    <SpeakingExercise 
                      examples={content.examples}
                      onRepeatPhrase={handleRepeatPhrase}
                      isListening={isListening}
                      transcript={transcript}
                      spokenText={spokenText}
                    />
                  </TabsContent>
                  
                  <TabsContent value="write">
                    <WritingExerciseComponent 
                      writingExercises={writingExercisesData}
                      onCheckAnswer={checkWritingAnswer}
                    />
                  </TabsContent>
                </Tabs>
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
            <PracticeExercise 
              practice={content.practice}
              onComplete={handlePracticeComplete}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default LessonContent;
