/* eslint-disable react/prop-types */
import { createContext, useState, useContext, useReducer } from "react";

// step1 create context
export const CounterContext = createContext();

const initialData = {
  name: "Munmun Mondal",
  salary: 20000.0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGENAME":
      return {
        ...state,
        name: action.payload,
      };
    case "CHANGESALARY":
      return {
        ...state,
        salary: state.salary + action.payload,
      };
    default:
      return state;
  }
};

// step2  provide wrapper
const CounterContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [person, dispatch] = useReducer(reducer, initialData);

  return (
    <CounterContext.Provider value={{ count, setCount, person, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

// step3 use the context
export const useCounter = () => {
  const context = useContext(CounterContext);
  if (context === undefined) {
    throw new Error("useCounter must be used within a CounterContextProvider");
  }
  return context;
};

export default CounterContextProvider;
