import React, { useState, useMemo } from 'react';

const App = (props) => {
  const [counter, setCounter] = useState({ value: 0, dummy: true });

  const memorizedValue1 = useMemo(() => {
    console.log('function1 called');
    return 'counter.value (dep counter.value): ' + counter.value;
  }, [counter.value]);
  const memorizedValue2 = useMemo(() => {
    console.log('function2 called');
    return 'counter.value (dep counter.dummy): ' + counter.value;
  }, [counter.dummy]);

  let prevCbValue;
  let prevCbDummy;

  return (
    <>
      <h1>{props.heading}</h1>
      <p>counter.value {counter.value}</p>
      <p>counter.dummy {counter.dummy.toString()}</p>
      <button
        onClick={() => {
          console.log('-------- clicked --------');
          setCounter({
            value: counter.value + 1,
            dummy: counter.value % 3 === 0 ? !counter.dummy : counter.dummy,
          });
          console.log(memorizedValue1);
          console.log(memorizedValue2);
        }}
      >
        +1
      </button>
    </>
  );
};
export default App;
