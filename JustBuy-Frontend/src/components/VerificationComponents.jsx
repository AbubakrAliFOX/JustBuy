import React, { useEffect } from "react";
import { useAuthContext } from "../contexts/AuthProvider";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import { useVerificationContext } from "../contexts/VerificationProvider";

const url = import.meta.env.VITE_MAIN_URL;

export const RequireVerification = () => {
  const { token } = useAuthContext();
  const { isEmailVerified, setIsEmailVerified } = useVerificationContext();

  const navigate = useNavigate();

  useEffect(() => {
    try {
      axios
        .get(`${url}/email/verify`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(({ data }) => {
          if (data.verified == true) {
            setIsEmailVerified(data.verified);
            console.log("Is request?", data.verified);
          } else {
            //setIsEmailVerified(false);
            navigate("/email/verify");
          }
        });
    } catch (error) {
      console.log("errrr", error);
    }
  }, [isEmailVerified, token]);

  useEffect(() => {
    console.log("Is Email verified?", isEmailVerified);
  }, [isEmailVerified]);

  return isEmailVerified ? <Outlet /> : <Navigate to="/email/verify" />;
};
