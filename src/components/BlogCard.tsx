import React from 'react';
import Image from 'next/image';
import { Badge } from './Badge';

export interface BlogCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  category: string;
  date: string;
  readTime: string;
  imageSrc: string;
  imageAlt: string;
  href?: string;
  variant?: 'base' | 'featured';
}

const BlogCard = React.forwardRef<HTMLDivElement, BlogCardProps>(
  ({ 
    className = '', 
    title, 
    category, 
    date, 
    readTime, 
    imageSrc, 
    imageAlt, 
    href,
    variant = 'base',
    ...props 
  }, ref) => {
    const baseClasses = 'group block overflow-hidden transition-all duration-300 focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-offset-2';
    
    const variantClasses = {
      base: 'rounded-lg',
      featured: 'rounded-lg flex flex-col md:flex-row'
    };
    
    const classes = `${baseClasses} ${variantClasses[variant]} ${className}`.trim();
    
    const content = (
      <>
        {/* Image Container */}
        <div className={`relative overflow-hidden ${variant === 'featured' ? 'w-full md:w-1/2 h-48 md:h-auto' : 'w-full h-72 sm:h-56 md:h-64'} rounded-md`}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
            sizes={variant === 'featured' ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"}
          />
        </div>
        
        {/* Content Container */}
        <div className={`${variant === 'featured' ? 'w-full md:w-1/2 p-6 flex flex-col justify-center' : 'py-6'}`}>
          {/* Category Badge */}
          <div className="mb-3">
            <Badge>{category}</Badge>
          </div>
          
          {/* Title */}
          <h3 className="font-sans text-lg sm:text-xl md:text-2xl text-foreground mb-3 group-hover:text-neutral-600 transition-colors duration-200">
            {title}
          </h3>
          
          {/* Metadata */}
          <div className="flex items-center text-sm text-neutral-600 font-sans">
            <time dateTime={date} className="">
              {date}
            </time>
            <span className="mx-2 text-secondary-700">|</span>
            <span>{readTime}</span>
          </div>
        </div>
      </>
    );

    if (href) {
      return (
        <a
          href={href}
          className={classes}
          ref={ref as React.Ref<HTMLAnchorElement>}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {content}
        </a>
      );
    }

    return (
      <div
        className={classes}
        ref={ref}
        {...props}
      >
        {content}
      </div>
    );
  }
);
BlogCard.displayName = 'BlogCard';

export { BlogCard };
