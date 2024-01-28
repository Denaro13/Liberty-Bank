import React from "react";
import { Navbar, TransactionHistory } from "../../components";
import { logout, toggleSidebar } from "../../features/userSlice";
import { useSelector } from "react-redux";
const UserDashboard = () => {
  const { user, isSidebarOpen } = useSelector((store) => store.user);
  const name = user.name.split(" ")[0].toLowerCase();
  const token = user.access_token;
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
        <div className="bg-red-400">
          <h2>user dashboard</h2>
        </div>
        <TransactionHistory fullName={user.name} token={token} />
      </div>
    </div>
  );
};

export default UserDashboard;
