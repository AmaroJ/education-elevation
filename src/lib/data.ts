import { PracticeQuestion } from '@/types/practice';

export interface Topic {
  id: string;
  title: string;
  description: string;
  type: 'lesson' | 'story' | 'karaoke' | 'practice' | 'grammar' | 'vocabulary' | 'pronunciation';
  icon?: string;
  completed?: boolean;
  duration?: number; // Duration in minutes
}

export interface Module {
  id: string;
  title: string;
  description: string;
  image: string;
  topics: Topic[];
  progress?: number;
  level?: string; // Beginner, Intermediate, Advanced
}

export interface LessonContent {
  title: string;
  content: string;
  examples: string[];
  practice: PracticeQuestion[];
  videoUrl?: string;
  videoPoster?: string;
  videoCaption?: string;
  storyText?: string;
  storyAudio?: string;
  karaokeUrl?: string;
  karaokeLyrics?: string[];
}

export interface UserProgress {
  modules: {
    [moduleId: string]: {
      progress: number;
      topics: {
        [topicId: string]: {
          completed: boolean;
          score?: number;
        };
      };
    };
  };
  totalHours: number;
  totalCompletedHours: number;
  completedTopics: number;
  totalScore: number;
  streak: number;
}

export const userProgress: UserProgress = {
  modules: {
    basics: {
      progress: 30,
      topics: {
        greetings: {
          completed: true,
          score: 85
        },
        numbers: {
          completed: true,
          score: 90
        },
        colors: {
          completed: false
        }
      }
    },
    'daily-life': {
      progress: 10,
      topics: {
        family: {
          completed: true,
          score: 75
        },
        food: {
          completed: false
        }
      }
    }
  },
  totalHours: 320,
  totalCompletedHours: 28,
  completedTopics: 3,
  totalScore: 250,
  streak: 5
};

