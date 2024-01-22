import React from "react";
import { Navbar } from "../../components";
import { logout, toggleSidebar } from "../../features/userSlice";
import { useSelector } from "react-redux";
const UserDashboard = () => {
  const { user, isSidebarOpen } = useSelector((store) => store.user);
  const name = user.name.split(" ")[0].toLowerCase();
  return (
    <div>
      <Navbar
        text="dashboard"
        user={name}
        logout={logout}
        sidebar={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
      <div className="w-11/12 mx-auto mt-4">
        <h2>user dashboard</h2>
      </div>
    </div>
  );
};

export default UserDashboard;
