import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);
  const url = "http://localhost:3012";
  const navigate = useNavigate();

  const getUsers = async () => {
    try {
      const tokenStorage = localStorage.access_token;
      const response = await axios({
        method: "GET",
        url: `${url}/api/users`,
        headers: {
          access_token: tokenStorage,
        },
      });
      setUsers(response.data);
      // console.log(response.data);
    } catch (error) {
      console.log(error.response.data);
      console.log(localStorage.access_token);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    navigate("/login");
  };

  useEffect(() => {
    const access_token = localStorage.getItem("access_token");
    if (!access_token) {
      navigate("/login");
    } else {
      getUsers();
    }
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={getUsers}>Get User</button>
      <button onClick={handleLogout}>Logout</button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <div>ID: {user.id}</div> 
            <div>Username: {user.username}</div>
            <div>Role: {user.Role.name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
