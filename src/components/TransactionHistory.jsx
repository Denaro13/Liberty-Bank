import axios from "axios";
import React, { useEffect, useState } from "react";
import IndividualTransactions from "./IndividualTransactions";

const TransactionHistory = ({ fullName, token }) => {
  const [accounts, setAccounts] = useState([]);

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

  let accountIds = [];
  if (accounts) {
    for (let i = 0; i < accounts.length; i++) {
      accountIds.push(accounts[i].id);
    }
  }
  return (
    <div className=" mt-4">
      <h2 className="text-3xl capitalize mb-4">transaction history</h2>
      <div className=" sm:w-1/2">
        {accountIds.length < 1 && (
          <h2 className="text-2xl">You have not made any transaction yet</h2>
        )}
        {accountIds.map((id) => {
          return <IndividualTransactions key={id} id={id} />;
        })}
      </div>
    </div>
  );
};

export default TransactionHistory;
