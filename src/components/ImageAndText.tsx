import React from 'react';
import Image from 'next/image';

export interface ImageAndTextProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  variant?: 'base' | 'secondary' | 'tertiary';
  imagePosition?: 'left' | 'right';
  href?: string;
  enableAnimations?: boolean;
}

const ImageAndText = React.forwardRef<HTMLDivElement, ImageAndTextProps>(
  ({ 
    className = '',
    title,
    description,
    imageSrc,
    imageAlt,
    variant = 'base',
    imagePosition = 'right',
    href,
    ...props 
  }, ref) => {
    const baseClasses = 'overflow-hidden';
    
    const variantClasses = {
      base: 'bg-white text-primary-950',
      secondary: 'bg-neutral-50 text-primary-950',
      tertiary: 'bg-primary-950 text-white'
    };
    
    const classes = `${baseClasses} ${variantClasses[variant]} ${className}`.trim();

    const content = (
        <div className="container px-4 sm:px-6 md:px-8 xl:px-10 py-12 gap-8 flex items-stretch lg:items-center flex-col lg:flex-row">
          {/* Text Content */}
          <div className={`flex items-center justify-center flex-1 ${imagePosition === 'right' ? 'lg:order-1' : 'lg:order-2'}`}>
            <div className="w-full">
              <h2 className="font-sans text-3xl lg:text-4xl xl:text-5xl leading-tight mb-4">
                {title}
              </h2>
              <p className="font-sans text-lg lg:text-xl leading-relaxed">
                {description}
              </p>
            </div>
          </div>
          
          {/* Image Content */}
          <div className={`flex items-center justify-center flex-1 ${imagePosition === 'right' ? 'lg:order-2' : 'lg:order-1'}`}>
            <div className="relative w-full h-64 sm:h-80 lg:h-96 xl:h-[500px]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover rounded-md"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      );

    if (href) {
      return (
        <a
          href={href}
          className={`${classes} block hover:shadow-lg transition-shadow duration-300`}
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

ImageAndText.displayName = 'ImageAndText';

export { ImageAndText };
