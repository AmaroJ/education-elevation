
import { useState, useEffect, useRef } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Send, Volume2, VolumeX } from "lucide-react";

interface AITutorModalProps {
  isOpen: boolean;
  onClose: () => void;
  lessonContent: string;
}

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

const defaultSystemPrompt = `You are an AI tutor for an English language learning application. 
Help the student understand the current lesson content, answer questions, explain grammar rules, 
provide examples, correct mistakes, and encourage practice. Be friendly and supportive.`;

const AITutorModal = ({ isOpen, onClose, lessonContent }: AITutorModalProps) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { 
      role: 'assistant', 
      content: '¡Hola! Soy tu tutor de inglés. ¿En qué puedo ayudarte con esta lección?' 
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Scroll to bottom whenever messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);
  
  // Stop speaking when modal closes
  useEffect(() => {
    if (!isOpen && window.speechSynthesis) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  }, [isOpen]);
  
  const handleSendMessage = async () => {
    if (!input.trim()) return;
    
    // Add user message to chat
    const userMessage = { role: 'user' as const, content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    
    // Simulate AI response (in a real app, this would call an API)
    try {
      // In a real implementation, you would send the messages array to your AI service
      // along with the lesson content and system prompt
      setTimeout(() => {
        const aiResponses = [
          "That's a great question about English grammar! The present continuous tense is used to talk about actions happening right now.",
          "Let me explain that vocabulary word. 'Endeavor' means to try hard to achieve something. For example: 'She endeavored to finish her homework before dinner.'",
          "You're on the right track! In this context, we use 'their' (possessive) instead of 'there' (location) or 'they're' (they are).",
          "To pronounce this word correctly, focus on the stressed syllable. Let's break it down: com-MU-ni-ca-tion. The emphasis is on the 'MU'.",
          "I understand your confusion. English prepositions can be tricky! We say 'interested in' (not 'on') and 'depend on' (not 'in')."
        ];
        
        const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
        const assistantMessage = { role: 'assistant' as const, content: randomResponse };
        setMessages(prev => [...prev, assistantMessage]);
        setIsLoading(false);
      }, 1500);
    } catch (error) {
      console.error('Error getting AI response:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Lo siento, tuve un problema al procesar tu pregunta. ¿Puedes intentarlo de nuevo?' 
      }]);
      setIsLoading(false);
    }
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  const speakText = (text: string) => {
    if (!window.speechSynthesis) return;
    
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.onend = () => setIsSpeaking(false);
    
    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[500px] max-h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>AI Tutor de Inglés</DialogTitle>
          <DialogDescription>
            Pregúntame cualquier duda sobre la lección o pide ayuda adicional.
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex-1 overflow-y-auto py-4 mb-4 space-y-4">
          {messages.map((message, index) => (
            <div 
              key={index} 
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[80%] rounded-lg p-3 ${
                  message.role === 'user' 
                    ? 'bg-primary text-white' 
                    : 'bg-secondary text-foreground'
                }`}
              >
                <p className="whitespace-pre-wrap">{message.content}</p>
                {message.role === 'assistant' && (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="mt-2 h-7 w-7 p-0" 
                    onClick={() => speakText(message.content)}
                    title={isSpeaking ? "Detener narración" : "Narrar texto"}
                  >
                    {isSpeaking ? <VolumeX size={16} /> : <Volume2 size={16} />}
                  </Button>
                )}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
          
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-secondary text-foreground max-w-[80%] rounded-lg p-3">
                <Loader2 className="h-5 w-5 animate-spin" />
              </div>
            </div>
          )}
        </div>
        
        <div className="flex items-end gap-2">
          <Textarea
            placeholder="Escribe tu pregunta..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 min-h-[60px] resize-none"
          />
          <Button
            onClick={handleSendMessage}
            disabled={!input.trim() || isLoading}
            className="h-10 w-10 p-0"
          >
            <Send size={18} />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AITutorModal;
