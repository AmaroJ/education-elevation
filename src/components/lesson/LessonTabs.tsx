
import { Dispatch, SetStateAction } from 'react';
import { BookOpen, Headphones, Volume2, Mic, Edit3 } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface LessonTabsProps {
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
  activeMode: string;
  setActiveMode: Dispatch<SetStateAction<string>>;
  handleTabChange: (tab: string) => void;
  handleModeChange: (mode: string) => void;
}

const LessonTabs = ({
  activeTab,
  setActiveTab,
  activeMode,
  setActiveMode,
  handleTabChange,
  handleModeChange
}: LessonTabsProps) => {
  return (
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
  );
};

export default LessonTabs;
