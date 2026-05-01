// hooks/useScrollToSection.js
"use client";

import { useCallback } from 'react';

const useScrollToSection = () => {
  const scrollToSection = useCallback((sectionId, offset = 64) => {

    const element = document.getElementById(sectionId);

    if (element) {

      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;


      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  }, []);

  return scrollToSection;
};

export default useScrollToSection;