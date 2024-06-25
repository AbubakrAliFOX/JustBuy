import { createContext, useContext, useState } from "react";

const StateContext = createContext({
  user: null,
  token: null,
});

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Abubakr",
  });
  const [token, _setToken] = useState(26);

  const setToken = (token) => {
    _setToken(token);
    if (token) {
      localStorage.setItem("AccessToken", token);
    } else {
      localStorage.removeItem("AccessToken");
    }
  };
  return (
    <StateContext.Provider
      value={{
        user,
        token,
        setUser,
        setToken,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
