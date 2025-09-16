import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default';
  children: React.ReactNode;
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className = '', variant = 'default', children, ...props }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center font-sans font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';
    
    const variantClasses = {
      default: 'bg-neutral-200 text-neutral-950 border border-neutral-700 focus-visible:ring-neutral-700',
      // Future variants can be added here:
      // primary: 'bg-primary-200 text-primary-950 border border-primary-700 focus-visible:ring-primary-700',
      // secondary: 'bg-secondary-200 text-secondary-950 border border-secondary-700 focus-visible:ring-secondary-700',
      // accent: 'bg-accent-200 text-accent-950 border border-accent-700 focus-visible:ring-accent-700',
    };
    
    const classes = `${baseClasses} ${variantClasses[variant]} px-2 py-1 text-xs rounded ${className}`.trim();
    
    return (
      <span
        className={classes}
        ref={ref}
        {...props}
      >
        {children}
      </span>
    );
  }
);
Badge.displayName = 'Badge';

export { Badge };