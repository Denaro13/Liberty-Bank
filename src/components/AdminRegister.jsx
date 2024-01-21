import React, { useEffect, useState } from "react";
import FormRow from "./FormRow";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { loginAdmin, registerAdmin } from "../features/admin/adminSlice";
import { useNavigate } from "react-router-dom";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  phoneNumber: "",
  address: "",
  role: "ADMIN",
};

const AdminRegister = ({ isMember }) => {
  const [adminData, setAdminData] = useState(initialState);
  const { admin, isLoading } = useSelector((store) => store.admin);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (admin) {
      setTimeout(() => {
        navigate("/admin");
      }, 2000);
    }
  }, [admin]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAdminData({ ...adminData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, firstName, lastName, role, phoneNumber, address } =
      adminData;
    if (
      !email ||
      !password ||
      (!isMember && (!firstName || !lastName || !phoneNumber || !address))
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
        firstName,
        lastName,
        email,
        password,
        phoneNumber,
        address,
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
            name="firstName"
            labelText="first name"
            value={adminData.firstName}
            style="capitalize"
            handleChange={handleChange}
          />
          <FormRow
            type="text"
            name="lastName"
            labelText="last name"
            value={adminData.lastName}
            style="capitalize"
            handleChange={handleChange}
          />
          <FormRow
            type="text"
            name="phoneNumber"
            labelText="phone number"
            value={adminData.phoneNumber}
            handleChange={handleChange}
          />
          <FormRow
            type="text"
            name="address"
            value={adminData.address}
            style="capitalize"
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
