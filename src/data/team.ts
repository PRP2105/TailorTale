export interface TeamMember {
  name: string;
  role: string;
  initials: string;
  avatarBg: string;
  avatarText: string;
  focus: string;
}

export const TEAM_SUBTITLE = 'B.Tech students, DJ Sanghvi College of Engineering, Mumbai';

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Preksha Paldiwal',
    role: 'Project Lead',
    initials: 'PP',
    avatarBg: '#19B5A5',
    avatarText: '#FFFFFF',
    focus: 'Vision, Product Strategy & Execution',
  },
  {
    name: 'Nishika Negandhi',
    role: 'Technology Lead',
    initials: 'NN',
    avatarBg: '#1F2A44',
    avatarText: '#FFD23F',
    focus: 'Architecture, Recommendation Engines & Web Platform',
  },
  {
    name: 'Pradnya Bhamre',
    role: 'Product and Design',
    initials: 'PB',
    avatarBg: '#FFD23F',
    avatarText: '#1F2A44',
    focus: 'UX Research, Design System & User Journeys',
  },
  {
    name: 'Sara Vastani',
    role: 'Product and Design',
    initials: 'SV',
    avatarBg: '#E6FAF5',
    avatarText: '#138E82',
    focus: 'Prototyping, Accessibility & Micro-interactions',
  },
  {
    name: 'Priyansh Vaishnav',
    role: 'Marketing and Community',
    initials: 'PV',
    avatarBg: '#138E82',
    avatarText: '#FFFFFF',
    focus: 'College Outreach, Trope Clubs & Growth',
  },
  {
    name: 'Riddhima Ranjan',
    role: 'Marketing and Community',
    initials: 'RR',
    avatarBg: '#2C3A5E',
    avatarText: '#FFD23F',
    focus: 'Student Ambassador Network & Content',
  },
  {
    name: 'Nitesh Pandey',
    role: 'Finance and Operations',
    initials: 'NP',
    avatarBg: '#19B5A5',
    avatarText: '#1F2A44',
    focus: 'Financial Modelling, Budgeting & Risk Management',
  },
  {
    name: 'Om Sawant',
    role: 'Finance and Operations',
    initials: 'OS',
    avatarBg: '#FFD23F',
    avatarText: '#1F2A44',
    focus: 'Unit Economics, Monetisation & Operations',
  },
];
