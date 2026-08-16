import { useEffect, useRef, useState, useCallback } from 'react';

interface ObserverEntry {
  observer: IntersectionObserver;
  callbacks: Map<Element, (isIntersecting: boolean) => void>;
}

// Global shared observer manager with better memory management
class IntersectionObserverManager {
  private observers = new Map<string, ObserverEntry>();
  private elementToKey = new WeakMap<Element, string>();
  private rootIds = new WeakMap<Element | Document, number>();
  private nextRootId = 1;

  /** Stable per-root identifier, so two different roots never share a key. */
  private rootKey(root: IntersectionObserverInit['root']): string {
    if (!root) return 'viewport';
    let id = this.rootIds.get(root);
    if (id === undefined) {
      id = this.nextRootId++;
      this.rootIds.set(root, id);
    }
    return `root${id}`;
  }

  /**
   * Observers are shared by key, so the key must capture every option that
   * changes observer behaviour. It previously used `options.threshold || 0.1`,
   * which mapped a deliberate `threshold: 0` onto the `0.1` bucket — and since
   * observe() reuses an existing observer without reconciling options, the
   * first caller's threshold silently won for everyone afterwards. `??` keeps
   * 0 and '' intact, and root is now part of the key.
   */
  private createObserverKey(options: IntersectionObserverInit): string {
    const threshold = options.threshold ?? 0.1;
    const rootMargin = options.rootMargin ?? '0px';
    return `${JSON.stringify(threshold)}|${rootMargin}|${this.rootKey(options.root)}`;
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
  // `root` is destructured by name rather than collected with a rest spread:
  // IntersectionObserverInit has exactly root/rootMargin/threshold, so a rest
  // object adds nothing but a fresh identity on every render, which cannot go
  // in the effect's dependency array.
  const {
    triggerOnce = true,
    animationClass = 'animate-fade-in',
    threshold = 0.1,
    rootMargin = '0px',
    root = null,
  } = options;

  // Threshold may be an array; serialize so an inline literal stays stable.
  const thresholdKey = JSON.stringify(threshold);

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
      root,
    });

    return () => {
      observerManager.unobserve(element);
    };
    // thresholdKey stands in for `threshold`, which may be a non-primitive.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleIntersection, thresholdKey, rootMargin, root]);

  return { elementRef, isIntersecting, hasTriggered };
};

// Cleanup function for app teardown
export const cleanupIntersectionObservers = () => {
  observerManager.cleanup();
};