import React from "react";

const FormRow = ({
  name,
  type,
  value,
  handleChange,
  labelText,
  autoComplete,
}) => {
  return (
    <div className="mb-4 mt-4">
      <label
        htmlFor={name}
        className="block text-sm capitalize mb-2 tracking-wide"
      >
        {labelText || name}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        autoComplete="on"
        onChange={handleChange}
        className="w-full h-10 py-2 px-2 bg-gray-50 rounded-md border-gray-200 border-2 border-solid"
      />
    </div>
  );
};

export default FormRow;
