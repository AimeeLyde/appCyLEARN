import { createContext, useEffect, useReducer } from "react";

const initialState = {
    user: localStorage.getItem('user') !== undefined ? JSON.parse(localStorage.getItem('user')) : null,
    role: localStorage.getItem('role')|| null,
    token: localStorage.getItem('token') || null
}
console.log('État initial:', initialState);
export const authContext = createContext(initialState);

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_START':
      return {
        user: null,
        role: null,
        token: null,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload.user,
        token: action.payload.token,
        role: action.payload.role
      };
    case 'LOGOUT':
      return {
        user: null,
        role: null,
        token: null,
      };
    case 'FINISH_COURSE':
      const updatedUser = {
        ...state.user,
        finishedCourses: [...state.user.finishedCourses, action.payload]
      };
      return {
        ...state,
        user: updatedUser
      };
    case 'UPDATE_USER':
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state.user));
    localStorage.setItem('token', state.token);
    localStorage.setItem('role', state.role);
  }, [state]);

  return (
    <authContext.Provider
      value={{
        user: state.user,
        token: state.token,
        role: state.role,
        dispatch
      }}
    >
      {children}
    </authContext.Provider>
  );
};