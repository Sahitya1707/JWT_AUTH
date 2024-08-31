import { backendUrl } from "@/app/utils/constant";
import React, { useEffect } from "react";

const ProtectedRoutes = (WrapperComponent) => {
  return (props) => {
    useEffect(() => {
      console.log("higher order component called");

      const checkAuth = async () => {
        try {
          const authResponse = await fetch(`${backendUrl}verify`, {
            method: "GET",
            credentials: "include",
          });
          console.log(authResponse);
        } catch (err) {}
      };
      checkAuth();
    });
    return (
      <div>
        <WrapperComponent {...props} />
      </div>
    );
  };
};

export default ProtectedRoutes;
