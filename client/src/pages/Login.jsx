import React,{useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


const Login = () => {

  const url = "http://localhost:3012"

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginUser = async () => {
    try {
      const response = await axios({
        method: "POST",
        url: `${url}/api/users/login`,
        data: {
          username,
          password
        }
      })
      const access_token = response.data.access_token
      localStorage.setItem("access_token", access_token)

      console.log(access_token)
      navigate("/home")

    } catch (error) {
      // alert(error.response.data.message)
      console.error(error.data)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser()
  }

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
                  <input onChange={(e) => setUsername(e.target.value )}
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Your username address"
                  />
                </div>
                <div className="mb-5">
                  <label className="form-label" htmlFor="password">
                    Password
                  </label>
                  <input onChange={(e) => setPassword(e.target.value )}
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    autoComplete="current-password"
                  />
                </div>
                <div>
                  <button onClick={handleSubmit} type="submit" className="btn btn-primary w-full">
                    Log in
                  </button>
                </div>
              </form>
              <div className="row">
                <div className="col-sm-6"></div>
              </div>
              <div className="my-6">
                <small>Don't have an account?</small>
                <Link
                  to="/register"
                  className="text-warning text-sm font-semibold"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
