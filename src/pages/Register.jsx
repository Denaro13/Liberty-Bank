import React, { useState } from "react";
import Logo from "../components/Logo";
import UserRegister from "../components/UserRegister";
import AdminRegister from "../components/AdminRegister";

const Register = () => {
  const [user, setUser] = useState(true);
  const [admin, setAdmin] = useState(false);
  const [isMember, setIsMember] = useState(false);

  const toggleUserRegister = () => {
    setUser(true);
    setAdmin(false);
  };
  const toggleAdminRegister = () => {
    setUser(false);
    setAdmin(true);
  };
  const toggleMember = () => {
    setIsMember(!isMember);
  };

  return (
    <main className="min-h-screen grid items-center">
      <div className="hidden">image</div>
      <div className="w-11/12 mx-auto my-12 bg-white rounded-md py-8 px-10 shadow-md max-w-lg ">
        <Logo style={`text-center mb-4`} />
        <div className="flex justify-between">
          {/* <p className="capitalize text-blue-400 text-md mb-4 ">
            welcome {(admin && "admin") || (user && "user")}
          </p> */}
          <button
            type="button"
            onClick={toggleUserRegister}
            className={
              user
                ? "text-blue-400 text-md mb-4"
                : "text-md mb-4 hover:text-blue-400"
            }
          >
            {isMember ? "Login as a User" : "Register as a User"}
          </button>
          <button
            type="button"
            onClick={toggleAdminRegister}
            className={
              admin
                ? "text-blue-400 text-md mb-4"
                : "text-md mb-4 hover:text-blue-400"
            }
          >
            {isMember ? "Login as an Admin" : "Register as an Admin"}
          </button>
        </div>
        <div>
          {user && <UserRegister isMember={isMember} />}
          {admin && <AdminRegister isMember={isMember} />}
        </div>
        <p className="text-xl mt-4 text-center">
          {isMember
            ? `Not ${(user && "a user") || (admin && "an admin")} yet? `
            : `Already ${(user && "a user") || (admin && "an admin")}? `}
          <button
            type="button"
            onClick={toggleMember}
            className="text-blue-400 bg-transparent"
          >
            {isMember ? "Register" : "Login"}
          </button>
        </p>
      </div>
    </main>
  );
};

export default Register;
