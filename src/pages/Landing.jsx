import React from "react";
import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";

const Landing = () => {
  return (
    <main>
      <nav className="mx-auto my-0 flex items-center w-11/12 max-w-screen-xl h-24">
        <Logo />
      </nav>
      <div className=" landing w-11/12 max-w-screen-xl mx-auto my-0 grid items-center md:grid-cols-2  mt--20">
        <div>
          <h1 className=" text-4xl font-bold lg:text-5xl capitalize mb-10 leading-snug tracking-wide">
            liberty <span className="text-blue-400">online</span> Banking
          </h1>
          <p className="leading-9 text-2xl mb-6">
            Welcome to our banking app – where simplicity meets seamless
            transactions. Experience intuitive features and top-notch security.
            Your money, your way. Let's get started!
          </p>
          <Link
            to="/register"
            className="capitalize bg-blue-400 px-4 py-2 rounded-md text-white text-2xl hover:bg-blue-500 hover:transition-all"
          >
            login/register
          </Link>
        </div>
        <div>
          <img src={main} alt="online banking" className="hidden md:block " />
        </div>
      </div>
    </main>
  );
};

export default Landing;
