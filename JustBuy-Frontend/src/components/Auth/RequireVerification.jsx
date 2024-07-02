import React, { useEffect } from "react";
import { useAuthContext } from "../../contexts/AuthProvider";
import { Navigate, Outlet } from "react-router-dom";
import { useVerificationContext } from "../../contexts/VerificationProvider";

const url = import.meta.env.VITE_MAIN_URL;

export const RequireVerification = () => {
  const { token } = useAuthContext();
  const { isEmailVerified, checkIsEmailVerified } = useVerificationContext();

  useEffect(() => {
    checkIsEmailVerified();
  }, [isEmailVerified, token]);

  return isEmailVerified ? <Outlet /> : <Navigate to="/email/verify" />;
};
