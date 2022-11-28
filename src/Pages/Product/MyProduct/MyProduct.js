import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const MyProduct = () => {
  const { user } = useContext(AuthContext);
  const {} = useQuery({ queryKey: ["phones"], queryFn: () => fetch });
  return (
    <div>
      <h1 className="text-3xl text-center">My all product</h1>
    </div>
  );
};

export default MyProduct;
