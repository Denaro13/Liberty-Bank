import React, { useState } from "react";
import { Deposit, Navbar, Withdraw, Transfer } from "../../components";
import { logout, toggleSidebar } from "../../features/userSlice";
import { useSelector } from "react-redux";

const AdminTransactions = () => {
  const { admin, isSidebarOpen } = useSelector((store) => store.admin);
  const name = admin.name.split(" ")[0].toLowerCase();
  const [deposit, setDeposit] = useState(false);
  const [withdrawal, setWithdrawal] = useState(false);
  const [transfer, setTransfer] = useState(false);

  const handleDeposit = () => {
    setDeposit(!deposit);
    setTransfer(false);
    setWithdrawal(false);
  };
  const handleWithdrawal = () => {
    setDeposit(false);
    setTransfer(false);
    setWithdrawal(!withdrawal);
  };
  const handleTransfer = () => {
    setDeposit(false);
    setTransfer(!transfer);
    setWithdrawal(false);
  };

  return (
    <div>
      <Navbar
        text="Transactions"
        user={name}
        logout={logout}
        sidebar={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
      <div className="w-11/12 mx-auto mt-4">
        <h2 className="text-blue-600 text-3xl mb-4 capitalize bold">
          what would you like to do today?
        </h2>
        <div className="w-3/5 mx-auto flex flex-col gap-4 md:flex-row md:justify-between bg-white p-4">
          <button
            type="button"
            className="bg-blue-400 capitalize text-white rounded py-1 px-1 text-2xl"
            onClick={handleDeposit}
          >
            Deposit
          </button>
          <button
            type="button"
            className="bg-blue-400 capitalize text-white rounded py-1 px-1 text-2xl"
            onClick={handleWithdrawal}
          >
            withdraw
          </button>
          <button
            type="button"
            className="bg-blue-400 capitalize text-white rounded py-1 px-1 text-2xl"
            onClick={handleTransfer}
          >
            transfer
          </button>
        </div>
        {deposit && <Deposit />}
        {withdrawal && <Withdraw />}
        {transfer && <Transfer />}
      </div>
    </div>
  );
};

export default AdminTransactions;
