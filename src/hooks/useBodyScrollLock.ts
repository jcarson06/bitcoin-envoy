import { useEffect, useRef } from 'react';

export const useBodyScrollLock = (isLocked: boolean) => {
  const originalOverflowRef = useRef<string>('');

  useEffect(() => {
    // Store original overflow value on first lock
    if (isLocked && !originalOverflowRef.current) {
      originalOverflowRef.current = document.body.style.overflow || '';
    }

    if (isLocked) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = originalOverflowRef.current;
    }

    // Cleanup on unmount
    return () => {
      if (originalOverflowRef.current !== undefined) {
        document.body.style.overflow = originalOverflowRef.current;
      }
    };
  }, [isLocked]);

  // Additional cleanup on component unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = originalOverflowRef.current;
    };
  }, []);
};