import React from "react";
import { Outlet } from "react-router-dom";
import { AdminSmallSidebar, AdminBigSidebar } from "../../components";

const AdminSharedLayout = () => {
  return (
    <section>
      <main className="dashboard">
        <AdminSmallSidebar />
        <AdminBigSidebar />
        <div className="dashboard-page">
          <Outlet />
        </div>
      </main>
    </section>
  );
};

export default AdminSharedLayout;
