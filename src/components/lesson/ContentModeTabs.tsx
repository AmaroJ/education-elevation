
import { Dispatch, SetStateAction } from 'react';
import { BookOpen, Headphones, Volume2, Mic, Edit3 } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface ContentModeTabsProps {
  activeMode: string;
  onValueChange: (value: string) => void;
}

const ContentModeTabs = ({ activeMode, onValueChange }: ContentModeTabsProps) => {
  return (
    <Tabs value={activeMode} onValueChange={onValueChange} className="w-full">
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
    </Tabs>
  );
};

export default ContentModeTabs;
