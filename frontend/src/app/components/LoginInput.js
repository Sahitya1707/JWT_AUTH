import React from "react";

const LoginInput = ({ label, handleInput, type, value }) => {
  return (
    <div className="flex flex-col">
      <label className="text-gray-700">{label}</label>
      <input
        type={type}
        name={type}
        className="border rounded-md px-3 py-2"
        onChange={handleInput}
        autoComplete="true"
        value={value}
      />
    </div>
  );
};

export default LoginInput;
