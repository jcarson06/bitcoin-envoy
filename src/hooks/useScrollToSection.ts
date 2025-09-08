import { useEffect, useCallback } from "react";

interface UseScrollToSectionOptions {
  offset?: number;
  mobileOffset?: number;
}

export const useScrollToSection = (options: UseScrollToSectionOptions = {}) => {
  const { offset = 80, mobileOffset = 100 } = options;

  const scrollToSection = useCallback((targetId: string) => {
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;

    const currentOffset = window.innerWidth < 768 ? mobileOffset : offset;
    
    window.scrollTo({
      top: targetElement.offsetTop - currentOffset,
      behavior: 'smooth'
    });
  }, [offset, mobileOffset]);

  useEffect(() => {
    const handleClick = (e: Event) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement;
      
      if (!anchor) return;
      
      e.preventDefault();
      const targetId = anchor.getAttribute('href')?.substring(1);
      if (!targetId) return;
      
      scrollToSection(targetId);
    };

    // Use event delegation for better performance - single listener instead of many
    document.addEventListener('click', handleClick, { passive: false });

    // Cleanup function
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [scrollToSection]);

  return { scrollToSection };
};