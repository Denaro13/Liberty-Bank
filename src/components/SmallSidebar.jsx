import React, { useState } from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

const SmallSidebar = () => {
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
            className="close-btn"
            // onClick={() => dispatch(toggleSidebar())}
          >
            {/* <FaTimes /> */}
            close sidebar
          </button>
          <header>
            <Logo style={"text-xl"} />
          </header>
          <NavLinks />
        </div>
      </div>
    </aside>
  );
};

export default SmallSidebar;
