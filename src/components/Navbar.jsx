import React, { useState } from "react";
import Logo from "./Logo";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";

const Navbar = ({ text }) => {
  const [showLogout, setShowLogout] = useState(false);

  return (
    <nav className="h-24 flex items-center justify-center lg:sticky lg:top-0">
      <div className="flex items-center justify-between w-11/12">
        <h3 className="capitalize text-3xl">{text}</h3>
        <div className="relative">
          <button
            type="button"
            className="flex items-center justify-center gap-y-0 gap-x-2 relative shadow text-xl bg-blue-400 text-white px-1 py-2"
            onClick={() => setShowLogout(!showLogout)}
          >
            <FaUserCircle />
            {/* {user?.name} */}James
            <FaCaretDown />
          </button>
          <div
            className={
              showLogout
                ? "absolute top-14 left-0 w-full bg-blue-200 shadow-md p-2 text-center rounded visible"
                : "absolute top-14 left-0 w-full bg-blue-200 shadow-md p-2 text-center rounded invisible"
            }
          >
            <button
              type="button"
              className="bg-transparent border-transparent text-blue-600 tracking-wide capitalize cursor-pointer"
              onClick={() => console.log("you clicked me")}
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
