
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { type LessonContent } from '@/lib/data';

// Import our new components
import VideoPlayer from './reading/VideoPlayer';
import StorySection from './reading/StorySection';
import KaraokeSection from './reading/KaraokeSection';
import ExamplesSection from './reading/ExamplesSection';

interface ReadingExerciseProps {
  content: LessonContent;
  onGoToPractice: () => void;
  examples: string[];
  onPlayAudio: (text: string, index: number) => void;
  activeAudioExample: number | null;
  videoUrl?: string;
  videoPoster?: string;
  videoCaption?: string;
}

const ReadingExercise = ({
  content,
  onGoToPractice,
  examples,
  onPlayAudio,
  activeAudioExample,
  videoUrl,
  videoPoster,
  videoCaption
}: ReadingExerciseProps) => {
  // Determine if this is a story or karaoke
  const isStory = !!content.storyText;
  const isKaraoke = !!content.karaokeLyrics;

  return (
    <div className="max-w-3xl mx-auto">
      <VideoPlayer 
        videoUrl={videoUrl}
        videoPoster={videoPoster}
        videoCaption={videoCaption}
      />
      
      <div 
        className="prose prose-slate max-w-none"
        dangerouslySetInnerHTML={{ __html: content.content }}
      />
      
      {isStory && content.storyText && (
        <StorySection 
          storyText={content.storyText} 
          storyAudio={content.storyAudio}
        />
      )}
      
      {isKaraoke && content.karaokeLyrics && (
        <KaraokeSection 
          karaokeLyrics={content.karaokeLyrics} 
          karaokeUrl={content.karaokeUrl}
        />
      )}
      
      <ExamplesSection 
        examples={examples}
        onPlayAudio={onPlayAudio}
        activeAudioExample={activeAudioExample}
      />

      <div className="mt-8 flex justify-end">
        <Button 
          className="primary-button"
          onClick={onGoToPractice}
        >
          Ir a la práctica
          <ArrowRight className="ml-2" size={16} />
        </Button>
      </div>
    </div>
  );
};

export default ReadingExercise;
