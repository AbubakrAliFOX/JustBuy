import React from "react";
import { Field, ErrorMessage } from "formik";

export default function FormField({ name, type = "text" }) {
  let displayName = name;
  if (name.includes("_")) {
    displayName = displayName.replace("_", " ");
  }
  return (
    <div>
      <label className="text-xl" htmlFor={name}>
        {displayName}
      </label>
      <Field
        placeholder={displayName}
        className="block border border-gray-950 rounded w-10/12 mb-2 h-10 px-3"
        name={name}
        id={name}
        type={type}
      />
      <ErrorMessage name={name} component="span" className="text-red-700" />
    </div>
  );
}
