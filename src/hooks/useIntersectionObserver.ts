import { useEffect, useRef, useState } from 'react';

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

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        const isIntersecting = entry.isIntersecting;
        
        setIsIntersecting(isIntersecting);
        
        if (isIntersecting && triggerOnce && !hasTriggered) {
          setHasTriggered(true);
          element.classList.add('animate-fade-in');
          observer.unobserve(element);
        } else if (!triggerOnce) {
          if (isIntersecting) {
            element.classList.add('animate-fade-in');
          }
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce, hasTriggered]);

  return { elementRef, isIntersecting, hasTriggered };
};
