/**
 * useNavbarScroll Hook
 * Handles navbar scroll effect
 */
import { useEffect, useState } from 'react';

export const useNavbarScroll = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return isScrolled;
};
