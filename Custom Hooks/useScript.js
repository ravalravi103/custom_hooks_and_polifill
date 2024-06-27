import { useEffect, useState } from 'react';

const useScript = (src) => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.src = src;
    script.async = true;

    // Function to set state when script is loaded
    const onScriptLoad = () => {
      setScriptLoaded(true);
    };

    // Function to handle error if script fails to load
    const onScriptError = (error) => {
      console.error(`Failed to load script: ${src}`, error);
    };

    script.addEventListener('load', onScriptLoad);
    script.addEventListener('error', onScriptError);

    // Append script to document body
    document.body.appendChild(script);

    // Clean up: remove event listeners and script from DOM
    return () => {
      script.removeEventListener('load', onScriptLoad);
      script.removeEventListener('error', onScriptError);
      document.body.removeChild(script);
    };
  }, [src]);

  return scriptLoaded;
};

export default useScript;
