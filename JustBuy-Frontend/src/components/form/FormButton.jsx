import React from "react";

export default function FormButton({ children, ...props }) {
  let classNames =
    "h-12 py-3 px-6 rounded-lg bg-purple-700 hover:opacity-80 text-white disabled:cursor-not-allowed";
  props?.type == "delete" ? (classNames += " bg-red-700") : null;
  return (
    <button type="submit" {...props} className={classNames}>
      {children}
    </button>
  );
}
