import React from "react";

export default function Button({ children, ...props }) {
  return (
    <a
      {...props}
      className="h-8 py-3 px-6 mx-3 rounded-lg bg-purple-700 hover:opacity-80 text-white"
    >
      {children}
    </a>
  );
}
