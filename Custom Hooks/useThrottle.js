import { useState, useEffect, useRef } from 'react';

const useThrottle = (text, delay) => {
 
  const [throttledText, setThrottledText] = useState(text);
  const lastExecuted = useRef(Date.now()); 

  useEffect(() => {
    if (Date.now() - lastExecuted.current >= delay) {    
      lastExecuted.current = Date.now();
      setThrottledText(text);
    } else {
  
      const throttleTimer = setTimeout(() => {
        lastExecuted.current = Date.now();
        setThrottledText(text);
      }, delay);

      return () => clearTimeout(throttleTimer);
    }
  }, [text, delay]);

  return throttledText; 
};

export default useThrottle;






// https://medium.com/@itsanuragjoshi/debouncing-and-throttling-in-react-enhancing-user-experience-with-custom-hooks-bcaa897162ef