
import { Music, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface KaraokeSectionProps {
  karaokeLyrics: string[];
  karaokeUrl?: string;
}

const KaraokeSection = ({ karaokeLyrics, karaokeUrl }: KaraokeSectionProps) => {
  return (
    <div className="mt-8 bg-primary/10 rounded-xl p-6 border border-primary/20">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium flex items-center gap-2">
          <Music size={18} />
          Letra de la canción
        </h3>
        {karaokeUrl && (
          <Button 
            variant="default" 
            size="sm" 
            className="bg-primary"
          >
            <Play size={16} className="mr-1" />
            Iniciar karaoke
          </Button>
        )}
      </div>
      <div className="bg-background rounded-lg p-4 text-secondary-foreground">
        {karaokeLyrics.map((line, index) => (
          <p key={index} className="mb-2 last:mb-0">{line}</p>
        ))}
      </div>
    </div>
  );
};

export default KaraokeSection;
