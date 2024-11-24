import { createContext, useEffect, useReducer, useContext } from "react";

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user") || null),
  error: false,
};

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { user: action.payload, error: false };
    case "LOGIN_FAILURE":
      return { user: null, error: action.payload };
    case "LOGOUT_SUCCESS":
      return { user: null, error: false };
    case "REFRESH_TOKEN":
      return {
        ...state,
        user: {
          ...state.user,
          refreshToken: action.payload.refreshToken,
          accessToken: action.payload.accessToken,
        },
      };
    case "UPDATE_DATA":
      return { ...state, user: { ...state.user, data: action.payload } };
    case "UNFOLLOW":
      return {
        ...state,
        user: {
          ...state.user,
          data: {
            ...state.user.data,
            followings: state.user.data.followings.filter(
              (following) => following !== action.payload
            ),
          },
        },
      };
    case "FOLLOW":
      return {
        ...state,
        user: {
          ...state.user,
          data: {
            ...state.user.data,
            followings: [...state.user.data.followings, action.payload],
          },
        },
      };
    default:
      return state;
  }
};

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);
  return (
    <AuthContext.Provider
      value={{ user: state.user, error: state.error, dispatch }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  const { user, error, dispatch } = useContext(AuthContext);
  return { user, error, dispatch };
};
