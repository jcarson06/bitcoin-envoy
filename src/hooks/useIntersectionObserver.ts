import { useEffect, useRef, useState } from 'react';
import { sharedObserverManager } from './useSharedIntersectionObserver';

interface UseIntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useIntersectionObserver = (
  options: UseIntersectionObserverOptions = {}
) => {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true
  } = options;
  
  const elementRef = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    let hasAnimated = false;

    const handleIntersection = (isIntersecting: boolean) => {
      setIsIntersecting(isIntersecting);
      
      if (isIntersecting && triggerOnce && !hasAnimated) {
        hasAnimated = true;
        setHasTriggered(true);
        // Use requestAnimationFrame for smooth animation
        requestAnimationFrame(() => {
          element.classList.add('animate-fade-in');
        });
        // Unobserve after triggering to improve performance
        sharedObserverManager.unobserve(element);
      } else if (!triggerOnce && isIntersecting) {
        requestAnimationFrame(() => {
          element.classList.add('animate-fade-in');
        });
      }
    };

    sharedObserverManager.observe(element, handleIntersection, { threshold, rootMargin });

    return () => {
      sharedObserverManager.unobserve(element);
    };
  }, [triggerOnce, threshold, rootMargin]);

  return { elementRef, isIntersecting, hasTriggered };
};
