import React, { useState } from "react";
import Logo from "./Logo";
import AdminNavLinks from "./AdminNavLinks";

const AdminBigSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <aside className="hidden lg:block big-side ">
      <div
        className={
          isSidebarOpen
            ? "lg:bg-white lg:min-h-screen lg:h-full lg:w-56 bar lg:transition lg:ml-0"
            : "lg:bg-white lg:min-h-screen lg:h-full lg:w-56 bar lg:transition"
        }
      >
        <div className=" lg:sticky lg:top-0">
          <header className="lg:h-24 lg:flex lg:items-center pl-6">
            <Logo style={"text-xl"} />
          </header>
          <AdminNavLinks style={"pl-6 hover:pl-10 hover:text-blue-400"} />
        </div>
      </div>
    </aside>
  );
};

export default AdminBigSidebar;
