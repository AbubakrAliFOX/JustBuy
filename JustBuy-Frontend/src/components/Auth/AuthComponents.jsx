import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthProvider";
import axios from "axios";
import { useEffect } from "react";
const url = import.meta.env.VITE_MAIN_URL;

export const RequireAuth = () => {
  const { token, setUser } = useAuthContext();

  if (!token) {
    return <Navigate to="/login" />;
  }

  useEffect(() => {
    axios
      .get(`${url}/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        setUser(response.data);
      })
      .catch(() => {
        console.log("error");
      });
  }, []);

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export const NotRequireAuth = () => {
  const { token } = useAuthContext();
  return token ? <Navigate to="/" /> : <Outlet />;
};
