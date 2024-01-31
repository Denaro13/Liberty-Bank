import React from "react";
import Image from "./Image";
import profileImg from "../assets/images/profileImg.svg";
import { Link } from "react-router-dom";

const UserInfo = ({ ...user }) => {
  const { firstName, lastName, phoneNumber, role, email } = user;
  const firstLetter = firstName.slice(0, 1);
  const secondLetter = lastName.slice(0, 1);
  return (
    <div className="flex items-center gap-4 mb-4 py-3">
      <div className="w-24 h-24 grid place-items-center uppercase text-5xl bg-blue-400 rounded-full text-white">
        {firstLetter} {secondLetter}
      </div>
      <div>
        <h4 className="capitalize mb-1 lg:text-xl ">
          <span className="text-blue-600 ">full name</span>: {firstName}{" "}
          <span className="capitalize mb-1">{lastName}</span>
        </h4>
        <h4 className="capitalize mb-1 lg:text-xl">
          <span className="text-blue-600">phone number</span>: {phoneNumber}
        </h4>
        <h4 className="capitalize mb-1 lg:text-xl">
          <span className="text-blue-600">role</span>: {role}
        </h4>
        <Link
          to={`/admin/user/${email}`}
          className="bg-blue-400 capitalize text-white rounded py-1 px-2 hover:bg-blue-500 transition-all"
        >
          details
        </Link>
      </div>
    </div>
  );
};

export default UserInfo;
