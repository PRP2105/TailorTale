import React, { useState } from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { TROPE_COMMUNITIES } from '../data/communities';
import { Users, Check, Sparkles, BookOpen } from 'lucide-react';

export const CommunitiesSection: React.FC = () => {
  // Store joined communities state
  const [joinedCommunities, setJoinedCommunities] = useState<Record<string, boolean>>({
    'found-family': true, // default one active for lively preview
  });

  const toggleJoin = (id: string) => {
    setJoinedCommunities((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="communities" className="py-20 sm:py-28 bg-white border-b border-teal/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Trope Micro-Communities"
          title="Find your people through the tropes you obsess over"
          description="Ditch toxic internet arguments and giant anonymous forums. TailorTale hosts cosy, spoiler-free reading rooms clustered around specific storytelling tropes."
        />

        {/* 6 Trope Community Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {TROPE_COMMUNITIES.map((community) => {
            const isJoined = !!joinedCommunities[community.id];

            return (
              <Card
                key={community.id}
                padded="lg"
                className="bg-white border-2 border-teal/15 hover:border-teal flex flex-col justify-between transition-all"
              >
                <div>
                  {/* Top Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-mint text-teal-dark border border-mint-border flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5" />
                      {community.memberCountFormatted}
                    </span>
                    <span className="text-[11px] font-medium text-slate-400">
                      Active Circle
                    </span>
                  </div>

                  {/* Title & Vibe */}
                  <h3 className="font-serif font-bold text-2xl text-navy">
                    {community.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-teal-dark mt-1">
                    <Sparkles className="w-3 h-3 text-teal" />
                    <span>{community.vibe}</span>
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-sm text-navy-muted leading-relaxed">
                    {community.description}
                  </p>

                  {/* Sample Books */}
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-2">
                      <BookOpen className="w-3.5 h-3.5 text-teal" />
                      <span className="font-semibold text-navy">Currently discussing:</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {community.sampleBooks.map((bookTitle) => (
                        <span
                          key={bookTitle}
                          className="text-[11px] bg-mint/60 text-navy-soft px-2.5 py-1 rounded-md border border-teal/10 font-medium"
                        >
                          {bookTitle}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Interactive Join Button (Toggles State) */}
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Button
                    onClick={() => toggleJoin(community.id)}
                    variant={isJoined ? 'primary' : 'outline'}
                    size="md"
                    className="w-full text-sm font-semibold justify-center cursor-pointer"
                    icon={
                      isJoined ? (
                        <Check className="w-4 h-4 text-white" />
                      ) : (
                        <Users className="w-4 h-4" />
                      )
                    }
                  >
                    {isJoined ? 'Joined Community' : 'Join Community'}
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Micro-community philosophy note */}
        <div className="mt-12 bg-mint/50 rounded-2xl p-6 border border-teal/20 text-center max-w-2xl mx-auto">
          <p className="text-sm text-navy leading-relaxed">
            <strong className="font-semibold text-teal-dark">Quality over noise:</strong> Micro-communities are capped at small student cohorts to maintain thoughtful, spoiler-free book discussions and mutual accountability.
          </p>
        </div>
      </div>
    </section>
  );
};
