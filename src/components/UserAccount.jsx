import React, { useState } from "react";
import { toast } from "react-toastify";

const UserAccount = ({ id, createAccount, text, accounts }) => {
  const [modal, setModal] = useState(false);
  const [accountType, setAccountType] = useState("SAVINGS");

  const handleClick = () => {
    if (accounts.length >= 5) {
      toast.error("user cannot have more than 5 accounts");
      return;
    }
    setModal(true);
  };

  const handleAccountTypeChange = (event) => {
    const newAccountType = event.target.value;
    setAccountType(newAccountType);
  };
  const create = () => {
    createAccount(accountType);
    setModal(false);
  };

  return (
    <div className="mt-6 mb-6">
      {!modal && (
        <button
          type="button"
          className="bg-blue-400 capitalize text-white rounded py-1 px-2 text-2xl hover:bg-blue-500 transition-all"
          onClick={handleClick}
        >
          {text}
        </button>
      )}
      {modal && (
        <div className="bg-white h-auto w-1/2 transition flex flex-col gap-8 justify-between p-4">
          <div className="flex flex-col gap-2 sm:gap-0 sm:flex-row sm:justify-between sm:items-center">
            <div>
              <label htmlFor="id" className="uppercase">
                user id:{" "}
              </label>
              <input
                type="text"
                id="id"
                name="id"
                value={id}
                className="border-4 w-12 pl-1 border-blue-400 mr-4"
                readOnly
              />
            </div>
            <div>
              <label htmlFor="accountType" className="capitalize">
                Select account type:{" "}
              </label>
              <select
                name="account-type"
                id="accountType"
                value={accountType}
                className="border-4 border-blue-400 py-1 pl-1"
                onChange={handleAccountTypeChange}
              >
                <option value="SAVINGS">SAVINGS</option>
                <option value="CURRENT">CURRENT</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-2 sm:gap-0 sm:flex-row sm:justify-between">
            <button
              type="button"
              className="bg-blue-400 capitalize text-white rounded py-1 px-1 text-sm hover:bg-blue-500 transition-all"
              onClick={() => create()}
            >
              create account
            </button>
            <button
              type="button"
              className="bg-red-400 capitalize text-white rounded py-1 px-1 text-sm  hover:bg-red-500 transition-all"
              onClick={() => setModal(false)}
            >
              cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserAccount;
