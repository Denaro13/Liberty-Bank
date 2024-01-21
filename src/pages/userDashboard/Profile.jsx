import React from "react";
import { Navbar } from "../../components";
import { logout } from "../../features/userSlice";
import { useSelector } from "react-redux";

const Profile = () => {
  const { user } = useSelector((store) => store.user);
  const name = user.name.split(" ")[0].toLowerCase();
  return (
    <div>
      <Navbar text="profile" user={name} logout={logout} />
      <div className="w-11/12 mt-4 mx-auto">
        <h2>Profile</h2>
      </div>
    </div>
  );
};

export default Profile;
