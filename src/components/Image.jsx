import React from "react";

const Image = ({ style, image }) => {
  return (
    <img
      src={image}
      alt="user image"
      className={`${style} mb-2 rounded-full object-cover`}
    />
  );
};

export default Image;
