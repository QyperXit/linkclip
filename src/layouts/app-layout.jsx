import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <main className=" min-h-screen container">
        <Header />
        <Outlet />
      </main>

      {/* <footer className=" p-10 text-center bg-gray-800 mt-10 text-white">
        Developer @Chaun
      </footer> */}
      <Footer />
    </div>
  );
};

export default AppLayout;
