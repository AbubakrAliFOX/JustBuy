import { Formik, Form } from "formik";
import React from "react";
import { sendPasswordLinkSchema } from "../../schemas";
import FormField from "../form/FormField";
import FormButton from "../form/FormButton";
import axios from "axios";
import Notify from "../Notify";
const url = import.meta.env.VITE_MAIN_URL;

export default function ForgotPassword() {
  const handleSubmit = (values, { setSubmitting }) => {
    axios
      .post(`${url}/password/email`, values)
      .then(({ data }) => {
        console.log("Data is:", data);
        Notify(data.status, "success");
      })
      .catch(({ response }) => {
        console.log(response);
        Notify(response.data.email ?? "An error occured!", "error");
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <Formik
      initialValues={{
        email: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={sendPasswordLinkSchema}
    >
      {({ isSubmitting, isValid, dirty, errors, touched }) => (
        <Form className="px-6 py-8 h-screen w-6/12 mx-auto" action="#">
          <h1 className="font-bold text-2xl">
            Enter your email to receive the verification link:
          </h1>
          <div className="w-full mt-3">
            <FormField name="email" />
            <div className="py-4">
              <FormButton disabled={isSubmitting} href="#" type="submit">
                Send Link
              </FormButton>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}
