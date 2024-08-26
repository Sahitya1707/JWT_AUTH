import React from "react";

const Button = ({ text, shadowColor }) => {
  return (
    <>
      <button
        className={`bg-[white]  flex items-center px-6 cursor-pointer py-2 rounded-lg capitalize shadow-[2px 2px red]
      hover:bg-[black] text-[black] hover:text-white border-solid border-[1px] border-[black] hover:border-[white] hover:duration-75 hover:ease-in
        `}
        style={{
          boxShadow: `-4px 1px 9px ${shadowColor}`,
        }}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
