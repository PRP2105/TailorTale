import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  bordered?: boolean;
  padded?: 'sm' | 'md' | 'lg' | 'none';
  variant?: 'white' | 'mint' | 'navy';
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverable = true,
  bordered = true,
  padded = 'md',
  variant = 'white',
  ...props
}) => {
  const paddingStyles = {
    none: '',
    sm: 'p-4 sm:p-5',
    md: 'p-6 sm:p-7',
    lg: 'p-8 sm:p-10',
  };

  const variantStyles = {
    white: 'bg-white text-navy',
    mint: 'bg-mint-light text-navy',
    navy: 'bg-navy text-white',
  };

  const borderStyles = bordered
    ? variant === 'navy'
      ? 'border border-white/10'
      : 'border border-teal/15 shadow-sm'
    : '';

  const hoverStyles = hoverable
    ? 'transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg'
    : '';

  return (
    <div
      className={`rounded-2xl ${variantStyles[variant]} ${borderStyles} ${paddingStyles[padded]} ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
