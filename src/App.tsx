import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './sections/HeroSection';
import { ProblemSection } from './sections/ProblemSection';
import { HowItWorksSection } from './sections/HowItWorksSection';
import { QuizSection } from './sections/QuizSection';
import { CommunitiesSection } from './sections/CommunitiesSection';
import { WhyUsSection } from './sections/WhyUsSection';
import { PricingSection } from './sections/PricingSection';
import { RoadmapSection } from './sections/RoadmapSection';
import { SurveyStrip } from './sections/SurveyStrip';
import { TeamSection } from './sections/TeamSection';
import { WaitlistSection } from './sections/WaitlistSection';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden flex flex-col bg-mint selection:bg-teal selection:text-white">
      {/* 1. Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero */}
        <HeroSection />

        {/* 3. Problem */}
        <ProblemSection />

        {/* 4. How it works */}
        <HowItWorksSection />

        {/* 5. Interactive Quiz Demo (The Centrepiece) */}
        <QuizSection />

        {/* 6. Micro-communities preview */}
        <CommunitiesSection />

        {/* 7. Why TailorTale (Competitive advantage & comparison table) */}
        <WhyUsSection />

        {/* 8. Pricing */}
        <PricingSection />

        {/* 9. Roadmap */}
        <RoadmapSection />

        {/* 10. Survey strip */}
        <SurveyStrip />

        {/* 11. Team */}
        <TeamSection />

        {/* 12. Final CTA band with waitlist form */}
        <WaitlistSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
