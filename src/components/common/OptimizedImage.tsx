import React, { useState, useCallback } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackSrc?: string;
  className?: string;
  containerClassName?: string;
  lazy?: boolean;
  onError?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  fallbackSrc,
  className,
  containerClassName,
  lazy = true,
  onError,
  ...props
}) => {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = useCallback((event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setImageError(true);
    setIsLoading(false);
    onError?.(event);
  }, [onError]);

  const handleLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  if (imageError && !fallbackSrc) {
    return (
      <div className={cn(
        'flex items-center justify-center bg-muted rounded-lg',
        'min-h-[200px] text-muted-foreground',
        containerClassName
      )}>
        <div className="text-center">
          <div className="text-sm">Image unavailable</div>
          <div className="text-xs opacity-70 mt-1">{alt}</div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn('relative', containerClassName)}>
      {isLoading && (
        <div className={cn(
          'absolute inset-0 flex items-center justify-center',
          'bg-muted rounded-lg animate-pulse'
        )}>
          <div className="text-sm text-muted-foreground">Loading...</div>
        </div>
      )}
      <img
        src={imageError && fallbackSrc ? fallbackSrc : src}
        alt={alt}
        className={cn(
          'transition-opacity duration-300',
          isLoading ? 'opacity-0' : 'opacity-100',
          className
        )}
        loading={lazy ? 'lazy' : 'eager'}
        decoding="async"
        onError={handleError}
        onLoad={handleLoad}
        {...props}
      />
    </div>
  );
};