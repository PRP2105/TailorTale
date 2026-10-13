import React from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { Card } from '../components/common/Card';
import { TEAM_MEMBERS, TEAM_SUBTITLE } from '../data/team';
import { GraduationCap } from 'lucide-react';

export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Builders"
          title="Engineered by student book lovers"
          description={TEAM_SUBTITLE}
        />

        {/* 8 Team Member Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {TEAM_MEMBERS.map((member, index) => (
            <Card
              key={index}
              padded="md"
              className="bg-white border border-teal/15 hover:border-teal text-center flex flex-col items-center justify-between"
            >
              <div className="w-full flex flex-col items-center">
                {/* Initials Avatar in Brand Colours */}
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center font-serif font-bold text-2xl shadow-soft-md mb-4 select-none transition-transform hover:scale-105"
                  style={{
                    backgroundColor: member.avatarBg,
                    color: member.avatarText,
                  }}
                  aria-label={`${member.name} Avatar`}
                >
                  {member.initials}
                </div>

                {/* Name & Role */}
                <h3 className="font-serif font-bold text-lg text-navy leading-snug">
                  {member.name}
                </h3>
                <span className="text-xs font-semibold text-teal-dark bg-teal/10 px-2.5 py-0.5 rounded-full mt-1.5 inline-block">
                  {member.role}
                </span>

                <p className="mt-3 text-xs text-navy-muted leading-relaxed">
                  {member.focus}
                </p>
              </div>

              {/* College Sub-tag */}
              <div className="w-full mt-4 pt-3 border-t border-slate-100 flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
                <GraduationCap className="w-3.5 h-3.5 text-teal" />
                <span>DJ Sanghvi CoE</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
