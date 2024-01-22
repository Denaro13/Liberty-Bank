import React from "react";

const ProfileInfo = ({ name, email, phoneNumber }) => {
  return (
    <div className="flex flex-col gap-5 text-3xl text-white">
      <h2 className="capitalize bg-blue-400 py-2 pl-1 rounded">
        Full Name: {name}
      </h2>
      <h2 className=" bg-blue-400 py-2 pl-1 rounded">Email Address: {email}</h2>
      <h2 className=" bg-blue-400 py-2 pl-1 rounded">
        Phone Number: {phoneNumber}
      </h2>
    </div>
  );
};

export default ProfileInfo;
