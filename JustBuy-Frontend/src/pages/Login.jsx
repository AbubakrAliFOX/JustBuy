import { Form, Formik } from "formik";
import React from "react";
import FormField from "../components/form/FormField";
import FormButton from "../components/form/FormButton";
import { loginSchema } from "../schemas";
import axios from "axios";
import Notify from "../components/Notify";
import bindUser from "../utils/bindUser";
import { useAuthContext } from "../contexts/AuthProvider";
import { Link } from "react-router-dom";

const url = import.meta.env.VITE_MAIN_URL;

export default function Login() {
  const { setUser, setToken } = useAuthContext();

  const handleSubmit = async (values, { setSubmitting }) => {
    const authData = await bindUser("login", values);
    if (authData) {
      console.log(authData);
      setUser(authData.user);
      setToken(authData.token);
    }
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={loginSchema}
    >
      {({ isSubmitting, isValid, dirty, errors, touched }) => (
        <Form className="w-6/12 mx-auto" action="#">
          <h1 className="text-2xl font-bold">Login</h1>
          <div className="w-full mt-3">
            <FormField name="email" />
            <FormField type="password" name="password" />
            <Link to="/forgot-password">Forgot password?</Link>
            <div className="py-4">
              <FormButton disabled={isSubmitting} href="#" type="submit">
                Login
              </FormButton>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}
