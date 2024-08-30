"use client";
import React, { useState } from "react";
import LoginHeading from "../components/LoginHeading";
import LoginInput from "../components/LoginInput";
import LoginButton from "../components/LoginButton";
import Button from "../components/Button";
import { backendUrl } from "../utils/constant";

const Page = () => {
  const handleInput = (e) => {
    setLoginData({ ...loginData, [`${e.target.name}`]: e.target.value });
  };
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("login is handled");
    if (loginData.email === "" || loginData.password === "") {
      console.log("Fill Out the form again");
      alert("Form is Empty");
      return null;
    }
    try {
      const response = await fetch(`${backendUrl}login`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(loginData),
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
  return (
    <div
      className="flex   
 items-center justify-center h-screen w-full relative"
    >
      {" "}
      <div className="absolute top-5 left-5">
        <Button text="Sign Up" link={"/signup"} shadowColor={"pink"} />
      </div>{" "}
       
      <div className="bg-white p-8 rounded-lg shadow-2xl w-[25rem] border-2 border-solid border-black">
        <LoginHeading text="Login" />
        <form className="space-y-4">
          <LoginInput
            label={"Email:"}
            handleInput={handleInput}
            type="email"
            value={loginData.email}
          />
          <LoginInput
            label="Password:"
            handleInput={handleInput}
            type={"password"}
            value={loginData.password}
          />
          <LoginButton text="Login" handleButton={handleLogin} />
        </form>
      </div>
    </div>
  );
};

export default Page;
