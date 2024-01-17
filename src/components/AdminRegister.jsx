import React, { useState } from "react";
import FormRow from "./FormRow";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { loginAdmin, registerAdmin } from "../features/admin/adminSlice";

const initialState = {
  employeeFirstName: "",
  employeeLastName: "",
  email: "",
  password: "",
  role: "EMPLOYEE",
};

const AdminRegister = ({ isMember }) => {
  const [adminData, setAdminData] = useState(initialState);
  const { admin, isLoading } = useSelector((store) => store.admin);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAdminData({ ...adminData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, employeeFirstName, employeeLastName, role } =
      adminData;
    if (
      !email ||
      !password ||
      (!isMember && (!employeeFirstName || !employeeLastName))
    ) {
      toast.error("Please fill out all fields!");
      return;
    }
    if (isMember) {
      dispatch(loginAdmin({ email: email, password: password }));
      return;
    }
    dispatch(
      registerAdmin({
        employeeFirstName,
        employeeLastName,
        email,
        password,
        role,
      })
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      {!isMember && (
        <>
          <FormRow
            type="text"
            name="employeeFirstName"
            labelText="first name"
            value={adminData.employeeFirstName}
            handleChange={handleChange}
          />
          <FormRow
            type="text"
            name="employeeLastName"
            labelText="last name"
            value={adminData.employeeLastName}
            handleChange={handleChange}
          />
        </>
      )}

      <FormRow
        type="email"
        name="email"
        value={adminData.email}
        handleChange={handleChange}
      />
      <FormRow
        type="password"
        name="password"
        value={adminData.password}
        handleChange={handleChange}
      />
      {/* consider isLoading on the button */}
      <button
        type="submit"
        className="w-full text-white bg-blue-300 border-transparent tracking-wide py-1 px-3 shadow capitalize inline-block hover:bg-blue-500 hover:shadow-lg"
        disabled={isLoading}
      >
        {isLoading ? "loading..." : "submit"}
      </button>
    </form>
  );
};

export default AdminRegister;
