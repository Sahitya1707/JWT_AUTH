import React from "react";

const Heading = ({ shadowColor, text }) => {
  return (
    <h1
      className="text-center  text-[2.5rem] uppercase font-semibold tracking-widest"
      style={{
        textShadow: ` 2px 2px 8px ${shadowColor}`,
      }}
    >
      {text}
    </h1>
  );
};

export default Heading;
