import React, { useEffect, useState } from "react";
import {
  AvailableAccounts,
  Navbar,
  PersonalUserInfo,
  UserAccount,
} from "../../components";
import { logout, toggleSidebar } from "../../features/admin/adminSlice";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const User = () => {
  const { admin, isSidebarOpen } = useSelector((store) => store.admin);
  const name = admin.name.split(" ")[0].toLowerCase();
  const { email } = useParams();
  const [user, setUser] = useState({});
  const token = admin.access_token;
  const [accounts, setAccounts] = useState([]);

  const getUser = async () => {
    try {
      const resp = await axios.get(
        `http://localhost:8090/users/email?email=${email}`
      );
      setUser(resp.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const createAccount = async (accountType) => {
    try {
      const resp = await axios.post(
        "http://localhost:8090/accounts",
        {
          customerId: user.id,
          accountType: accountType,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      toast.success(resp.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Navbar
        text="dashboard"
        user={name}
        logout={logout}
        sidebar={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
      <div className="w-11/12 mx-auto pt-8">
        <Link
          to="/admin"
          className="bg-blue-400 capitalize text-white rounded py-1 px-2 hover:bg-blue-500 transition-all"
        >
          back
        </Link>
        <PersonalUserInfo {...user} />
        <AvailableAccounts
          firstName={user.firstName}
          lastName={user.lastName}
          token={token}
          accounts={accounts}
          setAccounts={setAccounts}
        />
        <UserAccount
          id={user.id}
          createAccount={createAccount}
          text=" create new account for user"
          accounts={accounts}
        />
      </div>
    </div>
  );
};

export default User;
