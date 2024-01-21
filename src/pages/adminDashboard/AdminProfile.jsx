import React from "react";
import { Navbar } from "../../components";
import { logout } from "../../features/admin/adminSlice";
import { useSelector } from "react-redux";

const AdminProfile = () => {
  const { admin } = useSelector((store) => store.admin);
  const name = admin.name.split(" ")[0].toLowerCase();
  return (
    <div>
      <Navbar text="profile" user={name} logout={logout} />
      <div className="w-11/12 mx-auto">
        <h2>admin profile</h2>
      </div>
    </div>
  );
};

export default AdminProfile;
