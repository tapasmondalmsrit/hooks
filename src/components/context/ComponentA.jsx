import ComponentB from "./ComponentB";
import { useCounter } from "./CounterContext";
const ComponentA = () => {
  const { count, person, dispatch } = useCounter();
  return (
    <div>
      <h2>count: {count}</h2>
      <h2>
        Name: {person.name}---- Salary:{person.salary}
      </h2>
      <button
        onClick={() => {
          dispatch({ type: "CHANGENAME", payload: "Tapas Mondal" });
        }}
      >
        Change Name To Tapas Mondal
      </button>
      <button
        onClick={() => {
          dispatch({ type: "CHANGESALARY", payload: 5000.0 });
        }}
      >
        Increment Salary
      </button>

      <ComponentB />
    </div>
  );
};

export default ComponentA;