export const modules: Module[] = [
  {
    id: 'basics',
    title: 'Fundamentos del Inglés',
    description: 'Aprende los conceptos básicos para comenzar a comunicarte en inglés.',
    image: '/images/modules/basics.jpg',
    progress: 30,
    level: 'Beginner',
    topics: [
      {
        id: 'greetings',
        title: 'Saludos y Presentaciones',
        description: 'Aprende a saludar y presentarte en inglés',
        type: 'lesson',
        completed: true,
        duration: 15
      },
      {
        id: 'numbers',
        title: 'Números y Contar',
        description: 'Aprende los números en inglés y cómo contar',
        type: 'lesson',
        completed: true,
        duration: 20
      },
      {
        id: 'colors',
        title: 'Colores',
        description: 'Vocabulario de colores y descripciones',
        type: 'lesson',
        duration: 15
      },
      {
        id: 'alphabet',
        title: 'El Alfabeto',
        description: 'Aprende el alfabeto y la fonética básica',
        type: 'pronunciation',
        duration: 20
      },
      {
        id: 'little-red',
        title: 'Caperucita Roja',
        description: 'Lectura simplificada con vocabulario básico',
        type: 'story',
        duration: 25
      }
    ]
  },
  {
    id: 'daily-life',
    title: 'Inglés para la Vida Diaria',
    description: 'Vocabulario y frases para situaciones cotidianas.',
    image: '/images/modules/daily-life.jpg',
    progress: 10,
    level: 'Beginner',
    topics: [
      {
        id: 'family',
        title: 'Familia y Relaciones',
        description: 'Vocabulario sobre la familia y relaciones personales',
        type: 'vocabulary',
        completed: true,
        duration: 25
      },
      {
        id: 'food',
        title: 'Comida y Restaurantes',
        description: 'Cómo pedir comida y hablar sobre alimentos',
        type: 'lesson',
        duration: 30
      },
      {
        id: 'shopping',
        title: 'Compras',
        description: 'Vocabulario para ir de compras',
        type: 'lesson',
        duration: 20
      },
      {
        id: 'basic-verbs',
        title: 'Verbos Básicos',
        description: 'Verbos más usados en situaciones cotidianas',
        type: 'grammar',
        duration: 35
      },
      {
        id: 'hello-song',
        title: 'Canción: "Hello"',
        description: 'Aprende inglés con esta canción popular',
        type: 'karaoke',
        duration: 15
      }
    ]
  },
  {
    id: 'travel',
    title: 'Inglés para Viajar',
    description: 'Prepárate para comunicarte durante tus viajes.',
    image: '/images/modules/travel.jpg',
    level: 'Intermediate',
    topics: [
      {
        id: 'airport',
        title: 'En el Aeropuerto',
        description: 'Vocabulario y frases útiles para el aeropuerto',
        type: 'lesson',
        duration: 25
      },
      {
        id: 'hotel',
        title: 'Reservar Hotel',
        description: 'Cómo hacer reservaciones y pedir servicios',
        type: 'lesson',
        duration: 20
      },
      {
        id: 'directions',
        title: 'Pedir Direcciones',
        description: 'Cómo orientarte y pedir indicaciones',
        type: 'lesson',
        duration: 25
      },
      {
        id: 'past-tense',
        title: 'Tiempo Pasado',
        description: 'Uso de verbos en pasado para narrar experiencias',
        type: 'grammar',
        duration: 40
      },
      {
        id: 'travel-story',
        title: 'Una Aventura en Londres',
        description: 'Historia corta sobre un viaje a Londres',
        type: 'story',
        duration: 30
      }
    ]
  },
  {
    id: 'grammar',
    title: 'Gramática y Estructura',
    description: 'Domina las reglas gramaticales y estructuras del inglés.',
    image: '/images/modules/grammar.jpg',
    level: 'Intermediate',
    topics: [
      {
        id: 'present-tense',
        title: 'Presente Simple',
        description: 'Formación y uso del presente simple',
        type: 'grammar',
        duration: 30
      },
      {
        id: 'present-continuous',
        title: 'Presente Continuo',
        description: 'Formación y uso del presente continuo',
        type: 'grammar',
        duration: 25
      },
      {
        id: 'pronouns',
        title: 'Pronombres',
        description: 'Tipos y usos de pronombres en inglés',
        type: 'grammar',
        duration: 25
      },
      {
        id: 'adjectives',
        title: 'Adjetivos',
        description: 'Uso y posición de adjetivos en inglés',
        type: 'vocabulary',
        duration: 20
      },
      {
        id: 'articles',
        title: 'Artículos',
        description: 'Uso correcto de a, an, the',
        type: 'grammar',
        duration: 25
      }
    ]
  },
  {
    id: 'advanced',
    title: 'Inglés Avanzado',
    description: 'Perfecciona tu inglés con temas y vocabulario avanzado.',
    image: '/images/modules/advanced.jpg',
    level: 'Advanced',
    topics: [
      {
        id: 'conditionals',
        title: 'Oraciones Condicionales',
        description: 'Los diferentes tipos de condicionales y su uso',
        type: 'grammar',
        duration: 45
      },
      {
        id: 'idioms',
        title: 'Modismos y Expresiones',
        description: 'Frases idiomáticas comunes en inglés',
        type: 'vocabulary',
        duration: 30
      },
      {
        id: 'passive-voice',
        title: 'Voz Pasiva',
        description: 'Construcción y uso de la voz pasiva',
        type: 'grammar',
        duration: 35
      },
      {
        id: 'phrasal-verbs',
        title: 'Phrasal Verbs',
        description: 'Verbos con partículas y su significado',
        type: 'vocabulary',
        duration: 40
      },
      {
        id: 'debate',
        title: 'Argumentación y Debate',
        description: 'Cómo expresar opiniones y debatir en inglés',
        type: 'practice',
        duration: 60
      }
    ]
  },
  {
    id: 'business',
    title: 'Inglés de Negocios',
    description: 'Comunícate efectivamente en entornos profesionales y comerciales.',
    image: '/images/modules/business.jpg',
    level: 'Advanced',
    topics: [
      {
        id: 'job-interview',
        title: 'Entrevista de Trabajo',
        description: 'Preparación y frases clave para entrevistas laborales',
        type: 'lesson',
        duration: 40
      },
      {
        id: 'business-email',
        title: 'Correos Electrónicos',
        description: 'Cómo escribir correos profesionales en inglés',
        type: 'lesson',
        duration: 30
      },
      {
        id: 'presentations',
        title: 'Presentaciones',
        description: 'Cómo realizar presentaciones efectivas en inglés',
        type: 'practice',
        duration: 45
      },
      {
        id: 'negotiation',
        title: 'Negociación',
        description: 'Términos y estrategias para negociar en inglés',
        type: 'vocabulary',
        duration: 35
      },
      {
        id: 'formal-writing',
        title: 'Escritura Formal',
        description: 'Reglas y estilo para documentos formales',
        type: 'lesson',
        duration: 40
      }
    ]
  },
  {
    id: 'academic',
    title: 'Inglés Académico',
    description: 'Desarrolla habilidades para estudios y publicaciones académicas.',
    image: '/images/modules/academic.jpg',
    level: 'Advanced',
    topics: [
      {
        id: 'research-vocabulary',
        title: 'Vocabulario de Investigación',
        description: 'Términos comunes en textos académicos',
        type: 'vocabulary',
        duration: 35
      },
      {
        id: 'essay-writing',
        title: 'Redacción de Ensayos',
        description: 'Estructura y estilo para ensayos académicos',
        type: 'lesson',
        duration: 50
      },
      {
        id: 'citations',
        title: 'Citas y Referencias',
        description: 'Cómo citar fuentes en trabajos académicos',
        type: 'lesson',
        duration: 30
      },
      {
        id: 'academic-reading',
        title: 'Lectura Académica',
        description: 'Estrategias para la comprensión de textos académicos',
        type: 'practice',
        duration: 45
      },
      {
        id: 'scientific-presentation',
        title: 'Presentación Científica',
        description: 'Cómo presentar investigaciones en inglés',
        type: 'practice',
        duration: 55
      }
    ]
  }
];

