export type SupportLevel = 'full' | 'partial' | 'none';

export interface ComparisonRow {
  feature: string;
  detail: string;
  tailorTale: SupportLevel;
  goodreads: SupportLevel;
  storyGraph: SupportLevel;
  bookTok: SupportLevel;
}

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    feature: 'Taste-based onboarding for beginners',
    detail: 'Scenario-based quiz capturing moods, pacing, and emotional tropes without demanding prior reading history.',
    tailorTale: 'full',
    goodreads: 'none',
    storyGraph: 'partial',
    bookTok: 'none',
  },
  {
    feature: 'Recommendations from similar readers',
    detail: 'Collaborative filtering powered by readers with closely matched taste vectors rather than sheer star volumes.',
    tailorTale: 'full',
    goodreads: 'partial',
    storyGraph: 'full',
    bookTok: 'none',
  },
  {
    feature: 'Small trope-based micro-communities',
    detail: 'Intimate reading circles clustered around specific tropes (Found Family, Slow-Burn) instead of bloated forums.',
    tailorTale: 'full',
    goodreads: 'none',
    storyGraph: 'none',
    bookTok: 'partial',
  },
  {
    feature: 'Designed specifically for beginners',
    detail: 'Jargon-free experience with explained suggestions to prevent intimidation and reading dropout.',
    tailorTale: 'full',
    goodreads: 'none',
    storyGraph: 'partial',
    bookTok: 'none',
  },
  {
    feature: 'Curated India & regional reader focus',
    detail: 'Tailored for Indian college students, local pricing, regional author discovery, and campus communities.',
    tailorTale: 'full',
    goodreads: 'none',
    storyGraph: 'none',
    bookTok: 'partial',
  },
];

export interface AdvantageCard {
  id: string;
  title: string;
  shortDescription: string;
  iconName: string;
}

export const ADVANTAGE_CARDS: AdvantageCard[] = [
  {
    id: 'taste-first',
    title: 'Taste-First Onboarding',
    shortDescription:
      'Starts by understanding your mood and emotional preferences through scenarios, not intimidating 500-book checklists.',
    iconName: 'Compass',
  },
  {
    id: 'built-for-beginners',
    title: 'Built for Beginners',
    shortDescription:
      'Engineered specifically so first-time readers find books they finish and love, eliminating reader burnout.',
    iconName: 'Sparkles',
  },
  {
    id: 'explainable-recs',
    title: 'Explainable Recommendations',
    shortDescription:
      'Every book tells you exactly why it was chosen based on your pacing, tone, and character preferences.',
    iconName: 'HelpCircle',
  },
  {
    id: 'hybrid-engine',
    title: 'Hybrid Recommendation Engine',
    shortDescription:
      'Merges cosine content similarity with collaborative reader-matching vectors for high-precision discovery.',
    iconName: 'Cpu',
  },
  {
    id: 'trope-communities',
    title: 'Trope-Based Micro-Communities',
    shortDescription:
      'Connects you to bite-sized reading circles revolving around shared tropes like Found Family and Slow-Burn Mystery.',
    iconName: 'Users',
  },
  {
    id: 'local-india-focus',
    title: 'Local (India) Focus',
    shortDescription:
      'Priced in INR, tailored for Indian college readers, and designed to champion emerging independent subcontinental authors.',
    iconName: 'MapPin',
  },
  {
    id: 'multiple-revenue',
    title: 'Multiple Revenue Streams',
    shortDescription:
      'Sustainable freemium model, student-friendly micro-subscriptions, and non-intrusive author spotlight integrations.',
    iconName: 'TrendingUp',
  },
  {
    id: 'two-sided-value',
    title: 'Two-Sided Value for Readers & Authors',
    shortDescription:
      'Readers get books suited to their soul; deserving authors break free from viral trend algorithms to find their ideal audience.',
    iconName: 'BookHeart',
  },
];

export const COMPARISON_FOOTNOTE =
  'Competitor features are summarised from public information and may change.';
