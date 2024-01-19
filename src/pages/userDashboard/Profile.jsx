import React from "react";
import { Navbar } from "../../components";

const Profile = () => {
  return (
    <div>
      <Navbar text="profile" user="james" />
      <div className="w-11/12 mx-auto">
        <h2>Profile</h2>
      </div>
    </div>
  );
};

export default Profile;
