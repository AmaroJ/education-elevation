
import { useState, useRef, useEffect } from 'react';
import { toast } from '@/components/ui/use-toast';

export const useSpeech = () => {
  const [transcript, setTranscript] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [spokenText, setSpokenText] = useState('');
  const [activeAudioExample, setActiveAudioExample] = useState<number | null>(null);
  
  const speechRecognitionRef = useRef<SpeechRecognition | null>(null);
  
  useEffect(() => {
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
      speechSynthesis.cancel();
    };
  }, []);
  
  const handlePlayAudio = (text: string, index: number) => {
    speechSynthesis.cancel();
    
    setActiveAudioExample(index);
    
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
    
    speechSynthesis.cancel();
    
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

  return {
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
  };
};

export default useSpeech;
