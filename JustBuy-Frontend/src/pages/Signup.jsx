import { Form, Formik } from "formik";
import React from "react";
import FormField from "../components/form/FormField";
import FormButton from "../components/form/FormButton";
import { signupSchema } from "../schemas";
import bindUser from "../utils/bindUser";
import { useAuthContext } from "../contexts/AuthProvider";

export default function Signup() {
  const { setUser, setToken } = useAuthContext();

  const handleSubmit = async (values, { setSubmitting }) => {
    const authData = await bindUser("signup", values);
    if (authData) {
      setUser(authData.user);
      setToken(authData.token);
      // isEmailVerified
    }
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        phone: null,
        password: "",
        password_confirmation: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={signupSchema}
    >
      {({ isSubmitting, isValid, dirty, errors, touched }) => (
        <Form className="w-8/12 mx-auto" action="#">
          <h1 className="text-2xl font-bold">Signup</h1>
          <div className="w-full mt-3">
            <FormField name="name" />
            <FormField name="email" />
            <FormField name="phone" />
            <FormField type="password" name="password" />
            <FormField type="password" name="password_confirmation" />
            <div className="py-4">
              <FormButton disabled={isSubmitting} href="#" type="submit">
                Register
              </FormButton>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}
