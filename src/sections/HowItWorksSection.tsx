import React from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { Card } from '../components/common/Card';
import { Sparkles, Users, Compass, CheckCircle2, ArrowRight } from 'lucide-react';

interface FeatureCardData {
  title: string;
  badge: string;
  badgeColor: 'teal' | 'yellow' | 'navy';
  description: string;
  example: string;
  icon: React.ReactNode;
}

const FEATURE_CARDS: FeatureCardData[] = [
  {
    title: 'Scenario-based taste quiz for new readers',
    badge: 'For Beginners',
    badgeColor: 'teal',
    description:
      'We ask about situations and feelings, not dry genre categories. Tell us what sounds good on a rainy afternoon or what kind of character you root for.',
    example: 'e.g. "A breakneck chase through a dark city or a slow, atmospheric family secret?"',
    icon: <Compass className="w-6 h-6 text-teal" />,
  },
  {
    title: 'Collaborative-filtering recommendations',
    badge: 'For Seasoned Readers',
    badgeColor: 'yellow',
    description:
      'Discover books enjoyed by readers with similar taste vectors, not mass-market bestsellers pushed by promotional publishing budgets.',
    example: 'Matches readers whose pacing and emotional preferences align within a 90%+ similarity threshold.',
    icon: <Sparkles className="w-6 h-6 text-yellow-warm" />,
  },
  {
    title: 'Reader matching & trope micro-communities',
    badge: 'Community Connection',
    badgeColor: 'navy',
    description:
      'Join small, tight-knit circles clustered around specific tropes like "Found Family" or "Slow-Burn Mystery" for buddy reads and shared discussions.',
    example: 'Connect with readers who appreciate the exact nuances of your favourite narrative dynamics.',
    icon: <Users className="w-6 h-6 text-teal-dark" />,
  },
];

const FOUR_STEP_FLOW = [
  {
    step: '01',
    title: 'Take the 60s quiz',
    text: 'Answer 5 intuitive scenario questions about your mood, pacing, and character compass.',
  },
  {
    step: '02',
    title: 'Get your taste profile',
    text: 'We map your reading DNA across pacing, emotional tone, setting, and character depth.',
  },
  {
    step: '03',
    title: 'Get explained recs',
    text: 'Receive 3 top book matches with clear, plain-English "Why this book?" reasons.',
  },
  {
    step: '04',
    title: 'Join your trope community',
    text: 'Step into curated reading circles with fellow students who share your narrative taste.',
  },
];

export const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Solution"
          title="Engineered around how humans actually enjoy stories"
          description="TailorTale replaces superficial viral hype with a three-pillar discovery engine that understands you first."
        />

        {/* 3 Core Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {FEATURE_CARDS.map((card, idx) => (
            <Card
              key={idx}
              padded="lg"
              className="bg-white border-2 border-teal/15 hover:border-teal flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-mint flex items-center justify-center">
                    {card.icon}
                  </div>
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      card.badgeColor === 'teal'
                        ? 'bg-teal/15 text-teal-dark'
                        : card.badgeColor === 'yellow'
                        ? 'bg-yellow/40 text-navy'
                        : 'bg-navy/10 text-navy'
                    }`}
                  >
                    {card.badge}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-xl sm:text-2xl text-navy leading-snug">
                  {card.title}
                </h3>

                <p className="mt-4 text-sm sm:text-base text-navy-muted leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 bg-mint/40 -mx-6 -mb-6 p-5 rounded-b-2xl">
                <span className="text-[11px] uppercase font-bold tracking-wider text-teal-dark block mb-1">
                  How it looks in practice:
                </span>
                <p className="text-xs text-navy font-medium italic">
                  {card.example}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* 4-Step Progressive Journey Flow */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-teal/20 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-dark bg-teal/10 px-3 py-1 rounded-full">
              Your Journey in 4 Simple Steps
            </span>
            <h3 className="font-serif font-bold text-2xl sm:text-3xl text-navy mt-3">
              From curious reader to your next favourite book
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {FOUR_STEP_FLOW.map((item, idx) => (
              <div
                key={idx}
                className="relative bg-mint/40 rounded-2xl p-6 border border-teal/10 flex flex-col justify-between hover:bg-mint/70 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-3xl font-extrabold text-teal">
                      {item.step}
                    </span>
                    <CheckCircle2 className="w-5 h-5 text-teal/40" />
                  </div>
                  <h4 className="font-serif font-bold text-lg text-navy mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-navy-muted leading-relaxed">
                    {item.text}
                  </p>
                </div>

                {idx < FOUR_STEP_FLOW.length - 1 && (
                  <div className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-white border border-teal/30 shadow-xs flex items-center justify-center text-teal">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
