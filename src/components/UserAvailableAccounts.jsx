import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const UserAvailableAccounts = ({ accounts }) => {
  if (accounts.length < 1) {
    return (
      <h2 className="mt-4 mb-2 capitalize text-2xl text-blue-600">
        You currently do not have an account
      </h2>
    );
  }

  return (
    <>
      <h2 className="mt-4 mb-2 capitalize text-2xl text-blue-600">
        available accounts
      </h2>
      <div className=" grid gap-4 md:grid-cols-2 ">
        {accounts.map((account) => {
          const { accountNumber, accountBalance, accountType } = account;
          return (
            <div
              key={accountNumber}
              className="bg-blue-400 text-white pl-2 rounded capitalize text-xl"
            >
              <h2>account number: {accountNumber}</h2>
              <h2>account type: {accountType}</h2>
              <h2>balance: {accountBalance}</h2>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default UserAvailableAccounts;
