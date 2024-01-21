import React from "react";
import { Navbar } from "../../components";
import { logout } from "../../features/admin/adminSlice";
import { useSelector } from "react-redux";

const AdminDashboard = () => {
  const { admin } = useSelector((store) => store.admin);
  const name = admin.name.split(" ")[0].toLowerCase();
  return (
    <div>
      <Navbar text="dashboard" user={name} logout={logout} />
      <div className="w-11/12 mx-auto">
        <h2>admin dashboard</h2>
      </div>
    </div>
  );
};

export default AdminDashboard;
