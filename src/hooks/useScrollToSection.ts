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
      e.preventDefault();
      
      const target = e.currentTarget as HTMLAnchorElement;
      const targetId = target.getAttribute('href')?.substring(1);
      if (!targetId) return;
      
      scrollToSection(targetId);
    };

    // Add event listeners to all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(anchor => {
      anchor.addEventListener('click', handleClick);
    });

    // Cleanup function
    return () => {
      anchorLinks.forEach(anchor => {
        anchor.removeEventListener('click', handleClick);
      });
    };
  }, [scrollToSection]);

  return { scrollToSection };
};