import { useRef } from 'react';

const useWhyDidYouUpdate = (name, props) => {
  const previousProps = useRef();

 
  useEffect(() => {
    if (previousProps.current) {
      const changedProps = Object.entries(props).reduce((changed, [key, value]) => {
        if (previousProps.current[key] !== value) {
          changed[key] = {
            from: previousProps.current[key],
            to: value,
          };
        }
        return changed;
      }, {});

      if (Object.keys(changedProps).length > 0) {
        console.log(`Component ${name} changed props:`, changedProps);
      }
    }

    previousProps.current = props;
  });
};

export default useWhyDidYouUpdate;


//--------------------------------------------------------------------

const MyComponent = ({ propA, propB }) => {
  useWhyDidYouUpdate('MyComponent', { propA, propB });

  return (
    <div>
      <p>Prop A: {propA}</p>
      <p>Prop B: {propB}</p>
    </div>
  );
};
