import { useEffect, useState, useCallback } from "react";

interface UseThrottledScrollOptions {
  threshold?: number;
}

/**
 * Throttling here is done by coalescing scroll events into one
 * requestAnimationFrame callback, which paces updates to the display's actual
 * refresh rate. A `throttleMs` option used to exist alongside it, but nothing
 * ever read the value — Navbar passed `throttleMs: 16` and got rAF pacing
 * regardless. Removed rather than implemented: rAF is the better mechanism, so
 * the option could only ever have made the behaviour worse.
 */
export const useThrottledScroll = (options: UseThrottledScrollOptions = {}) => {
  const { threshold = 10 } = options;
  const [isScrolled, setIsScrolled] = useState(false);

  const updateScrollState = useCallback(() => {
    const scrolled = window.scrollY > threshold;
    setIsScrolled(prev => prev !== scrolled ? scrolled : prev);
  }, [threshold]);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateScrollState();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Set initial state
    updateScrollState();

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [updateScrollState]);

  return isScrolled;
};