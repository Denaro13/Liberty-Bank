import React from "react";
import { Navbar } from "../../components";
import { logout } from "../../features/userSlice";
import { useSelector } from "react-redux";

const UserDashboard = () => {
  const { user } = useSelector((store) => store.user);
  const name = user.name.split(" ")[0].toLowerCase();
  return (
    <div>
      <Navbar text="dashboard" user={name} logout={logout} />
      <div className="w-11/12 mx-auto mt-4">
        <h2>user dashboard</h2>
      </div>
    </div>
  );
};

export default UserDashboard;
