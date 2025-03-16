
import { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { toast } from '@/components/ui/use-toast';

interface AITutorProps {
  lessonTitle: string;
  lessonContent: string;
  onClose: () => void;
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const AITutor = ({ lessonTitle, lessonContent, onClose }: AITutorProps) => {
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'assistant', 
      content: `¡Hola! Soy tu tutor AI para la lección "${lessonTitle}". ¿En qué puedo ayudarte hoy?` 
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Scroll to bottom when messages change
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Add user message
    const userMessage = { role: 'user' as const, content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    
    // Simulate AI response (in a real app, this would call an API)
    setTimeout(() => {
      const responses = [
        "¡Excelente pregunta! En inglés, es importante recordar que la pronunciación puede variar según el acento regional. Practica escuchando diferentes acentos para mejorar tu comprensión.",
        "Para mejorar tu fluidez, te recomiendo practicar hablando en voz alta todos los días, aunque sea por unos minutos. La consistencia es clave para el aprendizaje de idiomas.",
        "Esa es una buena observación. En la gramática inglesa, recuerda que el orden de las palabras es generalmente Sujeto-Verbo-Objeto, diferente al español donde el orden puede ser más flexible.",
        "Las expresiones idiomáticas son importantes para sonar natural. Te sugiero aprender algunas comunes como 'break the ice' (romper el hielo) o 'piece of cake' (muy fácil).",
        "Para expandir tu vocabulario, trata de leer en inglés regularmente y anotar palabras nuevas. Luego úsalas en oraciones para fijarlas en tu memoria.",
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      const aiMessage = { role: 'assistant' as const, content: randomResponse };
      
      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="glass-card mb-6 overflow-hidden">
      <div className="flex items-center justify-between border-b p-4">
        <div className="flex items-center gap-2">
          <Bot size={18} className="text-primary" />
          <h3 className="font-medium">Tutor IA</h3>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X size={18} />
        </Button>
      </div>
      
      <div className="p-4 h-[300px] flex flex-col">
        <ScrollArea className="flex-1 pr-4" ref={scrollAreaRef}>
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`flex items-start gap-3 ${
                  message.role === 'assistant' ? '' : 'flex-row-reverse'
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                  message.role === 'assistant' 
                    ? 'bg-primary/10 text-primary' 
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {message.role === 'assistant' ? <Bot size={16} /> : <User size={16} />}
                </div>
                <div className={`p-3 rounded-lg max-w-[80%] ${
                  message.role === 'assistant' 
                    ? 'bg-secondary text-secondary-foreground' 
                    : 'bg-primary text-primary-foreground'
                }`}>
                  <p className="text-sm">{message.content}</p>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Bot size={16} />
                </div>
                <div className="p-3 rounded-lg bg-secondary text-secondary-foreground">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
        
        <form onSubmit={handleSubmit} className="flex gap-2 mt-4">
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="Escribe tu pregunta aquí..."
            className="flex-1"
            disabled={isLoading}
          />
          <Button 
            type="submit" 
            size="icon" 
            disabled={isLoading || !input.trim()}
          >
            <Send size={16} />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AITutor;
