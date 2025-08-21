import React from 'react';
import { cn } from '@/lib/utils';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: 'glass' | 'solid' | 'feature';
}

const variantStyles = {
  glass: 'glass-card',
  solid: 'bg-white border border-gray-200 rounded-2xl shadow-elegant',
  feature: 'feature-card glass-card hover:bg-gradient-to-br hover:from-white hover:to-pulse-50'
};

export const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  className,
  delay = 0,
  variant = 'glass'
}) => {
  const { elementRef } = useIntersectionObserver();

  return (
    <div
      ref={elementRef}
      className={cn(
        variantStyles[variant],
        'opacity-0 transition-all duration-300',
        className
      )}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};