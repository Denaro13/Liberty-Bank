import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const initialState = {
  senderAcctNumber: "",
  receiverAcctNumber: "",
  transactionAmt: "",
};

const Transfer = () => {
  const [transactionDetails, setTransactionDetails] = useState(initialState);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setTransactionDetails({ ...transactionDetails, [name]: value });
  };
  const transfer = async () => {
    try {
      const resp = await axios.post(
        "http://localhost:8090/transactions/transfer",
        {
          senderAcctNumber: transactionDetails.senderAcctNumber,
          receiverAcctNumber: transactionDetails.receiverAcctNumber,
          transactionAmt: transactionDetails.transactionAmt,
        }
      );
      toast.success(resp.data);
    } catch (error) {
      toast.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { senderAcctNumber, receiverAcctNumber, transactionAmt } =
      transactionDetails;
    if (!senderAcctNumber || !receiverAcctNumber || !transactionAmt) {
      toast.error("fill out all fields");
      return;
    }
    transfer();
    setTransactionDetails(initialState);
  };
  return (
    <div className="w-4/5 md:w-1/2 mx-auto mt-8 bg-white p-4">
      <form onSubmit={handleSubmit}>
        <div className=" flex flex-col gap-2  ">
          <div>
            <label htmlFor="senderAcctNumber" className="block capitalize">
              sender account number:{" "}
            </label>
            <input
              type="text"
              id="senderAcctNumber"
              name="senderAcctNumber"
              value={transactionDetails.senderAcctNumber}
              className="border-4 pl-1 border-blue-400 mr-4"
              onChange={handleChange}
              minLength={10}
              maxLength={10}
            />
          </div>
          <div>
            <label htmlFor="receiverAcctNumber" className="block capitalize">
              receiver account number:{" "}
            </label>
            <input
              type="text"
              id="receiverAcctNumber"
              name="receiverAcctNumber"
              value={transactionDetails.receiverAcctNumber}
              className="border-4 pl-1 border-blue-400 mr-4"
              onChange={handleChange}
              minLength={10}
              maxLength={10}
            />
          </div>
          <div>
            <label htmlFor="transactionAmt" className="block capitalize">
              amount:{" "}
            </label>
            <input
              type="text"
              id="transactionAmt"
              name="transactionAmt"
              value={transactionDetails.transactionAmt}
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

export default Transfer;
