import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  monochrome?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', monochrome = false }) => {
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  const iconSizes = {
    sm: 28,
    md: 34,
    lg: 42,
  };

  const px = iconSizes[size];

  return (
    <a
      href="#hero"
      aria-label="TailorTale Home"
      className={`inline-flex items-center gap-2.5 font-serif font-bold tracking-tight select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-teal rounded-lg transition-transform hover:scale-[1.02] ${className}`}
    >
      {/* SVG Icon: Open book with curved dotted journey path ending in a pinpoint dot */}
      <svg
        width={px}
        height={px}
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <rect width="44" height="44" rx="12" fill={monochrome ? '#FFFFFF' : '#19B5A5'} />
        {/* Left Book Page */}
        <path
          d="M10 16C12.8 14.2 16.5 14 20.5 15.6V30.5C16.5 29 12.8 29.3 10 31V16Z"
          fill={monochrome ? '#19B5A5' : '#FFFFFF'}
          fillOpacity="0.95"
        />
        {/* Right Book Page */}
        <path
          d="M34 16C31.2 14.2 27.5 14 23.5 15.6V30.5C27.5 29 31.2 29.3 34 31V16Z"
          fill={monochrome ? '#19B5A5' : '#FFFFFF'}
          fillOpacity="0.95"
        />
        {/* Book spine curve */}
        <path
          d="M22 15.5V30.5"
          stroke={monochrome ? '#FFFFFF' : '#138E82'}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Dotted path leading up from the spine into discovery */}
        <path
          d="M22 25C22 21 27 19 28 13.5"
          stroke={monochrome ? '#1F2A44' : '#FFD23F'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="2.5 2.5"
        />
        {/* Destination Pin Dot */}
        <circle cx="28.5" cy="11.5" r="3" fill={monochrome ? '#1F2A44' : '#FFD23F'} />
      </svg>

      {/* Wordmark: TailorTale with coloured dot over the 'i' */}
      <span className={`font-serif tracking-tight leading-none ${sizeClasses[size]} ${monochrome ? 'text-white' : 'text-navy'}`}>
        Ta<span className="relative inline-block">
          ı
          {/* Custom coloured dot over the 'i' */}
          <span
            className="absolute -top-[0.28em] left-1/2 -translate-x-1/2 w-[0.24em] h-[0.24em] rounded-full"
            style={{ backgroundColor: monochrome ? '#FFD23F' : '#19B5A5' }}
            aria-hidden="true"
          />
        </span>lorTale
      </span>
    </a>
  );
};
