import React from "react";

const Signup = () => {
  return (
    <div
      className="flex   
 items-center justify-center h-screen"
    >
      {" "}
       
      <div className="bg-white p-8 rounded-lg shadow-md w-[25rem]">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <form className="space-y-4">
          <div className="flex flex-col">
            <label className="text-gray-700">Email:</label>
            <input type="email" className="border rounded-md px-3 py-2" />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700">Password:</label>
            <input type="password" className="border rounded-md px-3 py-2" />
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
