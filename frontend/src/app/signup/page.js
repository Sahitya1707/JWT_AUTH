"use client";
import React, { useState } from "react";

import LoginHeading from "../components/LoginHeading";
import LoginInput from "../components/LoginInput";
import LoginButton from "../components/LoginButton";

const Page = () => {
  const handleInput = (e) => {
    setSignupData({ ...signupData, [`${e.target.name}`]: e.target.value });
  };
  const [signupData, setSignupData] = useState({
    email: "",
    password: "",
  });
  const handleSignup = () => {
    console.log("btn clicked");
  };
  return (
    <div
      className="flex   
 items-center justify-center h-screen"
    >
      {" "}
       
      <div className="bg-white p-8 rounded-lg shadow-md w-[25rem]">
        <LoginHeading text="Sign Up" />
        <form className="space-y-4">
          <LoginInput
            label={"Email:"}
            handleInput={handleInput}
            type="email"
            value={signupData.email}
          />
          <LoginInput
            label="Password:"
            handleInput={handleInput}
            type={"password"}
            value={signupData.password}
          />
          <LoginButton text="sign up" handleButton={handleSignup} />
        </form>
      </div>
    </div>
  );
};

export default Page;
