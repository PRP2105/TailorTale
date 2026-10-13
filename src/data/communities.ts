export interface TropeCommunity {
  id: string;
  name: string;
  tag: string;
  memberCount: number;
  memberCountFormatted: string;
  description: string;
  sampleBooks: string[];
  vibe: string;
  bgGradient: string;
  accentColor: string;
}

export const TROPE_COMMUNITIES: TropeCommunity[] = [
  {
    id: 'found-family',
    name: 'Found Family',
    tag: 'found-family',
    memberCount: 2480,
    memberCountFormatted: '2,480 readers',
    description: 'For those who love misfits, outcasts, and ragtag crews who choose each other over blood.',
    sampleBooks: ['The House in the Cerulean Sea', 'Six of Crows', 'Project Hail Mary'],
    vibe: 'Warm, fiercely loyal, tearjerking banter',
    bgGradient: 'from-teal/15 to-mint',
    accentColor: '#19B5A5',
  },
  {
    id: 'slow-burn-mystery',
    name: 'Slow-Burn Mystery',
    tag: 'slow-burn-mystery',
    memberCount: 1840,
    memberCountFormatted: '1,840 readers',
    description: 'Layered atmospheric whodunits, intellectual breadcrumbs, and secrets unravelled over cold evenings.',
    sampleBooks: ['The Secret History', 'The Thursday Murder Club', 'The Song of Achilles'],
    vibe: 'Cerebral, quiet dread, exquisite payoff',
    bgGradient: 'from-navy/10 to-mint',
    accentColor: '#1F2A44',
  },
  {
    id: 'enemies-to-lovers',
    name: 'Enemies to Lovers',
    tag: 'enemies-to-lovers',
    memberCount: 3210,
    memberCountFormatted: '3,210 readers',
    description: 'Sharp-edged dialogue, intense eye contact across crowded rooms, and grudges that turn into devotion.',
    sampleBooks: ['A Deadly Education', 'Red, White & Royal Blue', 'Six of Crows'],
    vibe: 'Electric tension, fierce wit, high stakes',
    bgGradient: 'from-yellow/20 to-mint',
    accentColor: '#FFD23F',
  },
  {
    id: 'cosy-fantasy',
    name: 'Cosy Fantasy',
    tag: 'cosy-fantasy',
    memberCount: 1960,
    memberCountFormatted: '1,960 readers',
    description: 'Low-stakes magic, warm bakeries, enchanted forests, and stories that feel like a warm hug.',
    sampleBooks: ['The House in the Cerulean Sea', 'Before the Coffee Gets Cold'],
    vibe: 'Gentle, restorative, comfort reading',
    bgGradient: 'from-teal/20 to-yellow/15',
    accentColor: '#19B5A5',
  },
  {
    id: 'morally-grey-heroes',
    name: 'Morally Grey Heroes',
    tag: 'morally-grey-heroes',
    memberCount: 2650,
    memberCountFormatted: '2,650 readers',
    description: 'Protagonists who do the wrong things for the right reasons. No pure angels, only complex humans.',
    sampleBooks: ['Six of Crows', 'The Secret History', 'A Deadly Education'],
    vibe: 'Sharp minds, dangerous loyalty, ethical ambiguity',
    bgGradient: 'from-navy/15 to-teal/10',
    accentColor: '#2C3A5E',
  },
  {
    id: 'space-opera',
    name: 'Space Opera',
    tag: 'space-opera',
    memberCount: 1540,
    memberCountFormatted: '1,540 readers',
    description: 'Vast interstellar starships, eccentric AI companions, and cosmic puzzles on the edge of known space.',
    sampleBooks: ['Project Hail Mary', 'All Systems Red', 'Klara and the Sun'],
    vibe: 'Expansive horizons, existential wonder, punchy science',
    bgGradient: 'from-navy/20 to-teal/15',
    accentColor: '#19B5A5',
  },
];
