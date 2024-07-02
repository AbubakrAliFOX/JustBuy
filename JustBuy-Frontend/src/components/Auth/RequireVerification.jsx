import React, { useEffect } from "react";
import { useAuthContext } from "../../contexts/AuthProvider";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import { useVerificationContext } from "../../contexts/VerificationProvider";

const url = import.meta.env.VITE_MAIN_URL;

export const RequireVerification = () => {
  const { token } = useAuthContext();
  const { isEmailVerified, checkIsEmailVerified } = useVerificationContext();

  const navigate = useNavigate();

  useEffect(() => {
    checkIsEmailVerified;
  }, [isEmailVerified, token]);

  // useEffect(() => {
  //   console.log("Is Email verified?", isEmailVerified);
  // }, [isEmailVerified]);

  return isEmailVerified ? <Outlet /> : <Navigate to="/email/verify" />;
};
