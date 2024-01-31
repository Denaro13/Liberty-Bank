import React, { useEffect, useState } from "react";
import { Navbar, TransactionHistory } from "../../components";
import { logout, toggleSidebar } from "../../features/userSlice";
import { useSelector } from "react-redux";
import axios from "axios";
const UserDashboard = () => {
  const { user, isSidebarOpen } = useSelector((store) => store.user);
  const name = user.name.split(" ")[0].toLowerCase();
  const token = user.access_token;
  const [accounts, setAccounts] = useState([]);
  const fullName = user.name;

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

  const accountBalance = [];
  if (accounts) {
    accounts.forEach((account) => {
      accountBalance.push(account.accountBalance);
    });
  }
  const totalBalance = accountBalance.reduce(
    (total, value) => total + value,
    0
  );
  return (
    <div>
      <Navbar
        text="dashboard"
        user={name}
        logout={logout}
        sidebar={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
      <div className="w-11/12 mx-auto mt-4">
        <h2 className="text-3xl capitalize mb-4">
          experience effortless banking
        </h2>
        <div className="w-1/2 bg-blue-500 py-4 px-2 text-white">
          <h4 className="text-2xl capitalize mb-2 ">
            total balance in {accountBalance.length} accounts
          </h4>
          <h2 className="text-4xl">NGN {totalBalance}</h2>
        </div>
        <TransactionHistory fullName={user.name} token={token} />
      </div>
    </div>
  );
};

export default UserDashboard;
