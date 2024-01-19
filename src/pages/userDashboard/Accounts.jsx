import React from "react";
import { Navbar } from "../../components";

const Accounts = () => {
  return (
    <div>
      <Navbar text="accounts" user="james" />
      <div className="w-11/12 mx-auto">
        <h2>Accounts</h2>
      </div>
    </div>
  );
};

export default Accounts;
