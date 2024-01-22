import React from "react";
import { ImageUpload, Navbar, ProfileInfo } from "../../components";
import { logout, toggleSidebar } from "../../features/userSlice";
import { useSelector } from "react-redux";

const Profile = () => {
  const { user, isSidebarOpen } = useSelector((store) => store.user);
  const { name, email, phoneNumber } = user;
  const displayName = name.split(" ")[0].toLowerCase();

  return (
    <div>
      <Navbar
        text="profile"
        user={displayName}
        logout={logout}
        sidebar={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
      <div className="w-11/12 mt-10 mx-auto">
        <ImageUpload />
        <ProfileInfo name={name} email={email} phoneNumber={phoneNumber} />
      </div>
    </div>
  );
};

export default Profile;
