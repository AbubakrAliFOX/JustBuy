import { Formik, Form } from "formik";
import React from "react";
import FormField from "./form/FormField";
import { resetPasswordSchema } from "../schemas";
import FormButton from "./form/FormButton";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuthContext } from "../contexts/AuthProvider";
import Notify from "./Notify";

const url = import.meta.env.VITE_MAIN_URL;

export default function ResetPassword() {
  // const { token: authToken } = useAuthContext();

  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get("token");
  const email = searchParams.get("email");
  console.log("token:", token);
  // console.log("auth token:", authToken);
  console.log("email:", email);

  const handleSubmit = (values, { setSubmitting }) => {
    const requestData = { ...values, token, email };
    const password = values.password;
    const password_confirmation = values.password_confirmation;
    console.log("data:", requestData);
    axios
      .post(
        `${url}/password/reset`,
        {
          password,
          password_confirmation,
          token,
          email,
        },
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
          },
        }
      )
      .then((response) => {
        console.log(response);
        Notify(response.data.status, "success");
        navigate("/login");
      })
      .catch(({ response }) => {
        console.log(response);
        Notify("An error occured!", "error");
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <Formik
      initialValues={{
        password: "",
        password_confirmation: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={resetPasswordSchema}
    >
      {({ isSubmitting, isValid, dirty, errors, touched }) => (
        <Form className="px-6 py-8 h-screen w-6/12 mx-auto" action="#">
          <h1 className="font-bold text-2xl">Reset your password</h1>
          <div className="w-full mt-3">
            <FormField type="password" name="password" />
            <FormField type="password" name="password_confirmation" />
            <div className="py-4">
              <FormButton disabled={isSubmitting} href="#" type="submit">
                Reset Password
              </FormButton>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}
