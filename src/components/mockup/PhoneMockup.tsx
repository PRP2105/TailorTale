import React, { useState } from 'react';
import { BOOKS_CATALOGUE } from '../../data/books';
import { BookCover } from '../ui/BookCover';
import { Sparkles, Bookmark, Heart, Compass, Users, Check } from 'lucide-react';

export const PhoneMockup: React.FC = () => {
  const [saved, setSaved] = useState(false);
  const [activeBookIndex, setActiveBookIndex] = useState(0);

  // Showcase book from catalogue
  const featuredBook = BOOKS_CATALOGUE[activeBookIndex];

  const handleNext = () => {
    setActiveBookIndex((prev) => (prev + 1) % BOOKS_CATALOGUE.length);
  };

  return (
    <div className="relative mx-auto w-[310px] sm:w-[340px] select-none">
      {/* Glow highlight behind phone */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-teal/20 via-yellow/20 to-mint/40 rounded-[48px] blur-2xl opacity-70 pointer-events-none" />

      {/* Phone chassis */}
      <div className="relative bg-[#111625] rounded-[44px] p-3 shadow-2xl ring-1 ring-white/20 border-4 border-slate-800">
        {/* Dynamic Island / Speaker Pill */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-30 flex items-center justify-end px-3">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-700" />
        </div>

        {/* Screen Display */}
        <div className="bg-white rounded-[34px] overflow-hidden flex flex-col h-[580px] border border-slate-200 shadow-inner">
          {/* Status Bar */}
          <div className="pt-2 px-6 pb-2 flex justify-between items-center text-[11px] font-semibold text-slate-800 bg-white">
            <span>9:41</span>
            <div className="flex items-center gap-1.5 text-slate-600">
              <span className="w-2 h-2 rounded-full bg-teal" />
              <span>5G</span>
              <div className="w-4 h-2 border border-slate-800 rounded-sm p-[1px]">
                <div className="w-full h-full bg-slate-800 rounded-[1px]" />
              </div>
            </div>
          </div>

          {/* Mini App Bar */}
          <div className="px-4 py-2 border-b border-mint-border/50 flex items-center justify-between bg-mint/50">
            <div className="flex items-center gap-1.5">
              <span className="font-serif font-bold text-sm text-navy">TailorTale</span>
              <span className="text-[10px] font-semibold uppercase px-1.5 py-0.5 rounded bg-yellow text-navy">
                Live Match
              </span>
            </div>
            <button
              onClick={handleNext}
              className="text-[11px] text-teal-dark hover:underline font-medium cursor-pointer"
              title="See another book recommendation"
            >
              Shuffle ↻
            </button>
          </div>

          {/* Screen Scrollable Body */}
          <div className="flex-1 overflow-y-auto p-4 flex flex-col justify-between">
            {/* Recommendation Header Card */}
            <div className="space-between mb-2">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-teal-dark bg-teal/15 px-2.5 py-1 rounded-full border border-teal/20">
                  <Sparkles className="w-3 h-3 text-teal" />
                  96% Taste Match
                </span>
                <span className="text-[11px] text-slate-400 font-medium">Daily pick</span>
              </div>
            </div>

            {/* Book Presentation Section */}
            <div className="flex gap-3.5 items-center my-1 bg-mint/30 p-2.5 rounded-xl border border-teal/10">
              <BookCover book={featuredBook} size="sm" />
              <div className="flex-1 text-left min-w-0">
                <h4 className="font-serif font-bold text-navy text-sm leading-snug line-clamp-2">
                  {featuredBook.title}
                </h4>
                <p className="text-xs text-slate-600 mt-0.5">{featuredBook.author}</p>
                <div className="flex flex-wrap gap-1 mt-2">
                  <span className="text-[10px] bg-white px-2 py-0.5 rounded text-navy-muted font-medium border border-slate-200">
                    {featuredBook.tropes[0]}
                  </span>
                  <span className="text-[10px] bg-white px-2 py-0.5 rounded text-navy-muted font-medium border border-slate-200">
                    {featuredBook.tags[0]}
                  </span>
                </div>
              </div>
            </div>

            {/* "Why this book?" explanation box (Specified Requirement) */}
            <div className="bg-yellow/20 border border-yellow/60 rounded-xl p-3 my-2 text-left">
              <div className="flex items-center gap-1.5 text-navy font-bold text-xs">
                <span className="w-2 h-2 rounded-full bg-yellow-warm" />
                Why this book?
              </div>
              <p className="text-[11px] text-navy-light mt-1 leading-relaxed">
                "Recommended because you gravitated towards{' '}
                <strong className="text-navy font-semibold">
                  {featuredBook.vector.pacing < 0 ? 'slow, atmospheric pacing' : 'fast-paced excitement'}
                </strong>{' '}
                and the{' '}
                <strong className="text-navy font-semibold">
                  {featuredBook.tropes[0]}
                </strong>{' '}
                dynamic."
              </p>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex gap-2 mt-1">
              <button
                onClick={() => setSaved(!saved)}
                className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  saved
                    ? 'bg-teal text-white'
                    : 'bg-navy text-white hover:bg-navy-light'
                }`}
              >
                {saved ? <Check className="w-3.5 h-3.5" /> : <Bookmark className="w-3.5 h-3.5" />}
                {saved ? 'Saved to list' : 'Save to list'}
              </button>
              <button
                onClick={() => alert(`Showing trope club for: ${featuredBook.tropes[0]}`)}
                className="py-2 px-3 rounded-lg text-xs font-medium border border-slate-200 hover:bg-slate-50 text-slate-700 flex items-center justify-center cursor-pointer"
                title="View Trope Club"
              >
                <Users className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Mini In-app Bottom Navigation */}
          <div className="border-t border-slate-100 px-4 py-2 flex justify-around text-slate-400 bg-white">
            <div className="flex flex-col items-center text-teal">
              <Compass className="w-4 h-4" />
              <span className="text-[9px] font-semibold mt-0.5">Explore</span>
            </div>
            <div className="flex flex-col items-center">
              <Sparkles className="w-4 h-4" />
              <span className="text-[9px] mt-0.5">Quiz</span>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-4 h-4" />
              <span className="text-[9px] mt-0.5">Tropes</span>
            </div>
            <div className="flex flex-col items-center">
              <Heart className="w-4 h-4" />
              <span className="text-[9px] mt-0.5">Saved</span>
            </div>
          </div>

          {/* Home Indicator Bar */}
          <div className="pb-1.5 pt-1 flex justify-center bg-white">
            <div className="w-28 h-1 bg-slate-300 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};
