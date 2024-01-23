import React, { useEffect, useState } from "react";
import { ImageUpload, Navbar, ProfileInfo } from "../../components";
import { logout, toggleSidebar } from "../../features/userSlice";
import { useSelector } from "react-redux";
import axios from "axios";

const Profile = () => {
  const { user, isSidebarOpen } = useSelector((store) => store.user);
  const { name, email, phoneNumber } = user;
  const [profile, setProfile] = useState({});
  const displayName = name.split(" ")[0].toLowerCase();

  const getUser = async () => {
    try {
      const resp = await axios.get(
        `http://localhost:8090/users/email?email=${email}`
      );
      setProfile(resp.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

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
        <ProfileInfo {...profile} />
      </div>
    </div>
  );
};

export default Profile;
