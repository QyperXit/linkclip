// import Login from "@/components/login";
// import Signup from "@/components/signup";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { UrlState } from "@/context";
// import React, { useEffect } from "react";
// import { useNavigate, useSearchParams } from "react-router-dom";

// const Auth = () => {
//   const [searchParams] = useSearchParams();
//   const longLink = searchParams.get("createNew");
//   const navigate = useNavigate();

//   const { isAuthenticated, loading } = UrlState();

//   useEffect(() => {
//     if (isAuthenticated && !loading) {
//       navigate(`/dashboard?${longLink ? `createNew=${longLink}` : ""}`);
//       console.log("it works!!!!");
//     }
//   }, [isAuthenticated, loading]);

//   return (
//     <div className=" mt-20 flex flex-col items-center gap-10 ">
//       <h1 className="text-5xl  font-extrabold">
//         {longLink ? "Oops!, Login in first..." : "Login / SignUp"}
//       </h1>

//       <Tabs defaultValue="login" className="w-[400px]">
//         <TabsList className="grid w-full grid-cols-2">
//           <TabsTrigger value="login">Login</TabsTrigger>
//           <TabsTrigger value="signup">SignUp</TabsTrigger>
//         </TabsList>
//         <TabsContent value="login">
//           <Login />
//         </TabsContent>
//         <TabsContent value="signup">
//           <Signup />
//         </TabsContent>
//       </Tabs>
//     </div>
//   );
// };

// export default Auth;

import Login from "@/components/login";
import Signup from "@/components/signup";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UrlState } from "@/context";
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Auth = () => {
  const [searchParams] = useSearchParams();
  const longLink = searchParams.get("createNew");
  const navigate = useNavigate();

  const { isAuthenticated, loading, user, fetchUser } = UrlState();
  const [localAuthState, setLocalAuthState] = useState(false);

  useEffect(() => {
    // Fetch user data when component mounts
    fetchUser();
  }, []);

  useEffect(() => {
    // Check authentication status whenever user or loading state changes
    if (user && !loading) {
      setLocalAuthState(true);
    }
  }, [user, loading]);

  useEffect(() => {
    // Navigate when local auth state changes
    if (localAuthState) {
      navigate(`/dashboard${longLink ? `?createNew=${longLink}` : ""}`);
      console.log("Navigation triggered!");
    }
  }, [localAuthState, longLink, navigate]);

  const handleLoginSuccess = () => {
    // Trigger a re-fetch of user data after successful login
    fetchUser();
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-20 flex flex-col items-center gap-10">
      <h1 className="text-5xl font-extrabold">
        {longLink ? "Oops!, Login in first..." : "Login / SignUp"}
      </h1>

      <Tabs defaultValue="login" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="signup">SignUp</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <Login onLoginSuccess={handleLoginSuccess} />
        </TabsContent>
        <TabsContent value="signup">
          <Signup />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Auth;
