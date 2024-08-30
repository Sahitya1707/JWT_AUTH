"use client";
import React, { useState, useEffect } from "react";

import LoginHeading from "../components/LoginHeading";
import LoginInput from "../components/LoginInput";
import LoginButton from "../components/LoginButton";
import { backendUrl } from "../utils/constant";

const Page = () => {
  const handleInput = (e) => {
    setSignupData({ ...signupData, [`${e.target.name}`]: e.target.value });
  };
  const [signupData, setSignupData] = useState({
    email: "",
    password: "",
  });
  const handleSignup = async (e) => {
    e.preventDefault();
    console.log(signupData.password);
    if (signupData.email.length === 0 || signupData.password.length === 0) {
      console.log("Empty");
      setError(true);
      return null;
    }
    try {
      const response = await fetch(`${backendUrl}signup`, {
        method: "POST",
        body: JSON.stringify(signupData),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  const [error, setError] = useState(false);
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  }, [error]);
  return (
    <div
      className="flex   
 items-center justify-center h-screen"
    >
      {" "}
       
      <div className="bg-white p-8 rounded-lg shadow-2xl w-[25rem] border-2 border-solid border-black relative">
        {error ? (
          <span className="absolute right-5 top-5 text-[red]">
            ❌ Please Fill the Form
          </span>
        ) : null}

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
