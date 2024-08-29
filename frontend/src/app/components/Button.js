import Link from "next/link";
import React from "react";

const Button = ({ text, shadowColor, link }) => {
  return (
    <Link href={link}>
      <button
        className={`bg-[white]  flex items-center px-6 cursor-pointer py-2 rounded-lg capitalize shadow-[2px 2px red]
      hover:bg-[black] text-[black] hover:text-white border-solid border-[1px] border-[black] hover:border-[white] hover:duration-75 hover:ease-in text-lg tracking-wider
        `}
        style={{
          boxShadow: `-4px 1px 9px ${shadowColor}`,
        }}
      >
        {text}
      </button>
    </Link>
  );
};

export default Button;
