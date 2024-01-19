import React from "react";
import { Navbar } from "../../components";

const UserDashboard = () => {
  return (
    <div>
      <Navbar text="dashboard" user="james" />
      <div className="w-11/12 mx-auto">
        <h2>user dashboard</h2>
      </div>
    </div>
  );
};

export default UserDashboard;
