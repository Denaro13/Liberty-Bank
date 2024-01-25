import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const initialState = {
  acctNumber: "",
  withdrawalAmt: "",
};
const Withdraw = () => {
  const [transactionDetails, setTransactionDetails] = useState(initialState);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setTransactionDetails({ ...transactionDetails, [name]: value });
  };

  const withdrawal = async () => {
    try {
      const resp = await axios.post(
        "http://localhost:8090/transactions/withdraw",
        {
          acctNumber: transactionDetails.acctNumber,
          withdrawalAmt: transactionDetails.withdrawalAmt,
        }
      );
      toast.success(resp.data);
    } catch (error) {
      toast.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { acctNumber, withdrawalAmt } = transactionDetails;
    if (!acctNumber || !withdrawalAmt) {
      toast.error("fill out all fields");
      return;
    }
    withdrawal();
    setTransactionDetails(initialState);
  };
  return (
    <div className="w-3/5 mx-auto mt-8 bg-white p-4">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2 md:gap-0 md:flex-row md:justify-between sm:items-center">
          <div>
            <label htmlFor="acctNumber" className="capitalize">
              account number:{" "}
            </label>
            <input
              type="text"
              id="acctNumber"
              name="acctNumber"
              value={transactionDetails.acctNumber}
              className="border-4 pl-1 border-blue-400 mr-4"
              onChange={handleChange}
              minLength={10}
              maxLength={10}
            />
          </div>
          <div>
            <label htmlFor="withdrawalAmt" className="capitalize">
              Withdrawal amount:{" "}
            </label>
            <input
              type="text"
              id="withdrawalAmt"
              name="withdrawalAmt"
              value={transactionDetails.withdrawalAmt}
              className="border-4 pl-1 border-blue-400 mr-4"
              onChange={handleChange}
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-400 capitalize text-white rounded py-1 px-1 text-sm mt-4"
        >
          complete withdrawal
        </button>
      </form>
    </div>
  );
};

export default Withdraw;
