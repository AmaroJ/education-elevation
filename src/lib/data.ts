import { ReactNode } from 'react';

export interface Module {
  id: string;
  title: string;
  description: string;
  topics: Topic[];
  progress?: number;
  image?: string;
  hours: number;
  level: 'Principiante' | 'Intermedio' | 'Avanzado';
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  type: 'lesson' | 'practice' | 'quiz' | 'story' | 'karaoke';
  completed?: boolean;
  duration: number; // in minutes
}

export interface LessonContent {
  title: string;
  content: string;
  examples: string[];
  videoUrl?: string;
  videoPoster?: string;
  videoCaption?: string;
  practiceQuestions?: PracticeQuestion[];
  quizQuestions?: QuizQuestion[];
  audioUrl?: string;
  exercises?: Exercise[];
  storyText?: string;
  storyAudio?: string;
  karaokeUrl?: string;
  karaokeLyrics?: string[];
}

export interface PracticeQuestion {
  question: string;
  options?: string[];
  correctAnswer: string;
  type: 'multichoice' | 'text' | 'audio' | 'speak';
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface Exercise {
  type: 'reading' | 'listening' | 'writing' | 'speaking' | 'pronunciation';
  content: string;
  answer?: string;
}

export const modules: Module[] = [
  {
    id: "basics",
    title: "Fundamentos del inglés",
    description: "Aprende los conceptos básicos del inglés: saludos, presentaciones, y frases cotidianas.",
    level: "Principiante",
    hours: 60,
    image: "/placeholder.svg",
    topics: [
      {
        id: "greetings",
        title: "Saludos y presentaciones",
        description: "Aprende a saludar y presentarte en inglés",
        type: "lesson",
        duration: 45,
      },
      {
        id: "alphabet",
        title: "El alfabeto inglés",
        description: "Aprende el alfabeto inglés y su pronunciación",
        type: "lesson",
        duration: 30,
      },
      {
        id: "numbers",
        title: "Números en inglés",
        description: "Aprende a contar en inglés",
        type: "lesson",
        duration: 45,
      },
      {
        id: "basic-verbs",
        title: "Verbos básicos",
        description: "Aprende los verbos más comunes en inglés",
        type: "lesson",
        duration: 60,
      },
      {
        id: "daily-expressions",
        title: "Expresiones cotidianas",
        description: "Frases útiles para el día a día",
        type: "practice",
        duration: 45,
      },
      {
        id: "basic-story",
        title: "Historia: Mi primer día en EE.UU.",
        description: "Lee y escucha una historia simple para principiantes",
        type: "story",
        duration: 30,
      },
      {
        id: "basic-karaoke",
        title: "Karaoke: 'Hello' de Adele",
        description: "Practica pronunciación cantando una canción popular",
        type: "karaoke",
        duration: 40,
      },
    ],
  },
  {
    id: "grammar",
    title: "Gramática esencial",
    description: "Domina los tiempos verbales, pronombres, y estructura de oraciones.",
    level: "Principiante",
    hours: 70,
    image: "/placeholder.svg",
    topics: [
      {
        id: "present-simple",
        title: "Presente simple",
        description: "Aprende a usar el presente simple",
        type: "lesson",
        duration: 60,
      },
      {
        id: "past-simple",
        title: "Pasado simple",
        description: "Aprende a usar el pasado simple",
        type: "lesson",
        duration: 60,
      },
      {
        id: "future-simple",
        title: "Futuro simple",
        description: "Aprende a usar el futuro simple",
        type: "lesson",
        duration: 60,
      },
      {
        id: "pronouns",
        title: "Pronombres personales",
        description: "Aprende a usar los pronombres personales",
        type: "lesson",
        duration: 45,
      },
      {
        id: "adjectives",
        title: "Adjetivos y comparativos",
        description: "Aprende a usar adjetivos y hacer comparaciones",
        type: "practice",
        duration: 60,
      },
      {
        id: "question-formation",
        title: "Formación de preguntas",
        description: "Aprende a hacer preguntas en inglés",
        type: "lesson",
        duration: 45,
      },
      {
        id: "grammar-quiz",
        title: "Quiz de gramática",
        description: "Pon a prueba tus conocimientos gramaticales",
        type: "quiz",
        duration: 30,
      },
      {
        id: "grammar-story",
        title: "Historia: 'El viaje inesperado'",
        description: "Lee y escucha una historia usando varios tiempos verbales",
        type: "story",
        duration: 45,
      },
      {
        id: "grammar-karaoke",
        title: "Karaoke: 'Perfect' de Ed Sheeran",
        description: "Practica gramática cantando una canción con estructuras variadas",
        type: "karaoke",
        duration: 40,
      },
    ],
  },
  {
    id: "conversation",
    title: "Conversación práctica",
    description: "Desarrolla fluidez en conversaciones sobre temas cotidianos.",
    level: "Intermedio",
    hours: 55,
    image: "/placeholder.svg",
    topics: [
      {
        id: "introductions",
        title: "Presentaciones extendidas",
        description: "Aprende a presentarte y hablar sobre ti mismo",
        type: "lesson",
        duration: 45,
      },
      {
        id: "ordering-food",
        title: "Ordenar comida en un restaurante",
        description: "Aprende vocabulario y frases útiles para restaurantes",
        type: "practice",
        duration: 60,
      },
      {
        id: "asking-directions",
        title: "Pedir y dar direcciones",
        description: "Aprende a orientarte en una ciudad",
        type: "lesson",
        duration: 60,
      },
      {
        id: "shopping",
        title: "De compras",
        description: "Vocabulario y expresiones para ir de compras",
        type: "practice",
        duration: 60,
      },
      {
        id: "talking-hobbies",
        title: "Hablar sobre hobbies",
        description: "Aprende a hablar sobre tus pasatiempos",
        type: "lesson",
        duration: 45,
      },
      {
        id: "conversation-quiz",
        title: "Quiz de conversación",
        description: "Pon a prueba tus habilidades conversacionales",
        type: "quiz",
        duration: 30,
      },
      {
        id: "conversation-story",
        title: "Historia: 'El malentendido'",
        description: "Lee y escucha una historia sobre un malentendido cultural",
        type: "story",
        duration: 45,
      },
      {
        id: "conversation-karaoke",
        title: "Karaoke: 'Imagine' de John Lennon",
        description: "Mejora tu pronunciación con esta canción clásica",
        type: "karaoke",
        duration: 35,
      },
    ],
  },
  {
    id: "vocabulary",
    title: "Expansión de vocabulario",
    description: "Amplía tu vocabulario con palabras y frases temáticas.",
    level: "Intermedio",
    hours: 45,
    image: "/placeholder.svg",
    topics: [
      {
        id: "family-terms",
        title: "Términos familiares",
        description: "Aprende vocabulario relacionado con la familia",
        type: "lesson",
        duration: 45,
      },
      {
        id: "work-vocabulary",
        title: "Vocabulario laboral",
        description: "Palabras y frases comunes en el entorno laboral",
        type: "lesson",
        duration: 60,
      },
      {
        id: "travel-terms",
        title: "Términos de viaje",
        description: "Vocabulario útil para viajeros",
        type: "practice",
        duration: 60,
      },
      {
        id: "food-drinks",
        title: "Comidas y bebidas",
        description: "Aprende nombres de alimentos y bebidas",
        type: "lesson",
        duration: 45,
      },
      {
        id: "health-vocabulary",
        title: "Vocabulario de salud",
        description: "Términos relacionados con la salud y el bienestar",
        type: "practice",
        duration: 60,
      },
      {
        id: "vocabulary-quiz",
        title: "Quiz de vocabulario",
        description: "Pon a prueba tu conocimiento de vocabulario",
        type: "quiz",
        duration: 30,
      },
      {
        id: "vocabulary-story",
        title: "Historia: 'La receta secreta'",
        description: "Lee y escucha una historia rica en vocabulario culinario",
        type: "story",
        duration: 40,
      },
      {
        id: "vocabulary-karaoke",
        title: "Karaoke: 'Shape of You' de Ed Sheeran",
        description: "Expande tu vocabulario con esta canción moderna",
        type: "karaoke",
        duration: 35,
      },
    ],
  },
  {
    id: "advanced",
    title: "Inglés avanzado",
    description: "Perfecciona tu inglés con temas complejos y sutilezas del idioma.",
    level: "Avanzado",
    hours: 90,
    image: "/placeholder.svg",
    topics: [
      {
        id: "conditionals",
        title: "Condicionales",
        description: "Domina todos los tipos de condicionales en inglés",
        type: "lesson",
        duration: 90,
      },
      {
        id: "reported-speech",
        title: "Estilo indirecto",
        description: "Aprende a usar el estilo indirecto",
        type: "lesson",
        duration: 60,
      },
      {
        id: "phrasal-verbs",
        title: "Verbos frasales",
        description: "Aprende los verbos frasales más comunes",
        type: "practice",
        duration: 90,
      },
      {
        id: "idioms",
        title: "Modismos y expresiones",
        description: "Expresiones idiomáticas frecuentes",
        type: "lesson",
        duration: 60,
      },
      {
        id: "complex-tenses",
        title: "Tiempos verbales complejos",
        description: "Present perfect, past perfect, future continuous, etc.",
        type: "practice",
        duration: 90,
      },
      {
        id: "academic-english",
        title: "Inglés académico",
        description: "Vocabulario y estructuras para entornos académicos",
        type: "lesson",
        duration: 60,
      },
      {
        id: "business-english",
        title: "Inglés de negocios",
        description: "Comunícate eficazmente en entornos empresariales",
        type: "practice",
        duration: 60,
      },
      {
        id: "advanced-quiz",
        title: "Quiz avanzado",
        description: "Pon a prueba tu nivel avanzado de inglés",
        type: "quiz",
        duration: 45,
      },
      {
        id: "advanced-story",
        title: "Historia: 'El dilema ético'",
        description: "Lee y escucha una historia compleja con vocabulario avanzado",
        type: "story",
        duration: 60,
      },
      {
        id: "advanced-karaoke",
        title: "Karaoke: 'Bohemian Rhapsody' de Queen",
        description: "Desafía tu pronunciación con esta legendaria canción",
        type: "karaoke",
        duration: 50,
      },
    ],
  },
  {
    id: "stories",
    title: "Historias en inglés",
    description: "Mejora tu comprensión a través de historias graduadas por nivel.",
    level: "Intermedio",
    hours: 40,
    image: "/placeholder.svg",
    topics: [
      {
        id: "beginner-stories",
        title: "Historias para principiantes",
        description: "Colección de historias cortas y simples",
        type: "story",
        duration: 120,
      },
      {
        id: "intermediate-stories",
        title: "Historias intermedias",
        description: "Historias con vocabulario y estructuras más complejas",
        type: "story",
        duration: 150,
      },
      {
        id: "advanced-stories",
        title: "Historias avanzadas",
        description: "Narrativas complejas con vocabulario rico",
        type: "story",
        duration: 180,
      },
      {
        id: "dialogues",
        title: "Diálogos cotidianos",
        description: "Conversaciones realistas en diversos contextos",
        type: "story",
        duration: 120,
      },
      {
        id: "cultural-stories",
        title: "Historias culturales",
        description: "Historias que exploran aspectos culturales de países de habla inglesa",
        type: "story",
        duration: 150,
      },
      {
        id: "story-comprehension",
        title: "Comprensión de historias",
        description: "Ejercicios para mejorar tu comprensión de historias",
        type: "practice",
        duration: 90,
      },
      {
        id: "storytelling",
        title: "Ejercicios de narración",
        description: "Practica contando tus propias historias",
        type: "practice",
        duration: 120,
      },
    ],
  },
  {
    id: "karaoke",
    title: "Karaoke en inglés",
    description: "Mejora tu pronunciación y fluidez cantando canciones populares.",
    level: "Principiante",
    hours: 35,
    image: "/placeholder.svg",
    topics: [
      {
        id: "pop-songs",
        title: "Canciones pop para principiantes",
        description: "Canciones pop con letras simples y repetitivas",
        type: "karaoke",
        duration: 120,
      },
      {
        id: "classic-rock",
        title: "Rock clásico",
        description: "Aprende inglés con legendarias canciones de rock",
        type: "karaoke",
        duration: 150,
      },
      {
        id: "folk-songs",
        title: "Canciones folk",
        description: "Canciones tradicionales con narrativas interesantes",
        type: "karaoke",
        duration: 120,
      },
      {
        id: "movie-soundtracks",
        title: "Bandas sonoras de películas",
        description: "Canciones famosas de películas populares",
        type: "karaoke",
        duration: 150,
      },
      {
        id: "modern-hits",
        title: "Éxitos modernos",
        description: "Las canciones más populares de los últimos años",
        type: "karaoke",
        duration: 180,
      },
      {
        id: "pronunciation-focus",
        title: "Enfoque en pronunciación",
        description: "Ejercicios específicos de pronunciación a través del canto",
        type: "practice",
        duration: 90,
      },
      {
        id: "rhythm-intonation",
        title: "Ritmo e entonación",
        description: "Mejora tu ritmo y entonación en inglés",
        type: "practice",
        duration: 90,
      },
    ],
  },
  {
    id: "professional",
    title: "Inglés profesional",
    description: "Prepárate para entornos laborales internacionales.",
    level: "Avanzado",
    hours: 50,
    image: "/placeholder.svg",
    topics: [
      {
        id: "job-interviews",
        title: "Entrevistas de trabajo",
        description: "Prepárate para entrevistas de trabajo en inglés",
        type: "lesson",
        duration: 90,
      },
      {
        id: "business-meetings",
        title: "Reuniones de negocios",
        description: "Vocabulario y frases para reuniones efectivas",
        type: "practice",
        duration: 60,
      },
      {
        id: "email-writing",
        title: "Redacción de emails",
        description: "Aprende a escribir emails profesionales",
        type: "lesson",
        duration: 60,
      },
      {
        id: "presentations",
        title: "Presentaciones",
        description: "Cómo hacer presentaciones efectivas en inglés",
        type: "practice",
        duration: 90,
      },
      {
        id: "negotiation-skills",
        title: "Habilidades de negociación",
        description: "Vocabulario y estrategias para negociaciones",
        type: "lesson",
        duration: 60,
      },
      {
        id: "telephone-english",
        title: "Inglés telefónico",
        description: "Comunicación efectiva por teléfono",
        type: "practice",
        duration: 60,
      },
      {
        id: "cv-resume",
        title: "CV y currículum",
        description: "Cómo crear un CV efectivo en inglés",
        type: "lesson",
        duration: 60,
      },
      {
        id: "professional-story",
        title: "Historia: 'El ascenso empresarial'",
        description: "Historia ambientada en un contexto profesional",
        type: "story",
        duration: 60,
      },
      {
        id: "professional-karaoke",
        title: "Karaoke: 'Working for the Weekend'",
        description: "Canción con temática laboral para practicar pronunciación",
        type: "karaoke",
        duration: 40,
      },
    ],
  },
];

export function getLessonContent(topicId: string): LessonContent {
  if (topicId === "greetings") {
    return {
      title: "Saludos y presentaciones",
      content: `<h1>Saludos y presentaciones</h1>
              <p>Aprende a saludar y presentarte en inglés.</p>
              <p>Aquí tienes algunos ejemplos:</p>
              <ul>
                  <li>Hello, my name is...</li>
                  <li>Hi, I'm...</li>
                  <li>Good morning/afternoon/evening</li>
              </ul>`,
      examples: ["Hello, my name is...", "Hi, I'm...", "Good morning"],
      videoUrl: "https://d2ki0aabc948rc.cloudfront.net/lessons/greetings-video.mp4",
      videoPoster: "https://example.com/images/greetings-poster.jpg",
      videoCaption: "Video explicativo sobre saludos"
    };
  }

  if (topicId === "alphabet") {
    return {
      title: "El alfabeto inglés",
      content: `<h1>El alfabeto inglés</h1>
              <p>Aprende el alfabeto inglés y su pronunciación.</p>
              <p>Aquí tienes el alfabeto:</p>
              <ul>
                  <li>A, B, C, D, E, F, G...</li>
              </ul>`,
      examples: ["A", "B", "C"],
      videoUrl: "https://d2ki0aabc948rc.cloudfront.net/lessons/alphabet-video.mp4",
      videoPoster: "https://example.com/images/alphabet-poster.jpg",
      videoCaption: "Video explicativo del alfabeto"
    };
  }

  if (topicId === "numbers") {
    return {
      title: "Números en inglés",
      content: `<h1>Números en inglés</h1>
              <p>Aprende a contar en inglés.</p>
              <p>Aquí tienes algunos números:</p>
              <ul>
                  <li>One, two, three, four, five...</li>
              </ul>`,
      examples: ["One", "Two", "Three"],
      videoUrl: "https://d2ki0aabc948rc.cloudfront.net/lessons/numbers-video.mp4",
      videoPoster: "https://example.com/images/numbers-poster.jpg",
      videoCaption: "Video explicativo de los números"
    };
  }

  if (topicId === "basic-verbs") {
    return {
      title: "Verbos básicos",
      content: `<h1>Verbos básicos</h1>
              <p>Aprende los verbos más comunes en inglés.</p>
              <p>Aquí tienes algunos verbos:</p>
              <ul>
                  <li>To be, to have, to do...</li>
              </ul>`,
      examples: ["To be", "To have", "To do"],
      videoUrl: "https://d2ki0aabc948rc.cloudfront.net/lessons/basic-verbs-video.mp4",
      videoPoster: "https://example.com/images/basic-verbs-poster.jpg",
      videoCaption: "Video explicativo de verbos básicos"
    };
  }

  if (topicId === "daily-expressions") {
    return {
      title: "Expresiones cotidianas",
      content: `<h1>Expresiones cotidianas</h1>
              <p>Frases útiles para el día a día.</p>
              <p>Aquí tienes algunas expresiones:</p>
              <ul>
                  <li>How are you?</li>
                  <li>What's up?</li>
                  <li>See you later</li>
              </ul>`,
      examples: ["How are you?", "What's up?", "See you later"],
      videoUrl: "https://d2ki0aabc948rc.cloudfront.net/lessons/daily-expressions-video.mp4",
      videoPoster: "https://example.com/images/daily-expressions-poster.jpg",
      videoCaption: "Video explicativo de expresiones cotidianas"
    };
  }
  
  if (topicId === "present-simple") {
    return {
      title: "Presente simple",
      content: `<h1>Presente simple</h1>
              <p>Aprende a usar el presente simple.</p>
              <p>Aquí tienes algunos ejemplos:</p>
              <ul>
                  <li>I eat breakfast every day.</li>
                  <li>She works at a bank.</li>
              </ul>`,
      examples: ["I eat breakfast every day.", "She works at a bank."],
      videoUrl: "https://d2ki0aabc948rc.cloudfront.net/lessons/present-simple-video.mp4",
      videoPoster: "https://example.com/images/present-simple-poster.jpg",
      videoCaption: "Video explicativo del presente simple"
    };
  }
  
  if (topicId === "past-simple") {
    return {
      title: "Pasado simple",
      content: `<h1>Pasado simple</h1>
              <p>Aprende a usar el pasado simple.</p>
              <p>Aquí tienes algunos ejemplos:</p>
              <ul>
                  <li>I visited Paris last year.</li>
                  <li>They watched a movie yesterday.</li>
              </ul>`,
      examples: ["I visited Paris last year.", "They watched a movie yesterday."],
      videoUrl: "https://d2ki0aabc948rc.cloudfront.net/lessons/past-simple-video.mp4",
      videoPoster: "https://example.com/images/past-simple-poster.jpg",
      videoCaption: "Video explicativo del pasado simple"
    };
  }
  
  if (topicId === "future-simple") {
    return {
      title: "Futuro simple",
      content: `<h1>Futuro simple</h1>
              <p>Aprende a usar el futuro simple.</p>
              <p>Aquí tienes algunos ejemplos:</p>
              <ul>
                  <li>I will travel to Japan next month.</li>
                  <li>She will start a new job soon.</li>
              </ul>`,
      examples: ["I will travel to Japan next month.", "She will start a new job soon."],
      videoUrl: "https://d2ki0aabc948rc.cloudfront.net/lessons/future-simple-video.mp4",
      videoPoster: "https://example.com/images/future-simple-poster.jpg",
      videoCaption: "Video explicativo del futuro simple"
    };
  }
  
  if (topicId === "pronouns") {
    return {
      title: "Pronombres personales",
      content: `<h1>Pronombres personales</h1>
              <p>Aprende a usar los pronombres personales.</p>
              <p>Aquí tienes algunos ejemplos:</p>
              <ul>
                  <li>I, you, he, she, it, we, they</li>
              </ul>`,
      examples: ["I", "You", "He"],
      videoUrl: "https://d2ki0aabc948rc.cloudfront.net/lessons/pronouns-video.mp4",
      videoPoster: "https://example.com/images/pronouns-poster.jpg",
      videoCaption: "Video explicativo de los pronombres personales"
    };
  }
  
  if (topicId === "adjectives") {
    return {
      title: "Adjetivos y comparativos",
      content: `<h1>Adjetivos y comparativos</h1>
              <p>Aprende a usar adjetivos y hacer comparaciones.</p>
              <p>Aquí tienes algunos ejemplos:</p>
              <ul>
                  <li>Big, bigger, biggest</li>
                  <li>Small, smaller, smallest</li>
              </ul>`,
      examples: ["Big", "Bigger", "Biggest"],
      videoUrl: "https://d2ki0aabc948rc.cloudfront.net/lessons/adjectives-video.mp4",
      videoPoster: "https://example.com/images/adjectives-poster.jpg",
      videoCaption: "Video explicativo de adjetivos y comparativos"
    };
  }
  
  if (topicId === "question-formation") {
    return {
      title: "Formación de preguntas",
      content: `<h1>Formación de preguntas</h1>
              <p>Aprende a hacer preguntas en inglés.</p>
              <p>Aquí tienes algunos ejemplos:</p>
              <ul>
                  <li>What is your name?</li>
                  <li>Where do you live?</li>
              </ul>`,
      examples: ["What is your name?", "Where do you live?"],
      videoUrl: "https://d2ki0aabc948rc.cloudfront.net/lessons/question-formation-video.mp4",
      videoPoster: "https://example.com/images/question-formation-poster.jpg",
      videoCaption: "Video explicativo de la formación de preguntas"
    };
  }
  
  if (topicId === "grammar-quiz") {
    return {
      title: "Quiz de gramática",
      content: `<h1>Quiz de gramática</h1>
              <p>Pon a prueba tus conocimientos gramaticales.</p>
              <p>Responde las siguientes preguntas:</p>
              <ul>
                  <li>Pregunta 1: ...</li>
                  <li>Pregunta 2: ...</li>
              </ul>`,
      examples: ["Pregunta 1", "Pregunta 2"],
      videoUrl: "https://d2ki0aabc948rc.cloudfront.net/lessons/grammar-quiz-video.mp4",
      videoPoster: "https://example.com/images/grammar-quiz-poster.jpg",
      videoCaption: "Video explicativo del quiz de gramática"
    };
  }
  
  if (topicId === "introductions") {
    return {
      title: "Presentaciones extendidas",
      content: `<h1>Presentaciones extendidas</h1>
              <p>Aprende a presentarte y hablar sobre ti mismo.</p>
              <p>Aquí tienes algunos ejemplos:</p>
              <ul>
                  <li>My name is ..., and I am from...</li>
                  <li>I work as a ..., and I enjoy...</li>
              </ul>`,
      examples: ["My name is ..., and I am from...", "I work as a ..., and I enjoy..."],
      videoUrl: "https://d2ki0aabc948rc.cloudfront.net/lessons/introductions-video.mp4",
      videoPoster: "https://example.com/images/introductions-poster.jpg",
      videoCaption: "Video explicativo de presentaciones extendidas"
    };
  }
  
  if (topicId === "ordering-food") {
    return {
      title: "Ordenar comida en un restaurante",
      content: `<h1>Ordenar comida en un restaurante</h1>
              <p>Aprende vocabulario y frases útiles para restaurantes.</p>
              <p>Aquí tienes algunos ejemplos:</p>
              <ul>
                  <li>I would like to order...</li>
                  <li>Can I have the menu, please?</li>
              </ul>`,
      examples: ["I would like to order...", "Can I have the menu, please?"],
      videoUrl: "https://d2ki0aabc948rc.cloudfront.net/lessons/ordering-food-video.mp4",
      videoPoster: "https://example.com/images/ordering-food-poster.jpg",
      videoCaption: "Video explicativo de cómo ordenar comida"
    };
  }
  
  if (topicId === "asking-directions") {
    return {
      title: "Pedir y dar direcciones",
      content: `<h1>Pedir y dar direcciones</h1>
              <p>Aprende a orientarte en una ciudad.</p>
              <p>Aquí tienes algunos ejemplos:</p>
              <ul>
                  <li>Excuse me, how do I get to...?</li>
                  <li>Go straight and turn left.</li>
              </ul>`,
      examples: ["Excuse me, how do I get to...?", "Go straight and turn left."],
      videoUrl: "https://d2ki0aabc948rc.cloudfront.net/lessons/asking-directions-video.mp4",
      videoPoster: "https://example.com/images/asking-directions-poster.jpg",
      videoCaption: "Video explicativo de cómo pedir direcciones"
    };
  }
  
  if (topicId === "shopping") {
    return {
      title: "De compras",
      content: `<h1>De compras</h1>
              <p>Vocabulario y expresiones para ir de compras.</p>
              <p>Aquí tienes algunos ejemplos:</p>
              <ul>
                  <li>How much does this cost?</li>
                  <li>I'm just looking, thank you.</li>
              </ul>`,
      examples: ["How much does this cost?", "I'm just looking, thank you."],
      videoUrl: "https://d2ki0aabc948rc.cloudfront.net/lessons/shopping-video.mp4",
      videoPoster: "https://example.com/images/shopping-poster.jpg",
      videoCaption: "Video explicativo de cómo ir de compras"
    };
  }
  
  if (topicId === "talking-hobbies") {
    return {
      title: "Hablar sobre hobbies",
      content: `<h1>Hablar sobre hobbies</h1>
              <p>Aprende a hablar sobre tus pasatiempos.</p>
              <p>Aquí tienes algunos ejemplos:</p>
              <ul>
                  <li>I enjoy playing soccer.</li>
                  <li>My hobby is reading books.</li>
              </ul>`,
      examples: ["I enjoy playing soccer.", "My hobby is reading books."],
      videoUrl: "https://d2ki0aabc948rc.cloudfront.net/lessons/talking-hobbies-video.mp4",
      videoPoster: "https://example.com/images/talking-hobbies-poster.jpg",
      videoCaption: "Video explicativo de cómo hablar sobre hobbies"
    };
  }
  
  if (topicId === "conversation-quiz") {
    return {
      title: "Quiz de conversación",
      content: `<h1>Quiz de conversación</h1>
              <p>Pon a prueba tus habilidades conversacionales.</p>
              <p>Responde las siguientes preguntas:</p>
              <ul>
                  <li>Pregunta 1: ...</li>
                  <li>Pregunta 2: ...</li>
              </ul>`,
      examples: ["Pregunta 1", "Pregunta 2"],
      videoUrl: "https://d2ki0aabc948rc.cloudfront.net/lessons/conversation-quiz-video.mp4",
      videoPoster: "https://example.com/images/conversation-quiz-poster.jpg",
      videoCaption: "Video explicativo del quiz de conversación"
    };
  }
  
  if (topicId === "family-terms") {
    return {
      title: "Términos familiares",
      content: `<h1>Términos familiares</h1>
              <p>Aprende vocabulario relacionado con la familia.</p>
              <p>Aquí tienes algunos ejemplos:</p>
              <ul>
                  <li>Mother, father, brother, sister</li>
              </ul>`,
      examples: ["Mother", "Father", "Brother"],
      videoUrl: "https://d2ki0aabc948rc.cloudfront.net/lessons/family-terms-video.mp4",
      videoPoster: "https://example.com/images/family-terms-poster.jpg",
