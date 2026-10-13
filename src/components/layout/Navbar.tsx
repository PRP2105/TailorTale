import React, { useState, useEffect } from 'react';
import { Logo } from '../common/Logo';
import { Button } from '../common/Button';
import { Menu, X, Sparkles } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Problem', href: '#problem' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Try the quiz', href: '#quiz' },
  { label: 'Why us', href: '#why-us' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Team', href: '#team' },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect current section
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      let current = '';

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            current = `#${section}`;
            break;
          }
        }
      }

      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-teal/10 py-3'
          : 'bg-mint/80 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo size="md" />

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-teal-dark bg-teal/10 font-semibold'
                      : 'text-navy hover:text-teal-dark hover:bg-mint/60'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              asAnchor
              href="#quiz"
              variant="ghost"
              size="sm"
              icon={<Sparkles className="w-4 h-4 text-teal" />}
              iconPosition="left"
            >
              Quiz Demo
            </Button>
            <Button asAnchor href="#waitlist" variant="primary" size="sm">
              Join the waitlist
            </Button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button
              asAnchor
              href="#waitlist"
              variant="primary"
              size="sm"
              className="text-xs px-3 py-1.5 hidden sm:inline-flex"
            >
              Waitlist
            </Button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-navy hover:bg-mint focus:outline-none focus-visible:ring-2 focus-visible:ring-teal cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-white border-b border-mint-border shadow-xl px-5 pt-4 pb-6 space-y-3 animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="px-4 py-2.5 rounded-xl text-base font-medium text-navy hover:text-teal-dark hover:bg-mint flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="text-teal text-xs font-mono">→</span>
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <Button
              asAnchor
              href="#quiz"
              variant="accent"
              size="md"
              onClick={closeMenu}
              icon={<Sparkles className="w-4 h-4" />}
            >
              Try the 60-Second Quiz
            </Button>
            <Button
              asAnchor
              href="#waitlist"
              variant="primary"
              size="md"
              onClick={closeMenu}
            >
              Join the Waitlist
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
