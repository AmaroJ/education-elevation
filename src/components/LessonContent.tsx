
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/components/ui/use-toast';
import { type LessonContent as LessonContentType } from '@/lib/data';

// Import custom hooks
import useSpeech from '@/hooks/useSpeech';

// Import components
import LessonHeader from './lesson/LessonHeader';
import LessonTabs from './lesson/LessonTabs';
import ContentModeTabs from './lesson/ContentModeTabs';
import ContentModeContent from './lesson/ContentModeContent';
import LessonComplete from './lesson/LessonComplete';
import PracticeExercise from './exercises/PracticeExercise';

// Define writing exercises data
const writingExercisesData = [
  { prompt: "Write the greeting for morning time:", answer: "Good morning" },
  { prompt: "Write how to introduce yourself:", answer: "My name is..." },
  { prompt: "Write how to ask someone's name:", answer: "What's your name?" },
  { prompt: "Write how to say goodbye:", answer: "Goodbye" }
];

interface LessonContentProps {
  content: LessonContentType;
  moduleId: string;
  topicId: string;
}

const LessonContent = ({ content, moduleId, topicId }: LessonContentProps) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('content');
  const [activeMode, setActiveMode] = useState('read');
  const [isCompleted, setIsCompleted] = useState(false);
  
  const {
    transcript,
    isListening,
    spokenText,
    activeAudioExample,
    setActiveAudioExample,
    handlePlayAudio,
    handleSpeechRecognition,
    handleRepeatPhrase,
    checkListeningAnswer,
    checkWritingAnswer
  } = useSpeech();
  
  const handleBack = () => {
    navigate(`/module/${moduleId}`);
  };
  
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    speechSynthesis.cancel();
  };
  
  const handleModeChange = (mode: string) => {
    setActiveMode(mode);
    
    if (isListening) {
      handleSpeechRecognition();
    }
    
    speechSynthesis.cancel();
    setActiveAudioExample(null);
  };
  
  const handlePracticeComplete = () => {
    toast({
      title: "¡Lección completada!",
      description: `Has completado esta lección con éxito.`,
    });
    
    setIsCompleted(true);
  };
  
  const handleComplete = () => {
    navigate(`/module/${moduleId}`);
  };
  
  const speechProps = {
    handlePlayAudio,
    activeAudioExample,
    handleSpeechRecognition,
    isListening,
    transcript,
    spokenText,
    handleRepeatPhrase
  };
  
  // Calculate progress as a number (0-100)
  const progressValue = activeTab === 'practice' 
    ? ((practiceCompleted) / content.practice.length) * 100 
    : 50;
  
  return (
    <div className="animate-fade-in">
      <LessonHeader 
        moduleId={moduleId}
        lessonTitle={content.title}
        progress={progressValue}
        practiceTotal={content.practice.length}
        practiceCompleted={content.practice.length}
      />
      
      <div className="glass-card overflow-hidden">
        <LessonTabs 
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          activeMode={activeMode}
          setActiveMode={setActiveMode}
          handleTabChange={handleTabChange}
          handleModeChange={handleModeChange}
        />
        
        <div className="p-6 md:p-8 min-h-[400px]">
          {activeTab === 'content' ? (
            <div className="max-w-3xl mx-auto">
              <h1 className="text-2xl font-semibold mb-6">{content.title}</h1>
              
              <div className="mb-6">
                <ContentModeTabs 
                  activeMode={activeMode}
                  onValueChange={handleModeChange}
                />
                
                <ContentModeContent 
                  activeMode={activeMode}
                  content={content}
                  handleTabChange={handleTabChange}
                  speechProps={speechProps}
                  writingExercisesData={writingExercisesData}
                  checkWritingAnswer={checkWritingAnswer}
                />
              </div>
            </div>
          ) : isCompleted ? (
            <LessonComplete onComplete={handleComplete} />
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
