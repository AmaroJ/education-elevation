
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
  videoUrl?: string;
  videoPoster?: string;
  videoCaption?: string;
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
      },
      {
        id: 'phone-conversations',
        title: 'Conversaciones Telefónicas',
        description: 'Cómo hablar por teléfono en inglés',
        duration: '15 min',
        completed: false
      },
      {
        id: 'ordering-food',
        title: 'Pedir en Restaurantes',
        description: 'Vocabulario y frases para pedir comida',
        duration: '12 min',
        completed: false
      },
      {
        id: 'shopping-phrases',
        title: 'De Compras',
        description: 'Expresiones útiles para ir de compras',
        duration: '10 min',
        completed: false
      },
      {
        id: 'weather-talk',
        title: 'Hablar del Clima',
        description: 'Expresiones para hablar sobre el tiempo',
        duration: '10 min',
        completed: false
      },
      {
        id: 'making-plans',
        title: 'Hacer Planes',
        description: 'Cómo organizar actividades sociales en inglés',
        duration: '15 min',
        completed: false
      },
      {
        id: 'asking-directions',
        title: 'Pedir Indicaciones',
        description: 'Cómo preguntar y entender direcciones',
        duration: '12 min',
        completed: false
      },
      {
        id: 'travel-basics',
        title: 'Inglés para Viajes',
        description: 'Frases esenciales para viajeros',
        duration: '15 min',
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
      },
      {
        id: 'passive-voice',
        title: 'Voz Pasiva',
        description: 'Construcción y uso de la voz pasiva',
        duration: '18 min',
        completed: false
      },
      {
        id: 'reported-speech',
        title: 'Estilo Indirecto',
        description: 'Cómo reportar lo que otros han dicho',
        duration: '20 min',
        completed: false
      },
      {
        id: 'articles',
        title: 'Artículos',
        description: 'Uso correcto de a, an y the',
        duration: '12 min',
        completed: false
      },
      {
        id: 'prepositions',
        title: 'Preposiciones',
        description: 'Preposiciones de tiempo, lugar y movimiento',
        duration: '15 min',
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
      },
      {
        id: 'education',
        title: 'Educación',
        description: 'Términos relacionados con estudios y formación',
        duration: '14 min',
        completed: false
      },
      {
        id: 'sports-hobbies',
        title: 'Deportes y Pasatiempos',
        description: 'Vocabulario deportivo y de actividades recreativas',
        duration: '12 min',
        completed: false
      },
      {
        id: 'family-relationships',
        title: 'Familia y Relaciones',
        description: 'Términos de parentesco y relaciones personales',
        duration: '10 min',
        completed: false
      },
      {
        id: 'clothing-fashion',
        title: 'Ropa y Moda',
        description: 'Vocabulario de vestimenta y tendencias',
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
      },
      {
        id: 'intonation-patterns',
        title: 'Patrones de Entonación',
        description: 'Entender y practicar diferentes patrones de entonación',
        duration: '15 min',
        completed: false
      },
      {
        id: 'difficult-sounds',
        title: 'Sonidos Problemáticos',
        description: 'Sonidos especialmente difíciles para hispanohablantes',
        duration: '18 min',
        completed: false
      },
      {
        id: 'accent-reduction',
        title: 'Reducción de Acento',
        description: 'Técnicas para neutralizar el acento extranjero',
        duration: '20 min',
        completed: false
      },
      {
        id: 'pronunciation-practice',
        title: 'Práctica Intensiva',
        description: 'Ejercicios avanzados de pronunciación',
        duration: '20 min',
        completed: false
      },
      {
        id: 'shadowing',
        title: 'Técnica de Shadowing',
        description: 'Repitiendo en tiempo real para mejorar la fluidez',
        duration: '15 min',
        completed: false
      },
      {
        id: 'minimal-pairs',
        title: 'Pares Mínimos',
        description: 'Distinguir sonidos similares en inglés',
        duration: '15 min',
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
      },
      {
        id: 'business-etiquette',
        title: 'Etiqueta Empresarial',
        description: 'Normas de comportamiento en entornos profesionales',
        duration: '16 min',
        completed: false
      },
      {
        id: 'customer-service',
        title: 'Atención al Cliente',
        description: 'Frases y técnicas para el servicio al cliente',
        duration: '18 min',
        completed: false
      },
      {
        id: 'marketing-sales',
        title: 'Marketing y Ventas',
        description: 'Vocabulario especializado para marketing y ventas',
        duration: '20 min',
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
      },
      {
        id: 'festive-celebrations',
        title: 'Festividades y Celebraciones',
        description: 'Tradiciones festivas en países angloparlantes',
        duration: '14 min',
        completed: false
      },
      {
        id: 'education-systems',
        title: 'Sistemas Educativos',
        description: 'Diferencias en educación entre países',
        duration: '15 min',
        completed: false
      },
      {
        id: 'food-customs',
        title: 'Costumbres Gastronómicas',
        description: 'Tradiciones culinarias en culturas anglosajonas',
        duration: '12 min',
        completed: false
      },
      {
        id: 'business-culture',
        title: 'Cultura Empresarial',
        description: 'Entornos de trabajo en países de habla inglesa',
        duration: '18 min',
        completed: false
      }
    ],
    progress: 0
  },
  {
    id: 'writing-skills',
    title: 'Habilidades de Escritura',
    description: 'Mejora tu escritura en inglés con ejercicios prácticos y explicaciones claras.',
    image: '/writing.svg',
    level: 'Intermediate',
    topics: [
      {
        id: 'basic-punctuation',
        title: 'Puntuación Básica',
        description: 'Reglas de puntuación en inglés',
        duration: '12 min',
        completed: false
      },
      {
        id: 'sentence-structure',
        title: 'Estructura de Oraciones',
        description: 'Construir oraciones coherentes y efectivas',
        duration: '15 min',
        completed: false
      },
      {
        id: 'paragraph-writing',
        title: 'Escritura de Párrafos',
        description: 'Organización y coherencia en párrafos',
        duration: '18 min',
        completed: false
      },
      {
        id: 'email-writing',
        title: 'Escribir Emails',
        description: 'Estructura y frases útiles para emails',
        duration: '15 min',
        completed: false
      },
      {
        id: 'creative-writing',
        title: 'Escritura Creativa',
        description: 'Expresar ideas con estilo y creatividad',
        duration: '20 min',
        completed: false
      },
      {
        id: 'formal-letters',
        title: 'Cartas Formales',
        description: 'Estructura y lenguaje para cartas formales',
        duration: '15 min',
        completed: false
      },
      {
        id: 'essay-writing',
        title: 'Redacción de Ensayos',
        description: 'Planificación y estructura de ensayos',
        duration: '22 min',
        completed: false
      },
      {
        id: 'summarizing',
        title: 'Resúmenes',
        description: 'Técnicas para resumir textos',
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

export function getLessonContent(topicId: string): LessonContent {
  switch (topicId) {
    case 'greetings':
      return {
        title: 'Saludos y presentaciones en inglés',
        content: `
          <p>Los saludos son una parte fundamental de cualquier idioma, y el inglés no es una excepción. Aprender a saludar correctamente te permitirá establecer un primer contacto positivo en cualquier situación social o profesional.</p>
          
          <h2 class="text-xl font-medium mt-6 mb-3">Saludos formales</h2>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>Good morning</strong> - Buenos días (hasta el mediodía)</li>
            <li><strong>Good afternoon</strong> - Buenas tardes (desde el mediodía hasta las 6 pm aproximadamente)</li>
            <li><strong>Good evening</strong> - Buenas noches (desde las 6 pm hasta la hora de dormir)</li>
            <li><strong>Hello, Mr./Mrs./Ms. [apellido]</strong> - Hola, Sr./Sra./Srta. [apellido]</li>
            <li><strong>How do you do?</strong> - Encantado/a de conocerle (muy formal)</li>
          </ul>
          
          <h2 class="text-xl font-medium mt-6 mb-3">Saludos informales</h2>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>Hi/Hey</strong> - Hola</li>
            <li><strong>What's up?</strong> - ¿Qué tal? ¿Qué hay?</li>
            <li><strong>How's it going?</strong> - ¿Cómo va todo?</li>
            <li><strong>How are you?</strong> - ¿Cómo estás?</li>
            <li><strong>Good to see you</strong> - Me alegro de verte</li>
          </ul>
          
          <h2 class="text-xl font-medium mt-6 mb-3">Presentaciones</h2>
          <p>Para presentarte a ti mismo:</p>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>My name is...</strong> - Mi nombre es...</li>
            <li><strong>I'm...</strong> - Soy...</li>
            <li><strong>Nice to meet you</strong> - Encantado/a de conocerte</li>
            <li><strong>Pleased to meet you</strong> - Encantado/a de conocerte (más formal)</li>
          </ul>
          
          <p class="mt-4">Para presentar a otra persona:</p>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>This is...</strong> - Este/a es...</li>
            <li><strong>I'd like to introduce you to...</strong> - Me gustaría presentarte a...</li>
            <li><strong>Have you met...?</strong> - ¿Has conocido a...?</li>
          </ul>
        `,
        examples: [
          "Hello, my name is John. Nice to meet you!",
          "Good morning, Mr. Smith. How are you today?",
          "Hey Sarah! What's up?",
          "I'd like to introduce you to my colleague, David.",
          "Hi everyone! I'm Emma, the new marketing manager."
        ],
        practice: [
          {
            question: "¿Cuál de los siguientes es un saludo formal?",
            options: ["Hey there!", "What's up?", "Good afternoon, Mr. Johnson.", "How's it going?"],
            correctAnswer: "Good afternoon, Mr. Johnson."
          },
          {
            question: "¿Cómo te presentarías formalmente a alguien?",
            options: ["What's up? I'm Jack.", "Hey! Jack here.", "My name is Jack. Pleased to meet you.", "Yo! I'm Jack."],
            correctAnswer: "My name is Jack. Pleased to meet you."
          },
          {
            question: "¿Qué responderías a 'How are you?'?",
            options: ["I'm 25 years old.", "I'm from Spain.", "I'm fine, thank you. And you?", "Yes, I am."],
            correctAnswer: "I'm fine, thank you. And you?"
          },
          {
            question: "¿Cuál es la forma correcta de presentar a alguien?",
            options: ["This is my friend, Sarah.", "Her name Sarah.", "Sarah is she.", "Meet to Sarah."],
            correctAnswer: "This is my friend, Sarah."
          },
          {
            question: "¿Qué saludo utilizarías por la mañana?",
            options: ["Good night", "Good evening", "Good afternoon", "Good morning"],
            correctAnswer: "Good morning"
          }
        ],
        videoUrl: "https://d-id-talks-prod.s3.us-west-2.amazonaws.com/auth0%7C6595c6e4c13b6baef553e7e7/tlk_UxhHiUwgQJYpGVzsDHvAv/1080p.mp4",
        videoPoster: "https://images.unsplash.com/photo-1595781572981-d63151b232ed?q=80&w=1000",
        videoCaption: "Profesora Emma explica saludos y presentaciones en inglés"
      };
    case 'introductions':
      return {
        title: 'Conversaciones iniciales en inglés',
        content: `
          <p>Iniciar una conversación en inglés puede ser intimidante al principio, pero con algunas frases clave y un poco de práctica, pronto te sentirás cómodo/a entablando conversaciones con hablantes nativos.</p>
          
          <h2 class="text-xl font-medium mt-6 mb-3">Cómo iniciar una conversación</h2>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>Excuse me...</strong> - Disculpe... (para iniciar una conversación con un desconocido)</li>
            <li><strong>Do you mind if I join you?</strong> - ¿Te importa si me uno a ti?</li>
            <li><strong>I couldn't help noticing...</strong> - No pude evitar notar... (para comentar algo que has observado)</li>
            <li><strong>Lovely weather today, isn't it?</strong> - Hace un tiempo estupendo hoy, ¿verdad? (hablar del clima es siempre un buen inicio)</li>
            <li><strong>Have you been waiting long?</strong> - ¿Llevas esperando mucho tiempo?</li>
          </ul>
          
          <h2 class="text-xl font-medium mt-6 mb-3">Preguntas para conocer a alguien</h2>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>Where are you from?</strong> - ¿De dónde eres?</li>
            <li><strong>What do you do?</strong> - ¿A qué te dedicas?</li>
            <li><strong>How long have you been living here?</strong> - ¿Cuánto tiempo llevas viviendo aquí?</li>
            <li><strong>What are your hobbies?</strong> - ¿Cuáles son tus pasatiempos?</li>
            <li><strong>Do you have any siblings?</strong> - ¿Tienes hermanos?</li>
          </ul>
          
          <h2 class="text-xl font-medium mt-6 mb-3">Mantener la conversación</h2>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>Really? That's interesting!</strong> - ¿En serio? ¡Eso es interesante!</li>
            <li><strong>Tell me more about that.</strong> - Cuéntame más sobre eso.</li>
            <li><strong>I know what you mean.</strong> - Sé a qué te refieres.</li>
            <li><strong>That's a good point.</strong> - Es un buen punto.</li>
            <li><strong>I've never thought about it that way.</strong> - Nunca lo había pensado de esa manera.</li>
          </ul>
          
          <h2 class="text-xl font-medium mt-6 mb-3">Terminar educadamente</h2>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>It was nice talking to you.</strong> - Fue agradable hablar contigo.</li>
            <li><strong>I should get going.</strong> - Debería irme.</li>
            <li><strong>I've got to run.</strong> - Tengo que irme corriendo.</li>
            <li><strong>Let's catch up again soon.</strong> - Hablemos de nuevo pronto.</li>
            <li><strong>Take care!</strong> - ¡Cuídate!</li>
          </ul>
        `,
        examples: [
          "Excuse me, is this seat taken?",
          "I'm from Spain. Where are you from?",
          "What do you do for a living?",
          "That sounds really interesting! Tell me more.",
          "It was great meeting you. Let's stay in touch!"
        ],
        practice: [
          {
            question: "¿Cómo iniciarías una conversación con un desconocido?",
            options: ["Hey you!", "Excuse me, may I ask you something?", "Talk to me now.", "I need information."],
            correctAnswer: "Excuse me, may I ask you something?"
          },
          {
            question: "¿Qué preguntarías para saber la profesión de alguien?",
            options: ["How much money do you make?", "Is your job good?", "What do you do for a living?", "Are you rich?"],
            correctAnswer: "What do you do for a living?"
          },
          {
            question: "¿Cómo mostrarías interés en lo que dice la otra persona?",
            options: ["That's boring.", "OK, whatever.", "That's really interesting, tell me more!", "I don't care."],
            correctAnswer: "That's really interesting, tell me more!"
          },
          {
            question: "¿Cómo te despedirías educadamente de alguien que acabas de conocer?",
            options: ["Goodbye forever.", "It was nice meeting you.", "Finally this is over.", "See you never."],
            correctAnswer: "It was nice meeting you."
          },
          {
            question: "¿Qué dirías para mantener viva una conversación?",
            options: ["Stop talking now.", "I know what you mean, and I've had a similar experience.", "Change the subject.", "Let's talk about me now."],
            correctAnswer: "I know what you mean, and I've had a similar experience."
          }
        ],
        videoUrl: "https://d-id-talks-prod.s3.us-west-2.amazonaws.com/auth0%7C6595c6e4c13b6baef553e7e7/tlk_qZqjpV5Qz_YT8vu2YcGTe/1080p.mp4",
        videoPoster: "https://images.unsplash.com/photo-1573496358961-3c82861ab8f4?q=80&w=1000",
        videoCaption: "Profesor Thomas explica cómo iniciar conversaciones en inglés"
      };
    case 'daily-phrases':
      return {
        title: 'Frases cotidianas en inglés',
        content: `
          <p>Las frases cotidianas son esenciales para comunicarte en situaciones del día a día. Estas expresiones te ayudarán a desenvolverte con mayor naturalidad y confianza.</p>
          
          <h2 class="text-xl font-medium mt-6 mb-3">En casa</h2>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>I'm home!</strong> - ¡Ya estoy en casa!</li>
            <li><strong>What's for dinner?</strong> - ¿Qué hay para cenar?</li>
            <li><strong>I'll do the dishes.</strong> - Yo lavaré los platos.</li>
            <li><strong>Can you take out the trash?</strong> - ¿Puedes sacar la basura?</li>
            <li><strong>I'm going to bed.</strong> - Me voy a dormir.</li>
          </ul>
          
          <h2 class="text-xl font-medium mt-6 mb-3">En el trabajo/escuela</h2>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>I'll get right on it.</strong> - Me pondré con ello enseguida.</li>
            <li><strong>Could we schedule a meeting?</strong> - ¿Podríamos programar una reunión?</li>
            <li><strong>I need more time to finish this.</strong> - Necesito más tiempo para terminar esto.</li>
            <li><strong>Do you have a minute?</strong> - ¿Tienes un minuto?</li>
            <li><strong>I didn't catch that.</strong> - No entendí eso.</li>
          </ul>
          
          <h2 class="text-xl font-medium mt-6 mb-3">En la calle</h2>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>Excuse me, where is the nearest bank?</strong> - Disculpe, ¿dónde está el banco más cercano?</li>
            <li><strong>How do I get to the museum?</strong> - ¿Cómo llego al museo?</li>
            <li><strong>What time does the store open/close?</strong> - ¿A qué hora abre/cierra la tienda?</li>
            <li><strong>I'm just looking, thanks.</strong> - Solo estoy mirando, gracias.</li>
            <li><strong>Do you accept credit cards?</strong> - ¿Aceptan tarjetas de crédito?</li>
          </ul>
          
          <h2 class="text-xl font-medium mt-6 mb-3">Expresiones útiles</h2>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>No worries/No problem.</strong> - No te preocupes/No hay problema.</li>
            <li><strong>That works for me.</strong> - Eso me viene bien.</li>
            <li><strong>I'll get back to you.</strong> - Te responderé más tarde.</li>
            <li><strong>Let me think about it.</strong> - Déjame pensarlo.</li>
            <li><strong>You're welcome.</strong> - De nada.</li>
          </ul>
        `,
        examples: [
          "I'm running late, I'll be there in ten minutes.",
          "Could you help me with this, please?",
          "Sorry, I didn't catch your name.",
          "That sounds like a great idea!",
          "I'm not feeling well today."
        ],
        practice: [
          {
            question: "¿Cómo pedirías ayuda educadamente?",
            options: ["Help me now.", "Give me a hand.", "Could you help me with this, please?", "I need help."],
            correctAnswer: "Could you help me with this, please?"
          },
          {
            question: "¿Qué dirías si llegas tarde a una cita?",
            options: ["I'm here now.", "I'm running late, I'll be there soon.", "The traffic is bad.", "Wait for me."],
            correctAnswer: "I'm running late, I'll be there soon."
          },
          {
            question: "¿Cómo indicarías que no entendiste algo?",
            options: ["What?", "Speak better.", "Sorry, I didn't catch that.", "You are not clear."],
            correctAnswer: "Sorry, I didn't catch that."
          },
          {
            question: "¿Qué dirías para agradecer a alguien que te ayudó?",
            options: ["OK good.", "That's your job.", "Thank you so much for your help.", "Finally done."],
            correctAnswer: "Thank you so much for your help."
          },
          {
            question: "¿Cómo preguntarías por direcciones a un lugar?",
            options: ["Where is place?", "I need to go there.", "How do I get to the library from here?", "Tell me the way."],
            correctAnswer: "How do I get to the library from here?"
          }
        ],
        videoUrl: "https://d-id-talks-prod.s3.us-west-2.amazonaws.com/auth0%7C6595c6e4c13b6baef553e7e7/tlk_VYH33zEKbfpz5cldC7VC2/1080p.mp4",
        videoPoster: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000",
        videoCaption: "Profesora Lisa explica frases cotidianas en inglés"
      };
    case 'asking-questions':
      return {
        title: 'Hacer preguntas en inglés',
        content: `
          <p>Hacer preguntas correctamente es fundamental para mantener conversaciones fluidas y obtener la información que necesitas. En inglés, existen diferentes estructuras para formular preguntas.</p>
          
          <h2 class="text-xl font-medium mt-6 mb-3">Preguntas cerradas (Yes/No questions)</h2>
          <p>Estas preguntas se responden con "sí" o "no" y suelen comenzar con un verbo auxiliar.</p>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>Do you speak English?</strong> - ¿Hablas inglés?</li>
            <li><strong>Is she coming to the party?</strong> - ¿Ella vendrá a la fiesta?</li>
            <li><strong>Have you finished your homework?</strong> - ¿Has terminado tu tarea?</li>
            <li><strong>Can you help me?</strong> - ¿Puedes ayudarme?</li>
            <li><strong>Will they be here tomorrow?</strong> - ¿Estarán aquí mañana?</li>
          </ul>
          
          <h2 class="text-xl font-medium mt-6 mb-3">Preguntas abiertas (Wh-questions)</h2>
          <p>Estas preguntas comienzan con palabras interrogativas y requieren respuestas más elaboradas.</p>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>What</strong> - ¿Qué? (para preguntar sobre cosas)</li>
            <li><strong>Where</strong> - ¿Dónde? (para preguntar sobre lugares)</li>
            <li><strong>When</strong> - ¿Cuándo? (para preguntar sobre tiempo)</li>
            <li><strong>Why</strong> - ¿Por qué? (para preguntar sobre razones)</li>
            <li><strong>Who</strong> - ¿Quién? (para preguntar sobre personas)</li>
            <li><strong>How</strong> - ¿Cómo? (para preguntar sobre manera o modo)</li>
            <li><strong>Which</strong> - ¿Cuál? (para preguntar entre opciones)</li>
            <li><strong>Whose</strong> - ¿De quién? (para preguntar sobre posesión)</li>
          </ul>
          
          <h2 class="text-xl font-medium mt-6 mb-3">Ejemplos de preguntas abiertas</h2>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>What is your name?</strong> - ¿Cómo te llamas?</li>
            <li><strong>Where do you live?</strong> - ¿Dónde vives?</li>
            <li><strong>When does the movie start?</strong> - ¿Cuándo empieza la película?</li>
            <li><strong>Why are you studying English?</strong> - ¿Por qué estudias inglés?</li>
            <li><strong>Who is that person?</strong> - ¿Quién es esa persona?</li>
            <li><strong>How did you learn to play guitar?</strong> - ¿Cómo aprendiste a tocar la guitarra?</li>
            <li><strong>Which color do you prefer?</strong> - ¿Qué color prefieres?</li>
            <li><strong>Whose book is this?</strong> - ¿De quién es este libro?</li>
          </ul>
          
          <h2 class="text-xl font-medium mt-6 mb-3">Preguntas indirectas</h2>
          <p>Son formas más educadas y menos directas de hacer preguntas.</p>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>Could you tell me where the bathroom is?</strong> - ¿Podría decirme dónde está el baño?</li>
            <li><strong>Do you know what time it is?</strong> - ¿Sabe qué hora es?</li>
            <li><strong>I was wondering if you could help me.</strong> - Me preguntaba si podrías ayudarme.</li>
            <li><strong>Would you mind telling me how to get there?</strong> - ¿Le importaría decirme cómo llegar allí?</li>
          </ul>
        `,
        examples: [
          "What's your favorite movie?",
          "Where did you grow up?",
          "Why do you want to learn English?",
          "How often do you exercise?",
          "Could you tell me where the nearest subway station is?"
        ],
        practice: [
          {
            question: "¿Cuál es la forma correcta de preguntar la hora?",
            options: ["What is the hour?", "What time is it?", "How many time is?", "When is the time?"],
            correctAnswer: "What time is it?"
          },
          {
            question: "¿Cómo preguntarías educadamente a alguien su nombre?",
            options: ["Who are you?", "What is called you?", "Tell me your name.", "What's your name?"],
            correctAnswer: "What's your name?"
          },
          {
            question: "¿Cuál es la forma correcta de preguntar por la ubicación de un lugar?",
            options: ["Where is the museum?", "The museum is where?", "Is where the museum?", "Museum where?"],
            correctAnswer: "Where is the museum?"
          },
          {
            question: "¿Cómo preguntarías por qué alguien estudia inglés?",
            options: ["For what you study English?", "Why do you study English?", "What for study English?", "Study English why?"],
            correctAnswer: "Why do you study English?"
          },
          {
            question: "¿Cuál es una forma educada de pedir ayuda?",
            options: ["Help me now.", "You must help me.", "I was wondering if you could help me.", "Give me help."],
            correctAnswer: "I was wondering if you could help me."
          }
        ],
        videoUrl: "https://d-id-talks-prod.s3.us-west-2.amazonaws.com/auth0%7C6595c6e4c13b6baef553e7e7/tlk_X8_DzwBKBwzm-8jl9oVH7/1080p.mp4",
        videoPoster: "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1000",
        videoCaption: "Profesor Michael explica cómo formular preguntas en inglés"
      };
    case 'small-talk':
      return {
        title: 'Charla casual en inglés',
        content: `
          <p>El "small talk" o charla casual es una habilidad social importante en culturas anglosajonas. Es una forma de establecer conexiones, romper el hielo y crear un ambiente agradable antes de entrar en conversaciones más profundas.</p>
          
          <h2 class="text-xl font-medium mt-6 mb-3">Temas comunes para small talk</h2>
          
          <h3 class="text-lg font-medium mt-4 mb-2">El clima</h3>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>Beautiful day, isn't it?</strong> - Hermoso día, ¿verdad?</li>
            <li><strong>It looks like it might rain later.</strong> - Parece que podría llover más tarde.</li>
            <li><strong>I can't believe how hot/cold it is today!</strong> - ¡No puedo creer lo caluroso/frío que está hoy!</li>
            <li><strong>They say we're going to have nice weather this weekend.</strong> - Dicen que vamos a tener buen tiempo este fin de semana.</li>
          </ul>
          
          <h3 class="text-lg font-medium mt-4 mb-2">Trabajo y estudios</h3>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>How's work going?</strong> - ¿Cómo va el trabajo?</li>
            <li><strong>What do you do for a living?</strong> - ¿A qué te dedicas?</li>
            <li><strong>Do you enjoy your job?</strong> - ¿Disfrutas de tu trabajo?</li>
            <li><strong>What are you studying?</strong> - ¿Qué estás estudiando?</li>
          </ul>
          
          <h3 class="text-lg font-medium mt-4 mb-2">Ocio y tiempo libre</h3>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>What do you like to do on weekends?</strong> - ¿Qué te gusta hacer los fines de semana?</li>
            <li><strong>Have you seen any good movies lately?</strong> - ¿Has visto alguna buena película últimamente?</li>
            <li><strong>Do you have any hobbies?</strong> - ¿Tienes algún pasatiempo?</li>
            <li><strong>Are you into sports?</strong> - ¿Te gustan los deportes?</li>
          </ul>
          
          <h3 class="text-lg font-medium mt-4 mb-2">Viajes</h3>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>Have you been anywhere interesting recently?</strong> - ¿Has estado en algún lugar interesante recientemente?</li>
            <li><strong>Where's your favorite place to visit?</strong> - ¿Cuál es tu lugar favorito para visitar?</li>
            <li><strong>Are you planning any trips this year?</strong> - ¿Estás planeando algún viaje este año?</li>
            <li><strong>What was your best vacation ever?</strong> - ¿Cuál ha sido tu mejor vacación?</li>
          </ul>
          
          <h2 class="text-xl font-medium mt-6 mb-3">Consejos para hacer small talk</h2>
          <ul class="list-disc pl-6 space-y-2">
            <li>Haz preguntas abiertas que no se respondan con "sí" o "no"</li>
            <li>Muestra interés genuino en las respuestas de la otra persona</li>
            <li>Mantén un tono positivo y amistoso</li>
            <li>Evita temas controvertidos como política o religión</li>
            <li>Comparte información sobre ti mismo, pero sin dominar la conversación</li>
            <li>Busca puntos en común para desarrollar la conversación</li>
          </ul>
        `,
        examples: [
          "How was your weekend? Did you do anything special?",
          "I love your jacket! Where did you get it?",
          "Have you tried that new restaurant downtown?",
          "This is my first time at this event. How about you?",
          "I heard you're from Chicago. How do you like living there?"
        ],
        practice: [
          {
            question: "¿Cuál es un buen tema para iniciar una charla casual?",
            options: ["Political opinions", "Religious beliefs", "The weather", "Personal financial problems"],
            correctAnswer: "The weather"
          },
          {
            question: "¿Cómo preguntarías sobre los pasatiempos de alguien?",
            options: ["Why do you have hobbies?", "What do you like to do in your free time?", "Do you waste time on hobbies?", "Are your hobbies expensive?"],
            correctAnswer: "What do you like to do in your free time?"
          },
          {
            question: "¿Cuál es una buena pregunta sobre viajes para small talk?",
            options: ["Why don't you travel more?", "How much money do you spend on trips?", "Have you visited any interesting places recently?", "Is traveling a waste of money?"],
            correctAnswer: "Have you visited any interesting places recently?"
          },
          {
            question: "¿Qué comentario sobre el clima sería apropiado para small talk?",
            options: ["This weather is terrible, just like this conversation.", "I hate this weather so much.", "Lovely day today, isn't it?", "The weather is boring to talk about."],
            correctAnswer: "Lovely day today, isn't it?"
          },
          {
            question: "¿Qué harías si la charla casual se vuelve incómoda?",
            options: ["Walk away immediately", "Change the subject to something more pleasant", "Tell the person they are boring", "Start arguing to make it interesting"],
            correctAnswer: "Change the subject to something more pleasant"
          }
        ],
        videoUrl: "https://d-id-talks-prod.s3.us-west-2.amazonaws.com/auth0%7C6595c6e4c13b6baef553e7e7/tlk_VoWw0Z4eW-Eoqhh6mWP0-/1080p.mp4",
        videoPoster: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1000",
        videoCaption: "Profesora Sarah explica cómo mantener conversaciones casuales en inglés"
      };
    case 'ordering-food':
      return {
        title: 'Pedir comida en un restaurante',
        content: `
          <p>Pedir comida en un restaurante es una situación habitual cuando viajamos a un país de habla inglesa o incluso en nuestro propio país en restaurantes internacionales. Aprender las expresiones adecuadas te ayudará a sentirte más seguro y a disfrutar de la experiencia gastronómica.</p>
          
          <h2 class="text-xl font-medium mt-6 mb-3">Vocabulario relacionado con restaurantes</h2>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>Menu</strong> - Menú, carta</li>
            <li><strong>Table</strong> - Mesa</li>
            <li><strong>Waiter/Waitress</strong> - Camarero/Camarera</li>
            <li><strong>Bill/Check</strong> - Cuenta</li>
            <li><strong>Tip</strong> - Propina</li>
            <li><strong>Reservation</strong> - Reserva</li>
            <li><strong>Starter/Appetizer</strong> - Entrante</li>
            <li><strong>Main course</strong> - Plato principal</li>
            <li><strong>Dessert</strong> - Postre</li>
            <li><strong>Beverage/Drink</strong> - Bebida</li>
          </ul>
          
          <h2 class="text-xl font-medium mt-6 mb-3">Frases útiles para pedir comida</h2>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>I'd like to make a reservation for...</strong> - Me gustaría hacer una reserva para...</li>
            <li><strong>A table for [número], please.</strong> - Una mesa para [número], por favor.</li>
            <li><strong>Could I see the menu, please?</strong> - ¿Podría ver el menú, por favor?</li>
            <li><strong>What's today's special?</strong> - ¿Cuál es el plato del día?</li>
            <li><strong>I'll have...</strong> - Tomaré...</li>
            <li><strong>Can I get...</strong> - Me puede traer...</li>
            <li><strong>How would you like that cooked?</strong> - ¿Cómo le gustaría que se lo cocinaran?</li>
            <li><strong>Rare/Medium/Well done</strong> - Poco hecho/Al punto/Muy hecho</li>
            <li><strong>Can we have the bill, please?</strong> - ¿Nos puede traer la cuenta, por favor?</li>
            <li><strong>Is service included?</strong> - ¿Está incluido el servicio?</li>
          </ul>
          
          <h2 class="text-xl font-medium mt-6 mb-3">Recomendaciones y preferencias</h2>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>I'd recommend the...</strong> - Recomendaría el/la...</li>
            <li><strong>What do you recommend?</strong> - ¿Qué recomienda?</li>
            <li><strong>I'm vegetarian/vegan</strong> - Soy vegetariano/vegano</li>
            <li><strong>I have a food allergy.</strong> - Tengo alergia alimentaria.</li>
            <li><strong>Does this contain...?</strong> - ¿Esto contiene...?</li>
            <li><strong>This is delicious!</strong> - ¡Esto está delicioso!</li>
          </ul>
        `,
        examples: [
          "Could I have a table for two, please?",
          "I'd like the chicken pasta, please.",
          "What would you recommend for dessert?",
          "Excuse me, can we have the bill, please?",
          "Does this dish contain nuts? I have an allergy."
        ],
        practice: [
          {
            question: "¿Cómo pedirías una mesa para 4 personas?",
            options: ["I want a table for four people.", "A table for four, please.", "Give me a table for four.", "Four persons need table."],
            correctAnswer: "A table for four, please."
          },
          {
            question: "¿Cómo pedirías ver el menú?",
            options: ["Give me the menu.", "I want to see food.", "Could I see the menu, please?", "Where is menu?"],
            correctAnswer: "Could I see the menu, please?"
          },
          {
            question: "¿Cómo pedirías la cuenta?",
            options: ["Money now.", "I will pay.", "Finish eating.", "Can we have the bill, please?"],
            correctAnswer: "Can we have the bill, please?"
          },
          {
            question: "¿Cómo se dice 'plato principal' en inglés?",
            options: ["Principal plate", "Big food", "Main course", "Chief dish"],
            correctAnswer: "Main course"
          },
          {
            question: "¿Cómo pedirías una recomendación al camarero?",
            options: ["Tell me good food.", "What do you recommend?", "What is best for eat?", "Give me your favorite."],
            correctAnswer: "What do you recommend?"
          }
        ],
        videoUrl: "https://d-id-talks-prod.s3.us-west-2.amazonaws.com/auth0%7C6595c6e4c13b6baef553e7e7/tlk_YAGl6U84aPTm9HGFAuXZM/1080p.mp4",
        videoPoster: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1000",
        videoCaption: "Profesor James explica cómo ordenar comida en un restaurante"
      };
    case 'present-simple':
      return {
        title: 'Presente Simple en inglés',
        content: `
          <p>El Presente Simple es uno de los tiempos verbales más importantes en inglés. Se utiliza para expresar hechos, verdades generales, hábitos y rutinas.</p>
          
          <h2 class="text-xl font-medium mt-6 mb-3">Usos del Presente Simple</h2>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>Hechos y verdades generales:</strong> Water boils at 100 degrees Celsius. (El agua hierve a 100 grados Celsius.)</li>
            <li><strong>Rutinas y hábitos:</strong> I go to the gym three times a week. (Voy al gimnasio tres veces por semana.)</li>
            <li><strong>Horarios y programas:</strong> The train leaves at 6 PM. (El tren sale a las 6 PM.)</li>
            <li><strong>Preferencias y gustos:</strong> She likes chocolate ice cream. (A ella le gusta el helado de chocolate.)</li>
            <li><strong>Estados permanentes:</strong> They live in London. (Ellos viven en Londres.)</li>
          </ul>
          
          <h2 class="text-xl font-medium mt-6 mb-3">Estructura afirmativa</h2>
          <p>Sujeto + Verbo (en infinitivo sin "to") + Complementos</p>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>I work</strong> in a hospital. (Yo trabajo en un hospital.)</li>
            <li><strong>You study</strong> English. (Tú estudias inglés.)</li>
            <li><strong>We play</strong> soccer on Sundays. (Nosotros jugamos fútbol los domingos.)</li>
          </ul>
          
          <h3 class="text-lg font-medium mt-4 mb-2">Tercera persona singular (he, she, it)</h3>
          <p>En la tercera persona singular, se añade -s o -es al final del verbo:</p>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>He works</strong> in a hospital. (Él trabaja en un hospital.)</li>
            <li><strong>She studies</strong> English. (Ella estudia inglés.)</li>
            <li><strong>It rains</strong> a lot in winter. (Llueve mucho en invierno.)</li>
          </ul>
          
          <h2 class="text-xl font-medium mt-6 mb-3">Estructura negativa</h2>
          <p>Sujeto + do/does + not + Verbo (en infinitivo sin "to") + Complementos</p>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>I do not (don't) work</strong> on weekends. (Yo no trabajo los fines de semana.)</li>
            <li><strong>You do not (don't) study</strong> enough. (Tú no estudias lo suficiente.)</li>
            <li><strong>He does not (doesn't) like</strong> coffee. (A él no le gusta el café.)</li>
            <li><strong>She does not (doesn't) speak</strong> French. (Ella no habla francés.)</li>
          </ul>
          
          <h2 class="text-xl font-medium mt-6 mb-3">Estructura interrogativa</h2>
          <p>Do/Does + Sujeto + Verbo (en infinitivo sin "to") + Complementos + ?</p>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>Do I work</strong> too much? (¿Trabajo demasiado?)</li>
            <li><strong>Do you study</strong> English? (¿Estudias inglés?)</li>
            <li><strong>Does he live</strong> in Madrid? (¿Vive él en Madrid?)</li>
            <li><strong>Does she like</strong> pizza? (¿Le gusta la pizza a ella?)</li>
          </ul>
          
          <h2 class="text-xl font-medium mt-6 mb-3">Adverbios de frecuencia</h2>
          <p>Son palabras que indican la frecuencia con la que ocurre algo. Se colocan generalmente:</p>
          <ul class="list-disc pl-6 space-y-2">
            <li>Antes del verbo principal (excepto con el verbo "to be")</li>
            <li>Después del verbo "to be"</li>
          </ul>
          <p>Ejemplos de adverbios de frecuencia (de mayor a menor):</p>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>Always</strong> (100%) - siempre</li>
            <li><strong>Usually / Normally</strong> (90%) - usualmente / normalmente</li>
            <li><strong>Often / Frequently</strong> (70%) - a menudo / frecuentemente</li>
            <li><strong>Sometimes</strong> (50%) - a veces</li>
            <li><strong>Occasionally</strong> (30%) - ocasionalmente</li>
            <li><strong>Rarely / Seldom</strong> (10%) - raramente / pocas veces</li>
            <li><strong>Never</strong> (0%) - nunca</li>
          </ul>
          <p>Ejemplos:</p>
          <ul class="list-disc pl-6 space-y-2">
            <li>I <strong>always</strong> eat breakfast. (Siempre desayuno.)</li>
            <li>She <strong>usually</strong> goes to bed early. (Ella usualmente se acuesta temprano.)</li>
            <li>They <strong>sometimes</strong> visit us. (Ellos a veces nos visitan.)</li>
            <li>He <strong>never</strong> drinks coffee. (Él nunca toma café.)</li>
            <li>I <strong>am always</strong> on time. (Siempre soy puntual.)</li>
          </ul>
        `,
        examples: [
          "I work in a hospital as a nurse.",
          "She doesn't eat meat because she's vegetarian.",
          "Do you play any musical instruments?",
          "My brother always forgets his keys.",
          "The Earth revolves around the Sun."
        ],
        practice: [
          {
            question: "¿Cuál es la forma correcta del verbo en presente simple? He ___ (go) to work by bus.",
            options: ["go", "goes", "going", "to go"],
            correctAnswer: "goes"
          },
          {
            question: "¿Cuál es la forma negativa correcta? She ___ like coffee.",
            options: ["no", "not", "doesn't", "don't"],
            correctAnswer: "doesn't"
          },
          {
            question: "¿Cómo se forma una pregunta en presente simple? ___ they live in London?",
            options: ["Are", "Do", "Does", "Is"],
            correctAnswer: "Do"
          },
          {
            question: "¿Dónde se coloca el adverbio de frecuencia 'always'?",
            options: ["Al final de la oración", "Antes del verbo principal", "Después del verbo principal", "Al principio de la oración"],
            correctAnswer: "Antes del verbo principal"
          },
          {
            question: "¿Cuál de las siguientes oraciones usa correctamente el presente simple?",
            options: ["I am going to school every day.", "She is eating breakfast now.", "We watch TV every evening.", "They coming home late."],
            correctAnswer: "We watch TV every evening."
          }
        ],
        videoUrl: "https://d-id-talks-prod.s3.us-west-2.amazonaws.com/auth0%7C6595c6e4c13b6baef553e7e7/tlk_OEDLdWlCJnqKlFOdh1Hs0/1080p.mp4",
        videoPoster: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1000",
        videoCaption: "Profesor David explica el Presente Simple en inglés"
      };
    case 'vowel-sounds':
      return {
        title: 'Sonidos vocálicos en inglés',
        content: `
          <p>El inglés tiene aproximadamente 20 sonidos vocálicos, muchos más que el español, que tiene solo 5. Aprender a distinguirlos y pronunciarlos correctamente mejorará significativamente tu pronunciación.</p>
          
          <h2 class="text-xl font-medium mt-6 mb-3">Vocales cortas</h2>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>/ɪ/</strong> como en "sit" /sɪt/ - Más relajado que la "i" española</li>
            <li><strong>/e/</strong> como en "bed" /bed/ - Similar a la "e" española pero más corta</li>
            <li><strong>/æ/</strong> como en "cat" /kæt/ - Entre "a" y "e", con la boca más abierta</li>
            <li><strong>/ʌ/</strong> como en "cup" /kʌp/ - Como una "a" corta y central</li>
            <li><strong>/ʊ/</strong> como en "put" /pʊt/ - Más relajado que la "u" española</li>
            <li><strong>/ɒ/</strong> como en "hot" /hɒt/ - Como una "o" más abierta (inglés británico)</li>
            <li><strong>/ə/</strong> como en "about" /əˈbaʊt/ - Sonido neutro, muy común en sílabas no acentuadas</li>
          </ul>
          
          <h2 class="text-xl font-medium mt-6 mb-3">Vocales largas</h2>
          <p>Se indican con el símbolo ":" después de la vocal.</p>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>/i:/</strong> como en "see" /si:/ - Similar a la "i" española pero más larga</li>
            <li><strong>/ɑ:/</strong> como en "car" /kɑ:/ - Como una "a" larga y posterior</li>
            <li><strong>/ɔ:/</strong> como en "for" /fɔ:/ - Como una "o" más larga y redondeada</li>
            <li><strong>/u:/</strong> como en "boot" /bu:t/ - Similar a la "u" española pero más larga</li>
            <li><strong>/ɜ:/</strong> como en "bird" /bɜ:d/ - No existe en español, es una vocal central larga</li>
          </ul>
          
          <h2 class="text-xl font-medium mt-6 mb-3">Diptongos</h2>
          <p>Combinación de dos sonidos vocálicos en una sola sílaba.</p>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>/eɪ/</strong> como en "day" /deɪ/ - Similar a "ei" en español</li>
            <li><strong>/aɪ/</strong> como en "my" /maɪ/ - Similar a "ai" en español</li>
            <li><strong>/ɔɪ/</strong> como en "boy" /bɔɪ/ - Similar a "oi" en español</li>
            <li><strong>/əʊ/</strong> como en "go" /gəʊ/ - Inglés británico, similar a "ou"</li>
            <li><strong>/aʊ/</strong> como en "now" /naʊ/ - Similar a "au" en español</li>
            <li><strong>/ɪə/</strong> como en "here" /hɪə/ - No hay equivalente directo en español</li>
            <li><strong>/eə/</strong> como en "there" /ðeə/ - No hay equivalente directo en español</li>
            <li><strong>/ʊə/</strong> como en "tour" /tʊə/ - No hay equivalente directo en español</li>
          </ul>
          
          <h2 class="text-xl font-medium mt-6 mb-3">Consejos para practicar</h2>
          <ul class="list-disc pl-6 space-y-2">
            <li>Escucha atentamente los sonidos vocálicos en palabras pronunciadas por hablantes nativos</li>
            <li>Practica con pares mínimos (palabras que solo difieren en un sonido)</li>
            <li>Grábate y compara tu pronunciación con la de un hablante nativo</li>
            <li>Presta atención a la posición de tu boca, lengua y labios al pronunciar cada sonido</li>
            <li>Recuerda que algunas vocales en inglés son más largas que otras, lo que puede cambiar el significado</li>
          </ul>
        `,
        examples: [
          "Sheep /ʃiːp/ vs. Ship /ʃɪp/",
          "Cart /kɑːt/ vs. Cut /kʌt/",
          "Pool /puːl/ vs. Pull /pʊl/",
          "Bird /bɜːd/ vs. Bed /bed/",
          "Day /deɪ/ vs. Die /daɪ/"
        ],
        practice: [
          {
            question: "¿Qué sonido vocálico contiene la palabra 'ship'?",
            options: ["/i:/", "/ɪ/", "/e/", "/æ/"],
            correctAnswer: "/ɪ/"
          },
          {
            question: "¿Cuál de los siguientes es un diptongo?",
            options: ["/i:/", "/ɒ/", "/aɪ/", "/ʌ/"],
            correctAnswer: "/aɪ/"
          },
          {
            question: "¿Qué par de palabras contiene diferentes sonidos vocálicos?",
            options: ["cat - bat", "dog - log", "sheep - ship", "top - mop"],
            correctAnswer: "sheep - ship"
          },
          {
            question: "¿Qué sonido vocálico es más común en sílabas no acentuadas?",
            options: ["/ə/", "/ɑ:/", "/ɔ:/", "/æ/"],
            correctAnswer: "/ə/"
          },
          {
            question: "¿Cuál es la diferencia principal entre los sonidos /i:/ y /ɪ/?",
            options: ["Uno es nasal y el otro no", "Uno es largo y el otro corto", "Uno es consonante y el otro vocal", "No hay diferencia"],
            correctAnswer: "Uno es largo y el otro corto"
          }
        ],
        videoUrl: "https://d-id-talks-prod.s3.us-west-2.amazonaws.com/auth0%7C6595c6e4c13b6baef553e7e7/tlk_vUDSQaPU3kL3CiHCWsYbJ/1080p.mp4",
        videoPoster: "https://images.unsplash.com/photo-1516549655618-b9e447a17b9f?q=80&w=1000",
        videoCaption: "Profesora Emily explica los sonidos vocálicos en inglés"
      };
    case 'business-meetings':
      return {
        title: 'Reuniones de negocios en inglés',
        content: `
          <p>Las reuniones de negocios forman parte esencial del entorno laboral profesional. Dominar el vocabulario y las expresiones correctas te ayudará a comunicarte con confianza y efectividad.</p>
          
          <h2 class="text-xl font-medium mt-6 mb-3">Vocabulario esencial</h2>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>Agenda</strong> - Orden del día</li>
            <li><strong>Minutes</strong> - Acta de la reunión</li>
            <li><strong>Board meeting</strong> - Reunión del consejo</li>
            <li><strong>Briefing</strong> - Informe, puesta al día</li>
            <li><strong>Conference call</strong> - Llamada de conferencia</li>
            <li><strong>Deadline</strong> - Fecha límite</li>
            <li><strong>Stakeholders</strong> - Partes interesadas</li>
            <li><strong>Action items</strong> - Puntos de acción</li>
            <li><strong>Follow-up</strong> - Seguimiento</li>
            <li><strong>Decision-maker</strong> - Persona que toma decisiones</li>
          </ul>
          
          <h2 class="text-xl font-medium mt-6 mb-3">Iniciar una reunión</h2>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>Let's get started.</strong> - Empecemos.</li>
            <li><strong>Thank you all for coming today.</strong> - Gracias a todos por venir hoy.</li>
            <li><strong>The purpose of this meeting is to...</strong> - El propósito de esta reunión es...</li>
            <li><strong>I've called this meeting to discuss...</strong> - He convocado esta reunión para hablar sobre...</li>
            <li><strong>Let's go around the table and introduce ourselves.</strong> - Vamos a presentarnos uno por uno.</li>
            <li><strong>Has everyone received the agenda?</strong> - ¿Todo el mundo ha recibido el orden del día?</li>
          </ul>
          
          <h2 class="text-xl font-medium mt-6 mb-3">Durante la reunión</h2>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>Let's move on to the next item on the agenda.</strong> - Pasemos al siguiente punto del orden del día.</li>
            <li><strong>I'd like to add something to that.</strong> - Me gustaría añadir algo a eso.</li>
            <li><strong>Could you elaborate on that point?</strong> - ¿Podrías desarrollar ese punto?</li>
            <li><strong>If I could just come in here...</strong> - Si me permitís intervenir aquí...</li>
            <li><strong>Let's take a step back and look at the bigger picture.</strong> - Demos un paso atrás y veamos el panorama general.</li>
            <li><strong>To summarize what we've discussed so far...</strong> - Para resumir lo que hemos discutido hasta ahora...</li>
          </ul>
          
          <h2 class="text-xl font-medium mt-6 mb-3">Opiniones y sugerencias</h2>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>In my opinion...</strong> - En mi opinión...</li>
            <li><strong>I suggest we...</strong> - Sugiero que...</li>
            <li><strong>What if we tried...?</strong> - ¿Y si probáramos...?</li>
            <li><strong>I see your point, but have you considered...?</strong> - Entiendo tu punto, pero ¿has considerado...?</li>
            <li><strong>I'm not sure I agree with that because...</strong> - No estoy seguro de estar de acuerdo con eso porque...</li>
            <li><strong>That's an interesting approach.</strong> - Es un enfoque interesante.</li>
          </ul>
          
          <h2 class="text-xl font-medium mt-6 mb-3">Finalizar una reunión</h2>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>Let's wrap up.</strong> - Terminemos.</li>
            <li><strong>To summarize the main points...</strong> - Para resumir los puntos principales...</li>
            <li><strong>Let me go over the action items.</strong> - Repasemos los puntos de acción.</li>
            <li><strong>We need to follow up on...</strong> - Necesitamos hacer un seguimiento de...</li>
            <li><strong>Our next meeting will be on...</strong> - Nuestra próxima reunión será el...</li>
            <li><strong>Thank you for your participation.</strong> - Gracias por vuestra participación.</li>
          </ul>
        `,
        examples: [
          "Could we schedule a meeting to discuss the marketing strategy for next quarter?",
          "I'd like to add that we need to consider the budget constraints before making a decision.",
          "Let's set a deadline for this project. How about the end of the month?",
          "In my opinion, we should prioritize the European market for our initial launch.",
          "To summarize, we've agreed to increase the budget by 10% and extend the timeline by two weeks."
        ],
        practice: [
          {
            question: "¿Cuál es la forma correcta de iniciar una reunión?",
            options: ["So, let's talk.", "Let's get started with today's agenda.", "I'm here now.", "Why are we meeting?"],
            correctAnswer: "Let's get started with today's agenda."
          },
          {
            question: "¿Cómo pedirías a alguien que desarrolle más un punto durante una reunión?",
            options: ["Talk more.", "I don't understand.", "Could you elaborate on that point?", "Explain better."],
            correctAnswer: "Could you elaborate on that point?"
          },
          {
            question: "¿Qué significa 'action items' en el contexto de una reunión?",
            options: ["Objetos de acción", "Puntos de acción o tareas a realizar", "Elementos activos", "Acciones importantes"],
            correctAnswer: "Puntos de acción o tareas a realizar"
          },
          {
            question: "¿Cuál es una forma educada de expresar desacuerdo en una reunión?",
            options: ["You're wrong.", "That's a bad idea.", "I'm not sure I agree with that because...", "No, we can't do that."],
            correctAnswer: "I'm not sure I agree with that because..."
          },
          {
            question: "¿Cómo se dice 'acta de la reunión' en inglés?",
            options: ["Meeting notes", "Minutes", "Meeting paper", "Agenda"],
            correctAnswer: "Minutes"
          }
        ],
        videoUrl: "https://d-id-talks-prod.s3.us-west-2.amazonaws.com/auth0%7C6595c6e4c13b6baef553e7e7/tlk_3sXYoLRc70e5UmxoGHfxr/1080p.mp4",
        videoPoster: "https://images.unsplash.com/photo-1558403194-611308249627?q=80&w=1000",
        videoCaption: "Profesor Richard explica cómo conducir reuniones de negocios en inglés"
      };
    case 'shopping-phrases':
      return {
        title: 'De compras en inglés',
        content: `
          <p>Ir de compras es una actividad cotidiana cuando viajamos a un país angloparlante. Conocer las expresiones correctas te ayudará a desenvolverte mejor en tiendas, centros comerciales y mercados.</p>
          
          <h2 class="text-xl font-medium mt-6 mb-3">Vocabulario esencial</h2>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>Shop/Store</strong> - Tienda</li>
            <li><strong>Shopping mall/center</strong> - Centro comercial</li>
            <li><strong>Department store</strong> - Grandes almacenes</li>
            <li><strong>Receipt</strong> - Recibo</li>
            <li><strong>Cash register/Till</strong> - Caja registradora</li>
            <li><strong>Shop assistant/Sales assistant</strong> - Dependiente/a</li>
            <li><strong>Customer</strong> - Cliente</li>
            <li><strong>Shopping cart/trolley</strong> - Carrito de la compra</li>
            <li><strong>Shopping basket</strong> - Cesta de la compra</li>
            <li><strong>Bargain</strong> - Ganga</li>
            <li><strong>Sale</strong> - Rebajas</li>
            <li><strong>Discount</strong> - Descuento</li>
            <li><strong>Price tag</strong> - Etiqueta de precio</li>
            <li><strong>Fitting room/Changing room</strong> - Probador</li>
          </ul>
          
          <h2 class="text-xl font-medium mt-6 mb-3">Para pedir ayuda</h2>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>Excuse me, could you help me?</strong> - Disculpe, ¿podría ayudarme?</li>
            <li><strong>I'm looking for...</strong> - Estoy buscando...</li>
            <li><strong>Do you have this in a different color/size?</strong> - ¿Tiene esto en otro color/talla?</li>
            <li><strong>Where can I find...?</strong> - ¿Dónde puedo encontrar...?</li>
            <li><strong>I'm just browsing, thanks.</strong> - Solo estoy mirando, gracias.</li>
            <li><strong>Could you show me how this works?</strong> - ¿Podría mostrarme cómo funciona esto?</li>
          </ul>
          
          <h2 class="text-xl font-medium mt-6 mb-3">Preguntar sobre precios y pagos</h2>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>How much is this?</strong> - ¿Cuánto cuesta esto?</li>
            <li><strong>Is this on sale?</strong> - ¿Esto está en rebajas?</li>
            <li><strong>Do you offer any discounts?</strong> - ¿Ofrecen algún descuento?</li>
            <li><strong>Can I pay by credit card?</strong> - ¿Puedo pagar con tarjeta de crédito?</li>
            <li><strong>Do you take American Express?</strong> - ¿Aceptan American Express?</li>
            <li><strong>Can I have a receipt, please?</strong> - ¿Me da un recibo, por favor?</li>
          </ul>
          
          <h2 class="text-xl font-medium mt-6 mb-3">Ropa y calzado</h2>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>What size are you?</strong> - ¿Qué talla tienes?</li>
            <li><strong>Can I try this on?</strong> - ¿Puedo probarme esto?</li>
            <li><strong>Where are the fitting rooms?</strong> - ¿Dónde están los probadores?</li>
            <li><strong>This is too tight/loose.</strong> - Esto está demasiado ajustado/holgado.</li>
            <li><strong>Do you have these in a size 8?</strong> - ¿Tiene estos en talla 8?</li>
            <li><strong>These shoes don't fit me.</strong> - Estos zapatos no me quedan bien.</li>
          </ul>
          
          <h2 class="text-xl font-medium mt-6 mb-3">Devoluciones y cambios</h2>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>Can I return this if it doesn't fit?</strong> - ¿Puedo devolver esto si no me queda bien?</li>
            <li><strong>What's your return policy?</strong> - ¿Cuál es su política de devoluciones?</li>
            <li><strong>I'd like to exchange this for a different size.</strong> - Me gustaría cambiar esto por otra talla.</li>
            <li><strong>I've lost the receipt.</strong> - He perdido el recibo.</li>
            <li><strong>This is faulty/damaged.</strong> - Esto está defectuoso/dañado.</li>
            <li><strong>I'd like a refund, please.</strong> - Me gustaría un reembolso, por favor.</li>
          </ul>
        `,
        examples: [
          "Excuse me, do you have this shirt in medium?",
          "How much is this bag? Is it on sale?",
          "I'm just looking around, but thank you for offering help.",
          "Can I try these jeans on? Where are the fitting rooms?",
          "I'd like to return this jacket. It doesn't fit me properly."
        ],
        practice: [
          {
            question: "¿Cómo preguntarías el precio de un artículo?",
            options: ["What cost this?", "How is the price?", "How much is this?", "What's the value?"],
            correctAnswer: "How much is this?"
          },
          {
            question: "¿Cómo pedirías probarte una prenda de ropa?",
            options: ["I want to test this.", "Can I measure this?", "Can I try this on?", "Give me this to try."],
            correctAnswer: "Can I try this on?"
          },
          {
            question: "¿Qué dirías si solo estás mirando y no necesitas ayuda?",
            options: ["I'm just browsing, thanks.", "Don't talk to me.", "No help needed.", "I look only."],
            correctAnswer: "I'm just browsing, thanks."
          },
          {
            question: "¿Cómo preguntarías si aceptan tarjetas de crédito?",
            options: ["You take cards?", "Is plastic OK?", "Can I pay by credit card?", "Money or card?"],
            correctAnswer: "Can I pay by credit card?"
          },
          {
            question: "¿Cómo pedirías un recibo?",
            options: ["Paper please.", "Write my purchase.", "Can I have a receipt, please?", "Show me proof."],
            correctAnswer: "Can I have a receipt, please?"
          }
        ],
        videoUrl: "https://d-id-talks-prod.s3.us-west-2.amazonaws.com/auth0%7C6595c6e4c13b6baef553e7e7/tlk_LFwn13YdJdQpFUAhJkT3R/1080p.mp4",
        videoPoster: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000",
        videoCaption: "Profesora Jennifer explica frases útiles para ir de compras en inglés"
      };
    case 'writing-basics':
      return {
        title: 'Fundamentos de escritura en inglés',
        content: `
          <p>La escritura es una habilidad esencial para dominar cualquier idioma. Aprender a escribir correctamente en inglés te ayudará tanto en tu vida académica como profesional.</p>
          
          <h2 class="text-xl font-medium mt-6 mb-3">Estructura básica de una oración</h2>
          <p>Las oraciones en inglés generalmente siguen la estructura Sujeto + Verbo + Objeto (SVO):</p>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>I (S) read (V) books (O).</strong> - Yo leo libros.</li>
            <li><strong>She (S) loves (V) music (O).</strong> - Ella ama la música.</li>
            <li><strong>They (S) play (V) soccer (O).</strong> - Ellos juegan al fútbol.</li>
          </ul>
          
          <h2 class="text-xl font-medium mt-6 mb-3">Puntuación básica</h2>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>Period (.)</strong> - Punto. Se usa al final de una oración declarativa.</li>
            <li><strong>Question mark (?)</strong> - Signo de interrogación. Se usa al final de una pregunta.</li>
            <li><strong>Exclamation mark (!)</strong> - Signo de exclamación. Expresa emoción o énfasis.</li>
            <li><strong>Comma (,)</strong> - Coma. Separa elementos en una lista o partes de una oración.</li>
            <li><strong>Apostrophe (')</strong> - Apóstrofo. Indica posesión o contracción.</li>
          </ul>
          
          <h2 class="text-xl font-medium mt-6 mb-3">Uso de mayúsculas</h2>
          <p>En inglés se utilizan las mayúsculas en:</p>
          <ul class="list-disc pl-6 space-y-2">
            <li>La primera letra de una oración</li>
            <li>Los nombres propios (personas, lugares, marcas)</li>
            <li>El pronombre "I" (yo)</li>
            <li>Títulos de obras (libros, películas, canciones)</li>
            <li>Días de la semana y meses</li>
            <li>Nacionalidades e idiomas</li>
          </ul>
          
          <h2 class="text-xl font-medium mt-6 mb-3">Párrafos</h2>
          <p>Un párrafo bien estructurado debe contener:</p>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>Topic sentence</strong> - Oración temática que introduce la idea principal</li>
            <li><strong>Supporting sentences</strong> - Oraciones de apoyo que desarrollan la idea</li>
            <li><strong>Concluding sentence</strong> - Oración final que resume o cierra el párrafo</li>
          </ul>
          
          <h2 class="text-xl font-medium mt-6 mb-3">Tipos de textos</h2>
          
          <h3 class="text-lg font-medium mt-4 mb-2">Textos descriptivos</h3>
          <p>Describen personas, lugares, objetos o situaciones. Utilizan adjetivos y lenguaje sensorial.</p>
          
          <h3 class="text-lg font-medium mt-4 mb-2">Textos narrativos</h3>
          <p>Cuentan historias o eventos. Suelen seguir una secuencia cronológica (introducción, desarrollo, conclusión).</p>
          
          <h3 class="text-lg font-medium mt-4 mb-2">Textos expositivos</h3>
          <p>Presentan información objetiva sobre un tema. Se centran en hechos y datos.</p>
          
          <h3 class="text-lg font-medium mt-4 mb-2">Textos argumentativos</h3>
          <p>Presentan una opinión o punto de vista y argumentos para defenderlo.</p>
          
          <h2 class="text-xl font-medium mt-6 mb-3">Conectores comunes</h2>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>Secuencia:</strong> first, second, next, then, finally, eventually</li>
            <li><strong>Adición:</strong> and, also, in addition, furthermore, moreover</li>
            <li><strong>Contraste:</strong> but, however, although, nevertheless, despite</li>
            <li><strong>Causa-efecto:</strong> because, since, as a result, therefore, consequently</li>
            <li><strong>Ejemplos:</strong> for example, for instance, such as, including</li>
            <li><strong>Conclusión:</strong> in conclusion, to summarize, in summary, finally</li>
          </ul>
        `,
        examples: [
          "I enjoy learning English because it's an international language.",
          "Have you ever visited London? It's a beautiful city.",
          "First, add flour to the bowl. Then, mix in the eggs and sugar.",
          "My sister's car is red, but my brother's car is blue.",
          "The United States has fifty states, and Washington, D.C. is its capital."
        ],
        practice: [
          {
            question: "¿Cuál es la estructura básica de una oración en inglés?",
            options: ["Verbo + Sujeto + Objeto", "Sujeto + Objeto + Verbo", "Sujeto + Verbo + Objeto", "Objeto + Sujeto + Verbo"],
            correctAnswer: "Sujeto + Verbo + Objeto"
          },
          {
            question: "¿Qué signo de puntuación se usa al final de una pregunta?",
            options: ["Period (.)", "Comma (,)", "Exclamation mark (!)", "Question mark (?)"],
            correctAnswer: "Question mark (?)"
          },
          {
            question: "¿Cuál de las siguientes palabras debe escribirse siempre con mayúscula en inglés?",
            options: ["car", "book", "monday", "apple"],
            correctAnswer: "monday"
          },
          {
            question: "¿Qué signo se utiliza para indicar posesión en inglés?",
            options: ["Colon (:)", "Apostrophe (')", "Hyphen (-)", "Semicolon (;)"],
            correctAnswer: "Apostrophe (')"
          },
          {
            question: "¿Cuál es el primer elemento de un párrafo bien estructurado?",
            options: ["Supporting sentence", "Topic sentence", "Concluding sentence", "Transition sentence"],
            correctAnswer: "Topic sentence"
          },
          {
            question: "¿Qué tipo de texto utilizaría principalmente adjetivos y lenguaje sensorial?",
            options: ["Argumentativo", "Descriptivo", "Expositivo", "Narrativo"],
            correctAnswer: "Descriptivo"
          },
          {
            question: "¿Qué conector indicaría contraste entre dos ideas?",
            options: ["Furthermore", "Therefore", "However", "Finally"],
            correctAnswer: "However"
          },
          {
            question: "En una lista de elementos separados por comas, ¿qué se coloca antes del último elemento en inglés?",
            options: ["And", "Plus", "Or", "With"],
            correctAnswer: "And"
          }
        ],
        videoUrl: "https://d-id-talks-prod.s3.us-west-2.amazonaws.com/auth0%7C6595c6e4c13b6baef553e7e7/tlk_-Tsg9vbMKfScWFgkFrHjC/1080p.mp4",
        videoPoster: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1000",
        videoCaption: "Profesor Andrew explica los fundamentos de escritura en inglés"
      };
    case 'email-writing':
      return {
        title: 'Escribir emails en inglés',
        content: `
          <p>La comunicación por email es una habilidad esencial en el mundo actual, tanto en contextos profesionales como personales. Aprender a escribir emails efectivos en inglés te ayudará a comunicarte con claridad y profesionalismo.</p>
          
          <h2 class="text-xl font-medium mt-6 mb-3">Estructura básica de un email</h2>
          
          <h3 class="text-lg font-medium mt-4 mb-2">1. Línea de asunto (Subject line)</h3>
          <p>Debe ser clara, concisa y relevante. Indica el propósito o tema principal del email.</p>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>Meeting Request: Project X Discussion</strong></li>
            <li><strong>Inquiry about Job Opening #12345</strong></li>
            <li><strong>Confirmation of Your Order #678</strong></li>
          </ul>
          
          <h3 class="text-lg font-medium mt-4 mb-2">2. Saludo (Greeting)</h3>
          <p><strong>Formal:</strong></p>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>Dear Mr./Ms./Dr. [Apellido],</strong></li>
            <li><strong>Dear Sir/Madam,</strong> (cuando no conoces el nombre)</li>
            <li><strong>To Whom It May Concern,</strong> (muy formal, para comunicaciones generales)</li>
          </ul>
          
          <p><strong>Semi-formal:</strong></p>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>Dear [Nombre],</strong></li>
            <li><strong>Hello [Nombre],</strong></li>
          </ul>
          
          <p><strong>Informal:</strong></p>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>Hi [Nombre],</strong></li>
            <li><strong>Hey [Nombre],</strong></li>
            <li><strong>Morning/Afternoon/Evening,</strong></li>
          </ul>
          
          <h3 class="text-lg font-medium mt-4 mb-2">3. Introducción</h3>
          <p>Una breve presentación del motivo del email.</p>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>I am writing to inquire about...</strong></li>
            <li><strong>I hope this email finds you well. I'm contacting you regarding...</strong></li>
            <li><strong>Thank you for your email of [fecha] concerning...</strong></li>
            <li><strong>I'm writing in response to your request for...</strong></li>
          </ul>
          
          <h3 class="text-lg font-medium mt-4 mb-2">4. Cuerpo del email</h3>
          <p>Desarrolla el contenido principal de tu mensaje. Mantén los párrafos cortos y centrados en un tema cada uno. Usa listas con viñetas si tienes varios puntos que mencionar.</p>
          
          <h3 class="text-lg font-medium mt-4 mb-2">5. Cierre</h3>
          <p>Una conclusión que indique el siguiente paso o acción esperada.</p>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>I look forward to hearing from you soon.</strong></li>
            <li><strong>Please let me know if you need any further information.</strong></li>
            <li><strong>I would appreciate your response by [fecha].</strong></li>
            <li><strong>Thank you for your attention to this matter.</strong></li>
          </ul>
          
          <h3 class="text-lg font-medium mt-4 mb-2">6. Despedida (Closing)</h3>
          <p><strong>Formal:</strong></p>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>Yours sincerely,</strong> (si conoces el nombre del destinatario)</li>
            <li><strong>Yours faithfully,</strong> (si no conoces el nombre del destinatario)</li>
            <li><strong>Respectfully,</strong></li>
            <li><strong>Sincerely,</strong></li>
          </ul>
          
          <p><strong>Semi-formal/Informal:</strong></p>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>Kind regards,</strong></li>
            <li><strong>Best regards,</strong></li>
            <li><strong>Best wishes,</strong></li>
            <li><strong>Regards,</strong></li>
            <li><strong>Thanks,</strong></li>
            <li><strong>Cheers,</strong> (informal, principalmente en contextos británicos)</li>
          </ul>
          
          <h3 class="text-lg font-medium mt-4 mb-2">7. Firma (Signature)</h3>
          <p>Tu nombre completo, cargo, empresa, información de contacto (según corresponda)</p>
          
          <h2 class="text-xl font-medium mt-6 mb-3">Consejos para escribir emails efectivos</h2>
          <ul class="list-disc pl-6 space-y-2">
            <li>Sé claro y conciso. Evita los párrafos largos y las oraciones complicadas.</li>
            <li>Revisa la ortografía y gramática antes de enviar.</li>
            <li>Adapta el tono según el destinatario y el contexto (formal, semi-formal, informal).</li>
            <li>Responde a los emails de manera oportuna, preferiblemente dentro de las 24-48 horas.</li>
            <li>Usa un formato apropiado (fuente legible, tamaño adecuado, párrafos separados).</li>
            <li>Evita el uso excesivo de mayúsculas (equivale a gritar).</li>
            <li>Incluye un asunto claro y relevante.</li>
          </ul>
        `,
        examples: [
          "Subject: Meeting Request: Project Updates\n\nDear Ms. Johnson,\n\nI hope this email finds you well. I'm writing to request a meeting to discuss the recent developments in Project X.\n\nWould you be available for a 30-minute meeting next Tuesday at 10:00 AM? If this time doesn't work for you, please suggest an alternative time that fits your schedule.\n\nThank you for your consideration.\n\nBest regards,\nJohn Smith\nProject Manager",
          "Subject: Thank You for Your Presentation\n\nHi David,\n\nI just wanted to thank you for your excellent presentation yesterday. The information you shared about market trends was particularly insightful and will be very helpful for our upcoming strategy planning.\n\nI've shared your slides with my team, and we'd love to discuss some potential collaboration opportunities soon.\n\nThanks again,\nSarah",
          "Subject: Job Application - Marketing Specialist Position\n\nDear Hiring Manager,\n\nI am writing to apply for the Marketing Specialist position (Job ID: 54321) as advertised on your company website.\n\nWith over five years of experience in digital marketing and a Master's degree in Marketing Communications, I believe I have the skills and qualifications that would make me a strong candidate for this role.\n\nPlease find attached my resume and portfolio for your consideration.\n\nI look forward to the opportunity to discuss how my experience aligns with your needs.\n\nSincerely,\nMichael Brown",
          "Subject: Invoice #12345 Payment Confirmation\n\nDear Mr. Thompson,\n\nThank you for your prompt payment of Invoice #12345 dated May 15, 2023.\n\nThis email serves as confirmation that we have received your payment of $1,500 and your account is now up to date.\n\nIf you have any questions about your account, please don't hesitate to contact our accounting department.\n\nKind regards,\nEmma Wilson\nAccounts Receivable"
        ],
        practice: [
          {
            question: "¿Cuál es la mejor línea de asunto para un email solicitando información sobre un producto?",
            options: ["Hello", "Information", "Inquiry about Product XYZ", "I need info"],
            correctAnswer: "Inquiry about Product XYZ"
          },
          {
            question: "¿Qué saludo es más apropiado para un email formal a alguien cuyo nombre no conoces?",
            options: ["Hi there,", "Hey,", "Dear Sir/Madam,", "Hello friend,"],
            correctAnswer: "Dear Sir/Madam,"
          },
          {
            question: "¿Cuál de las siguientes es una forma apropiada de comenzar un email formal?",
            options: ["What's up?", "I am writing to inquire about...", "Just wanted to check...", "Quick question for you..."],
            correctAnswer: "I am writing to inquire about..."
          },
          {
            question: "¿Qué despedida es más adecuada para un email de negocios semi-formal?",
            options: ["Love,", "Yours faithfully,", "Best regards,", "See ya,"],
            correctAnswer: "Best regards,"
          },
          {
            question: "¿Cuál es un buen cierre para un email en el que esperas una respuesta?",
            options: ["Goodbye.", "That's all for now.", "I look forward to hearing from you soon.", "End of message."],
            correctAnswer: "I look forward to hearing from you soon."
          },
          {
            question: "En un email formal, ¿qué información debe incluir la firma?",
            options: ["Solo tu nombre", "Tu nombre y fecha de nacimiento", "Tu nombre, cargo, empresa y datos de contacto", "Tu dirección completa"],
            correctAnswer: "Tu nombre, cargo, empresa y datos de contacto"
          },
          {
            question: "¿Cuál de estos es un error común al escribir emails?",
            options: ["Revisar la ortografía antes de enviar", "Incluir un asunto claro", "ESCRIBIR PÁRRAFOS ENTEROS EN MAYÚSCULAS", "Mantener los párrafos breves"],
            correctAnswer: "ESCRIBIR PÁRRAFOS ENTEROS EN MAYÚSCULAS"
          },
          {
            question: "¿Cuál es el tiempo recomendado para responder a un email profesional?",
            options: ["Inmediatamente", "Dentro de 24-48 horas", "En una semana", "Cuando tengas tiempo"],
            correctAnswer: "Dentro de 24-48 horas"
          }
        ],
        videoUrl: "https://d-id-talks-prod.s3.us-west-2.amazonaws.com/auth0%7C6595c6e4c13b6baef553e7e7/tlk_A8nDSiOCEYQw79qWzY0J2/1080p.mp4",
        videoPoster: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=1000",
        videoCaption: "Profesora Olivia explica cómo escribir emails efectivos en inglés"
      };
    
    default:
      return {
        title: 'Lección no encontrada',
        content: '<p>Lo sentimos, el contenido de esta lección no está disponible.</p>',
        examples: [],
        practice: [],
        videoUrl: "https://d-id-talks-prod.s3.us-west-2.amazonaws.com/auth0%7C6595c6e4c13b6baef553e7e7/tlk_dv5xNEUuMvnQgcOWaPGVj/1080p.mp4",
        videoPoster: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=1000",
        videoCaption: "Lección no encontrada"
      };
  }
}
