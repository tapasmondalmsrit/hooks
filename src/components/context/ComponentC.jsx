import { useCounter } from "./CounterContext";
import ComponentD from "./ComponentD";
const ComponentC = () => {
  const { count, setCount } = useCounter();
  return (
    <div>
      ComponentC
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment Count {count}
      </button>
      <ComponentD />
    </div>
  );
};

export default ComponentC;
