import { Routes, Route } from "react-router-dom";
import ComponentA from "./components/context/ComponentA";
import CounterContextProvider from "./components/context/CounterContext";
import ProductList from "./components/useCallBack/ProductList";
import Counter from "./components/useReducer/Counter";
import InputRef from "./components/useRef/InputRef";
import RequireAuth from "./RequireAuth";
import Login from "./components/login/login";
import Navbar from "./components/nav/Navbar";

function App() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <Routes>
        <Route path="/" element={<h2>Home </h2>} />
        <Route
          path="/context"
          element={
            <CounterContextProvider>
              <ComponentA />
            </CounterContextProvider>
          }
        />
        <Route path="/useReducer" element={<Counter />} />
        <Route path="/inputRef" element={<InputRef />} />
        <Route
          path="/useCallbackUseMemo"
          element={
            <RequireAuth>
              <ProductList />
            </RequireAuth>
          }
        />
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <h2>Profile </h2>
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/Logout" element={<h2>Logout </h2>} />
      </Routes>
    </>
  );
}

export default App;
