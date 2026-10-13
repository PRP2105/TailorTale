import React from 'react';
import { Button } from '../components/common/Button';
import { PhoneMockup } from '../components/mockup/PhoneMockup';
import { Sparkles, ArrowRight, ShieldCheck, Users, BookOpen } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative pt-6 pb-20 sm:pt-12 sm:pb-28 overflow-hidden">
      {/* Background soft ambient accents */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[90vw] max-w-[800px] h-[400px] bg-gradient-to-b from-teal/15 via-yellow/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Pitch Copy & Dual CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6 sm:space-y-8">
            {/* Pill Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-teal/30 shadow-xs text-xs sm:text-sm font-semibold text-teal-dark max-w-full">
              <Sparkles className="w-4 h-4 text-teal animate-pulse flex-shrink-0" />
              <span className="truncate">A Fresh Approach to Book Discovery</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-navy tracking-tight leading-[1.18]">
              The right book, for the{' '}
              <span className="relative inline-block text-teal-dark">
                right reader.
                <svg
                  className="absolute left-0 -bottom-2 w-full h-3 text-yellow"
                  viewBox="0 0 200 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M3 9C50 3 150 3 197 9"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Subline */}
            <p className="text-lg sm:text-xl text-navy-soft max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              TailorTale learns your taste first, then recommends books with reasons, and connects you with readers like you.
            </p>

            {/* Dual Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Button
                asAnchor
                href="#quiz"
                variant="accent"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
                className="w-full sm:w-auto shadow-md hover:shadow-lg"
              >
                Try the 60-second quiz
              </Button>
              <Button
                asAnchor
                href="#waitlist"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto shadow-md hover:shadow-lg"
              >
                Join the waitlist
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs sm:text-sm text-navy-muted border-t border-teal/15">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-teal" />
                <span>Zero algorithmic hype traps</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-teal" />
                <span>100% explainable recommendations</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-teal" />
                <span>Small trope reading circles</span>
              </div>
            </div>
          </div>

          {/* Right Column: Pure CSS Phone Mockup */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
};
