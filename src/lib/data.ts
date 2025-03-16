
export interface Topic {
  id: string;
  title: string;
  description: string;
  duration: string;
  completed: boolean;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  image: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  topics: Topic[];
  progress: number;
}

export interface LessonContent {
  title: string;
  content: string;
  examples: string[];
  practice: {
    question: string;
    options: string[];
    correctAnswer: string;
  }[];
}

export interface UserProgress {
  completedModules: string[];
  completedTopics: string[];
  totalScore: number;
  streak: number;
  lastActivity: string;
}

export const modules: Module[] = [
  {
    id: 'basic-conversation',
    title: 'Conversación Básica',
    description: 'Aprende las frases y vocabulario esencial para mantener conversaciones cotidianas.',
    image: '/conversation.svg',
    level: 'Beginner',
    topics: [
      {
        id: 'greetings',
        title: 'Saludos y Presentaciones',
        description: 'Aprende a saludar y presentarte en inglés',
        duration: '10 min',
        completed: false
      },
      {
        id: 'introductions',
        title: 'Conversaciones Iniciales',
        description: 'Cómo iniciar y mantener conversaciones sencillas',
        duration: '15 min',
        completed: false
      },
      {
        id: 'daily-phrases',
        title: 'Frases Cotidianas',
        description: 'Expresiones comunes para el día a día',
        duration: '12 min',
        completed: false
      },
      {
        id: 'asking-questions',
        title: 'Hacer Preguntas',
        description: 'Estructura y práctica de preguntas básicas',
        duration: '15 min',
        completed: false
      },
      {
        id: 'small-talk',
        title: 'Charla Casual',
        description: 'Temas y frases para conversaciones informales',
        duration: '10 min',
        completed: false
      }
    ],
    progress: 0
  },
  {
    id: 'grammar-essentials',
    title: 'Gramática Esencial',
    description: 'Domina las estructuras gramaticales fundamentales para comunicarte correctamente.',
    image: '/grammar.svg',
    level: 'Beginner',
    topics: [
      {
        id: 'present-simple',
        title: 'Presente Simple',
        description: 'Estructura y usos del presente simple',
        duration: '15 min',
        completed: false
      },
      {
        id: 'present-continuous',
        title: 'Presente Continuo',
        description: 'Cuándo y cómo usar el presente continuo',
        duration: '15 min',
        completed: false
      },
      {
        id: 'past-simple',
        title: 'Pasado Simple',
        description: 'Verbos regulares e irregulares en pasado',
        duration: '20 min',
        completed: false
      },
      {
        id: 'future-tenses',
        title: 'Tiempos Futuros',
        description: 'Will, going to y presente continuo para futuro',
        duration: '18 min',
        completed: false
      },
      {
        id: 'modal-verbs',
        title: 'Verbos Modales',
        description: 'Can, should, must y otros verbos modales',
        duration: '15 min',
        completed: false
      },
      {
        id: 'conditionals',
        title: 'Condicionales',
        description: 'Los tres tipos principales de condicionales',
        duration: '22 min',
        completed: false
      }
    ],
    progress: 0
  },
  {
    id: 'vocabulary-building',
    title: 'Ampliación de Vocabulario',
    description: 'Expande tu léxico con palabras y frases ordenadas por temas y contextos.',
    image: '/vocabulary.svg',
    level: 'Intermediate',
    topics: [
      {
        id: 'food-drinks',
        title: 'Comida y Bebida',
        description: 'Vocabulario de alimentos, restaurantes y cocina',
        duration: '12 min',
        completed: false
      },
      {
        id: 'travel-tourism',
        title: 'Viajes y Turismo',
        description: 'Términos útiles para viajeros y turistas',
        duration: '15 min',
        completed: false
      },
      {
        id: 'work-office',
        title: 'Trabajo y Oficina',
        description: 'Vocabulario profesional y del entorno laboral',
        duration: '14 min',
        completed: false
      },
      {
        id: 'health-wellness',
        title: 'Salud y Bienestar',
        description: 'Términos médicos y de bienestar personal',
        duration: '12 min',
        completed: false
      },
      {
        id: 'technology',
        title: 'Tecnología',
        description: 'Vocabulario digital y tecnológico moderno',
        duration: '10 min',
        completed: false
      },
      {
        id: 'arts-entertainment',
        title: 'Arte y Entretenimiento',
        description: 'Términos de cultura, arte y entretenimiento',
        duration: '12 min',
        completed: false
      },
      {
        id: 'nature-environment',
        title: 'Naturaleza y Medio Ambiente',
        description: 'Vocabulario ecológico y de la naturaleza',
        duration: '10 min',
        completed: false
      }
    ],
    progress: 0
  },
  {
    id: 'pronunciation',
    title: 'Pronunciación Perfecta',
    description: 'Técnicas y ejercicios para mejorar tu acento y fluidez al hablar inglés.',
    image: '/pronunciation.svg',
    level: 'Intermediate',
    topics: [
      {
        id: 'vowel-sounds',
        title: 'Sonidos Vocálicos',
        description: 'Las 20 vocales del inglés y cómo pronunciarlas',
        duration: '15 min',
        completed: false
      },
      {
        id: 'consonant-sounds',
        title: 'Sonidos Consonánticos',
        description: 'Consonantes difíciles del inglés',
        duration: '15 min',
        completed: false
      },
      {
        id: 'word-stress',
        title: 'Acentuación de Palabras',
        description: 'Reglas de acentuación en palabras en inglés',
        duration: '12 min',
        completed: false
      },
      {
        id: 'sentence-rhythm',
        title: 'Ritmo y Entonación',
        description: 'El ritmo natural del inglés hablado',
        duration: '14 min',
        completed: false
      },
      {
        id: 'linking-words',
        title: 'Conexión de Palabras',
        description: 'Cómo unir palabras para sonar más natural',
        duration: '10 min',
        completed: false
      },
      {
        id: 'reduction',
        title: 'Reducción y Contracciones',
        description: 'Reducir sonidos como los nativos',
        duration: '12 min',
        completed: false
      }
    ],
    progress: 0
  },
  {
    id: 'business-english',
    title: 'Inglés para Negocios',
    description: 'Comunicación efectiva en entornos profesionales y empresariales.',
    image: '/business.svg',
    level: 'Advanced',
    topics: [
      {
        id: 'business-meetings',
        title: 'Reuniones de Negocios',
        description: 'Vocabulario y frases para reuniones efectivas',
        duration: '18 min',
        completed: false
      },
      {
        id: 'presentations',
        title: 'Presentaciones',
        description: 'Estructura y lenguaje para presentaciones impactantes',
        duration: '20 min',
        completed: false
      },
      {
        id: 'negotiation',
        title: 'Negociación',
        description: 'Técnicas y frases para negociar en inglés',
        duration: '18 min',
        completed: false
      },
      {
        id: 'business-writing',
        title: 'Escritura Empresarial',
        description: 'Emails, informes y documentos profesionales',
        duration: '22 min',
        completed: false
      },
      {
        id: 'professional-networking',
        title: 'Networking Profesional',
        description: 'Cómo establecer contactos profesionales',
        duration: '15 min',
        completed: false
      },
      {
        id: 'job-interviews',
        title: 'Entrevistas de Trabajo',
        description: 'Preparación y frases para destacar en entrevistas',
        duration: '25 min',
        completed: false
      },
      {
        id: 'teleconferences',
        title: 'Teleconferencias',
        description: 'Comunicación efectiva en reuniones virtuales',
        duration: '15 min',
        completed: false
      }
    ],
    progress: 0
  },
  {
    id: 'cultural-insights',
    title: 'Aspectos Culturales',
    description: 'Comprende las diferencias culturales para comunicarte de manera más efectiva.',
    image: '/culture.svg',
    level: 'Advanced',
    topics: [
      {
        id: 'american-culture',
        title: 'Cultura Estadounidense',
        description: 'Costumbres y particularidades culturales de EE.UU.',
        duration: '15 min',
        completed: false
      },
      {
        id: 'british-culture',
        title: 'Cultura Británica',
        description: 'Tradiciones y aspectos culturales del Reino Unido',
        duration: '15 min',
        completed: false
      },
      {
        id: 'idioms-slang',
        title: 'Modismos y Jerga',
        description: 'Expresiones coloquiales y su significado',
        duration: '18 min',
        completed: false
      },
      {
        id: 'humor-jokes',
        title: 'Humor y Chistes',
        description: 'Entendiendo el sentido del humor en inglés',
        duration: '12 min',
        completed: false
      },
      {
        id: 'english-media',
        title: 'Medios de Comunicación',
        description: 'TV, música y cine como herramientas de aprendizaje',
        duration: '15 min',
        completed: false
      },
      {
        id: 'taboos-etiquette',
        title: 'Tabúes y Etiqueta',
        description: 'Qué hacer y no hacer en entornos anglófonos',
        duration: '15 min',
        completed: false
      }
    ],
    progress: 0
  }
];

