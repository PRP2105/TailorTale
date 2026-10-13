import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 sm:mb-16 ${isCenter ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'} ${className}`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-1.5 px-3 py-1 mb-4 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase text-teal-dark bg-teal/10 border border-teal/20 ${isCenter ? 'mx-auto' : ''}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
          {eyebrow}
        </div>
      )}
      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-navy leading-[1.15]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-navy-muted leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
