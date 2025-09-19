import React from 'react';
import Image from 'next/image';
import { Button } from './Button';

export interface HeroProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  primaryButtonHref?: string;
  secondaryButtonHref?: string;
  imageSrc: string;
  imageAlt: string;
}

const Hero = React.forwardRef<HTMLDivElement, HeroProps>(
  ({ 
    className = '', 
    title,
    description,
    primaryButtonText,
    secondaryButtonText,
    primaryButtonHref,
    secondaryButtonHref,
    imageSrc,
    imageAlt,
    ...props 
  }, ref) => {
    const baseClasses = 'w-full min-h-auto py-6 md:py-12 flex items-center justify-center bg-neutral-50';
    
    const classes = `${baseClasses} ${className}`.trim();
    
    return (
      <section
        className={classes}
        ref={ref}
        {...props}
      >
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-2 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8 order-2 lg:order-1">
              {/* Main Heading */}
              <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl xl:text-7xl/19 font-bold text-primary-950 leading-tight opacity-0 animate-fade-in-up animation-delay-400">
                {title}
              </h1>
              
              {/* Description */}
              <p className="font-sans text-lg sm:text-xl lg:text-2xl text-foreground text-primary-950leading-relaxed max-w-2xl opacity-0 animate-fade-in-up animation-delay-600">
                {description}
              </p>
              
              {/* Call-to-Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 opacity-0 animate-fade-in-up animation-delay-800">
                <Button
                  variant="primary"
                  size="base"
                  className="w-full sm:w-auto"
                  asChild={!!primaryButtonHref}
                >
                  {primaryButtonHref ? (
                    <a href={primaryButtonHref}>
                      {primaryButtonText}
                    </a>
                  ) : (
                    primaryButtonText
                  )}
                </Button>
                
                <Button
                  variant="secondary"
                  size="base"
                  className="w-full sm:w-auto"
                  asChild={!!secondaryButtonHref}
                >
                  {secondaryButtonHref ? (
                    <a href={secondaryButtonHref}>
                      {secondaryButtonText}
                    </a>
                  ) : (
                    secondaryButtonText
                  )}
                </Button>
              </div>
            </div>
            
            {/* Right Column - Image */}
            <div className="relative order-1 lg:order-2 hidden md:block opacity-0 animate-fade-in-up animation-delay-800">
              <div className="relative w-full h-96 sm:h-[500px] lg:h-[600px] xl:h-[700px] overflow-hidden">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-contain w-full h-full"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
);

Hero.displayName = 'Hero';

export { Hero };
