import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthProvider";

const url = import.meta.env.VITE_MAIN_URL;

const VerificationContext = createContext({});

export const VerificationProvider = ({ children }) => {
  const [isEmailVerified, setIsEmailVerified] = useState(
    String(localStorage.getItem("EmailVerified") == 1)
  );
  const { token } = useAuthContext();

  useEffect(() => {
    localStorage.setItem("EmailVerified", isEmailVerified);
  }, [isEmailVerified]);

  const checkIsEmailVerified = () => {
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
      })
      .catch((error) => {
        console.log("errrr", error);
      });
  };

  return (
    <VerificationContext.Provider
      value={{
        isEmailVerified,
        setIsEmailVerified,
        checkIsEmailVerified,
      }}
    >
      {children}
    </VerificationContext.Provider>
  );
};

export const useVerificationContext = () => useContext(VerificationContext);
