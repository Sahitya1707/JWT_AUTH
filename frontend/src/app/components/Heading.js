import React from "react";

const Heading = ({ shadowColor, text }) => {
  return (
    <h1
      className="text-center tracking-wide text-[2rem] uppercase font-semibold"
      style={{
        textShadow: ` 2px 2px 8px ${shadowColor}`,
      }}
    >
      {text}
    </h1>
  );
};

export default Heading;
