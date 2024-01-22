import React, { useState } from "react";
import Logo from "./Logo";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
// import { toggleSidebar } from "../features/generalSlice";

const Navbar = ({ text, user, logout, sidebar, toggleSidebar }) => {
  const [showLogout, setShowLogout] = useState(false);
  const dispatch = useDispatch();

  return (
    <nav className="h-24 flex items-center justify-center bg-white lg:bg-transparent lg:sticky lg:top-0">
      <div className="flex items-center justify-between w-11/12">
        {!sidebar && (
          <button
            type="button"
            onClick={() => dispatch(toggleSidebar())}
            className="lg:hidden text-3xl text-blue-400"
          >
            <FaAlignLeft />
          </button>
        )}
        <h3 className="capitalize text-3xl">{text}</h3>
        <div className="relative">
          <button
            type="button"
            className="flex items-center justify-center gap-y-0 gap-x-2 relative shadow text-xl bg-blue-400 text-white px-1 py-2 capitalize"
            onClick={() => setShowLogout(!showLogout)}
          >
            <FaUserCircle />
            {user}
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
              onClick={() => dispatch(logout())}
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
