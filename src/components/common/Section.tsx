import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  id?: string;
  className?: string;
  background?: 'white' | 'gray' | 'transparent';
  spacing?: 'none' | 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const spacingMap = {
  none: 'py-0',
  sm: 'py-8 sm:py-12',
  md: 'py-12 sm:py-16 md:py-20',
  lg: 'py-16 sm:py-20 md:py-24'
};

const backgroundMap = {
  white: 'bg-white',
  gray: 'bg-gray-50',
  transparent: 'bg-transparent'
};

export const Section = React.forwardRef<HTMLDivElement, SectionProps>(({
  id,
  className,
  background = 'white',
  spacing = 'md',
  children,
  ...props
}, ref) => {
  return (
    <section
      ref={ref}
      id={id}
      className={cn(
        backgroundMap[background],
        spacingMap[spacing],
        'relative',
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
});