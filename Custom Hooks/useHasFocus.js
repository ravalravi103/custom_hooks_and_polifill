import { useState, useEffect } from 'react';


function useHasFocus(ref) {
  const [hasFocus, setHasFocus] = useState(false);

  useEffect(() => {
    const onFocus = () => setHasFocus(true);
    const onBlur = () => setHasFocus(false);

    if (ref.current) {
      ref.current.addEventListener('focus', onFocus);
      ref.current.addEventListener('blur', onBlur);
    }

    return () => {
      if (ref.current) {
        ref.current.removeEventListener('focus', onFocus);
        ref.current.removeEventListener('blur', onBlur);
      }
    };
  }, [ref]);

  return hasFocus;
}

// Example usage in a component
const MyComponent = () => {
  const inputRef = useRef(null);
  const hasFocus = useHasFocus(inputRef);

  return (
    <div>
      <input ref={inputRef} type="text" />
      <p>{hasFocus ? 'Input has focus' : 'Input does not have focus'}</p>
    </div>
  );
};

export default MyComponent;
