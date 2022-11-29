import React, { useContext, useState } from "react";
import Lottie from "lottie-react";
import loginAnimation from "../../../assets/login-ani.json";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import useTitle from "../../../Hooks/useTitle";
import { GoogleAuthProvider } from "firebase/auth";
import useToken from "../../../Hooks/useToken";

const Register = () => {
  useTitle("Register");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [error, setError] = useState("");
  const { createUser, updateUser, googleLogIn } = useContext(AuthContext);
  const location = useLocation();

  const googleProvider = new GoogleAuthProvider();

  const from = location.state?.from?.pathname || "/";

  //verify jwt token
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [token] = useToken(createdUserEmail);
  const navigate = useNavigate();

  if (token) {
    navigate(from, { replace: true });
  }

  const handleLogin = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        setError("");
        const user = result.user;
        console.log(user);
        toast.success("Account created successfully");

        const userInfo = {
          displayName: data.name,
          category: data.category,
        };

        updateUser(userInfo)
          .then(() => {
            saveUserInfo(data.email, data.name, data.category);
          })
          .catch((err) => console.error(err));
      })
      .catch((error) => {
        setError(error.code.slice(5));
      });
  };

  const saveUserInfo = (email, name, category) => {
    const user = { email, name, category };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCreatedUserEmail(email);
      });
  };

  //Google Login
  const handleGoogleLogin = () => {
    googleLogIn(googleProvider)
      .then((result) => {
        toast.success("Successfully Logged in!");
        navigate(from, { replace: true });
      })
      .catch((err) => toast.error(err.code.slice(5)));
  };

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
            <form onSubmit={handleSubmit(handleLogin)}>
              <div className="">
                {/* Name Field  */}
                <div className="form-control py-2">
                  <label className="label">
                    <span className="label-text text-md font-semibold text-gray-700">
                      Your Name
                    </span>
                  </label>
                  <input
                    {...register("name", {
                      required: "Name field is required",
                    })}
                    placeholder="Your Name"
                    className="input input-bordered"
                  />
                </div>
                {errors.name && (
                  <p className="text-red-500">{errors.name?.message}</p>
                )}

                {/* Select options */}
                <label className="label">
                  <span className="label-text text-md font-semibold text-gray-700">
                    Select One
                  </span>
                </label>
                <select
                  {...register("category", { required: true })}
                  className="select select-bordered w-full"
                >
                  <option value="Buyer">Buyer</option>
                  <option value="Seller">Seller</option>
                </select>
                {/* Email Field  */}
                <div className="form-control py-2">
                  <label className="label">
                    <span className="label-text text-md font-semibold text-gray-700">
                      Your Email
                    </span>
                  </label>
                  <input
                    {...register("email", {
                      required: "Email Field is required",
                    })}
                    type="email"
                    placeholder="info@site.com"
                    className="input input-bordered"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500">{errors.email?.message}</p>
                )}

                {/* Password field  */}
                <div className="form-control py-2">
                  <label className="label">
                    <span className="label-text text-md font-semibold text-gray-700">
                      Your Password
                    </span>
                  </label>
                  <input
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be 6 character or long",
                      },
                      pattern: {
                        value: /(?=.*?[A-Z])/,
                        message: "Must use one Uppercase",
                      },
                    })}
                    placeholder="********"
                    type="password"
                    className="input input-bordered"
                  />
                </div>
                {errors.password && (
                  <p className="text-red-500">{errors.password?.message}</p>
                )}

                <div className="flex justify-between py-2">
                  <div className="flex">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-accent mr-2"
                    />
                    <p className="text-sm md:text-md">
                      Accept Terms and Conditions
                    </p>
                  </div>
                </div>

                {/* Login button  */}
                <p className="text-red-500">{error}</p>
                <div>
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-800 hover:to-blue-700   py-3 w-full text-white font-semibold mt-4 rounded"
                  >
                    REGISTER
                  </button>
                </div>
                <div className="pt-4 text-right">
                  <p>
                    <Link to="/login" className="text-primary">
                      Already have an account?
                    </Link>
                  </p>
                </div>
                <div className="divider">OR</div>
              </div>
            </form>
            {/* sign in with social platform */}
            <div className="text-center my-4">
              <button
                onClick={handleGoogleLogin}
                className="px-6 btn btn-outline btn-primary"
              >
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

export default Register;
