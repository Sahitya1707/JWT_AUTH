import React from "react";

const LoginInput = ({ label, handleInput }) => {
  return (
    <div className="flex flex-col">
      <label className="text-gray-700">{label}</label>
      <input
        type="email"
        className="border rounded-md px-3 py-2"
        onChange={handleInput}
      />
    </div>
  );
};

export default LoginInput;
