import React, { useState } from 'react';
import { QUIZ_QUESTIONS, QuizOption } from '../data/quizQuestions';
import { TROPE_COMMUNITIES } from '../data/communities';
import {
  buildUserTasteProfile,
  getTopRecommendations,
  RecommendationResult,
  UserTasteProfile,
} from '../lib/recommend';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { Card } from '../components/common/Card';
import { BookCover } from '../components/ui/BookCover';
import { TasteProfileChart } from '../components/ui/TasteProfileChart';
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Check,
  Zap,
  Coffee,
  Compass,
  Flame,
  HeartHandshake,
  Building2,
  Wand2,
  Rocket,
  Sun,
  Moon,
  Swords,
  ShieldAlert,
  Palette,
  Users,
} from 'lucide-react';

export const QuizSection: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, QuizOption>>({});
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [recommendations, setRecommendations] = useState<RecommendationResult[]>([]);
  const [userProfile, setUserProfile] = useState<UserTasteProfile | null>(null);

  // Icon resolver for options
  const renderOptionIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6 text-teal flex-shrink-0' };
    switch (iconName) {
      case 'Zap':
        return <Zap {...props} />;
      case 'Coffee':
        return <Coffee {...props} />;
      case 'Compass':
        return <Compass {...props} />;
      case 'Flame':
        return <Flame {...props} />;
      case 'HeartHandshake':
        return <HeartHandshake {...props} />;
      case 'Building2':
        return <Building2 {...props} />;
      case 'Wand2':
        return <Wand2 {...props} />;
      case 'Rocket':
        return <Rocket {...props} />;
      case 'Sun':
        return <Sun {...props} />;
      case 'Moon':
        return <Moon {...props} />;
      case 'Swords':
        return <Swords {...props} />;
      case 'ShieldAlert':
        return <ShieldAlert {...props} />;
      case 'Palette':
        return <Palette {...props} />;
      default:
        return <Sparkles {...props} />;
    }
  };

  const handleSelectOption = (option: QuizOption) => {
    const updated = { ...selectedAnswers, [currentStep]: option };
    setSelectedAnswers(updated);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Completed all 5 questions: compute recommendations
      const optionsArray = Object.values(updated);
      const profile = buildUserTasteProfile(optionsArray);
      const recs = getTopRecommendations(profile);

      setUserProfile(profile);
      setRecommendations(recs);
      setIsCompleted(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleRetake = () => {
    setSelectedAnswers({});
    setCurrentStep(0);
    setIsCompleted(false);
    setUserProfile(null);
    setRecommendations([]);
  };

  const handleSaveProfile = () => {
    if (userProfile) {
      // Save profile to localStorage for persistence
      try {
        localStorage.setItem(
          'tailortale_quiz_profile',
          JSON.stringify({
            vector: userProfile.vector,
            tropes: userProfile.selectedTropes,
            topRecs: recommendations.map((r) => r.book.title),
            timestamp: new Date().toISOString(),
          })
        );
      } catch (e) {
        console.error('Could not save profile to localStorage', e);
      }
    }

    // Scroll to waitlist form
    const waitlistEl = document.getElementById('waitlist');
    if (waitlistEl) {
      waitlistEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Find 2 suggested micro-communities matching the user's top tropes
  const suggestedCommunities = userProfile
    ? TROPE_COMMUNITIES.filter((c) =>
        userProfile.selectedTropes.some(
          (t) => t.toLowerCase().includes(c.name.toLowerCase()) || c.tag.includes(t.toLowerCase())
        )
      ).slice(0, 2)
    : TROPE_COMMUNITIES.slice(0, 2);

  const fallbackCommunities =
    suggestedCommunities.length >= 2 ? suggestedCommunities : TROPE_COMMUNITIES.slice(0, 2);

  const currentQuestion = QUIZ_QUESTIONS[currentStep];

  return (
    <section id="quiz" className="py-20 sm:py-28 bg-mint/50 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Interactive Quiz Demo"
          title="Discover your personalized reading DNA in 60 seconds"
          description="We do not ask for 50 book ratings. Simply pick the situations and character dynamics that captivate your imagination."
        />

        {!isCompleted ? (
          /* ACTIVE QUIZ SCREEN */
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-teal/20 shadow-soft-lg transition-all duration-300">
            {/* Quiz Navigation & Progress Bar */}
            <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                {currentStep > 0 && (
                  <button
                    onClick={handleBack}
                    className="p-1.5 rounded-lg text-slate-500 hover:text-navy hover:bg-slate-100 transition-colors cursor-pointer"
                    aria-label="Previous question"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                )}
                <span className="text-xs sm:text-sm font-semibold text-teal-dark bg-teal/10 px-3 py-1 rounded-full">
                  Question {currentStep + 1} of {QUIZ_QUESTIONS.length}
                </span>
              </div>

              <span className="text-xs font-semibold text-navy-muted">
                {currentQuestion.dimensionLabel}
              </span>
            </div>

            {/* Visual Step Progress Bar */}
            <div className="w-full h-2 bg-mint rounded-full overflow-hidden mb-8">
              <div
                className="h-full bg-gradient-to-r from-teal to-teal-dark rounded-full transition-all duration-500 ease-out"
                style={{ width: `${((currentStep + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
              />
            </div>

            {/* Question Prompt */}
            <div className="mb-8">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-bold block mb-1">
                {currentQuestion.context}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-navy leading-snug">
                {currentQuestion.prompt}
              </h3>
            </div>

            {/* Option Cards */}
            <div className="space-y-4">
              {currentQuestion.options.map((option) => {
                const isSelected = selectedAnswers[currentStep]?.id === option.id;

                return (
                  <button
                    key={option.id}
                    onClick={() => handleSelectOption(option)}
                    className={`w-full text-left p-5 sm:p-6 rounded-2xl border-2 transition-all duration-200 cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group ${
                      isSelected
                        ? 'border-teal bg-teal/5 shadow-sm ring-2 ring-teal/20'
                        : 'border-slate-200 bg-white hover:border-teal/50 hover:bg-mint/30 shadow-xs'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-mint flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                        {renderOptionIcon(option.iconName)}
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-serif font-bold text-base sm:text-lg text-navy group-hover:text-teal-dark transition-colors">
                          {option.label}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {option.scenario}
                        </p>
                        <p className="text-[11px] text-teal-dark font-medium italic pt-1">
                          "{option.subtext}"
                        </p>
                      </div>
                    </div>

                    <div className="flex-shrink-0 self-end sm:self-center">
                      <div
                        className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors ${
                          isSelected
                            ? 'border-teal bg-teal text-white'
                            : 'border-slate-300 group-hover:border-teal text-transparent'
                        }`}
                      >
                        <Check className="w-4 h-4" />
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ) : (
          /* RESULT SCREEN (THE SHOWSTOPPER) */
          <div className="space-y-10 animate-in fade-in zoom-in-95 duration-500">
            {/* Top Congratulations Banner */}
            <div className="bg-navy rounded-3xl p-6 sm:p-10 text-white relative overflow-hidden shadow-soft-xl">
              <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-teal/20 to-transparent pointer-events-none" />

              <div className="relative z-10 max-w-2xl space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal text-white text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  Taste Vector Synthesized
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
                  Your reading journey has arrived.
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Based on your scenario responses, we calculated your multi-dimensional taste vector and ranked 12 acclaimed books using cosine similarity.
                </p>

                <div className="pt-2 flex flex-wrap gap-2">
                  {userProfile?.selectedTropes.map((trope) => (
                    <span
                      key={trope}
                      className="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-yellow border border-yellow/30"
                    >
                      #{trope}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Radar / Bar Taste Profile Visualizer */}
            {userProfile && <TasteProfileChart vector={userProfile.vector} />}

            {/* Top 3 Explained Recommendations */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-navy">
                    Your Top 3 Explained Recommendations
                  </h3>
                  <p className="text-sm text-navy-muted">
                    Ranked by content-based cosine similarity with plain-English rationales.
                  </p>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-dark bg-teal/10 px-3 py-1 rounded-full self-start sm:self-auto">
                  Live Cosine Ranking
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {recommendations.map((rec, index) => (
                  <Card
                    key={rec.book.id}
                    padded="none"
                    className="bg-white border-2 border-teal/20 overflow-hidden flex flex-col justify-between hover:border-teal transition-all"
                  >
                    {/* Header with Match Percentage */}
                    <div className="p-4 bg-mint/50 border-b border-teal/10 flex items-center justify-between">
                      <span className="text-xs font-bold text-navy bg-white px-2.5 py-1 rounded-full border border-teal/20">
                        Rank #{index + 1}
                      </span>
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-teal text-white shadow-xs">
                        {rec.matchPercentage}% Match
                      </span>
                    </div>

                    {/* Book Presentation with Pure CSS Cover */}
                    <div className="p-5 flex flex-col items-center text-center">
                      <div className="my-2">
                        <BookCover book={rec.book} size="md" />
                      </div>
                      <h4 className="font-serif font-bold text-lg text-navy mt-3 leading-snug">
                        {rec.book.title}
                      </h4>
                      <p className="text-xs text-slate-500 font-medium">by {rec.book.author}</p>
                      <p className="text-xs text-navy-muted mt-2 line-clamp-2 px-1">
                        {rec.book.pitch}
                      </p>
                    </div>

                    {/* "Why this book?" Plain-English Explanation (Specified Requirement) */}
                    <div className="p-4 bg-yellow/15 border-t border-yellow/40 mx-4 mb-4 rounded-xl text-left">
                      <div className="flex items-center gap-1.5 text-navy font-bold text-xs mb-1">
                        <span className="w-2 h-2 rounded-full bg-yellow-warm" />
                        Why this book?
                      </div>
                      <p className="text-xs text-navy-light leading-relaxed">
                        {rec.explanation}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* 2 Suggested Micro-Communities */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-teal/20 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-5 h-5 text-teal" />
                <h4 className="font-serif font-bold text-xl text-navy">
                  Suggested Trope Micro-Communities for You
                </h4>
              </div>
              <p className="text-sm text-navy-muted mb-6">
                Based on your reading dynamics, you'd feel right at home in these reader rooms:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {fallbackCommunities.map((comm) => (
                  <div
                    key={comm.id}
                    className="p-4 rounded-xl bg-mint/50 border border-teal/20 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-serif font-bold text-navy text-base">
                          {comm.name}
                        </span>
                        <span className="text-xs font-semibold text-teal-dark bg-white px-2 py-0.5 rounded-full border border-teal/20">
                          {comm.memberCountFormatted}
                        </span>
                      </div>
                      <p className="text-xs text-navy-soft leading-relaxed mt-1">
                        {comm.description}
                      </p>
                    </div>
                    <div className="mt-3 pt-2 border-t border-teal/15 text-[11px] text-slate-500">
                      Sample books: {comm.sampleBooks.slice(0, 2).join(', ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions: Save Profile & Retake Quiz */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button
                onClick={handleSaveProfile}
                variant="accent"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Save my profile, join the waitlist
              </Button>
              <Button
                onClick={handleRetake}
                variant="outline"
                size="lg"
                icon={<RotateCcw className="w-4 h-4" />}
                iconPosition="left"
              >
                Retake quiz
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
