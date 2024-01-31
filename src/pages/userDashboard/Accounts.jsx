import React, { useEffect, useState } from "react";
import { Navbar, UserAccount, UserAvailableAccount } from "../../components";
import { logout, toggleSidebar } from "../../features/userSlice";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
const Accounts = () => {
  const { user, isSidebarOpen } = useSelector((store) => store.user);
  const [accounts, setAccounts] = useState([]);
  const name = user.name.split(" ")[0].toLowerCase();
  const fullName = user.name;
  const token = user.access_token;

  const getAccounts = async () => {
    try {
      const resp = await axios.get(
        `http://localhost:8090/accounts/accountName?accountHolder=${fullName}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      const account = resp.data[`${fullName}`];
      setAccounts(account);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAccounts();
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
        text="accounts"
        user={name}
        logout={logout}
        sidebar={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
      <div className="w-11/12 mx-auto mt-4">
        <UserAvailableAccount accounts={accounts} />
        <UserAccount
          id={user.id}
          createAccount={createAccount}
          text="create new account"
          accounts={accounts}
        />
      </div>
    </div>
  );
};

export default Accounts;
