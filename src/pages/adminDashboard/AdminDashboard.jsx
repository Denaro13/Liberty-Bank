import React, { useEffect } from "react";
import { Navbar, UsersInfo } from "../../components";
import { logout, toggleSidebar } from "../../features/admin/adminSlice";
import { useSelector } from "react-redux";

const AdminDashboard = () => {
  const { admin, isSidebarOpen } = useSelector((store) => store.admin);
  const name = admin.name.split(" ")[0].toLowerCase();

  return (
    <div>
      <Navbar
        text="dashboard"
        user={name}
        logout={logout}
        sidebar={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
      <div className="w-11/12 mx-auto">
        <UsersInfo />
      </div>
    </div>
  );
};

export default AdminDashboard;
