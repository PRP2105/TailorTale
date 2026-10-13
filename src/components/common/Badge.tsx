import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'teal' | 'yellow' | 'navy' | 'mint' | 'outline' | 'neutral';
  size?: 'sm' | 'md';
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'mint',
  size = 'md',
  className = '',
  icon,
}) => {
  const sizeStyles = {
    sm: 'text-xs px-2.5 py-0.5 gap-1',
    md: 'text-sm px-3.5 py-1 gap-1.5',
  };

  const variantStyles = {
    teal: 'bg-teal/15 text-teal-dark border border-teal/25 font-medium',
    yellow: 'bg-yellow/30 text-navy border border-yellow font-semibold',
    navy: 'bg-navy text-white font-medium',
    mint: 'bg-mint text-navy border border-mint-border font-medium',
    neutral: 'bg-slate-100 text-slate-700 border border-slate-200 font-medium',
    outline: 'bg-transparent text-navy border border-navy/20 font-medium',
  };

  return (
    <span
      className={`inline-flex items-center rounded-full tracking-wide ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </span>
  );
};
