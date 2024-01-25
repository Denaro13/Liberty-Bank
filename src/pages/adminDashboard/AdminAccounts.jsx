import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Navbar, UserAccount, UserAvailableAccount } from "../../components";
import { logout, toggleSidebar } from "../../features/admin/adminSlice";

const AdminAccounts = () => {
  const { admin, isSidebarOpen } = useSelector((store) => store.admin);
  const [accounts, setAccounts] = useState([]);
  const name = admin.name.split(" ")[0].toLowerCase();
  const fullName = admin.name;
  const token = admin.access_token;

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
      //   console.log(account);
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
          customerId: admin.id,
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
      <div className="w-11/12 mx-auto">
        <UserAvailableAccount accounts={accounts} />
        <UserAccount
          id={admin.id}
          createAccount={createAccount}
          text="create new account"
          accounts={accounts}
        />
      </div>
    </div>
  );
};

export default AdminAccounts;
