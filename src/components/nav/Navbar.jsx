import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext/AuthContext";
import Dopdown from "./Dopdown";

const Navbar = () => {
  const { user, dispatch } = useAuth();
  console.log("user", user?.username);
  return (
    <>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/context">Context</NavLink>
        <NavLink to="/useReducer">UseReducer</NavLink>
        <NavLink to="/inputRef">InputRef</NavLink>
        <NavLink to="/useCallbackUseMemo">UseCallbackUseMemo</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </div>
      <Dopdown />
      <div>
        {user == null || !user.username ? (
          <NavLink to="/login">Login</NavLink>
        ) : (
          <NavLink
            onClick={() => dispatch({ type: "LOGOUT_SUCCESS", payload: {} })}
          >
            Logout
          </NavLink>
        )}
      </div>
    </>
  );
};

export default Navbar;
