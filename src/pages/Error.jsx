import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/images/error.svg";

const Error = () => {
  return (
    <main className="text-center flex items-center justify-center min-h-screen">
      <div>
        <img
          src={img}
          alt="error image"
          className="w-11/12 max-w-2xl block mb-4"
        />
        <h3 className="mb-2 text-2xl capitalize">ohh! page not found</h3>
        <p className="mt-0 mb-2 text-2xl">
          We can't seem to find the page you are looking for
        </p>
        <Link to="/" className="underline capitalize text-blue-400 text-xl">
          back home
        </Link>
      </div>
    </main>
  );
};

export default Error;
