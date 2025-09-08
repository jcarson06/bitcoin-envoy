import { useEffect, useRef, useState, useCallback } from 'react';

interface ObserverEntry {
  observer: IntersectionObserver;
  callbacks: Map<Element, (isIntersecting: boolean) => void>;
}

// Global shared observer manager with better memory management
class IntersectionObserverManager {
  private observers = new Map<string, ObserverEntry>();
  private elementToKey = new WeakMap<Element, string>();

  private createObserverKey(options: IntersectionObserverInit): string {
    return `${options.threshold || 0.1}-${options.rootMargin || '0px'}`;
  }

  observe(
    element: Element, 
    callback: (isIntersecting: boolean) => void, 
    options: IntersectionObserverInit = {}
  ): void {
    const key = this.createObserverKey(options);
    
    if (!this.observers.has(key)) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const callbacks = this.observers.get(key)?.callbacks;
          const callback = callbacks?.get(entry.target);
          callback?.(entry.isIntersecting);
        });
      }, options);
      
      this.observers.set(key, { observer, callbacks: new Map() });
    }

    const observerEntry = this.observers.get(key)!;
    observerEntry.callbacks.set(element, callback);
    observerEntry.observer.observe(element);
    this.elementToKey.set(element, key);
  }

  unobserve(element: Element): void {
    const key = this.elementToKey.get(element);
    if (!key) return;

    const observerEntry = this.observers.get(key);
    if (observerEntry) {
      observerEntry.observer.unobserve(element);
      observerEntry.callbacks.delete(element);
      
      // Clean up empty observers
      if (observerEntry.callbacks.size === 0) {
        observerEntry.observer.disconnect();
        this.observers.delete(key);
      }
    }
    this.elementToKey.delete(element);
  }

  cleanup(): void {
    this.observers.forEach(({ observer }) => observer.disconnect());
    this.observers.clear();
  }
}

// Global instance
const observerManager = new IntersectionObserverManager();

interface UseOptimizedIntersectionObserverOptions extends IntersectionObserverInit {
  triggerOnce?: boolean;
  animationClass?: string;
}

export const useOptimizedIntersectionObserver = (
  options: UseOptimizedIntersectionObserverOptions = {}
) => {
  const {
    triggerOnce = true,
    animationClass = 'animate-fade-in',
    threshold = 0.1,
    rootMargin = '0px',
    ...observerOptions
  } = options;

  const elementRef = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const hasAnimatedRef = useRef(false);

  const handleIntersection = useCallback((isIntersecting: boolean) => {
    setIsIntersecting(isIntersecting);
    
    if (isIntersecting && triggerOnce && !hasAnimatedRef.current) {
      hasAnimatedRef.current = true;
      setHasTriggered(true);
      
      // Use requestAnimationFrame for smooth animation
      requestAnimationFrame(() => {
        elementRef.current?.classList.add(animationClass);
      });
      
      // Unobserve after triggering to improve performance
      if (elementRef.current) {
        observerManager.unobserve(elementRef.current);
      }
    } else if (!triggerOnce && isIntersecting) {
      requestAnimationFrame(() => {
        elementRef.current?.classList.add(animationClass);
      });
    }
  }, [triggerOnce, animationClass]);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    observerManager.observe(element, handleIntersection, {
      threshold,
      rootMargin,
      ...observerOptions
    });

    return () => {
      observerManager.unobserve(element);
    };
  }, [handleIntersection, threshold, rootMargin]);

  return { elementRef, isIntersecting, hasTriggered };
};

// Cleanup function for app teardown
export const cleanupIntersectionObservers = () => {
  observerManager.cleanup();
};