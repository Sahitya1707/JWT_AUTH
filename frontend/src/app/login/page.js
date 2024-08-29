import React from "react";
import LoginHeading from "../components/LoginHeading";
import LoginInput from "../components/LoginInput";
import LoginButton from "../components/LoginButton";

const page = () => {
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
          <LoginButton text="Login" />
        </form>
      </div>
    </div>
  );
};

export default page;
