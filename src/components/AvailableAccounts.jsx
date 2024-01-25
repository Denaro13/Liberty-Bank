import axios from "axios";
import React, { useEffect, useState } from "react";

const AvailableAccounts = ({
  token,
  firstName,
  lastName,
  accounts,
  setAccounts,
}) => {
  const getAccounts = async () => {
    try {
      const resp = await axios.get(
        `http://localhost:8090/accounts/accountName?accountHolder=${firstName} ${lastName}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      const account = resp.data[`${firstName} ${lastName}`];
      //   console.log(account);
      setAccounts(account);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      getAccounts();
    }, 2000);
  }, [firstName, lastName]);

  if (accounts.length < 1) {
    return (
      <h2 className="mt-4 mb-2 capitalize text-2xl text-blue-600">
        This user has not account yet
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

export default AvailableAccounts;
