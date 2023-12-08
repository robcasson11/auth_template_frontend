import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import useAuth from "../hooks/useAuth";

const GET_USER_URL = "/user";

const Users = () => {
  const [users, setUsers] = useState({});
  const [errMsg, setErrMsg] = useState();

  const { auth } = useAuth();
  const token = auth.accessToken;

  useEffect(() => {
    const getUsers = async () => {
      try {
        const config = {
          headers: { Authorization: `Bearer ${token}` },
        };

        const response = await axios.get(GET_USER_URL, config);
        setUsers(response.data);
      } catch (err) {
        if (!err?.response) {
          setErrMsg("No response from database");
        }
      }
    };
    getUsers();
  }, [token]);
  return (
    <>
      {users?.length ? (
        <ul>
          {users.map((user, i) => (
            <li key={i}>{user?.username}</li>
          ))}
        </ul>
      ) : (
        <p>{errMsg}</p>
      )}
    </>
  );
};

export default Users;
