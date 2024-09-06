import { backendUrl } from "@/app/utils/constant";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const ProtectedRoutes = (WrapperComponent) => {
  return (props) => {
    const router = useRouter();
    useEffect(() => {
      console.log("higher order component called");

      const checkAuth = async () => {
        try {
          const authResponse = await fetch(`${backendUrl}verify`, {
            method: "GET",
            credentials: "include",
          });
          if (!authResponse.ok) {
            router.push("/login");
          }
          console.log(authResponse);
        } catch (err) {
          router.push("/login");
        }
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
