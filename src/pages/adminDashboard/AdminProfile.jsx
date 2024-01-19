import React from "react";
import { Navbar } from "../../components";

const AdminProfile = () => {
  return (
    <div>
      <Navbar text="profile" user="usman" />
      <div className="w-11/12 mx-auto">
        <h2>admin profile</h2>
      </div>
    </div>
  );
};

export default AdminProfile;
