
import { useState, useEffect, useCallback } from 'react';

interface UseSpeechRecognitionProps {
  onResult?: (text: string) => void;
  onError?: (error: string) => void;
  language?: string;
  continuous?: boolean;
}

interface RecognitionError extends Event {
  error: string;
}

const useSpeechRecognition = ({
  onResult,
  onError,
  language = 'en-US',
  continuous = false
}: UseSpeechRecognitionProps = {}) => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [recognition, setRecognition] = useState<SpeechRecognition | null>(null);
  const [isSupported, setIsSupported] = useState(false);

  // Initialize speech recognition
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Check if speech recognition is supported
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
      setIsSupported(false);
      return;
    }

    setIsSupported(true);
    const recognitionInstance = new SpeechRecognition();
    
    // Configure recognition
    recognitionInstance.continuous = continuous;
    recognitionInstance.interimResults = true;
    recognitionInstance.lang = language;
    
    // Set up event handlers
    recognitionInstance.onresult = (event) => {
      const current = event.resultIndex;
      const result = event.results[current];
      const transcript = result[0].transcript;
      
      setTranscript(transcript);
      onResult && onResult(transcript);
    };
    
    recognitionInstance.onerror = (event: RecognitionError) => {
      const errorMessage = `Recognition error: ${event.error}`;
      console.error(errorMessage);
      onError && onError(errorMessage);
      
      // Auto-restart if error wasn't permission-related
      if (event.error !== 'not-allowed' && isListening) {
        try {
          recognitionInstance.start();
        } catch (e) {
          console.error('Failed to restart recognition after error', e);
        }
      }
    };
    
    recognitionInstance.onend = () => {
      // Only restart if we're still supposed to be listening
      if (isListening && continuous) {
        try {
          recognitionInstance.start();
        } catch (e) {
          console.error('Failed to restart recognition after end', e);
        }
      } else {
        setIsListening(false);
      }
    };
    
    setRecognition(recognitionInstance);
    
    // Cleanup
    return () => {
      try {
        recognitionInstance.stop();
        setIsListening(false);
      } catch (e) {
        console.error('Error stopping recognition during cleanup', e);
      }
    };
  }, [continuous, language, onError, onResult, isListening]);

  // Start listening
  const startListening = useCallback(() => {
    if (!recognition || !isSupported) return;
    
    setTranscript('');
    
    try {
      recognition.start();
      setIsListening(true);
    } catch (error) {
      console.error('Error starting recognition:', error);
      onError && onError('Failed to start speech recognition');
    }
  }, [recognition, isSupported, onError]);

  // Stop listening
  const stopListening = useCallback(() => {
    if (!recognition || !isSupported) return;
    
    try {
      recognition.stop();
      setIsListening(false);
    } catch (error) {
      console.error('Error stopping recognition:', error);
    }
  }, [recognition, isSupported]);

  // Abort listening
  const abortListening = useCallback(() => {
    if (!recognition || !isSupported) return;
    
    try {
      recognition.abort();
      setIsListening(false);
    } catch (error) {
      console.error('Error aborting recognition:', error);
    }
  }, [recognition, isSupported]);

  return {
    isListening,
    transcript,
    startListening,
    stopListening,
    abortListening,
    isSupported
  };
};

export default useSpeechRecognition;
