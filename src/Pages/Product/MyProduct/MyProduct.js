import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const MyProduct = () => {
  const { user } = useContext(AuthContext);
  const {} = useQuery({ queryKey: ["phones"], queryFn: () => fetch });
  return (
    <div>
      <h1 className="text-2xl font-semibold pt-8 pb-4">My Products</h1>
      <hr className="bg-black h-[2px]" />
    </div>
  );
};

export default MyProduct;
