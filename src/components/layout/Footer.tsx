import React from 'react';
import { Logo } from '../common/Logo';
import { SOCIAL_LINKS, APP_METADATA } from '../../data/constants';
import { Heart, Github, Twitter, Instagram, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-light text-slate-300 pt-16 pb-12 border-t border-navy/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <Logo size="md" monochrome={true} />
            <p className="text-slate-300 text-sm sm:text-base max-w-sm leading-relaxed">
              TailorTale learns your taste first, recommends books with clear reasons, and connects you with reader-matched trope micro-communities.
            </p>
            <div className="pt-2">
              <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-teal/20 text-teal-light border border-teal/40">
                {APP_METADATA.college}
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-serif font-semibold text-white text-base mb-3">Explore</h4>
              <ul className="space-y-2.5">
                <li>
                  <a href="#problem" className="hover:text-teal transition-colors">
                    The Problem
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-teal transition-colors">
                    How it Works
                  </a>
                </li>
                <li>
                  <a href="#quiz" className="hover:text-teal transition-colors">
                    Taste Quiz Demo
                  </a>
                </li>
                <li>
                  <a href="#communities" className="hover:text-teal transition-colors">
                    Trope Communities
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif font-semibold text-white text-base mb-3">Pitch Deck</h4>
              <ul className="space-y-2.5">
                <li>
                  <a href="#why-us" className="hover:text-teal transition-colors">
                    Competitive Edge
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-teal transition-colors">
                    Pricing & Model
                  </a>
                </li>
                <li>
                  <a href="#roadmap" className="hover:text-teal transition-colors">
                    Project Roadmap
                  </a>
                </li>
                <li>
                  <a href="#team" className="hover:text-teal transition-colors">
                    Engineering Team
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Socials & Feedback */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-serif font-semibold text-white text-base">Connect & Survey</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Evaluating student reader behaviour across Indian engineering campuses.
            </p>
            {/* Social Icons (TODO: Replace with production social links) */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Repository"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-teal hover:text-white flex items-center justify-center transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter Account"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-teal hover:text-white flex items-center justify-center transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram Account"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-teal hover:text-white flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-teal hover:text-white flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
            <div className="pt-2">
              <a
                href="#waitlist"
                className="inline-flex items-center gap-1.5 text-xs text-yellow hover:underline font-semibold"
              >
                Join 500+ student waitlist →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Mandatory Disclaimers */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <p className="flex items-center gap-1.5 text-center sm:text-left">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-yellow fill-yellow inline" />
            <span>by B.Tech students, DJ Sanghvi College of Engineering, Mumbai</span>
          </p>
          <p className="text-slate-300 text-center sm:text-right">
            {APP_METADATA.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
};
