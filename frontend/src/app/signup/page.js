"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import LoginHeading from "../components/LoginHeading";
import LoginInput from "../components/LoginInput";
import LoginButton from "../components/LoginButton";
import { backendUrl } from "../utils/constant";

const Page = () => {
  const router = useRouter();
  // handling the input
  const handleInput = (e) => {
    setSignupData({ ...signupData, [`${e.target.name}`]: e.target.value });
  };
  // storing the value of the sign up
  const [signupData, setSignupData] = useState({
    email: "",
    password: "",
  });
  // handling the signup button when presses
  const handleSignup = async (e) => {
    e.preventDefault();
    // handling the email and password when the length of both of them is 0
    if (signupData.email.length === 0 || signupData.password.length === 0) {
      setMessage(true);
      setMessageData({
        text: "Error, Fill the Form !",
        color: "red",
      });
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

      if (response.ok) {
        // this is just for showing message, I would use redux in my other application just a ui for this application using local state. (it is not recommended to show message like this as you need to make different state in different component or use prop drilling, I use redux in most of the case.)
        setMessage(true);
        setMessageData({
          text: "SuccessFull Signup",
          color: "green",
        });
        // just to show that login is done message
        setInterval(() => {
          router.push("/login");
        }, 2000);
      }
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  // simple state to show the message
  const [message, setMessage] = useState(false);
  const [messageData, setMessageData] = useState({
    text: "",
    color: "",
  });
  useEffect(() => {
    // message message if only visible to few second if it is true
    if (message) {
      setTimeout(() => {
        setMessage(false);
      }, 3000);
    }
  }, [message]);
  return (
    <div
      className="flex   
 items-center justify-center h-screen relative w-full"
    >
      {message ? (
        <span
          className="absolute right-5 top-5 text-xl font-semibold "
          style={{
            color: messageData.color,
          }}
        >
          {messageData.text}
        </span>
      ) : null}
       
      <div className="bg-white p-8 rounded-lg shadow-2xl w-[25rem] border-2 border-solid border-black relative">
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
