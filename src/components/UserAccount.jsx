import React, { useState } from "react";

const UserAccount = ({ id, createAccount }) => {
  const [modal, setModal] = useState(false);
  const [accountType, setAccountType] = useState("SAVINGS");

  const handleClick = () => {
    setModal(true);
  };

  const handleAccountTypeChange = (event) => {
    const newAccountType = event.target.value;
    setAccountType(newAccountType);
  };

  return (
    <div className="mt-8">
      {!modal && (
        <button
          type="button"
          className="bg-blue-400 capitalize text-white rounded py-1 px-2 text-2xl"
          onClick={handleClick}
        >
          create new account for user
        </button>
      )}
      {modal && (
        <div className="bg-white h-auto w-auto bar transition modal flex flex-col gap-8 justify-between p-4 ">
          <div className="flex flex-col gap-2 sm:gap-0 sm:flex-row sm:justify-between sm:items-center">
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
          <div className="flex flex-col gap-2 sm:gap-0 sm:flex-row sm:justify-between">
            <button
              type="button"
              className="bg-blue-400 capitalize text-white rounded py-1 px-1 text-sm"
              onClick={() => createAccount(accountType)}
            >
              create account
            </button>
            <button
              type="button"
              className="bg-red-400 capitalize text-white rounded py-1 px-1 text-sm"
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
