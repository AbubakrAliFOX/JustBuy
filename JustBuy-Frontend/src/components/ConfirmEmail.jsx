import React from "react";

export default function ConfirmEmail() {
  return (
    <div className="m-6">
      <p>Dear User, please confirm your email.</p>
      <p>Note that it can take up to 3 minutes.</p>
      <p>
        Don't forget to check the <span className="font-bold">spam</span> folder
        too.
      </p>
    </div>
  );
}
