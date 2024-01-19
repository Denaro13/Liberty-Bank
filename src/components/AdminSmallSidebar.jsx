import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import Logo from "./Logo";
import AdminNavLinks from "./AdminNavLinks";

const AdminSmallSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <aside className="lg:hidden ">
      <div
        className={
          isSidebarOpen
            ? "fixed inset-0 bg-white flex items-center justify-center opacity-0 small-sidebar "
            : "fixed inset-0 bg-white flex items-center justify-center opacity-1 small-sidebar show-sidebar"
        }
      >
        <div className="small-content bg-white rounded py-16 px-8 relative flex items-center flex-col ">
          <button
            className="absolute top-3 left-3 bg-transparent border-transparent text-4xl text-red-800 cursor-pointer"
            // onClick={() => dispatch(toggleSidebar())}
          >
            <FaTimes />
          </button>
          <header>
            <Logo style={"text-3xl"} />
          </header>
          <AdminNavLinks />
        </div>
      </div>
    </aside>
  );
};

export default AdminSmallSidebar;
