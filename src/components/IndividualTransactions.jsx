import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const IndividualTransactions = ({ id }) => {
  const [transactions, setTransactions] = useState([]);
  const getTransactionHistory = async () => {
    try {
      const resp = await axios.get(
        `http://localhost:8090/transactions/accountStatement/${id}`
      );
      setTransactions(resp.data);
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getTransactionHistory();
  }, []);

  if (transactions.length < 1) {
    return null;
  }

  return (
    <div>
      {transactions.map((transaction) => {
        const {
          receiverAccountNumber,
          senderAccountNumber,
          transactionAmount,
          transactionDate,
          transactionId,
        } = transaction;
        return (
          <div
            key={transactionId}
            className="bg-white mb-4 pl-4 py-1 pb-2 capitalize text-sm"
          >
            <div className="mb-1">
              <p className="text-blue-600 text-xl">
                {senderAccountNumber && receiverAccountNumber
                  ? "transfer"
                  : null}
              </p>
              <p className="text-blue-600 text-xl">
                {!senderAccountNumber && receiverAccountNumber
                  ? "deposit"
                  : null}
              </p>
              <p className="text-blue-600 text-xl">
                {senderAccountNumber && !receiverAccountNumber
                  ? "withdrawal"
                  : null}
              </p>
              {receiverAccountNumber && (
                <h4>receiver account number: {receiverAccountNumber}</h4>
              )}
              {senderAccountNumber && (
                <h4>sender account number: {senderAccountNumber}</h4>
              )}
              <h4>
                transaction amount: <span>&#8358;</span>
                {transactionAmount}
              </h4>
              <h4>transaction date: {transactionDate}</h4>
            </div>

            <a
              href={`http://localhost:8090/transactions/receipt/${transactionId}`}
              className="bg-blue-400 capitalize text-white rounded py-1 px-2"
              target="_blank"
            >
              generate receipt
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default IndividualTransactions;
