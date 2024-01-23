import React from "react";

const ProfileInfo = ({ ...profile }) => {
  const {
    address,
    dateJoined,
    email,
    firstName,
    lastName,
    phoneNumber,
    role,
    username,
  } = profile;
  return (
    <div className="flex flex-col gap-5 text-2xl text-white">
      <h2 className="capitalize bg-blue-400 py-2 pl-1 rounded">
        first name: {firstName}
      </h2>
      <h2 className="capitalize bg-blue-400 py-2 pl-1 rounded">
        last name: {lastName}
      </h2>

      <h2 className=" bg-blue-400 py-2 pl-1 rounded">
        Phone Number: {phoneNumber}
      </h2>
      <h2 className=" bg-blue-400 py-2 pl-1 rounded">
        <span className="capitalize">email address:</span> {email}
      </h2>
      <h2 className=" bg-blue-400 py-2 pl-1 rounded capitalize">
        address: {address}
      </h2>
      <h2 className=" bg-blue-400 py-2 pl-1 rounded capitalize">
        date joined: {dateJoined}
      </h2>
      <h2 className=" bg-blue-400 py-2 pl-1 rounded capitalize">
        role: {role}
      </h2>
      <h2 className=" bg-blue-400 py-2 pl-1 rounded">
        <span className="capitalize">username: </span> {username}
      </h2>
    </div>
  );
};

export default ProfileInfo;
