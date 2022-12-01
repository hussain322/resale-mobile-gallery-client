import { useQuery } from "@tanstack/react-query";
import React from "react";

const AllBuyers = () => {
  const { data: buyers = [] } = useQuery({
    queryKey: ["buyers"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/buyers");
      const data = await res.json();
      return data;
    },
  });
  return (
    <div>
      <h1 className="text-2xl font-semibold pt-8 pb-4">
        All buyers : {buyers.length}
      </h1>
      <hr className="bg-black h-[2px]" />

      {/* Table  */}
      <div className="overflow-x-auto my-6">
        <table className="table w-full">
          <thead>
            <tr>
              <th>SL</th>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {buyers.map((seller, i) => (
              <tr key={seller._id}>
                <th>{i + 1}</th>
                <td>{seller.name}</td>
                <td>{seller.email}</td>
                <td>coming soon</td>
                <td>
                  <button className="btn btn-xs btn-error text-white font-semibold">
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBuyers;
