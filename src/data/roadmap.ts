export interface RoadmapItem {
  phase: string;
  timeline: string;
  title: string;
  description: string;
  deliverables: string[];
  status: 'completed' | 'current' | 'upcoming';
}

export const ROADMAP_ITEMS: RoadmapItem[] = [
  {
    phase: 'Phase 1',
    timeline: 'Months 1–2',
    title: 'Research & Design',
    description: 'Surveying college readers in Mumbai, mapping trope taxonomies, and prototyping the 60-second quiz UX.',
    deliverables: ['Reader survey (400+ students)', 'UX journey wireframes', 'Vector taste model formulation'],
    status: 'completed',
  },
  {
    phase: 'Phase 2',
    timeline: 'Months 3–5',
    title: 'MVP Development',
    description: 'Engineering the core hybrid recommendation engine, scenario quiz state machine, and clean web interface.',
    deliverables: ['Cosine recommendation engine', 'Interactive web MVP', 'Offline catalogue indexing'],
    status: 'current',
  },
  {
    phase: 'Phase 3',
    timeline: 'Month 6',
    title: 'Beta with 500 College Users',
    description: 'Closed pilot across DJ Sanghvi and Mumbai University colleges to evaluate completion rate and rec accuracy.',
    deliverables: ['500 student pilot cohort', 'Recommendation accuracy benchmark', 'UX feedback loop'],
    status: 'upcoming',
  },
  {
    phase: 'Phase 4',
    timeline: 'Month 7',
    title: 'Public Launch',
    description: 'Opening TailorTale to student readers across India with free taste profile onboarding and basic community access.',
    deliverables: ['Nationwide public launch', 'Waitlist onboarding wave', 'PWA mobile experience'],
    status: 'upcoming',
  },
  {
    phase: 'Phase 5',
    timeline: 'Months 8–10',
    title: 'Community Features',
    description: 'Rolling out trope micro-communities, small group buddy reading challenges, and spoiler-shielded discussions.',
    deliverables: ['Trope micro-rooms', 'Buddy reading timers', 'Reader compatibility scorecards'],
    status: 'upcoming',
  },
  {
    phase: 'Phase 6',
    timeline: 'Months 11–12',
    title: 'Growth & Monetisation',
    description: 'Introducing TailorTale Plus student subscription tier and launching fair discovery channels for independent Indian authors.',
    deliverables: ['TailorTale Plus tier', 'Author spotlight dashboard', 'College campus book festivals'],
    status: 'upcoming',
  },
];
