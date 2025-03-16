
import { useState, useRef, useEffect } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle, AlertCircle, Volume2, Play, Pause, Volume, VolumeX, Mic, Headphones, BookOpen, MessageCircle, Edit3 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { type LessonContent as LessonContentType } from '@/lib/data';
import { toast } from '@/components/ui/use-toast';
import AITutor from '@/components/AITutor';

interface LessonContentProps {
  content: LessonContentType;
  moduleId: string;
  topicId: string;
}

const LessonContent = ({ content, moduleId, topicId }: LessonContentProps) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('content');
  const [activeMode, setActiveMode] = useState('read');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>(Array(content.practice.length).fill(''));
  const [isCompleted, setIsCompleted] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [spokenText, setSpokenText] = useState('');
  const [showAITutor, setShowAITutor] = useState(false);
  const [activeAudioExample, setActiveAudioExample] = useState<number | null>(null);
  const [listeningScores, setListeningScores] = useState<{correct: boolean, attempted: boolean}[]>(
    content.examples.map(() => ({ correct: false, attempted: false }))
  );
  const [writtenAnswer, setWrittenAnswer] = useState('');
  const [writingExercises] = useState([
    { prompt: "Write the greeting for morning time:", answer: "Good morning" },
    { prompt: "Write how to introduce yourself:", answer: "My name is..." },
    { prompt: "Write how to ask someone's name:", answer: "What's your name?" },
    { prompt: "Write how to say goodbye:", answer: "Goodbye" }
  ]);
  const [currentWritingIndex, setCurrentWritingIndex] = useState(0);
  const [writingSubmitted, setWritingSubmitted] = useState(false);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const speechRecognitionRef = useRef<SpeechRecognition | null>(null);
  
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('play', () => setIsVideoPlaying(true));
      videoRef.current.addEventListener('pause', () => setIsVideoPlaying(false));
      videoRef.current.addEventListener('ended', () => setIsVideoPlaying(false));
    }
    
    // Initialize speech recognition if supported
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
      if (videoRef.current) {
        videoRef.current.removeEventListener('play', () => setIsVideoPlaying(true));
        videoRef.current.removeEventListener('pause', () => setIsVideoPlaying(false));
        videoRef.current.removeEventListener('ended', () => setIsVideoPlaying(false));
      }
      
      // Stop any ongoing audio when component unmounts
      speechSynthesis.cancel();
    };
  }, []);
  
  const handleBack = () => {
    navigate(`/module/${moduleId}`);
  };
  
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    // Pause video when switching away from content
    if (tab !== 'content' && videoRef.current && !videoRef.current.paused) {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    }
    
    // Stop any ongoing audio
    speechSynthesis.cancel();
  };
  
  const handleModeChange = (mode: string) => {
    setActiveMode(mode);
    
    // Stop any ongoing activities when changing modes
    if (audioRef.current) {
      audioRef.current.pause();
    }
    if (isListening && speechRecognitionRef.current) {
      speechRecognitionRef.current.stop();
      setIsListening(false);
    }
    
    // Stop any speech synthesis
    speechSynthesis.cancel();
    
    // Reset audio example selection
    setActiveAudioExample(null);
  };
  
  const handleAnswerSelect = (answer: string) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = answer;
    setSelectedAnswers(newAnswers);
  };
  
  const handleNextQuestion = () => {
    if (currentQuestionIndex < content.practice.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Calculate score
      const correctAnswers = content.practice.filter((q, index) => 
        q.correctAnswer === selectedAnswers[index]
      ).length;
      
      const score = Math.round((correctAnswers / content.practice.length) * 100);
      
      // Show completion message
      toast({
        title: "¡Lección completada!",
        description: `Has obtenido ${correctAnswers} de ${content.practice.length} respuestas correctas (${score}%)`,
      });
      
      setIsCompleted(true);
    }
  };
  
  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  
  const handleComplete = () => {
    // This would normally update the user progress in a real app
    navigate(`/module/${moduleId}`);
  };

  const handleTogglePlay = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(error => {
          console.error("Error playing video:", error);
          toast({
            title: "Error",
            description: "No se pudo reproducir el video. Comprueba que la URL del video es válida.",
            variant: "destructive"
          });
        });
      }
    }
  };

  const handleToggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };
  
  const handlePlayAudio = (text: string, index: number) => {
    // Stop any previous speech synthesis
    speechSynthesis.cancel();
    
    // Set the active example
    setActiveAudioExample(index);
    
    // Use the Web Speech API for text-to-speech
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
    
    // First cancel any ongoing speech
    speechSynthesis.cancel();
    
    // Then speak the new phrase
    const utterance = new SpeechSynthesisUtterance(phrase);
    utterance.lang = 'en-US';
    utterance.onend = () => {
      setTimeout(() => {
        handleSpeechRecognition();
      }, 1000);
    };
    
    speechSynthesis.speak(utterance);
  };
  
  const checkListeningAnswer = (index: number, userAnswer: string) => {
    const correctAnswer = content.examples[index];
    // Case-insensitive comparison and ignore punctuation
    const normalizedUserAnswer = userAnswer.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").trim();
    const normalizedCorrectAnswer = correctAnswer.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").trim();
    
    const isCorrect = normalizedUserAnswer === normalizedCorrectAnswer;
    
    const newScores = [...listeningScores];
    newScores[index] = { correct: isCorrect, attempted: true };
    setListeningScores(newScores);
    
    toast({
      title: isCorrect ? "¡Correcto!" : "Incorrecto",
      description: isCorrect 
        ? "Has escrito correctamente lo que escuchaste." 
        : `La respuesta correcta era: "${correctAnswer}"`,
      variant: isCorrect ? "default" : "destructive"
    });
  };
  
  const handleWritingNext = () => {
    if (currentWritingIndex < writingExercises.length - 1) {
      setCurrentWritingIndex(currentWritingIndex + 1);
      setWrittenAnswer('');
      setWritingSubmitted(false);
    } else {
      toast({
        title: "¡Ejercicios de escritura completados!",
        description: "Has terminado todos los ejercicios de escritura.",
      });
    }
  };
  
  const checkWritingAnswer = () => {
    const exercise = writingExercises[currentWritingIndex];
    const correctAnswer = exercise.answer.toLowerCase();
    const userAnswer = writtenAnswer.toLowerCase();
    
    const isCorrect = userAnswer.includes(correctAnswer) || correctAnswer.includes(userAnswer);
    
    setWritingSubmitted(true);
    
    toast({
      title: isCorrect ? "¡Correcto!" : "Necesita mejorar",
      description: isCorrect 
        ? "Tu respuesta es correcta." 
        : `Una respuesta correcta sería: "${exercise.answer}"`,
      variant: isCorrect ? "default" : "destructive"
    });
  };
  
  const toggleAITutor = () => {
    setShowAITutor(!showAITutor);
  };
  
  const currentQuestion = content.practice[currentQuestionIndex];
  const isAnswerSelected = selectedAnswers[currentQuestionIndex] !== '';
  const isAnswerCorrect = selectedAnswers[currentQuestionIndex] === currentQuestion?.correctAnswer;
  
  return (
    <div className="animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <button 
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          onClick={handleBack}
        >
          <ArrowLeft size={16} /> 
          Volver al módulo
        </button>
        
        <div className="flex items-center gap-4">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex items-center gap-2"
            onClick={toggleAITutor}
          >
            <MessageCircle size={16} />
            Tutor IA
          </Button>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Progreso de la lección</span>
            <Progress 
              value={activeTab === 'practice' 
                ? ((currentQuestionIndex + 1) / content.practice.length) * 100 
                : 50} 
              className="w-24 h-2" 
            />
          </div>
        </div>
      </div>
      
      {showAITutor && (
        <AITutor 
          lessonTitle={content.title} 
          lessonContent={content.content}
          onClose={() => setShowAITutor(false)}
        />
      )}
      
      <div className="glass-card overflow-hidden">
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
        
        <div className="p-6 md:p-8 min-h-[400px]">
          {activeTab === 'content' ? (
            <div className="max-w-3xl mx-auto">
              <h1 className="text-2xl font-semibold mb-6">{content.title}</h1>
              
              <div className="mb-6">
                <Tabs value={activeMode} onValueChange={handleModeChange} className="w-full">
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
                  
                  <TabsContent value="read">
                    {content.videoUrl && (
                      <div className="mb-6 rounded-xl overflow-hidden relative">
                        <div className="aspect-w-16 aspect-h-9 bg-black">
                          <video 
                            ref={videoRef}
                            src={content.videoUrl}
                            className="w-full h-full object-contain"
                            poster={content.videoPoster || ""}
                            onEnded={() => setIsVideoPlaying(false)}
                            controls={false}
                          />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="text-white hover:bg-white/20" 
                              onClick={handleTogglePlay}
                            >
                              {isVideoPlaying ? <Pause size={20} /> : <Play size={20} />}
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="text-white hover:bg-white/20" 
                              onClick={handleToggleMute}
                            >
                              {isMuted ? <VolumeX size={20} /> : <Volume size={20} />}
                            </Button>
                          </div>
                          <div className="text-white text-sm">{content.videoCaption || "Material visual de apoyo"}</div>
                        </div>
                      </div>
                    )}
                    
                    <div 
                      className="prose prose-slate max-w-none"
                      dangerouslySetInnerHTML={{ __html: content.content }}
                    />
                    
                    <div className="mt-8 bg-secondary/50 rounded-xl p-6">
                      <h3 className="text-lg font-medium mb-4">Ejemplos prácticos</h3>
                      <div className="space-y-4">
                        {content.examples.map((example, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center font-medium shrink-0 mt-0.5">
                              {index + 1}
                            </div>
                            <div className="flex-1">
                              <p className="text-secondary-foreground">{example}</p>
                              <button 
                                className="flex items-center gap-1 text-primary/80 hover:text-primary text-sm mt-1"
                                onClick={() => handlePlayAudio(example, index)}
                              >
                                <Volume2 size={14} />
                                Escuchar pronunciación
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="listen">
                    <div className="space-y-6">
                      <div className="p-6 bg-secondary/30 rounded-xl">
                        <h3 className="text-lg font-medium mb-4">Ejercicios de escucha</h3>
                        <p className="mb-4">Escucha cada ejemplo y escribe lo que oyes:</p>
                        
                        <div className="space-y-6">
                          {content.examples.map((example, index) => (
                            <div key={index} className="p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg shadow-sm">
                              <div className="flex justify-between items-center mb-3">
                                <span className="font-medium">Ejemplo {index + 1}</span>
                                <Button 
                                  variant="outline" 
                                  size="sm" 
                                  className={`flex items-center gap-1 ${activeAudioExample === index ? 'bg-primary/20' : ''}`}
                                  onClick={() => handlePlayAudio(example, index)}
                                  disabled={activeAudioExample !== null && activeAudioExample !== index}
                                >
                                  <Volume2 size={14} />
                                  {activeAudioExample === index ? 'Reproduciendo...' : 'Escuchar'}
                                </Button>
                              </div>
                              
                              <div className="mt-4">
                                <label className="block text-sm font-medium mb-1">Escribe lo que oyes:</label>
                                <div className="flex gap-2">
                                  <input
                                    type="text"
                                    className="flex-1 p-2 border rounded-md"
                                    placeholder="Escribe aquí..."
                                    value={spokenText === example ? example : ''}
                                    onChange={(e) => setSpokenText(e.target.value)}
                                    disabled={listeningScores[index].attempted}
                                  />
                                  <Button
                                    variant="outline"
                                    onClick={() => checkListeningAnswer(index, spokenText)}
                                    disabled={listeningScores[index].attempted || !spokenText}
                                  >
                                    Verificar
                                  </Button>
                                </div>
                              </div>
                              
                              {listeningScores[index].attempted && (
                                <div className={`mt-3 p-2 rounded ${listeningScores[index].correct ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                  {listeningScores[index].correct 
                                    ? "¡Correcto! Has escrito correctamente lo que escuchaste."
                                    : `Incorrecto. La respuesta correcta era: "${example}"`}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="pronounce">
                    <div className="space-y-6">
                      <div className="p-6 bg-secondary/30 rounded-xl">
                        <h3 className="text-lg font-medium mb-4">Ejercicios de pronunciación</h3>
                        <p className="mb-4">Escucha cada ejemplo y luego intenta repetirlo con la mejor pronunciación posible:</p>
                        
                        <div className="space-y-6">
                          {content.examples.map((example, index) => (
                            <div key={index} className="p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg shadow-sm">
                              <div className="flex justify-between items-center mb-3">
                                <span className="font-medium">Ejemplo {index + 1}</span>
                                <div className="flex gap-2">
                                  <Button 
                                    variant="outline" 
                                    size="sm" 
                                    className="flex items-center gap-1"
                                    onClick={() => handlePlayAudio(example, index)}
                                    disabled={activeAudioExample !== null && activeAudioExample !== index}
                                  >
                                    <Volume2 size={14} />
                                    {activeAudioExample === index ? 'Reproduciendo...' : 'Escuchar'}
                                  </Button>
                                  <Button 
                                    variant="outline" 
                                    size="sm" 
                                    className={`flex items-center gap-1 ${isListening ? 'bg-red-100 text-red-600 border-red-300' : ''}`}
                                    onClick={handleSpeechRecognition}
                                  >
                                    <Mic size={14} />
                                    {isListening ? 'Detener' : 'Grabar'}
                                  </Button>
                                </div>
                              </div>
                              <p className="mb-3">{example}</p>
                              
                              {transcript && (
                                <div className="mt-3">
                                  <h4 className="text-sm font-medium mb-1">Tu pronunciación:</h4>
                                  <div className="p-2 bg-primary/5 border border-primary/20 rounded">
                                    {transcript}
                                  </div>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="speak">
                    <div className="space-y-6">
                      <div className="p-6 bg-secondary/30 rounded-xl">
                        <h3 className="text-lg font-medium mb-4">Ejercicios de conversación</h3>
                        <p className="mb-4">Practica tu expresión oral repitiendo estas frases:</p>
                        
                        <div className="space-y-6">
                          {content.examples.map((example, index) => (
                            <div key={index} className="p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg shadow-sm">
                              <div className="flex justify-between items-center mb-3">
                                <span className="font-medium">Frase {index + 1}</span>
                                <Button 
                                  variant="secondary" 
                                  size="sm" 
                                  className="flex items-center gap-1"
                                  onClick={() => handleRepeatPhrase(example)}
                                >
                                  <Mic size={14} />
                                  Repetir frase
                                </Button>
                              </div>
                              <p className="mb-3">{example}</p>
                              
                              {isListening && spokenText === example && (
                                <div className="text-center p-3 rounded bg-yellow-50 border border-yellow-200">
                                  <p className="text-yellow-600 animate-pulse">Escuchando... Habla claramente.</p>
                                </div>
                              )}
                              
                              {transcript && spokenText === example && !isListening && (
                                <div className="mt-3">
                                  <h4 className="text-sm font-medium mb-1">Tu respuesta:</h4>
                                  <div className="p-2 bg-primary/5 border border-primary/20 rounded">
                                    {transcript}
                                  </div>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="write">
                    <div className="space-y-6">
                      <div className="p-6 bg-secondary/30 rounded-xl">
                        <h3 className="text-lg font-medium mb-4">Ejercicios de escritura</h3>
                        <p className="mb-4">Practica tu escritura completando los siguientes ejercicios:</p>
                        
                        <div className="p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg shadow-sm">
                          <div className="mb-4">
                            <h4 className="font-medium mb-2">Ejercicio {currentWritingIndex + 1} de {writingExercises.length}</h4>
                            <p className="mb-3">{writingExercises[currentWritingIndex].prompt}</p>
                            
                            <textarea
                              className="w-full p-3 border rounded-md min-h-[100px]"
                              placeholder="Escribe tu respuesta aquí..."
                              value={writtenAnswer}
                              onChange={(e) => setWrittenAnswer(e.target.value)}
                              disabled={writingSubmitted}
                            />
                          </div>
                          
                          {writingSubmitted ? (
                            <div className="flex justify-between">
                              <div className="p-3 rounded bg-secondary">
                                <p className="font-medium">Respuesta sugerida:</p>
                                <p>{writingExercises[currentWritingIndex].answer}</p>
                              </div>
                              
                              <Button
                                variant="secondary"
                                onClick={handleWritingNext}
                              >
                                {currentWritingIndex < writingExercises.length - 1 ? 'Siguiente ejercicio' : 'Finalizar'}
                              </Button>
                            </div>
                          ) : (
                            <Button
                              variant="secondary"
                              onClick={checkWritingAnswer}
                              disabled={!writtenAnswer.trim()}
                            >
                              Verificar respuesta
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
              
              <div className="mt-8 flex justify-end">
                <Button 
                  className="primary-button"
                  onClick={() => handleTabChange('practice')}
                >
                  Ir a la práctica
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </div>
            </div>
          ) : isCompleted ? (
            <div className="text-center max-w-md mx-auto py-10">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="text-emerald-500" size={32} />
              </div>
              <h2 className="text-2xl font-semibold mb-3">¡Lección completada!</h2>
              <p className="text-muted-foreground mb-8">
                Has terminado esta lección exitosamente. Sigue practicando para mejorar tu dominio del idioma.
              </p>
              <Button 
                className="primary-button"
                onClick={handleComplete}
              >
                Volver al módulo
              </Button>
            </div>
          ) : (
            <div className="max-w-2xl mx-auto">
              <div className="flex justify-between text-sm text-muted-foreground mb-6">
                <span>Pregunta {currentQuestionIndex + 1} de {content.practice.length}</span>
                <span>Selecciona la respuesta correcta</span>
              </div>
              
              <h3 className="text-xl font-medium mb-6">{currentQuestion.question}</h3>
              
              <div className="space-y-3 mb-8">
                {currentQuestion.options.map((option, index) => (
                  <button
                    key={index}
                    className={`w-full p-4 rounded-lg border text-left transition-all ${
                      selectedAnswers[currentQuestionIndex] === option
                        ? isAnswerCorrect
                          ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                          : 'border-red-500 bg-red-50 text-red-700'
                        : 'border-border hover:border-primary/30 hover:bg-primary/5'
                    }`}
                    onClick={() => handleAnswerSelect(option)}
                    disabled={isAnswerSelected}
                  >
                    <div className="flex items-center justify-between">
                      <span>{option}</span>
                      {selectedAnswers[currentQuestionIndex] === option && (
                        isAnswerCorrect 
                          ? <CheckCircle className="text-emerald-500" size={18} />
                          : <AlertCircle className="text-red-500" size={18} />
                      )}
                    </div>
                  </button>
                ))}
              </div>
              
              {isAnswerSelected && !isAnswerCorrect && (
                <div className="bg-secondary/50 p-4 rounded-lg mb-6">
                  <p className="font-medium">Respuesta correcta: {currentQuestion.correctAnswer}</p>
                </div>
              )}
              
              <div className="flex justify-between">
                <Button
                  variant="outline"
                  className="secondary-button"
                  onClick={handlePrevQuestion}
                  disabled={currentQuestionIndex === 0}
                >
                  <ArrowLeft className="mr-2" size={16} />
                  Anterior
                </Button>
                
                <Button
                  className="primary-button"
                  onClick={handleNextQuestion}
                  disabled={!isAnswerSelected}
                >
                  {currentQuestionIndex < content.practice.length - 1 ? (
                    <>
                      Siguiente
                      <ArrowRight className="ml-2" size={16} />
                    </>
                  ) : (
                    'Finalizar'
                  )}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LessonContent;
