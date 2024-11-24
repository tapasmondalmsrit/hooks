import { useCounter } from "./CounterContext";

const ComponentD = () => {
  const { count, setCount } = useCounter();
  return (
    <div>
      ComponentD
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment Count {count}
      </button>
    </div>
  );
};

export default ComponentD;