export const userProgress: UserProgress = {
  completedModules: [],
  completedTopics: [],
  totalScore: 0,
  streak: 1,
  lastActivity: new Date().toISOString()
};

export const getLessonContent = (topicId: string): LessonContent => {
  // This would normally come from an API
  // For now we'll just provide some sample content based on the topic ID
  
  const sampleLessons: Record<string, LessonContent> = {
    'greetings': {
      title: 'Saludos y Presentaciones',
      content: `
        <h2>Los saludos en inglés</h2>
        <p>Los saludos son la forma más básica de iniciar una conversación en cualquier idioma. En inglés, tenemos diferentes saludos dependiendo del momento del día y del nivel de formalidad.</p>
        
        <h3>Saludos informales</h3>
        <ul>
          <li><strong>Hi</strong> - Hola</li>
          <li><strong>Hey</strong> - Ey</li>
          <li><strong>What's up?</strong> - ¿Qué tal?</li>
          <li><strong>How's it going?</strong> - ¿Cómo va todo?</li>
        </ul>
        
        <h3>Saludos formales</h3>
        <ul>
          <li><strong>Good morning</strong> - Buenos días (hasta mediodía)</li>
          <li><strong>Good afternoon</strong> - Buenas tardes (después de mediodía)</li>
          <li><strong>Good evening</strong> - Buenas noches (al anochecer)</li>
          <li><strong>How do you do?</strong> - Encantado/a (muy formal)</li>
        </ul>
        
        <h3>Presentándote</h3>
        <p>Para presentarte, puedes usar estas frases:</p>
        <ul>
          <li><strong>My name is [nombre]</strong> - Mi nombre es [nombre]</li>
          <li><strong>I'm [nombre]</strong> - Soy [nombre]</li>
          <li><strong>Nice to meet you</strong> - Encantado/a de conocerte</li>
          <li><strong>Pleased to meet you</strong> - Un placer conocerte</li>
        </ul>
      `,
      examples: [
        "Hi, I'm John. Nice to meet you.",
        "Good morning! How are you today?",
        "Hey Sarah, what's up?",
        "Good evening, my name is David. I'm pleased to meet you."
      ],
      practice: [
        {
          question: "¿Cómo saludarías a alguien formalmente por la mañana?",
          options: ["Hi!", "Good morning", "What's up?", "Hey there"],
          correctAnswer: "Good morning"
        },
        {
          question: "¿Cuál de estas expresiones se usa para presentarte?",
          options: ["How are you?", "See you later", "My name is...", "Good night"],
          correctAnswer: "My name is..."
        },
        {
          question: "Es la primera vez que conoces a alguien, ¿qué dirías después de presentarte?",
          options: ["Goodbye", "Nice to meet you", "See you tomorrow", "I'm busy"],
          correctAnswer: "Nice to meet you"
        }
      ]
    },
    'present-simple': {
      title: 'Presente Simple',
      content: `
        <h2>El Presente Simple en inglés</h2>
        <p>El presente simple es un tiempo verbal que usamos para hablar de hábitos, rutinas, hechos generales y verdades absolutas.</p>
        
        <h3>Estructura básica</h3>
        <p>Para la mayoría de los verbos, la forma es la misma que el infinitivo sin 'to':</p>
        <ul>
          <li><strong>I play</strong> tennis every weekend. - Juego al tenis todos los fines de semana.</li>
          <li><strong>You work</strong> in a bank. - Trabajas en un banco.</li>
          <li><strong>We study</strong> English. - Estudiamos inglés.</li>
        </ul>
        
        <h3>Tercera persona del singular</h3>
        <p>Para he/she/it (él/ella/eso), añadimos -s al final del verbo:</p>
        <ul>
          <li><strong>He plays</strong> tennis every weekend. - Él juega al tenis todos los fines de semana.</li>
          <li><strong>She works</strong> in a bank. - Ella trabaja en un banco.</li>
          <li><strong>It costs</strong> five dollars. - Cuesta cinco dólares.</li>
        </ul>
        
        <h3>Reglas especiales para añadir -s</h3>
        <ul>
          <li>Para verbos que terminan en -o, -ch, -sh, -ss, -x, añadimos -es: <strong>go → goes</strong>, <strong>watch → watches</strong></li>
          <li>Para verbos que terminan en consonante + y, cambiamos la y por i y añadimos -es: <strong>study → studies</strong></li>
        </ul>
      `,
      examples: [
        "I work in a hospital. (Trabajo en un hospital)",
        "She works in a hospital. (Ella trabaja en un hospital)",
        "They don't live in Madrid. (Ellos no viven en Madrid)",
        "Does he speak English? (¿Habla él inglés?)"
      ],
      practice: [
        {
          question: "Complete la oración: 'He ___ (go) to the gym every day.'",
          options: ["go", "goes", "going", "goed"],
          correctAnswer: "goes"
        },
        {
          question: "¿Cuál es la forma negativa de 'I play tennis'?",
          options: ["I not play tennis", "I don't play tennis", "I doesn't play tennis", "I am not play tennis"],
          correctAnswer: "I don't play tennis"
        },
        {
          question: "Complete la pregunta: '___ she ___ (study) French?'",
          options: ["Do, study", "Does, study", "Does, studies", "Do, studies"],
          correctAnswer: "Does, study"
        }
      ]
    }
  };
  
  // Return the requested lesson content or a default template
  return sampleLessons[topicId] || {
    title: "Contenido de la lección",
    content: "<p>Contenido de la lección no encontrado. Estamos trabajando en ello.</p>",
    examples: ["Ejemplo no disponible"],
    practice: [
      {
        question: "Pregunta de práctica",
        options: ["Opción 1", "Opción 2", "Opción 3", "Opción 4"],
        correctAnswer: "Opción 1"
      }
    ]
  };
};
