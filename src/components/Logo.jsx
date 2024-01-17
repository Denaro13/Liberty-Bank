import React from "react";

const Logo = ({ style }) => {
  return (
    <h1
      className={`${style} font-bold text-4xl uppercase leading-snug tracking-wide text-blue-400`}
    >
      Liberty Bank
    </h1>
  );
};

export default Logo;
