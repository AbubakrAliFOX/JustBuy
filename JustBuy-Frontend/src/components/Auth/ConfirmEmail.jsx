import React, { useContext } from "react";
import FormButton from "../form/FormButton";
import axios from "axios";
import { useAuthContext } from "../../contexts/AuthProvider";
import Notify from "../Notify";
import { useNavigate } from "react-router-dom";
const url = import.meta.env.VITE_MAIN_URL;

export default function ConfirmEmail() {
  const { token } = useAuthContext();
  const navigate = useNavigate();

  const handleClick = () => {
    axios
      .get(`${url}/email/resend`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/vnd.api+json",
          "Content-Type": "application/vnd.api+json",
        },
      })
      .then((response) => {
        console.log(response);
        Notify("Email verification successful!", "success");
        navigate("/");
      })
      .catch((error) => {
        console.log("Error", error.response.data.message);
        Notify(error.response.data.message, "error");
      });
  };
  return (
    <div className="m-6">
      <p>Dear User, please confirm your email.</p>
      <p>Note that it can take up to 3 minutes.</p>
      <p>
        Don't forget to check the <span className="font-bold">spam</span> folder
        too.
      </p>
      <div className="mt-6">
        <FormButton onClick={handleClick}>Resend Email</FormButton>
      </div>
    </div>
  );
}
