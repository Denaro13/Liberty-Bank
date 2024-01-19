import React from "react";
import { Navbar } from "../../components";

const AdminDashboard = () => {
  return (
    <div>
      <Navbar text="dashboard" user="usman" />
      <div className="w-11/12 mx-auto">
        <h2>admin dashboard</h2>
      </div>
    </div>
  );
};

export default AdminDashboard;
