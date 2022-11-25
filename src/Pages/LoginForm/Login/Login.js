import Lottie from "lottie-react";
import React from "react";
import { Link } from "react-router-dom";
import loginAnimation from "../../../assets/login-ani.json";
import useTitle from "../../../Hooks/useTitle";
import "./Login.css";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  useTitle("Login");
  return (
    <div className="login-container pt-2 pb-40">
      <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2">
        <div className="hidden lg:block">
          <Lottie animationData={loginAnimation} loop={true} />
        </div>
        <div className="md:w-3/4 w-full mx-auto mt-4 ">
          <div className="mt-2 rounded-lg shadow-lg p-10 bg-purple-300">
            <h1 className="text-4xl text-primary font-bold mt-4 text-center">
              Welcome
            </h1>
            {/* Login form  */}
            <form>
              <div className="">
                {/* Email Field  */}
                <div className="form-control py-2">
                  <label className="label">
                    <span className="label-text text-md font-semibold text-gray-700">
                      Your Email
                    </span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="info@site.com"
                    className="input input-bordered"
                    required
                  />
                </div>

                {/* Password field  */}
                <div className="form-control py-2">
                  <label className="label">
                    <span className="label-text text-md font-semibold text-gray-700">
                      Your Password
                    </span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="********"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="flex justify-between py-2">
                  <div className="flex">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-accent mr-2"
                    />
                    <p className="text-sm md:text-md">Remember Me</p>
                  </div>
                  <div>
                    <Link to="" className="text-sm md:text-md">
                      Forget Password?
                    </Link>
                  </div>
                </div>

                {/* Login button  */}
                <div>
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-800 hover:to-blue-700   py-3 w-full text-white font-semibold mt-4 rounded"
                  >
                    LOGIN
                  </button>
                </div>
                <div className="pt-4 text-right">
                  <p>
                    Not registered?{" "}
                    <Link to="/register" className="text-primary">
                      Create account
                    </Link>
                  </p>
                </div>
                <div className="divider">OR</div>
              </div>
            </form>
            {/* sign in with social platform */}
            <div className="text-center my-4">
              <button className="px-6 btn btn-outline btn-primary">
                <FaGoogle className="text-2xl mr-2" />
                continue with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
