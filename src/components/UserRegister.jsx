import React, { useEffect, useState } from "react";
import FormRow from "./FormRow";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "../features/userSlice";
import { useNavigate } from "react-router-dom";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  phoneNumber: "",
  address: "",
  role: "USER",
};

const UserRegister = ({ isMember }) => {
  const [userData, setUserData] = useState(initialState);
  const { user, isLoading } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate(`/user`, { replace: true });
      }, 2000);
    }
  }, [user]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, firstName, lastName, phoneNumber, address, role } =
      userData;
    if (
      !email ||
      !password ||
      (!isMember && (!firstName || !lastName || !phoneNumber || !address))
    ) {
      toast.error("Please fill out all fields!");
      return;
    }
    if (isMember) {
      dispatch(loginUser({ email, password }));
      return;
    }
    dispatch(
      registerUser({
        firstName,
        lastName,
        email,
        phoneNumber,
        password,
        address,
        role,
      })
    );
    setUserData(initialState);
  };

  return (
    <form onSubmit={handleSubmit}>
      {!isMember && (
        <>
          <FormRow
            type="text"
            name="firstName"
            labelText="first name"
            value={userData.firstName}
            style="capitalize"
            handleChange={handleChange}
          />
          <FormRow
            type="text"
            name="lastName"
            labelText="last name"
            value={userData.lastName}
            style="capitalize"
            handleChange={handleChange}
          />
          <FormRow
            type="text"
            name="phoneNumber"
            labelText="phone number"
            value={userData.phoneNumber}
            handleChange={handleChange}
          />
          <FormRow
            type="text"
            name="address"
            labelText="address"
            value={userData.address}
            style="capitalize"
            handleChange={handleChange}
          />
        </>
      )}

      <FormRow
        type="email"
        name="email"
        value={userData.email}
        handleChange={handleChange}
      />
      <FormRow
        type="password"
        name="password"
        value={userData.password}
        // minLength="6"
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

export default UserRegister;
