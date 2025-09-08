import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface UseScrollToTopOptions {
  smooth?: boolean;
  threshold?: number;
}

export const useScrollToTop = (options: UseScrollToTopOptions = {}) => {
  const { smooth = true, threshold = 0 } = options;
  const { pathname } = useLocation();

  useEffect(() => {
    if (window.scrollY > threshold) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: smooth ? 'smooth' : 'auto'
      });
    }
  }, [pathname, smooth, threshold]);
};