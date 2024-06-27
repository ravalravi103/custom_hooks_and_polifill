import { useState, useEffect, useRef } from 'react';

// Custom hook to detect idle state
function useIdle(timeoutMs = 1000) {
  const [isIdle, setIsIdle] = useState(false);
  const timeoutRef = useRef(null);

  const handleIdle = () => {
    setIsIdle(true);
  };

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(handleIdle, timeoutMs);
  };

  // Reset timeout whenever there's user activity
  const handleUserActivity = () => {
    setIsIdle(false);
    resetTimeout();
  };

  useEffect(() => {
    // Initial setup: start tracking user activity
    window.addEventListener('mousemove', handleUserActivity);
    window.addEventListener('keydown', handleUserActivity);
    resetTimeout();

    // Clean up event listeners and timeout on component unmount
    return () => {
      window.removeEventListener('mousemove', handleUserActivity);
      window.removeEventListener('keydown', handleUserActivity);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [timeoutMs]); // Reset timeoutMs changes

  return isIdle;
}

// Example usage in a component
const MyComponent = () => {
  const isIdle = useIdle(3000); // Set idle timeout to 3000ms (3 seconds)

  useEffect(() => {
    if (isIdle) {
      // Perform actions when idle state detected
      console.log('User is idle');
    }
  }, [isIdle]);

  return (
    <div>
      {/* Your component JSX */}
    </div>
  );
};

export default MyComponent;
