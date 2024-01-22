import React from "react";
import Image from "./Image";
import profileImg from "../assets/images/profileImg.svg";

const UserInfo = ({ ...user }) => {
  const { firstName, lastName, phoneNumber, role } = user;
  const firstLetter = firstName.slice(0, 1);
  const secondLetter = lastName.slice(0, 1);
  return (
    <div className="flex items-center gap-4 mb-4">
      <div className="w-24 h-24 grid place-items-center uppercase text-5xl bg-blue-400 rounded-full text-white">
        {firstLetter} {secondLetter}
      </div>
      <div>
        <h4 className="capitalize">
          {firstName} <span className="capitalize">{lastName}</span>
        </h4>
        <h4>{phoneNumber}</h4>
        <h4>{role}</h4>
      </div>
    </div>
  );
};

export default UserInfo;
