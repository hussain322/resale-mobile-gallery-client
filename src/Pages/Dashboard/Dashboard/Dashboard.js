import React, { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1 className="text-2xl font-semibold pt-8 pb-4">Dashboard</h1>
      <hr className="bg-black h-[2px]" />
      <div className="grid grid-cols-1 mt-8">
        <div>
          {user?.photoURL ? (
            <img src={user.photoURL} alt="" />
          ) : (
            <div>
              <FaUser className="text-8xl" />
            </div>
          )}
        </div>
        <div>
          <h1 className="text-3xl">Welcome, {user.displayName}</h1>
          <h3 className="text-xl">{user.email}</h3>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
