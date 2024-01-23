import React, { useEffect, useState } from "react";
import Image from "./Image";
import profileImg from "../assets/images/profileImg.svg";

const PersonalUserInfo = ({ ...user }) => {
  const {
    address,
    dateJoined,
    email,
    firstName,
    lastName,
    phoneNumber,
    role,
    username,
  } = user;

  return (
    <article className="mt-10">
      <Image style="w-36 h-36" image={profileImg} />
      <div className="mt-8 flex flex-col gap-4 text-3xl  ">
        <h4 className="capitalize">
          <span className="capitalize bg-blue-400 text-white px-2 py-1 rounded-md text-xl">
            first name:
          </span>{" "}
          {firstName}
        </h4>
        <h4 className="capitalize">
          <span className="capitalize bg-blue-400 text-white px-2 py-1 rounded-md text-xl">
            last name:
          </span>{" "}
          {lastName}
        </h4>
        <h4>
          <span className="capitalize bg-blue-400 text-white px-2 py-1 rounded-md text-xl">
            phone number:
          </span>{" "}
          {phoneNumber}
        </h4>
        <h4>
          <span className="capitalize bg-blue-400 text-white px-2 py-1 rounded-md text-xl">
            email:
          </span>{" "}
          {email}
        </h4>
        <h4>
          <span className="capitalize bg-blue-400 text-white px-2 py-1 rounded-md text-xl">
            address:
          </span>{" "}
          {address}
        </h4>
        <h4>
          <span className="capitalize bg-blue-400 text-white px-2 py-1 rounded-md text-xl">
            date joined:
          </span>{" "}
          {dateJoined}
        </h4>
        <h4>
          <span className="capitalize bg-blue-400 text-white px-2 py-1 rounded-md text-xl">
            username:
          </span>{" "}
          {username}
        </h4>
        <h4>
          <span className="capitalize bg-blue-400 text-white px-2 py-1 rounded-md text-xl">
            role:
          </span>{" "}
          {role}
        </h4>
      </div>
    </article>
  );
};

export default PersonalUserInfo;
