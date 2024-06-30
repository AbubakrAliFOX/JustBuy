import { createContext, useContext, useEffect, useState } from "react";

const VerificationContext = createContext({});

export const VerificationProvider = ({ children }) => {
  const [isEmailVerified, setIsEmailVerified] = useState(
    String(localStorage.getItem("EmailVerified") == 1)
  );

  useEffect(() => {
    localStorage.setItem("EmailVerified", isEmailVerified);
  }, [isEmailVerified]);

  return (
    <VerificationContext.Provider
      value={{
        isEmailVerified,
        setIsEmailVerified,
      }}
    >
      {children}
    </VerificationContext.Provider>
  );
};

export const useVerificationContext = () => useContext(VerificationContext);
