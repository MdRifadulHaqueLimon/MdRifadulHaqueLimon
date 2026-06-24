/**
 * useScrollReveal Hook
 * Handles scroll-based reveal animations using IntersectionObserver
 */
import { useEffect, useRef } from 'react';

export const useScrollReveal = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    const elements = elementRef.current?.querySelectorAll(
      '.reveal, .reveal-left, .reveal-right'
    );

    if (elements) {
      elements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (elements) {
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  return elementRef;
};
