import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'accent' | 'secondary' | 'outline' | 'ghost' | 'navy';
  size?: 'sm' | 'md' | 'lg';
  asAnchor?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  asAnchor = false,
  href,
  target,
  rel,
  children,
  icon,
  iconPosition = 'right',
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:pointer-events-none cursor-pointer';

  const sizeStyles = {
    sm: 'text-sm px-3.5 py-1.5 gap-1.5 min-h-[36px]',
    md: 'text-base px-5 py-2.5 gap-2 min-h-[44px]',
    lg: 'text-lg px-7 py-3.5 gap-2.5 min-h-[52px] font-semibold',
  };

  const variantStyles = {
    primary:
      'bg-teal text-white hover:bg-teal-dark shadow-sm hover:shadow-md focus-visible:ring-teal',
    accent:
      'bg-yellow text-navy hover:bg-yellow-warm shadow-sm hover:shadow-md focus-visible:ring-yellow-warm font-semibold',
    secondary:
      'bg-mint text-navy hover:bg-teal-subtle border border-mint-border focus-visible:ring-teal',
    navy:
      'bg-navy text-white hover:bg-navy-light shadow-sm hover:shadow-md focus-visible:ring-navy',
    outline:
      'bg-transparent text-navy border-2 border-teal hover:bg-teal hover:text-white focus-visible:ring-teal',
    ghost:
      'bg-transparent text-navy hover:bg-mint/80 focus-visible:ring-teal',
  };

  const combinedClass = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="flex-shrink-0">{icon}</span>}
    </>
  );

  if (asAnchor && href) {
    return (
      <a href={href} target={target} rel={rel} className={combinedClass}>
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClass} disabled={disabled} {...props}>
      {content}
    </button>
  );
};
