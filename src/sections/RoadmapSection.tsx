import React from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { ROADMAP_ITEMS } from '../data/roadmap';
import { CheckCircle2, Clock, Calendar } from 'lucide-react';

export const RoadmapSection: React.FC = () => {
  return (
    <section id="roadmap" className="py-20 sm:py-28 bg-mint/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Execution Roadmap"
          title="From student thesis to nationwide reading platform"
          description="A clear 12-month engineering and community rollout plan designed for measurable college adoption in India."
        />

        {/* Roadmap Display: Horizontal on Desktop (grid), Vertical on Mobile */}
        <div className="relative mt-12">
          {/* Timeline bar across desktop */}
          <div className="hidden lg:block absolute top-[52px] left-8 right-8 h-1 bg-teal/20 -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
            {ROADMAP_ITEMS.map((item, idx) => {
              const isCompleted = item.status === 'completed';
              const isCurrent = item.status === 'current';

              return (
                <div
                  key={idx}
                  className={`bg-white rounded-2xl p-5 border-2 flex flex-col justify-between transition-all hover:shadow-soft-md ${
                    isCurrent
                      ? 'border-teal shadow-soft-md ring-2 ring-teal/20'
                      : isCompleted
                      ? 'border-emerald-200'
                      : 'border-slate-200 opacity-90'
                  }`}
                >
                  <div>
                    {/* Top Status Icon & Timeline Node */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-teal-dark bg-mint px-2 py-0.5 rounded">
                        {item.phase}
                      </span>
                      {isCompleted && (
                        <span title="Completed">
                          <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                        </span>
                      )}
                      {isCurrent && (
                        <span className="relative flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal opacity-75" />
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-teal" />
                        </span>
                      )}
                      {!isCompleted && !isCurrent && (
                        <Clock className="w-4 h-4 text-slate-300" />
                      )}
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-semibold text-navy-muted mb-2">
                      <Calendar className="w-3.5 h-3.5 text-teal" />
                      <span>{item.timeline}</span>
                    </div>

                    <h4 className="font-serif font-bold text-base sm:text-lg text-navy leading-snug">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-xs text-navy-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1.5">
                      Key Milestones:
                    </span>
                    <ul className="space-y-1">
                      {item.deliverables.map((del, dIdx) => (
                        <li key={dIdx} className="text-[11px] text-navy-soft flex items-start gap-1.5">
                          <span className="text-teal">•</span>
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
