import React from "react";
import LoginHeading from "./LoginHeading";
import LoginInput from "./LoginInput";
import LoginButton from "./LoginButton";

const Signup = () => {
  return (
    <div
      className="flex   
 items-center justify-center h-screen"
    >
      {" "}
       
      <div className="bg-white p-8 rounded-lg shadow-md w-[25rem]">
        <LoginHeading text="Sign Up" />
        <form className="space-y-4">
          <LoginInput label={"Email:"} />
          <LoginInput label="Password:" />
          <LoginButton text="sign up" />
        </form>
      </div>
    </div>
  );
};

export default Signup;
