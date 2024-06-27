// Custom hook for debouncing text input
import React, { useState, useEffect } from "react";

const useDebounce = (text, delay) => {
  
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      setDebouncedText(text); 
    }, delay);

    return () => {
      clearTimeout(debounceTimer);
    };
  }, [text, delay]);

  return debouncedText; 
};

export default useDebounce;