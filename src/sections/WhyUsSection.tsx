import React from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { Card } from '../components/common/Card';
import {
  COMPARISON_ROWS,
  ADVANTAGE_CARDS,
  COMPARISON_FOOTNOTE,
  SupportLevel,
} from '../data/comparisons';
import {
  Check,
  X,
  Minus,
  Compass,
  Sparkles,
  HelpCircle,
  Cpu,
  Users,
  MapPin,
  TrendingUp,
  BookHeart,
} from 'lucide-react';

export const WhyUsSection: React.FC = () => {
  const renderSupportIcon = (level: SupportLevel, isTailorTale = false) => {
    switch (level) {
      case 'full':
        return (
          <div
            className={`w-7 h-7 rounded-full flex items-center justify-center mx-auto shadow-xs ${
              isTailorTale
                ? 'bg-teal text-white ring-2 ring-teal/30'
                : 'bg-emerald-100 text-emerald-700'
            }`}
            title="Fully supported"
          >
            <Check className="w-4 h-4 stroke-[2.5]" />
          </div>
        );
      case 'partial':
        return (
          <div
            className="w-7 h-7 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mx-auto"
            title="Partially supported"
          >
            <Minus className="w-4 h-4 stroke-[2.5]" />
          </div>
        );
      case 'none':
        return (
          <div
            className="w-7 h-7 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto"
            title="Not supported"
          >
            <X className="w-3.5 h-3.5 stroke-[2]" />
          </div>
        );
    }
  };

  const renderAdvantageIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6 text-teal flex-shrink-0' };
    switch (iconName) {
      case 'Compass':
        return <Compass {...props} />;
      case 'Sparkles':
        return <Sparkles {...props} />;
      case 'HelpCircle':
        return <HelpCircle {...props} />;
      case 'Cpu':
        return <Cpu {...props} />;
      case 'Users':
        return <Users {...props} />;
      case 'MapPin':
        return <MapPin {...props} />;
      case 'TrendingUp':
        return <TrendingUp {...props} />;
      case 'BookHeart':
        return <BookHeart {...props} />;
      default:
        return <Sparkles {...props} />;
    }
  };

  return (
    <section id="why-us" className="py-20 sm:py-28 bg-mint/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Competitive Advantage"
          title="Why TailorTale stands apart"
          description="Most reading platforms are built around database cataloguing or ad virality. TailorTale is built from first principles for human readers."
        />

        {/* Comparison Matrix Table */}
        <div className="bg-white rounded-3xl border border-teal/20 shadow-soft-lg overflow-hidden mb-16">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-teal/10 bg-mint/60">
                  <th className="py-5 px-6 text-sm font-serif font-bold text-navy w-2/5">
                    Discovery Dimension
                  </th>
                  <th className="py-5 px-4 text-center text-sm font-serif font-bold text-teal-dark bg-teal/10 w-[15%]">
                    TailorTale
                  </th>
                  <th className="py-5 px-4 text-center text-sm font-serif font-bold text-navy w-[15%]">
                    Goodreads
                  </th>
                  <th className="py-5 px-4 text-center text-sm font-serif font-bold text-navy w-[15%]">
                    StoryGraph
                  </th>
                  <th className="py-5 px-4 text-center text-sm font-serif font-bold text-navy w-[15%]">
                    BookTok
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {COMPARISON_ROWS.map((row, index) => (
                  <tr
                    key={index}
                    className="hover:bg-mint/20 transition-colors"
                  >
                    <td className="py-4 px-6">
                      <div className="font-serif font-semibold text-navy text-sm sm:text-base">
                        {row.feature}
                      </div>
                      <div className="text-xs text-navy-muted mt-0.5 leading-snug">
                        {row.detail}
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center bg-teal/5">
                      {renderSupportIcon(row.tailorTale, true)}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {renderSupportIcon(row.goodreads)}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {renderSupportIcon(row.storyGraph)}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {renderSupportIcon(row.bookTok)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mandatory Footnote */}
          <div className="py-3 px-6 bg-slate-50 border-t border-slate-100 text-xs text-slate-500 italic">
            * {COMPARISON_FOOTNOTE}
          </div>
        </div>

        {/* 8 Short Advantage Cards */}
        <div className="mb-4">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="font-serif font-bold text-2xl sm:text-3xl text-navy">
              Eight reasons TailorTale is built to win
            </h3>
            <p className="text-sm text-navy-muted mt-2">
              Key strategic advantages designed for college reader adoption and long-term sustainability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ADVANTAGE_CARDS.map((adv) => (
              <Card
                key={adv.id}
                padded="md"
                className="bg-white border border-teal/15 hover:border-teal flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-mint flex items-center justify-center mb-4">
                    {renderAdvantageIcon(adv.iconName)}
                  </div>
                  <h4 className="font-serif font-bold text-base sm:text-lg text-navy leading-snug">
                    {adv.title}
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-navy-muted leading-relaxed">
                    {adv.shortDescription}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
