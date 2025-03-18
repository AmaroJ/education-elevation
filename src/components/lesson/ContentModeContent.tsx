
import { Tabs, TabsContent } from '@/components/ui/tabs';
import ReadingExercise from '@/components/exercises/ReadingExercise';
import ListeningExercise from '@/components/exercises/ListeningExercise';
import PronunciationExercise from '@/components/exercises/PronunciationExercise';
import SpeakingExercise from '@/components/exercises/SpeakingExercise';
import WritingExerciseComponent from '@/components/exercises/WritingExercise';
import { LessonContent } from '@/lib/data';

interface ContentModeContentProps {
  activeMode: string;
  content: LessonContent;
  handleTabChange: (tab: string) => void;
  speechProps: {
    handlePlayAudio: (text: string, index: number) => void;
    activeAudioExample: number | null;
    handleSpeechRecognition: () => void;
    isListening: boolean;
    transcript: string;
    spokenText: string;
    handleRepeatPhrase: (phrase: string) => void;
  };
  writingExercisesData: Array<{ prompt: string; answer: string }>;
  checkWritingAnswer: (userAnswer: string, correctAnswer: string) => boolean;
}

const ContentModeContent = ({
  activeMode,
  content,
  handleTabChange,
  speechProps,
  writingExercisesData,
  checkWritingAnswer
}: ContentModeContentProps) => {
  return (
    <Tabs value={activeMode} className="w-full">
      <TabsContent value="read">
        <ReadingExercise 
          content={content}
          onGoToPractice={() => handleTabChange('practice')}
          examples={content.examples}
          onPlayAudio={speechProps.handlePlayAudio}
          activeAudioExample={speechProps.activeAudioExample}
          videoUrl={content.videoUrl}
          videoPoster={content.videoPoster}
          videoCaption={content.videoCaption}
        />
      </TabsContent>
      
      <TabsContent value="listen">
        <ListeningExercise 
          examples={content.examples}
          onPlayAudio={speechProps.handlePlayAudio}
          activeAudioExample={speechProps.activeAudioExample}
        />
      </TabsContent>
      
      <TabsContent value="pronounce">
        <PronunciationExercise 
          examples={content.examples}
          onPlayAudio={speechProps.handlePlayAudio}
          activeAudioExample={speechProps.activeAudioExample}
          onSpeechRecognition={speechProps.handleSpeechRecognition}
          isListening={speechProps.isListening}
          transcript={speechProps.transcript}
          spokenText={speechProps.spokenText}
        />
      </TabsContent>
      
      <TabsContent value="speak">
        <SpeakingExercise 
          examples={content.examples}
          onRepeatPhrase={speechProps.handleRepeatPhrase}
          isListening={speechProps.isListening}
          transcript={speechProps.transcript}
          spokenText={speechProps.spokenText}
        />
      </TabsContent>
      
      <TabsContent value="write">
        <WritingExerciseComponent 
          writingExercises={writingExercisesData}
          onCheckAnswer={checkWritingAnswer}
        />
      </TabsContent>
    </Tabs>
  );
};

export default ContentModeContent;
