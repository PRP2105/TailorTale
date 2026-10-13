import { BookVector } from './books';

export interface QuizOption {
  id: string;
  label: string;
  scenario: string;
  subtext: string;
  iconName: string;
  vectorImpact: Partial<BookVector>;
  tropes: string[];
  tags: string[];
}

export interface QuizQuestion {
  id: number;
  prompt: string;
  context: string;
  dimensionLabel: string;
  options: QuizOption[];
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    prompt: "It's a rainy Sunday afternoon. What kind of story pulls you in?",
    context: 'Choosing your reading rhythm & pacing',
    dimensionLabel: 'Pacing Preference',
    options: [
      {
        id: 'q1-fast',
        label: 'A breakneck chase through a neon city at night',
        scenario: 'High-octane excitement where every chapter ends on a cliffhanger.',
        subtext: 'I want quick chapters, heart-pounding tension, and impossible stakes.',
        iconName: 'Zap',
        vectorImpact: { pacing: 0.85, characterFocus: -0.3 },
        tropes: ['Morally Grey Heroes', 'Heist'],
        tags: ['Fast-paced', 'High Stakes'],
      },
      {
        id: 'q1-slow',
        label: 'A slow-burn story about a family guarding an old secret',
        scenario: 'Richly layered atmosphere where quiet conversations hide immense gravity.',
        subtext: 'I want to sink into the mood, understand the characters, and savour every line.',
        iconName: 'Coffee',
        vectorImpact: { pacing: -0.85, characterFocus: 0.8 },
        tropes: ['Found Family', 'Slow-Burn Mystery'],
        tags: ['Atmospheric', 'Character-driven'],
      },
      {
        id: 'q1-mystery',
        label: 'A witty, tea-sipping murder mystery with clever clues',
        scenario: 'Balanced rhythm filled with dry humour and puzzling clues you can solve along.',
        subtext: 'Give me a cosy intellectual puzzle with quirky suspects.',
        iconName: 'Compass',
        vectorImpact: { pacing: 0.1, tone: 0.6, characterFocus: 0.6 },
        tropes: ['Cosy Whodunit', 'British Wit'],
        tags: ['Puzzle-driven', 'Clever'],
      },
    ],
  },
  {
    id: 2,
    prompt: 'When it comes to characters, who do you find yourself rooting for?',
    context: 'Understanding your empathy and character compass',
    dimensionLabel: 'Protagonist Dynamics',
    options: [
      {
        id: 'q2-grey',
        label: 'Morally grey schemers with sharp tongues and wounded hearts',
        scenario: 'Characters who cross lines, keep dirty secrets, but protect their inner circle at all costs.',
        subtext: 'Flawed, complex antiheroes are far more interesting than knights in shining armour.',
        iconName: 'Flame',
        vectorImpact: { tone: -0.6, characterFocus: 0.9 },
        tropes: ['Morally Grey Heroes', 'Dark Academia', 'Enemies to Lovers'],
        tags: ['Complex Psychology', 'Snarky Protagonist'],
      },
      {
        id: 'q2-warm',
        label: 'A ragtag bunch of misfits who become each other’s chosen family',
        scenario: 'Vulnerable souls who find home, loyalty, and fierce mutual protection.',
        subtext: 'I want deep emotional bonds, heartwarming banter, and wholesome devotion.',
        iconName: 'HeartHandshake',
        vectorImpact: { tone: 0.8, characterFocus: 0.85 },
        tropes: ['Found Family', 'Cosy Fantasy'],
        tags: ['Emotional Depth', 'Heartwarming'],
      },
      {
        id: 'q2-sharp',
        label: 'An ingenious underdog armed solely with brainpower and grit',
        scenario: 'A lone thinker or scientist engineering their way out of a hopeless scenario.',
        subtext: 'I love sharp dialogue, clever thinking, and triumphant human ingenuity.',
        iconName: 'Sparkles',
        vectorImpact: { tone: 0.5, characterFocus: 0.2 },
        tropes: ['Space Opera', 'Science Survival'],
        tags: ['Clever Strategy', 'Hopeful'],
      },
    ],
  },
  {
    id: 3,
    prompt: 'Where would your ideal story transport you right now?',
    context: 'Selecting your world & setting',
    dimensionLabel: 'World Immersion',
    options: [
      {
        id: 'q3-real',
        label: 'The real world: messy colleges, quiet cafés, or bustling cities',
        scenario: 'Grounding realism where emotional truths and relatable life dilemmas hit close to home.',
        subtext: 'Contemporary realism that feels raw, honest, and painfully true to life.',
        iconName: 'Building2',
        vectorImpact: { setting: -0.9 },
        tropes: ['Slow-Burn Mystery', 'Bittersweet Realism'],
        tags: ['Realistic Fiction', 'Contemporary'],
      },
      {
        id: 'q3-fantasy',
        label: 'A spellbinding realm of ancient magic, curses, and grand lore',
        scenario: 'Intricately built magic systems, high fantasy kingdoms, or hidden arcane libraries.',
        subtext: 'Transport me completely away from reality into boundless wonder.',
        iconName: 'Wand2',
        vectorImpact: { setting: 0.9, tone: 0.1 },
        tropes: ['Cosy Fantasy', 'Enemies to Lovers', 'Dark Academia'],
        tags: ['High Fantasy', 'Mythic Lore'],
      },
      {
        id: 'q3-scifi',
        label: 'Deep space vessels, rogue cyborgs, or uncanny future horizons',
        scenario: 'Speculative worlds questioning consciousness, human future, and interstellar secrets.',
        subtext: 'Expand my mind with mind-bending science and thrilling exploration.',
        iconName: 'Rocket',
        vectorImpact: { setting: 0.9, pacing: 0.6 },
        tropes: ['Space Opera', 'Philosophical Sci-Fi'],
        tags: ['Sci-Fi Action', 'Speculative'],
      },
    ],
  },
  {
    id: 4,
    prompt: 'How dark or sunny do you like your emotional palette?',
    context: 'Calibrating the story emotional temperature',
    dimensionLabel: 'Emotional Atmosphere',
    options: [
      {
        id: 'q4-comfort',
        label: 'Warm, hopeful, and comforting — like a warm chai in winter',
        scenario: 'A safe haven book that leaves you smiling and feeling lighter about the world.',
        subtext: 'Life is stressful enough; I want comfort, laughter, and uplifting resolutions.',
        iconName: 'Sun',
        vectorImpact: { tone: 0.95 },
        tropes: ['Cosy Fantasy', 'Found Family'],
        tags: ['Comfort Read', 'Feel-good', 'Hopeful'],
      },
      {
        id: 'q4-dark',
        label: 'Gothic, eerie, and psychological — keep me guessing and uneasy',
        scenario: 'Shadows in stone hallways, moral rot beneath elite polish, and tragic tension.',
        subtext: 'I want philosophical weight, haunting atmosphere, and emotional stakes.',
        iconName: 'Moon',
        vectorImpact: { tone: -0.9 },
        tropes: ['Dark Academia', 'Morally Grey Heroes', 'Slow-Burn Mystery'],
        tags: ['Atmospheric', 'Haunting', 'Gothic'],
      },
    ],
  },
  {
    id: 5,
    prompt: 'Which of these dynamic relationships makes you turn pages until 3 AM?',
    context: 'Pinpointing your signature narrative trope',
    dimensionLabel: 'Narrative Dynamic',
    options: [
      {
        id: 'q5-rivals',
        label: 'Enemies with electrifying banter who begrudgingly respect each other',
        scenario: 'Fierce rivalry turning into intense, slow-burn romantic tension.',
        subtext: 'The sharper the insult, the higher the tension.',
        iconName: 'Swords',
        vectorImpact: { pacing: 0.6, characterFocus: 0.7 },
        tropes: ['Enemies to Lovers', 'Morally Grey Heroes'],
        tags: ['Banter', 'Electric Tension'],
      },
      {
        id: 'q5-unspoken',
        label: 'Quiet comrades who would walk into fire for one another without a word',
        scenario: 'Fierce loyalty forged in crisis: the bond between unexpected allies.',
        subtext: 'Pure found family energy where loyalty is tested by impossible sacrifices.',
        iconName: 'ShieldAlert',
        vectorImpact: { tone: 0.3, characterFocus: 0.8 },
        tropes: ['Found Family', 'Space Opera'],
        tags: ['Devotion', 'Loyalty'],
      },
      {
        id: 'q5-partnership',
        label: 'A creative or intellectual obsession that blurs every boundary',
        scenario: 'Two brilliant minds locked in a lifelong dance of ambition, jealousy, and art.',
        subtext: 'Complex human connection where work, dreams, and love intertwine.',
        iconName: 'Palette',
        vectorImpact: { setting: -0.6, characterFocus: 0.95 },
        tropes: ['Creative Partnership', 'Slow-Burn Mystery'],
        tags: ['Character-driven', 'Intimate Drama'],
      },
    ],
  },
];
