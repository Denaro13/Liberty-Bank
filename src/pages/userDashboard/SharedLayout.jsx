import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, BigSidebar, SmallSidebar } from "../../components";

const SharedLayout = () => {
  return (
    <section>
      <main className="dashboard ">
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </section>
  );
};

export default SharedLayout;
