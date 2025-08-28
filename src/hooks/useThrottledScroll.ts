import { useEffect, useState, useCallback } from "react";

interface UseThrottledScrollOptions {
  threshold?: number;
  throttleMs?: number;
}

export const useThrottledScroll = (options: UseThrottledScrollOptions = {}) => {
  const { threshold = 10, throttleMs = 16 } = options; // 16ms ≈ 60fps
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