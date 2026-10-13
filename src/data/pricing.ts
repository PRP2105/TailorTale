export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  currency: string;
  features: { text: string; included: boolean }[];
  ctaLabel: string;
  popular?: boolean;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'free',
    name: 'TailorTale Free',
    description: 'Perfect for new readers discovering their taste profile.',
    monthlyPrice: 0,
    yearlyPrice: 0,
    currency: '₹',
    features: [
      { text: '60-second scenario taste quiz', included: true },
      { text: '3 personalised recommendations per month with reasons', included: true },
      { text: 'Access to up to 2 trope micro-communities', included: true },
      { text: 'Basic reading list tracker', included: true },
      { text: 'Advanced collaborative taste insights', included: false },
      { text: 'Unlimited trope micro-communities', included: false },
      { text: 'Ad-free reading sanctuary', included: false },
    ],
    ctaLabel: 'Start for Free',
    popular: false,
  },
  {
    id: 'plus',
    name: 'TailorTale Plus',
    badge: 'Most Popular',
    description: 'For curious readers who want deep taste insights and unlimited book journeys.',
    monthlyPrice: 99,
    yearlyPrice: 799,
    currency: '₹',
    features: [
      { text: 'Unlimited scenario quizzes & mood retakes', included: true },
      { text: 'Unlimited explained recommendations', included: true },
      { text: 'Advanced taste insights & reader DNA radar charts', included: true },
      { text: 'Unlimited trope micro-communities & buddy reads', included: true },
      { text: '100% ad-free & distraction-free experience', included: true },
      { text: 'Early access to indie author spotlights & giveaways', included: true },
      { text: 'Verified reader badge on community discussions', included: true },
    ],
    ctaLabel: 'Get TailorTale Plus',
    popular: true,
  },
];

export const STUDENT_DISCOUNT_NOTE = 'Student discount available with a college ID (50% off TailorTale Plus annual plan)';
