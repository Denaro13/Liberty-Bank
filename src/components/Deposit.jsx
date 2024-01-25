import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const initialState = {
  acctNumber: "",
  depositAmt: "",
};

const Deposit = () => {
  const [transactionDetails, setTransactionDetails] = useState(initialState);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setTransactionDetails({ ...transactionDetails, [name]: value });
  };

  const deposit = async () => {
    try {
      const resp = await axios.post(
        "http://localhost:8090/transactions/deposit",
        {
          acctNumber: transactionDetails.acctNumber,
          depositAmt: transactionDetails.depositAmt,
        }
      );
      toast.success(resp.data);
    } catch (error) {
      toast.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { acctNumber, depositAmt } = transactionDetails;
    if (!acctNumber || !depositAmt) {
      toast.error("fill out all fields");
      return;
    }
    deposit();
    setTransactionDetails(initialState);
  };

  return (
    <div className="w-3/5 mx-auto mt-8 bg-white p-4">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2 md:gap-0 md:flex-row md:justify-between md:items-center">
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
            <label htmlFor="depositAmt" className="capitalize">
              deposit amount:{" "}
            </label>
            <input
              type="text"
              id="depositAmt"
              name="depositAmt"
              value={transactionDetails.depositAmt}
              className="border-4 pl-1 border-blue-400 mr-4"
              onChange={handleChange}
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-400 capitalize text-white rounded py-1 px-1 text-sm mt-4"
        >
          complete deposit
        </button>
      </form>
    </div>
  );
};

export default Deposit;
