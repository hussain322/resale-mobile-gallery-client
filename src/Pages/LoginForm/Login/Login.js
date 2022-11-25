import Lottie from "lottie-react";
import React from "react";
import loginAnimation from "../../../assets/login-ani.json";
import "./Login.css";

const Login = () => {
  return (
    <div className="hero min-h-screen login-container">
      <div className="hero-content grid grid-cols-1 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <Lottie animationData={loginAnimation} loop={true} />
        </div>
        <div className="card w-3/4 lg:ml-40 ml-20 shadow-2xl bg-purple-300">
          <h1 className="text-3xl font-bold text-center py-6">Login Now</h1>
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered bg-transparent"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered bg-transparent"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
