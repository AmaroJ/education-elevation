
import { useState, useEffect, useCallback } from 'react';

interface UseSpeechSynthesisProps {
  onEnd?: () => void;
  onError?: (error: string) => void;
  language?: string;
  rate?: number;
  pitch?: number;
  volume?: number;
}

const useSpeechSynthesis = ({
  onEnd,
  onError,
  language = 'en-US',
  rate = 1,
  pitch = 1,
  volume = 1
}: UseSpeechSynthesisProps = {}) => {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const [currentUtterance, setCurrentUtterance] = useState<SpeechSynthesisUtterance | null>(null);

  // Initialize speech synthesis
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Check if speech synthesis is supported
    if (!('speechSynthesis' in window)) {
      setIsSupported(false);
      return;
    }

    setIsSupported(true);

    // Get available voices
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
    };

    // In Chrome, voices are loaded asynchronously
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }

    loadVoices();
    
    // Clean up
    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  // Get a voice that matches the language
  const getVoice = useCallback((lang: string) => {
    // Filter voices by language
    const filtered = voices.filter(voice => voice.lang.startsWith(lang));
    
    // Prefer native voices
    const native = filtered.find(voice => voice.localService === true);
    if (native) return native;
    
    // If no native voice, return any matching voice
    if (filtered.length > 0) return filtered[0];
    
    // If no matching voice, return first available or null
    return voices[0] || null;
  }, [voices]);

  // Speak text
  const speak = useCallback((text: string, customOptions?: Partial<UseSpeechSynthesisProps>) => {
    if (!isSupported) {
      onError && onError('Speech synthesis not supported in this browser');
      return;
    }

    // Stop any current speech
    window.speechSynthesis.cancel();
    
    // Set up options
    const options = { ...{ language, rate, pitch, volume }, ...customOptions };
    
    // Create utterance
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Set voice
    const voice = getVoice(options.language || language);
    if (voice) utterance.voice = voice;
    
    // Set other options
    utterance.lang = options.language || language;
    utterance.rate = options.rate || rate;
    utterance.pitch = options.pitch || pitch;
    utterance.volume = options.volume || volume;
    
    // Set event handlers
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => {
      setIsSpeaking(false);
      onEnd && onEnd();
    };
    utterance.onerror = (event) => {
      setIsSpeaking(false);
      console.error('Speech synthesis error:', event);
      onError && onError(`Speech synthesis error: ${event.error}`);
    };
    
    // Speak
    setCurrentUtterance(utterance);
    window.speechSynthesis.speak(utterance);
  }, [isSupported, language, rate, pitch, volume, getVoice, onEnd, onError]);

  // Stop speaking
  const cancel = useCallback(() => {
    if (!isSupported) return;
    
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  }, [isSupported]);

  // Pause speaking
  const pause = useCallback(() => {
    if (!isSupported) return;
    
    window.speechSynthesis.pause();
  }, [isSupported]);

  // Resume speaking
  const resume = useCallback(() => {
    if (!isSupported) return;
    
    window.speechSynthesis.resume();
  }, [isSupported]);

  return {
    speak,
    cancel,
    pause,
    resume,
    isSpeaking,
    voices,
    isSupported,
    currentUtterance
  };
};

export default useSpeechSynthesis;
