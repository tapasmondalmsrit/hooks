import { useState, useEffect, useRef } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    console.log("count", count);
    prevCountRef.current = count;
  }, [count]);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const prevCount = prevCountRef.current;

  return (
    <div>
      <h1>Current count: {count}</h1>
      <h2>Previous count: {prevCount !== undefined ? prevCount : "N/A"}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

const InputRef = () => {
  const inputRef = useRef(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  return (
    <div>
      InputRef
      <input type="text" ref={inputRef} />
      <Counter count={0} />
    </div>
  );
};

export default InputRef;

// no rerender happen on ref value changes
// style component
