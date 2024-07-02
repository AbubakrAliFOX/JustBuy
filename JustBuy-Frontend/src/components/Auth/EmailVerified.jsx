import axios from "axios";
import React, { useEffect, useState } from "react";
import Notify from "../Notify";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthProvider";
const url = import.meta.env.VITE_MAIN_URL;

export default function EmailVerified() {
  const { id, hash } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [message, setMessage] = useState("");
  const { token } = useAuthContext();

  // console.log("ID:", id);
  // console.log("Hash", hash);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const expires = searchParams.get("expires");
    const signature = searchParams.get("signature");
    console.log("expires:", expires);
    console.log("signature:", signature);
    console.log("token:", token);
    axios
      .get(`${url}/email/verify/${id}/${hash}`, {
        params: {
          expires,
          signature,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        setMessage("Email verification successful!");
        Notify("Email verification successful!", "success");
        navigate("/login");
      })
      .catch(() => {
        setMessage("Email verification failed.");
        Notify("Email verification failed.", "error");
      });
  }, []);
  return <div className="text-2xl font-bold">{message}</div>;
}
