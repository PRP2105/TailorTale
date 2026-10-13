import React from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { Card } from '../components/common/Card';
import {
  Smartphone,
  TrendingDown,
  BookX,
  Coins,
  SearchX,
  EyeOff,
} from 'lucide-react';

interface ProblemItem {
  icon: React.ReactNode;
  title: string;
  subtext: string;
}

const PROBLEM_POINTS: ProblemItem[] = [
  {
    icon: <Smartphone className="w-6 h-6 text-teal" />,
    title: 'New readers discover books through Reels and TikTok trends.',
    subtext: 'Social feeds prioritise aesthetics, viral audios, and 15-second shock value over literary fit.',
  },
  {
    icon: <TrendingDown className="w-6 h-6 text-yellow-warm" />,
    title: 'Algorithms push viral books, not books that suit the reader.',
    subtext: 'Recommendation engines are tuned for mass virality rather than individual reading temperaments.',
  },
  {
    icon: <BookX className="w-6 h-6 text-rose-500" />,
    title: 'A mismatched first book makes beginners quit reading.',
    subtext: 'Struggling through a dense or mismatched trend read makes newcomers feel reading simply "isn\'t for them."',
  },
  {
    icon: <Coins className="w-6 h-6 text-yellow-warm" />,
    title: 'Readers waste money on hyped books they never finish.',
    subtext: 'Bookshelves in student hostels and dorms sit filled with half-read paperbacks that failed to hold interest.',
  },
  {
    icon: <SearchX className="w-6 h-6 text-teal" />,
    title: 'No existing platform starts by understanding the reader.',
    subtext: 'Legacy portals force you to rate 20 classics or browse 50 genres before giving any recommendations.',
  },
  {
    icon: <EyeOff className="w-6 h-6 text-navy-muted" />,
    title: 'Good but non-viral books and their authors stay invisible.',
    subtext: 'Brilliant stories that do not fit 15-second marketing trends stay buried under influencer marketing.',
  },
];

export const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="py-20 sm:py-28 bg-white/70 border-y border-teal/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Reading Discovery Crisis"
          title="Why book discovery is broken for modern readers"
          description="When book discovery is driven solely by viral social media algorithms, both new readers and exceptional authors lose."
        />

        {/* 6 Icon Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PROBLEM_POINTS.map((item, index) => (
            <Card
              key={index}
              padded="md"
              className="bg-white border border-teal/15 hover:border-teal/40 group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-mint flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-serif font-bold text-lg sm:text-xl text-navy leading-snug">
                  {item.title}
                </h3>
              </div>
              <p className="mt-4 text-sm text-navy-muted leading-relaxed border-t border-slate-100 pt-3">
                {item.subtext}
              </p>
            </Card>
          ))}
        </div>

        {/* Closing Insight Pill */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-teal/10 border border-teal/20 text-sm font-semibold text-teal-dark">
            <span>TailorTale flips the script:</span>
            <span className="text-navy font-bold">Taste first. Tropes second. Explainable always.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
