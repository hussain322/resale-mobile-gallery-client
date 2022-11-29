import React from "react";
import { Link, useRouteError } from "react-router-dom";
import errorImg from "../../assets/404.jpg";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <section className="flex justify-center items-center h-screen p-16 ">
      <div className="max-w-md text-center">
        <div className="mb-8 font-extrabold text-9xl text-gray-600">
          <img src={errorImg} alt="" />
          {error && (
            <div>
              <h1 className="text-xl font-bold">{error.status}</h1>
              <p className="text-red-500 text-3xl">
                {error.statusText || error.message}
              </p>
            </div>
          )}
        </div>
        <p className="text-2xl font-semibold md:text-3xl mb-8">
          Sorry, we couldn't find this page.
        </p>
        <Link
          to="/"
          className="px-8 py-3 font-semibold rounded bg-blue-500 text-gray-200"
        >
          Back to homepage
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
