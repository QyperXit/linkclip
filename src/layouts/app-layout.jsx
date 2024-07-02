import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <main>
        {/* header */}
        <Outlet />
      </main>

      <footer></footer>
    </div>
  );
};

export default AppLayout;