export const getLessonContent = (topicId: string): LessonContent => {
  const defaultContent: LessonContent = {
    title: 'Lección no encontrada',
    content: '<p>Lo sentimos, el contenido de esta lección no está disponible.</p>',
    examples: [],
    practice: []
  };

  switch (topicId) {
    case 'greetings':
      return {
        title: 'Saludos y Presentaciones',
        content: `
          <h2>Saludos básicos en inglés</h2>
          <p>Aprender a saludar es el primer paso para comunicarte en inglés. Aquí tienes los saludos más comunes:</p>
          <ul>
            <li><strong>Hello</strong> - Hola (formal/informal)</li>
            <li><strong>Hi</strong> - Hola (informal)</li>
            <li><strong>Good morning</strong> - Buenos días</li>
            <li><strong>Good afternoon</strong> - Buenas tardes</li>
            <li><strong>Good evening</strong> - Buenas noches (al llegar)</li>
            <li><strong>Good night</strong> - Buenas noches (al despedirse)</li>
          </ul>
          
          <h2>Presentándote</h2>
          <p>Para presentarte, puedes usar estas frases:</p>
          <ul>
            <li><strong>My name is...</strong> - Mi nombre es...</li>
            <li><strong>I am...</strong> - Yo soy...</li>
            <li><strong>Nice to meet you</strong> - Encantado/a de conocerte</li>
          </ul>
          
          <h2>Preguntas comunes</h2>
          <p>Estas son algunas preguntas que puedes usar al conocer a alguien:</p>
          <ul>
            <li><strong>What's your name?</strong> - ¿Cómo te llamas?</li>
            <li><strong>Where are you from?</strong> - ¿De dónde eres?</li>
            <li><strong>How are you?</strong> - ¿Cómo estás?</li>
          </ul>
          
          <h2>Respuestas a "How are you?"</h2>
          <p>Cuando alguien te pregunta "How are you?", puedes responder:</p>
          <ul>
            <li><strong>I'm fine, thank you</strong> - Estoy bien, gracias</li>
            <li><strong>I'm good</strong> - Estoy bien</li>
            <li><strong>Not bad</strong> - No está mal</li>
            <li><strong>I'm great!</strong> - ¡Estoy genial!</li>
          </ul>
        `,
        examples: [
          "Hello, my name is John. Nice to meet you.",
          "Good morning! How are you today?",
          "Hi Sarah! Where are you from?",
          "I'm fine, thank you. And you?"
        ],
        practice: [
          {
            type: 'multiple-choice',
            question: '¿Cómo saludas a alguien por la mañana?',
            options: ['Good night', 'Good morning', 'Good evening', 'Goodbye'],
            correctAnswer: 'Good morning',
            feedback: {
              correct: '¡Correcto! "Good morning" es el saludo apropiado por la mañana.',
              incorrect: 'Incorrecto. Por la mañana usamos "Good morning".'
            }
          },
          {
            type: 'fill-blank',
            question: 'Para presentarte, puedes decir: "_____ name is [tu nombre]"',
            correctAnswer: 'My',
            feedback: {
              correct: '¡Correcto! "My name is" es la forma de presentarte.',
              incorrect: 'Incorrecto. La forma correcta es "My name is".'
            }
          },
          {
            type: 'multiple-choice',
            question: '¿Cómo respondes a "How are you?"',
            options: ['I\'m Spain', 'Yes, please', 'I\'m fine, thank you', 'Good morning'],
            correctAnswer: 'I\'m fine, thank you',
            feedback: {
              correct: '¡Correcto! "I\'m fine, thank you" es una respuesta apropiada.',
              incorrect: 'Incorrecto. Una respuesta apropiada sería "I\'m fine, thank you".'
            }
          },
          {
            type: 'speaking',
            question: 'Practica diciendo: "Hello, my name is [tu nombre]. Nice to meet you."',
            correctAnswer: ['hello', 'my name is', 'nice to meet you'],
            feedback: {
              correct: '¡Excelente pronunciación!',
              incorrect: 'Intenta practicar más la pronunciación de esta frase.'
            }
          }
        ],
        videoUrl: 'https://example.com/videos/greetings.mp4',
        videoPoster: '/images/lessons/greetings-poster.jpg',
        videoCaption: 'Diálogos de presentación'
      };
    
    case 'numbers':
      return {
        title: 'Números y Contar en Inglés',
        content: `
          <h2>Números del 1 al 10</h2>
          <p>Estos son los números básicos que debes aprender primero:</p>
          <ul>
            <li><strong>One</strong> - Uno</li>
            <li><strong>Two</strong> - Dos</li>
            <li><strong>Three</strong> - Tres</li>
            <li><strong>Four</strong> - Cuatro</li>
            <li><strong>Five</strong> - Cinco</li>
            <li><strong>Six</strong> - Seis</li>
            <li><strong>Seven</strong> - Siete</li>
            <li><strong>Eight</strong> - Ocho</li>
            <li><strong>Nine</strong> - Nueve</li>
            <li><strong>Ten</strong> - Diez</li>
          </ul>
          
          <h2>Números del 11 al 20</h2>
          <p>Estos números tienen formas especiales:</p>
          <ul>
            <li><strong>Eleven</strong> - Once</li>
            <li><strong>Twelve</strong> - Doce</li>
            <li><strong>Thirteen</strong> - Trece</li>
            <li><strong>Fourteen</strong> - Catorce</li>
            <li><strong>Fifteen</strong> - Quince</li>
            <li><strong>Sixteen</strong> - Dieciséis</li>
            <li><strong>Seventeen</strong> - Diecisiete</li>
            <li><strong>Eighteen</strong> - Dieciocho</li>
            <li><strong>Nineteen</strong> - Diecinueve</li>
            <li><strong>Twenty</strong> - Veinte</li>
          </ul>
          
          <h2>Decenas hasta 100</h2>
          <p>Las decenas siguen un patrón regular:</p>
          <ul>
            <li><strong>Twenty</strong> - Veinte</li>
            <li><strong>Thirty</strong> - Treinta</li>
            <li><strong>Forty</strong> - Cuarenta</li>
            <li><strong>Fifty</strong> - Cincuenta</li>
            <li><strong>Sixty</strong> - Sesenta</li>
            <li><strong>Seventy</strong> - Setenta</li>
            <li><strong>Eighty</strong> - Ochenta</li>
            <li><strong>Ninety</strong> - Noventa</li>
            <li><strong>One hundred</strong> - Cien</li>
          </ul>
          
          <h2>Combinando números</h2>
          <p>Para formar números como 21, 35, etc., simplemente combina la decena con el número:</p>
          <ul>
            <li><strong>Twenty-one</strong> - Veintiuno</li>
            <li><strong>Thirty-five</strong> - Treinta y cinco</li>
            <li><strong>Forty-eight</strong> - Cuarenta y ocho</li>
            <li><strong>Ninety-nine</strong> - Noventa y nueve</li>
          </ul>
        `,
        examples: [
          "I have two brothers and one sister.",
          "The building has twenty floors.",
          "My phone number is five five five, one two three four.",
          "She is thirty-five years old."
        ],
        practice: [
          {
            type: 'multiple-choice',
            question: '¿Cómo se dice 15 en inglés?',
            options: ['Fifty', 'Fourteen', 'Fifteen', 'Five'],
            correctAnswer: 'Fifteen',
            feedback: {
              correct: '¡Correcto! 15 se dice "Fifteen" en inglés.',
              incorrect: 'Incorrecto. 15 se dice "Fifteen" en inglés.'
            }
          },
          {
            type: 'fill-blank',
            question: '25 en inglés se dice _____-five',
            correctAnswer: 'twenty',
            feedback: {
              correct: '¡Correcto! 25 se dice "Twenty-five".',
              incorrect: 'Incorrecto. 25 se dice "Twenty-five".'
            }
          },
          {
            type: 'matching',
            question: 'Une los números con su escritura correcta',
            options: ['40', '12', '73', '99'],
            correctAnswer: ['forty', 'twelve', 'seventy-three', 'ninety-nine'],
            feedback: {
              correct: '¡Excelente! Has unido correctamente los números.',
              incorrect: 'Revisa tus respuestas. Hay errores en las uniones.'
            }
          },
          {
            type: 'speaking',
            question: 'Practica diciendo estos números: "Twenty-one, thirty-two, forty-three"',
            correctAnswer: ['twenty-one', 'thirty-two', 'forty-three'],
            feedback: {
              correct: '¡Excelente pronunciación!',
              incorrect: 'Intenta practicar más la pronunciación de estos números.'
            }
          }
        ],
        videoUrl: 'https://example.com/videos/numbers.mp4',
        videoPoster: '/images/lessons/numbers-poster.jpg'
      };
    
    case 'little-red':
      return {
        title: 'Caperucita Roja - Lectura Simplificada',
        content: `
          <h2>Little Red Riding Hood</h2>
          <p>Esta es una versión simplificada del cuento clásico "Caperucita Roja" para practicar la lectura en inglés.</p>
          
          <p>El vocabulario ha sido adaptado para principiantes. Puedes escuchar la narración completa o leer el texto a tu propio ritmo.</p>
          
          <h3>Vocabulario clave:</h3>
          <ul>
            <li><strong>Hood</strong> - Capucha</li>
            <li><strong>Woods</strong> - Bosque</li>
            <li><strong>Wolf</strong> - Lobo</li>
            <li><strong>Grandmother</strong> - Abuela</li>
            <li><strong>Basket</strong> - Cesta</li>
            <li><strong>Cake</strong> - Pastel</li>
          </ul>
        `,
        examples: [
          "Little Red Riding Hood walked through the woods.",
          "The wolf asked, 'Where are you going?'",
          "She said, 'I'm going to my grandmother's house.'",
          "The hunter saved Little Red Riding Hood and her grandmother."
        ],
        practice: [
          {
            type: 'multiple-choice',
            question: '¿Qué llevaba Caperucita Roja a su abuela?',
            options: ['Flowers', 'Cake', 'Money', 'A letter'],
            correctAnswer: 'Cake',
            feedback: {
              correct: '¡Correcto! Caperucita llevaba un pastel (cake) a su abuela.',
              incorrect: 'Incorrecto. Caperucita llevaba un pastel (cake) a su abuela.'
            }
          },
          {
            type: 'fill-blank',
            question: 'Little Red Riding Hood walked through the _____.',
            correctAnswer: 'woods',
            feedback: {
              correct: '¡Correcto! Caperucita caminó a través del bosque (woods).',
              incorrect: 'Incorrecto. Caperucita caminó a través del bosque (woods).'
            }
          },
          {
            type: 'multiple-choice',
            question: '¿Quién salvó a Caperucita y a su abuela?',
            options: ['The wolf', 'The hunter', 'Her mother', 'A friend'],
            correctAnswer: 'The hunter',
            feedback: {
              correct: '¡Correcto! El cazador (hunter) las salvó.',
              incorrect: 'Incorrecto. El cazador (hunter) las salvó.'
            }
          }
        ],
        storyText: `Once upon a time, there was a little girl. Her name was Little Red Riding Hood. She had a red hood.

One day, her mother said, "Take this basket to your grandmother. There is cake in it."

Little Red Riding Hood walked through the woods. A wolf saw her. "Where are you going?" asked the wolf.

"I'm going to my grandmother's house," she said.

The wolf ran to the grandmother's house. He ate the grandmother. Then he got into her bed.

Little Red Riding Hood arrived. "Grandmother, what big eyes you have!" she said.

"The better to see you with," said the wolf.

"What big ears you have!" said Little Red Riding Hood.

"The better to hear you with," said the wolf.

"What big teeth you have!" said Little Red Riding Hood.

"The better to eat you with!" said the wolf. He jumped out of bed.

A hunter heard the noise. He came into the house. He saved Little Red Riding Hood and her grandmother.

The wolf ran away. Little Red Riding Hood never talked to strangers again.`,
        storyAudio: 'https://example.com/audio/little-red.mp3'
      };
    
    case 'hello-song':
      return {
        title: 'Canción: "Hello" - Aprende con Música',
        content: `
          <h2>Aprendiendo inglés con música</h2>
          <p>La música es una excelente manera de mejorar tu pronunciación y vocabulario en inglés. Esta canción simple te ayudará a practicar saludos y presentaciones.</p>
          
          <p>Sigue la letra mientras escuchas la canción. Intenta cantar junto con la música para practicar tu pronunciación.</p>
          
          <h3>Beneficios de aprender con música:</h3>
          <ul>
            <li>Mejora tu pronunciación</li>
            <li>Ayuda a memorizar frases completas</li>
            <li>Hace el aprendizaje más divertido</li>
            <li>Te expone a diferentes acentos y expresiones</li>
          </ul>
          
          <p>Después de escuchar la canción varias veces, intenta cantarla sin mirar la letra.</p>
        `,
        examples: [
          "Hello, hello, how are you today?",
          "I'm happy to see you, hip hip hooray!",
          "My name is [name], what's your name?",
          "Let's be friends and play a game!"
        ],
        practice: [
          {
            type: 'fill-blank',
            question: 'Complete the lyric: "Hello, hello, how are you _____?"',
            correctAnswer: 'today',
            feedback: {
              correct: '¡Correcto! La letra dice "Hello, hello, how are you today?"',
              incorrect: 'Incorrecto. La letra dice "Hello, hello, how are you today?"'
            }
          },
          {
            type: 'multiple-choice',
            question: '¿Qué frase de la canción se usa para presentarse?',
            options: [
              'Hello, hello, how are you?', 
              'Let\'s be friends', 
              'My name is [name], what\'s your name?', 
              'Hip hip hooray!'
            ],
            correctAnswer: 'My name is [name], what\'s your name?',
            feedback: {
              correct: '¡Correcto! "My name is [name], what\'s your name?" es la frase para presentarse.',
              incorrect: 'Incorrecto. "My name is [name], what\'s your name?" es la frase para presentarse.'
            }
          },
          {
            type: 'speaking',
            question: 'Canta el primer verso de la canción: "Hello, hello, how are you today?"',
            correctAnswer: ['hello', 'how are you', 'today'],
            feedback: {
              correct: '¡Excelente! Estás cantando con buena pronunciación.',
              incorrect: 'Sigue practicando la pronunciación de esta frase.'
            }
          }
        ],
        karaokeUrl: 'https://example.com/audio/hello-song.mp3',
        karaokeLyrics: [
          "Hello, hello, how are you today?",
          "I'm happy to see you, hip hip hooray!",
          "My name is [name], what's your name?",
          "Let's be friends and play a game!",
          "",
          "Hello to the sun, hello to the trees,",
          "Hello to the birds, and hello to the bees.",
          "Hello to you and hello to me,",
          "We're all friends, as you can see!",
          "",
          "Hello, hello, how are you today?",
          "I'm happy to see you, hip hip hooray!",
          "My name is [name], what's your name?",
          "Let's be friends and play a game!"
        ],
        videoUrl: 'https://example.com/videos/hello-song.mp4',
        videoPoster: '/images/lessons/hello-song-poster.jpg',
        videoCaption: 'Video musical "Hello Song"'
      };
      
    default:
      return defaultContent;
  }
};

