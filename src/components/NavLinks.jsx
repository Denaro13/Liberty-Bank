import React from "react";
import { NavLink } from "react-router-dom";
import links from "../utils/links";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../features/userSlice";

const NavLinks = ({ style }) => {
  const dispatch = useDispatch();
  return (
    <div className="pt-4 flex flex-col">
      {links.map((link) => {
        const { id, text, path, icon } = link;
        return (
          <NavLink
            key={id}
            to={path}
            className={({ isActive }) => {
              return isActive
                ? `flex items-center py-4 px-0 capitalize ${style} hover:text-blue-400 transition-all text-blue-400`
                : `flex items-center py-4 px-0 capitalize ${style} hover:text-blue-400  transition-all`;
            }}
            onClick={() => dispatch(toggleSidebar())}
            end
          >
            <span className="text-2xl mr-4 grid place-items-center ">
              {icon}
            </span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
