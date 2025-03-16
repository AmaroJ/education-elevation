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
        videoUrl: "https://storage.googleapis.com/my-english-videos/greetings-intro.mp4",
        videoPoster: "https://storage.googleapis.com/my-english-videos/greetings-poster.jpg",
        videoCaption: "Aprende los saludos básicos en inglés"
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
        videoUrl: "https://storage.googleapis.com/my-english-videos/introductions.mp4",
        videoPoster: "https://storage.googleapis.com/my-english-videos/introductions-poster.jpg",
        videoCaption: "Cómo iniciar y mantener conversaciones en inglés"
      };
    case 'daily-routines':
      return {
        title: 'Rutinas diarias en inglés',
        content: `
          <p>Hablar sobre nuestras rutinas diarias es algo muy común en las conversaciones cotidianas. Aprender el vocabulario y las estructuras para describir lo que hacemos regularmente te ayudará a mantener conversaciones más fluidas.</p>
          
          <h2 class="text-xl font-medium mt-6 mb-3">Vocabulario relacionado con rutinas diarias</h2>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>Wake up</strong> - Despertarse</li>
            <li><strong>Get up</strong> - Levantarse</li>
            <li><strong>Take a shower</strong> - Ducharse</li>
            <li><strong>Brush your teeth</strong> - Cepillarse los dientes</li>
            <li><strong>Get dressed</strong> - Vestirse</li>
            <li><strong>Have breakfast/lunch/dinner</strong> - Desayunar/almorzar/cenar</li>
            <li><strong>Go to work/school</strong> - Ir al trabajo/escuela</li>
            <li><strong>Start work/class</strong> - Empezar a trabajar/la clase</li>
            <li><strong>Take a break</strong> - Tomar un descanso</li>
            <li><strong>Finish work/class</strong> - Terminar de trabajar/la clase</li>
            <li><strong>Go home</strong> - Ir a casa</li>
            <li><strong>Cook dinner</strong> - Preparar la cena</li>
            <li><strong>Watch TV</strong> - Ver televisión</li>
            <li><strong>Go to bed</strong> - Irse a la cama</li>
          </ul>
          
          <h2 class="text-xl font-medium mt-6 mb-3">Expresiones de tiempo</h2>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>In the morning/afternoon/evening</strong> - Por la mañana/tarde/noche</li>
            <li><strong>At night</strong> - Por la noche</li>
            <li><strong>At [hora]</strong> - A las [hora]</li>
            <li><strong>Every day</strong> - Todos los días</li>
            <li><strong>Once/twice/three times a week</strong> - Una vez/dos veces/tres veces por semana</li>
            <li><strong>On weekdays</strong> - Entre semana</li>
            <li><strong>On weekends</strong> - Los fines de semana</li>
          </ul>
          
          <h2 class="text-xl font-medium mt-6 mb-3">Presente simple para rutinas</h2>
          <p>Para hablar de rutinas usamos el presente simple. Recuerda que en la tercera persona singular (he/she/it) el verbo lleva una 's' al final.</p>
          
          <p class="mt-4">Ejemplos:</p>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>I wake up at 7:00.</strong> - Me despierto a las 7:00.</li>
            <li><strong>She wakes up at 7:00.</strong> - Ella se despierta a las 7:00.</li>
            <li><strong>We have breakfast at 8:00.</strong> - Desayunamos a las 8:00.</li>
            <li><strong>He has breakfast at 8:00.</strong> - Él desayuna a las 8:00.</li>
          </ul>
        `,
        examples: [
          "I usually wake up at 6:30 AM on weekdays.",
          "After breakfast, I brush my teeth and get dressed.",
          "She takes the bus to work every morning.",
          "We have lunch in the cafeteria at 1 PM.",
          "On weekends, they often go to the cinema in the evening."
        ],
        practice: [
          {
            question: "¿Cómo se dice 'Despertarse'?",
            options: ["Get up", "Wake up", "Stand up", "Go up"],
            correctAnswer: "Wake up"
          },
          {
            question: "Completa la frase: 'I ___ breakfast at 8:00 AM.'",
            options: ["do", "make", "have", "take"],
            correctAnswer: "have"
          },
          {
            question: "¿Qué opción describe correctamente la rutina de María? 'María ___ at 7:00 AM.'",
            options: ["wake up", "wakes up", "waking up", "waked up"],
            correctAnswer: "wakes up"
          },
          {
            question: "¿Cómo expresarías 'Yo voy al trabajo todos los días'?",
            options: ["I going to work every day.", "I goes to work every day.", "I go to work every day.", "I am go to work every day."],
            correctAnswer: "I go to work every day."
          },
          {
            question: "¿Cuál es la forma correcta de decir 'Ver la televisión'?",
            options: ["Look TV", "See TV", "Watch TV", "View TV"],
            correctAnswer: "Watch TV"
          }
        ],
        videoUrl: "https://storage.googleapis.com/my-english-videos/daily-routines.mp4",
        videoPoster: "https://storage.googleapis.com/my-english-videos/daily-routines-poster.jpg",
        videoCaption: "Vocabulario y expresiones para describir tu rutina diaria"
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
        videoUrl: "https://storage.googleapis.com/my-english-videos/restaurant-ordering.mp4",
        videoPoster: "https://storage.googleapis.com/my-english-videos/restaurant-poster.jpg",
        videoCaption: "Cómo pedir comida en un restaurante correctamente"
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
          }
        ],
        videoUrl: "https://storage.googleapis.com/my-english-videos/writing-basics.mp4",
        videoPoster: "https://storage.googleapis.com/my-english-videos/writing-poster.jpg",
        videoCaption: "Fundamentos de escritura en inglés"
      };
    default:
      return {
        title: 'Lección no encontrada',
        content: '<p>Lo sentimos, el contenido de esta lección no está disponible.</p>',
        examples: [],
        practice: []
      };
  }
}
