import { useEffect, useRef, useState } from 'react';

interface SharedObserverManager {
  observers: Map<string, { observer: IntersectionObserver; callbacks: Map<Element, (isIntersecting: boolean) => void> }>;
  observe: (element: Element, callback: (isIntersecting: boolean) => void, options?: IntersectionObserverInit) => void;
  unobserve: (element: Element) => void;
  cleanup: () => void;
}

// Global shared observer manager
const createSharedObserverManager = (): SharedObserverManager => {
  const observers = new Map<string, { observer: IntersectionObserver; callbacks: Map<Element, (isIntersecting: boolean) => void> }>();

  const observe = (element: Element, callback: (isIntersecting: boolean) => void, options: IntersectionObserverInit = {}) => {
    const key = JSON.stringify(options);
    
    if (!observers.has(key)) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const callbacks = observers.get(key)?.callbacks;
          const callback = callbacks?.get(entry.target);
          if (callback) {
            callback(entry.isIntersecting);
          }
        });
      }, options);
      
      observers.set(key, { observer, callbacks: new Map() });
    }

    const observerData = observers.get(key)!;
    observerData.callbacks.set(element, callback);
    observerData.observer.observe(element);
  };

  const unobserve = (element: Element) => {
    observers.forEach(({ observer, callbacks }) => {
      if (callbacks.has(element)) {
        observer.unobserve(element);
        callbacks.delete(element);
      }
    });
  };

  const cleanup = () => {
    observers.forEach(({ observer }) => {
      observer.disconnect();
    });
    observers.clear();
  };

  return { observers, observe, unobserve, cleanup };
};

// Global shared observer manager
export const sharedObserverManager = createSharedObserverManager();

interface UseSharedIntersectionObserverOptions extends IntersectionObserverInit {
  triggerOnce?: boolean;
}

export const useSharedIntersectionObserver = (options: UseSharedIntersectionObserverOptions = {}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const { triggerOnce = true, ...observerOptions } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    let hasAnimated = false;

    const callback = (isIntersecting: boolean) => {
      setIsIntersecting(isIntersecting);
      
      if (isIntersecting && triggerOnce && !hasAnimated) {
        hasAnimated = true;
        setHasTriggered(true);
        // Use requestAnimationFrame for smooth animation
        requestAnimationFrame(() => {
          element.classList.add('animate-fade-in');
        });
        sharedObserverManager.unobserve(element);
      } else if (!triggerOnce && isIntersecting) {
        requestAnimationFrame(() => {
          element.classList.add('animate-fade-in');
        });
      }
    };

    sharedObserverManager.observe(element, callback, observerOptions);

    return () => {
      sharedObserverManager.unobserve(element);
    };
  }, [triggerOnce, observerOptions]);

  return { elementRef, isIntersecting, hasTriggered };
};

// Cleanup function for app teardown (optional)
export const cleanupSharedObservers = () => {
  sharedObserverManager.cleanup();
};