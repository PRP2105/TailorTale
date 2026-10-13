export interface BookVector {
  pacing: number; // -1.0 (Slow-burn/Atmospheric) to +1.0 (Fast-paced/Breakneck)
  tone: number; // -1.0 (Dark/Gritty/Melancholy) to +1.0 (Uplifting/Warm/Cosy)
  setting: number; // -1.0 (Realistic/Contemporary) to +1.0 (Fantasy/Sci-Fi/Speculative)
  characterFocus: number; // -1.0 (Plot-driven/Puzzle) to +1.0 (Deep psychology/Character-driven)
}

export interface Book {
  id: string;
  title: string;
  author: string;
  year: number;
  pitch: string;
  vector: BookVector;
  tropes: string[];
  tags: string[];
  coverGradient: {
    from: string;
    to: string;
    accent: string;
    pattern: 'minimal' | 'arch' | 'circles' | 'stripe';
  };
}

export const BOOKS_CATALOGUE: Book[] = [
  {
    id: 'secret-history',
    title: 'The Secret History',
    author: 'Donna Tartt',
    year: 1992,
    pitch: 'An obsessive group of classics students in Vermont discover how far they will go to protect their aesthetic secret.',
    vector: {
      pacing: -0.6,
      tone: -0.8,
      setting: -0.9,
      characterFocus: 0.9,
    },
    tropes: ['Dark Academia', 'Morally Grey Heroes', 'Secret History', 'Slow-Burn Mystery'],
    tags: ['Atmospheric', 'Psychological', 'Campus', 'Intellectual Drama'],
    coverGradient: {
      from: '#1F2A44',
      to: '#0D1527',
      accent: '#FFD23F',
      pattern: 'arch',
    },
  },
  {
    id: 'project-hail-mary',
    title: 'Project Hail Mary',
    author: 'Andy Weir',
    year: 2021,
    pitch: 'A lone astronaut wakes up with amnesia on an interstellar ship and must solve humanity extinction puzzle with an unlikely alien buddy.',
    vector: {
      pacing: 0.8,
      tone: 0.7,
      setting: 0.9,
      characterFocus: -0.4,
    },
    tropes: ['Found Family', 'Space Opera', 'Science Survival', 'Humour'],
    tags: ['Fast-paced', 'Hard Sci-Fi', 'Hopeful', 'Problem Solving'],
    coverGradient: {
      from: '#0E3A40',
      to: '#19B5A5',
      accent: '#FFD23F',
      pattern: 'circles',
    },
  },
  {
    id: 'deadly-education',
    title: 'A Deadly Education',
    author: 'Naomi Novik',
    year: 2020,
    pitch: 'A lethal magic boarding school with no teachers where survival is the only graduation requirement, starring a delightfully grumpy sorceress.',
    vector: {
      pacing: 0.7,
      tone: -0.5,
      setting: 0.85,
      characterFocus: 0.6,
    },
    tropes: ['Morally Grey Heroes', 'Enemies to Lovers', 'Dark Academia', 'Survival'],
    tags: ['Fast-paced', 'Dark Fantasy', 'Snarky Protagonist', 'High Stakes'],
    coverGradient: {
      from: '#361D4C',
      to: '#1A0E2E',
      accent: '#19B5A5',
      pattern: 'minimal',
    },
  },
  {
    id: 'house-cerulean-sea',
    title: 'The House in the Cerulean Sea',
    author: 'TJ Klune',
    year: 2020,
    pitch: 'A rigid caseworker is dispatched to inspect a classified orphanage of extraordinary children on an island and learns what true belonging means.',
    vector: {
      pacing: -0.4,
      tone: 0.95,
      setting: 0.5,
      characterFocus: 0.8,
    },
    tropes: ['Found Family', 'Cosy Fantasy', 'Wholesome Romance', 'Bureaucrat Awakened'],
    tags: ['Slow & Cosy', 'Heartwarming', 'Comfort Read', 'Magical Realism'],
    coverGradient: {
      from: '#19B5A5',
      to: '#73D7CD',
      accent: '#FFD23F',
      pattern: 'circles',
    },
  },
  {
    id: 'before-coffee-cold',
    title: 'Before the Coffee Gets Cold',
    author: 'Toshikazu Kawaguchi',
    year: 2015,
    pitch: 'In a quiet Tokyo alley, an ancient café offers customers the chance to travel back in time, provided they return before the coffee turns cold.',
    vector: {
      pacing: -0.7,
      tone: 0.3,
      setting: -0.3,
      characterFocus: 0.85,
    },
    tropes: ['Cosy Fantasy', 'Emotional Healing', 'Bittersweet', 'Time Travel Rules'],
    tags: ['Gentle Pacing', 'Character Study', 'Reflective', 'Tokyo Setting'],
    coverGradient: {
      from: '#8C5E45',
      to: '#4A2E1F',
      accent: '#E6FAF5',
      pattern: 'stripe',
    },
  },
  {
    id: 'six-of-crows',
    title: 'Six of Crows',
    author: 'Leigh Bardugo',
    year: 2015,
    pitch: 'Criminal mastermind Kaz Brekker leads six dangerous outcasts on an impossible heist inside the world most impenetrable ice fortress.',
    vector: {
      pacing: 0.85,
      tone: -0.4,
      setting: 0.75,
      characterFocus: 0.7,
    },
    tropes: ['Found Family', 'Morally Grey Heroes', 'Heist', 'Slow-Burn Romance'],
    tags: ['Breakneck', 'Fantasy Noir', 'Multi-POV', 'Clever Strategy'],
    coverGradient: {
      from: '#262833',
      to: '#121319',
      accent: '#FFD23F',
      pattern: 'arch',
    },
  },
  {
    id: 'tomorrow-and-tomorrow',
    title: 'Tomorrow, and Tomorrow, and Tomorrow',
    author: 'Gabrielle Zevin',
    year: 2022,
    pitch: 'Two childhood friends reunite in college to build video games, navigating fame, identity, love, and decades of creative obsession.',
    vector: {
      pacing: -0.2,
      tone: 0.1,
      setting: -0.95,
      characterFocus: 0.95,
    },
    tropes: ['Creative Partnership', 'Slow-Burn Mystery', 'Bittersweet Realism', 'Found Family'],
    tags: ['Character-driven', 'Realistic Fiction', 'Intimate', 'Gaming Culture'],
    coverGradient: {
      from: '#1C3A5E',
      to: '#2E6F9E',
      accent: '#FFD23F',
      pattern: 'circles',
    },
  },
  {
    id: 'thursday-murder-club',
    title: 'The Thursday Murder Club',
    author: 'Richard Osman',
    year: 2020,
    pitch: 'Four septuagenarians living in a peaceful retirement village investigate unsolved cold cases until a live murder lands right on their doorstep.',
    vector: {
      pacing: 0.1,
      tone: 0.8,
      setting: -0.9,
      characterFocus: 0.75,
    },
    tropes: ['Slow-Burn Mystery', 'Found Family', 'Cosy Whodunit', 'British Wit'],
    tags: ['Charming', 'Puzzle-driven', 'Humorous', 'Clever Elderly Sleuths'],
    coverGradient: {
      from: '#2A4D69',
      to: '#4B86B4',
      accent: '#FFD23F',
      pattern: 'stripe',
    },
  },
  {
    id: 'all-systems-red',
    title: 'All Systems Red',
    author: 'Martha Wells',
    year: 2017,
    pitch: 'A security synthetic android that hacks its own governor module just wants to watch soap operas in peace, but must keep its human clients alive.',
    vector: {
      pacing: 0.9,
      tone: 0.2,
      setting: 0.95,
      characterFocus: 0.5,
    },
    tropes: ['Space Opera', 'Morally Grey Heroes', 'Reluctant Protector', 'Found Family'],
    tags: ['Punchy Novella', 'Sci-Fi Action', 'Witty Monologue', 'Heartwarming'],
    coverGradient: {
      from: '#0C2D37',
      to: '#186073',
      accent: '#19B5A5',
      pattern: 'minimal',
    },
  },
  {
    id: 'klara-and-the-sun',
    title: 'Klara and the Sun',
    author: 'Kazuo Ishiguro',
    year: 2021,
    pitch: 'Klara, an Artificial Friend with remarkable observational abilities, watches the human world from her store window and wonders what it means to love.',
    vector: {
      pacing: -0.8,
      tone: -0.3,
      setting: 0.2,
      characterFocus: 0.95,
    },
    tropes: ['Philosophical Sci-Fi', 'Bittersweet Realism', 'Quiet Devotion', 'Morally Grey Heroes'],
    tags: ['Deeply Reflective', 'Nobel Laureate', 'Poignant', 'Subtle Dystopia'],
    coverGradient: {
      from: '#D97724',
      to: '#8F440B',
      accent: '#FFD23F',
      pattern: 'circles',
    },
  },
  {
    id: 'song-of-achilles',
    title: 'The Song of Achilles',
    author: 'Madeline Miller',
    year: 2011,
    pitch: 'A lyrical, breathtaking reimagining of the Iliad tracing the bond between awkward prince Patroclus and golden demigod Achilles.',
    vector: {
      pacing: -0.3,
      tone: -0.6,
      setting: 0.4,
      characterFocus: 0.9,
    },
    tropes: ['Slow-Burn Mystery', 'Mythic Tragedy', 'Soulmates', 'Found Family'],
    tags: ['Poetic Prose', 'Greek Mythology', 'Emotional', 'Character-first'],
    coverGradient: {
      from: '#8B4513',
      to: '#4A1D0B',
      accent: '#FFD23F',
      pattern: 'arch',
    },
  },
  {
    id: 'red-white-royal-blue',
    title: 'Red, White & Royal Blue',
    author: 'Casey McQuiston',
    year: 2019,
    pitch: 'America First Son and Britain Prince Henry stage a fake diplomatic friendship after a public scuffle, sparking secret transatlantic feelings.',
    vector: {
      pacing: 0.75,
      tone: 0.85,
      setting: -0.9,
      characterFocus: 0.65,
    },
    tropes: ['Enemies to Lovers', 'Found Family', 'Banter', 'Political Rom-Com'],
    tags: ['Fast-paced', 'Witty Dialogue', 'Feel-good', 'Contemporary'],
    coverGradient: {
      from: '#D1345B',
      to: '#345995',
      accent: '#FFD23F',
      pattern: 'stripe',
    },
  },
];
