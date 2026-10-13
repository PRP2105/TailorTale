import React, { useState, useEffect } from 'react';
import { Button } from '../components/common/Button';
import { CheckCircle2, Sparkles, Send, BookOpen } from 'lucide-react';

interface WaitlistEntry {
  name: string;
  email: string;
  persona: 'new_reader' | 'regular_reader' | 'author_publisher';
  date: string;
  hasQuizProfile?: boolean;
}

export const WaitlistSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [persona, setPersona] = useState<'new_reader' | 'regular_reader' | 'author_publisher'>('new_reader');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [hasSavedQuiz, setHasSavedQuiz] = useState(false);

  useEffect(() => {
    // Check if user already submitted before
    try {
      const existing = localStorage.getItem('tailortale_waitlist_submission');
      if (existing) {
        setSubmitted(true);
      }
      const quizProfile = localStorage.getItem('tailortale_quiz_profile');
      if (quizProfile) {
        setHasSavedQuiz(true);
      }
    } catch {
      // ignore
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Form validation
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();

    if (!trimmedName) {
      setError('Please provide your name.');
      return;
    }

    if (!trimmedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setError('Please provide a valid email address.');
      return;
    }

    const newEntry: WaitlistEntry = {
      name: trimmedName,
      email: trimmedEmail,
      persona,
      date: new Date().toISOString(),
      hasQuizProfile: hasSavedQuiz,
    };

    try {
      // Save single latest submission
      localStorage.setItem('tailortale_waitlist_submission', JSON.stringify(newEntry));

      // Append to list of waitlist entries in localStorage
      const prevListRaw = localStorage.getItem('tailortale_waitlist_all');
      const prevList: WaitlistEntry[] = prevListRaw ? JSON.parse(prevListRaw) : [];
      prevList.push(newEntry);
      localStorage.setItem('tailortale_waitlist_all', JSON.stringify(prevList));

      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setError('Could not save to local storage. Please try again.');
    }
  };

  const handleReset = () => {
    try {
      localStorage.removeItem('tailortale_waitlist_submission');
    } catch {}
    setSubmitted(false);
    setName('');
    setEmail('');
  };

  return (
    <section id="waitlist" className="py-20 sm:py-28 bg-navy text-white relative overflow-hidden">
      {/* Decorative background glow rings */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-teal/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-yellow/15 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal/20 text-teal-light border border-teal/30 text-xs sm:text-sm font-semibold mb-6">
          <Sparkles className="w-4 h-4 text-yellow" />
          <span>Early Beta Access for Indian Readers</span>
        </div>

        {/* Headline & Subtitle */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Be first to experience book recommendations that actually get you.
        </h2>
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Join 500+ students and readers on our early access cohort. We are launching beta invites this semester with zero spam.
        </p>

        {hasSavedQuiz && (
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-teal/25 border border-teal/40 text-xs sm:text-sm text-teal-light font-medium">
            <BookOpen className="w-4 h-4 text-yellow" />
            <span>Your quiz taste profile is ready to attach to your invitation!</span>
          </div>
        )}

        {/* Waitlist Form or Success State */}
        <div className="bg-white text-navy rounded-3xl p-6 sm:p-10 shadow-soft-xl max-w-xl mx-auto text-left border border-white/20">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* Name Input */}
              <div>
                <label htmlFor="waitlist-name" className="block text-xs font-bold uppercase tracking-wider text-navy mb-2">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  id="waitlist-name"
                  type="text"
                  placeholder="e.g. Preksha Paldiwal"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal focus:border-teal transition-all"
                  required
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="waitlist-email" className="block text-xs font-bold uppercase tracking-wider text-navy mb-2">
                  Email Address <span className="text-rose-500">*</span>
                </label>
                <input
                  id="waitlist-email"
                  type="email"
                  placeholder="e.g. student@djsce.ac.in"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal focus:border-teal transition-all"
                  required
                />
              </div>

              {/* Persona Selector (Specified: "I am a: new reader / regular reader / author or publisher") */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-2">
                  I am a: <span className="text-rose-500">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {[
                    { id: 'new_reader', label: 'New Reader' },
                    { id: 'regular_reader', label: 'Regular Reader' },
                    { id: 'author_publisher', label: 'Author / Publisher' },
                  ].map((p) => {
                    const isSelected = persona === p.id;
                    return (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => setPersona(p.id as any)}
                        className={`p-2.5 rounded-xl border text-xs font-semibold text-center transition-all cursor-pointer ${
                          isSelected
                            ? 'border-teal bg-teal text-white shadow-xs'
                            : 'border-slate-200 bg-mint/30 text-navy hover:border-teal/40'
                        }`}
                      >
                        {p.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium">
                  {error}
                </div>
              )}

              {/* Submit CTA */}
              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full font-bold shadow-md hover:shadow-lg justify-center"
                  icon={<Send className="w-4 h-4" />}
                >
                  Join the Beta Waitlist
                </Button>
              </div>

              <p className="text-[11px] text-center text-slate-400">
                🔒 We respect your inbox. Zero spam. Saved securely to your local browser storage.
              </p>
            </form>
          ) : (
            /* Celebratory Confirmation State */
            <div className="text-center py-6 space-y-4 animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-teal/15 text-teal flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-navy">
                You are on the TailorTale VIP list!
              </h3>
              <p className="text-sm text-navy-muted leading-relaxed">
                Thank you, <strong className="text-navy">{name || 'fellow reader'}</strong>! Your reservation has been recorded in your browser’s localStorage. We will notify you as soon as beta invites roll out to Mumbai college campuses.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  asAnchor
                  href="#quiz"
                  variant="accent"
                  size="md"
                >
                  Explore Quiz Demo Again
                </Button>
                <button
                  onClick={handleReset}
                  className="text-xs text-slate-400 hover:text-navy underline cursor-pointer self-center"
                >
                  Submit another response
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
