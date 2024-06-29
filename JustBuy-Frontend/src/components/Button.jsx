import React from "react";

export default function Button({ children, ...props }) {
  let classNames =
    "h-12 py-3 px-6 mx-3 rounded-lg bg-purple-700 hover:opacity-80 text-white cursor-pointer";
  props?.type == "delete" ? (classNames += " bg-red-700") : null;
  return (
    <a {...props} className={classNames}>
      {children}
    </a>
  );
}
