import React from 'react';
import Image from 'next/image';

export interface FeaturedCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href?: string;
  className?: string;
}

const FeaturedCard = React.forwardRef<
  HTMLDivElement | HTMLAnchorElement,
  FeaturedCardProps & React.HTMLAttributes<HTMLDivElement>
>(
  ({ 
    className = '', 
    title,
    description,
    imageSrc,
    imageAlt,
    href,
    ...props 
  }, ref) => {
    const baseClasses = 'group relative bg-background rounded-md overflow-hidden transition-all duration-300 focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-offset-2';
    
    const classes = `${baseClasses} ${className}`.trim();
    
    const content = (
      <>
        {/* Image Container */}
        <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-top object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
            style={{ objectPosition: '50% 10%' }}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            priority
          />
        </div>
        
        {/* Content Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-100 transition-opacity duration-300" />
        
        {/* Text Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="font-sans text-lg sm:text-xl md:text-2xl font-normal mb-2 leading-tight">
            {title}
          </h3>
          <p className="font-sans text-sm sm:text-base text-white/90 leading-relaxed hidden">
            {description}
          </p>
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
        ref={ref as React.Ref<HTMLDivElement>}
        {...props}
      >
        {content}
      </div>
    );
  }
);

FeaturedCard.displayName = 'FeaturedCard';

export { FeaturedCard };