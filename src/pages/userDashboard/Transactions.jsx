import React, { useState } from "react";
import {
  Deposit,
  Navbar,
  Withdraw,
  Transfer,
  TransactionHistory,
} from "../../components";
import { logout, toggleSidebar } from "../../features/userSlice";
import { useSelector } from "react-redux";

const Transactions = () => {
  const { user, isSidebarOpen } = useSelector((store) => store.user);
  const name = user.name.split(" ")[0].toLowerCase();
  const [deposit, setDeposit] = useState(false);
  const [withdrawal, setWithdrawal] = useState(false);
  const [transfer, setTransfer] = useState(false);
  const token = user.access_token;

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
            className="bg-blue-400 capitalize text-white rounded py-1 px-1 text-2xl hover:bg-blue-500 transition-all"
            onClick={handleDeposit}
          >
            Deposit
          </button>
          <button
            type="button"
            className="bg-blue-400 capitalize text-white rounded py-1 px-1 text-2xl hover:bg-blue-500 transition-all"
            onClick={handleWithdrawal}
          >
            withdraw
          </button>
          <button
            type="button"
            className="bg-blue-400 capitalize text-white rounded py-1 px-1 text-2xl hover:bg-blue-500 transition-all"
            onClick={handleTransfer}
          >
            transfer
          </button>
        </div>
        {deposit && <Deposit />}
        {withdrawal && <Withdraw />}
        {transfer && <Transfer />}
        <TransactionHistory fullName={user.name} token={token} />
      </div>
    </div>
  );
};

export default Transactions;
