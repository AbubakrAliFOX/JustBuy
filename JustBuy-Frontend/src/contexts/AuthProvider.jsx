import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import Notify from "../components/Notify";
import { useNavigate } from "react-router-dom";

const url = import.meta.env.VITE_MAIN_URL;

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [token, _setToken] = useState(localStorage.getItem("AccessToken"));
  const [isAdmin, setIsAdmin] = useState(false);

  const navigate = useNavigate();

  const setToken = (token) => {
    _setToken(token);
    if (token) {
      localStorage.setItem("AccessToken", token);
    } else {
      localStorage.removeItem("AccessToken");
    }
  };

  const checkIsAdmin = () => {
    axios
      .get(`${url}/admin/verify`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        setIsAdmin(true);
        console.log("Is Admin", data.data);
      })
      .catch((error) => {
        setIsAdmin(false);
        console.log("Not Admin", error);
      });
  };

  useEffect(() => {
    checkIsAdmin();
  }, [token]);

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        setUser,
        setToken,
        isAdmin,
        setIsAdmin,
        checkIsAdmin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
