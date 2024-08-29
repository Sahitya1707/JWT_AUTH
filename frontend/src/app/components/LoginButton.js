import React from "react";

const LoginButton = ({ text, handleButton }) => {
  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 capitalize"
      onClick={handleButton}
    >
      {text}
    </button>
  );
};

export default LoginButton;
