import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    const url = "http://localhost:3012";

    // e.preventDefault();
    e.preventDefault(); 

    try {
      const result = await axios({
        method: "POST",
        url: `${url}/api/users/register`,
        data: {
          username,
          password,
        },
      });
      console.log(result);
      alert("Register Succes")
      navigate('/login')
    } catch (error) {
      // alert(error.response.data.message)
      
      if(error.response.data === 'Username already exists') {
        alert("Username telah terdaftar")
      }
      // console.log(error.response);
      console.log(error.response);
    }
  };

  return (
    <div className="px-5 py-5 p-lg-0">
      <div className="d-flex justify-content-center">
        <div className="col-12 col-md-9 col-lg-7 min-h-lg-screen d-flex flex-column justify-content-center py-lg-16 px-lg-20 position-relative">
          <div className="row">
            <div className="col-lg-10 col-md-9 col-xl-7 mx-auto">
              <div className="text-center mb-12">
                <span className="d-inline-block d-lg-block h1 mb-lg-6 me-3">
                  👋
                </span>
                <h1 className="ls-tight font-bolder h2">Welcome back!</h1>
                <p className="mt-2">Let's build someting great</p>
              </div>
              <form>
                <div className="mb-5">
                  <label className="form-label" htmlFor="username">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Your username address"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="mb-5">
                  <label className="form-label" htmlFor="password">
                    Password
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div>
                  <button
                    onClick={handleRegister}
                    type="submit"
                    className="btn btn-primary w-full"
                  >
                    Register
                  </button>
                </div>
              </form>
              <div className="row">
                <div className="col-sm-6"></div>
              </div>
              <div className="my-6">
                <small>already have an account?</small>
                <Link
                  to="/login"
                  className="text-warning text-sm font-semibold"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
