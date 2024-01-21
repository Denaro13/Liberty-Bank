import React, { useState } from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../features/generalSlice";

const SmallSidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.general);
  const dispatch = useDispatch();
  return (
    <aside className="lg:hidden ">
      <div
        className={
          isSidebarOpen
            ? "fixed inset-0 bg-white flex items-center justify-center opacity-1 small-sidebar show-sidebar"
            : "fixed inset-0 bg-white flex items-center justify-center opacity-0 small-sidebar "
        }
      >
        <div className="small-content bg-white rounded py-16 px-8 relative flex items-center flex-col ">
          <button
            className="absolute top-3 left-3 bg-transparent border-transparent text-4xl text-red-800 cursor-pointer"
            onClick={() => dispatch(toggleSidebar())}
          >
            <FaTimes />
          </button>
          <header>
            <Logo style={"text-3xl"} />
          </header>
          <NavLinks />
        </div>
      </div>
    </aside>
  );
};

export default SmallSidebar;
