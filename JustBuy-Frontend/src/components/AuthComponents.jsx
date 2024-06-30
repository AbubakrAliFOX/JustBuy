import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthProvider";
import axios from "axios";
import { useEffect } from "react";
const url = import.meta.env.VITE_MAIN_URL;

export const RequireAuth = () => {
  const { token, setUser } = useAuthContext();

  if (!token) {
    return <Navigate to="/login" />;
  }

  useEffect(() => {
    async function getUserInfo() {
      try {
        const response = await axios.get(`${url}/user`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
      } catch (error) {
        console.log("errrr");
      }
    }

    getUserInfo();
  }, []);

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export const NotRequireAuth = () => {
  const { token } = useAuthContext();
  return token ? <Navigate to="/" /> : <Outlet />;
};
