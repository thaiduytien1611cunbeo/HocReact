import { createContext, useContext, useReducer } from "react";
import { reducer, initialState } from "./reducer";

export const ProviderContext = createContext();
const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ProviderContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </ProviderContext.Provider>
  );
};

export default Provider;

// Provider dùng để bọc các COMPONENT muốn nhận global state
