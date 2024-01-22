import React, { useEffect, useState } from "react";
import { firstCustomFetch } from "../utils/axios";
import { useSelector } from "react-redux";
import axios from "axios";
import UserInfo from "./UserInfo";

const UsersInfo = () => {
  const [users, setUsers] = useState([]);
  const [roleFilter, setRoleFilter] = useState("All");
  //   const [filteredUsers, setFilteredUsers] = useState(users);
  const { admin } = useSelector((store) => store.admin);
  const token = admin.access_token;

  const getUsers = async () => {
    try {
      const resp = await axios.get("http://localhost:8090/employees", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      const data = resp.data.results.content;
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleRoleFilterChange = (event) => {
    const newRoleFilter = event.target.value;
    setRoleFilter(newRoleFilter);
  };

  const filteredUsers = users.filter(
    (user) => roleFilter === "All" || user.role === roleFilter
  );

  return (
    <div className="mt-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="capitalize text-2xl">users records</h2>
        <div>
          <label htmlFor="roleFilter" className="text-2xl capitalize">
            filter users
          </label>
          <select
            id="roleFilter"
            value={roleFilter}
            onChange={handleRoleFilterChange}
            className="px-2 py-1 ml-3 text-xl bg-blue-400 text-white rounded"
          >
            <option value="All">All</option>
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
          </select>
        </div>
      </div>
      <div className="grid mx-auto gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredUsers.map((user) => {
          return <UserInfo key={user.id} {...user} />;
        })}
      </div>
    </div>
  );
};

export default UsersInfo;
