import React from 'react';
import { Book } from '../../data/books';

interface BookCoverProps {
  book: Book;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showPitchBadge?: boolean;
}

export const BookCover: React.FC<BookCoverProps> = ({
  book,
  size = 'md',
  className = '',
}) => {
  const sizeStyles = {
    sm: 'w-[110px] h-[160px] p-3 text-[11px]',
    md: 'w-[150px] h-[220px] p-4 text-xs',
    lg: 'w-[190px] h-[280px] p-5 text-sm',
  };

  const titleSizes = {
    sm: 'text-xs line-clamp-2',
    md: 'text-sm line-clamp-3 leading-snug',
    lg: 'text-base line-clamp-3 leading-tight',
  };

  const { from, to, accent, pattern } = book.coverGradient;

  return (
    <div
      className={`relative rounded-r-lg rounded-l-sm overflow-hidden flex flex-col justify-between shadow-soft-lg select-none transition-transform duration-300 hover:scale-105 group ${sizeStyles[size]} ${className}`}
      style={{
        background: `linear-gradient(145deg, ${from} 0%, ${to} 100%)`,
        boxShadow:
          '2px 4px 16px rgba(0, 0, 0, 0.22), -3px 0 6px rgba(0, 0, 0, 0.15) inset, 0 0 0 1px rgba(255, 255, 255, 0.08) inset',
      }}
    >
      {/* Book Spine Bevel Effect (left edge highlight & shadow) */}
      <div
        className="absolute left-0 top-0 bottom-0 w-3 pointer-events-none"
        style={{
          background:
            'linear-gradient(90deg, rgba(255,255,255,0.25) 0%, rgba(0,0,0,0.15) 60%, rgba(0,0,0,0.4) 100%)',
        }}
      />
      <div
        className="absolute left-3 top-0 bottom-0 w-[1px] pointer-events-none"
        style={{ backgroundColor: 'rgba(255,255,255,0.18)' }}
      />

      {/* Decorative SVG Geometric Patterns on Cover */}
      <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
        {pattern === 'arch' && (
          <svg className="w-full h-full" viewBox="0 0 100 140" fill="none">
            <path
              d="M20 140V50C20 33.4315 33.4315 20 50 20C66.5685 20 80 33.4315 80 50V140"
              stroke={accent}
              strokeWidth="2.5"
            />
            <circle cx="50" cy="50" r="14" stroke={accent} strokeWidth="1.5" />
          </svg>
        )}
        {pattern === 'circles' && (
          <svg className="w-full h-full" viewBox="0 0 100 140" fill="none">
            <circle cx="50" cy="70" r="35" stroke={accent} strokeWidth="2" strokeDasharray="4 4" />
            <circle cx="50" cy="70" r="20" stroke={accent} strokeWidth="1.5" />
            <circle cx="50" cy="70" r="5" fill={accent} />
          </svg>
        )}
        {pattern === 'stripe' && (
          <svg className="w-full h-full" viewBox="0 0 100 140" fill="none">
            <line x1="10" y1="20" x2="90" y2="20" stroke={accent} strokeWidth="2" />
            <line x1="10" y1="26" x2="90" y2="26" stroke={accent} strokeWidth="1" />
            <line x1="10" y1="120" x2="90" y2="120" stroke={accent} strokeWidth="2" />
          </svg>
        )}
        {pattern === 'minimal' && (
          <svg className="w-full h-full" viewBox="0 0 100 140" fill="none">
            <rect x="25" y="30" width="50" height="80" rx="4" stroke={accent} strokeWidth="1.5" />
          </svg>
        )}
      </div>

      {/* Top Header of Cover */}
      <div className="relative z-10 pl-2">
        <span
          className="text-[9px] uppercase tracking-widest font-semibold block"
          style={{ color: accent }}
        >
          {book.tropes[0] || 'Original'}
        </span>
      </div>

      {/* Middle: Title & Author */}
      <div className="relative z-10 pl-2 my-auto text-left">
        <h4
          className={`font-serif font-bold text-white tracking-tight ${titleSizes[size]} drop-shadow-sm`}
        >
          {book.title}
        </h4>
        <p className="mt-1 text-slate-300 font-sans text-[11px] font-medium tracking-wide">
          {book.author}
        </p>
      </div>

      {/* Bottom Footer of Cover */}
      <div className="relative z-10 pl-2 flex items-center justify-between">
        <span className="text-[9px] text-slate-400 font-mono">{book.year}</span>
        <div
          className="w-2.5 h-2.5 rounded-full"
          style={{ backgroundColor: accent }}
          title={book.tropes.join(', ')}
        />
      </div>
    </div>
  );
};
