import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllBuyers = () => {
  const { data: buyers = [], refetch } = useQuery({
    queryKey: ["buyers"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/buyers");
      const data = await res.json();
      return data;
    },
  });

  const handleDeleteSeller = (buyer) => {
    console.log(buyer);
    fetch(`http://localhost:5000/sellers/${buyer._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success(`Seller ${buyer.name} deleted successfully`);
          refetch();
        }

        console.log(data);
      });
  };
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
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {buyers.map((buyer, i) => (
              <tr key={buyer._id}>
                <th>{i + 1}</th>
                <td>{buyer.name}</td>
                <td>{buyer.email}</td>
                <td>
                  <button
                    onClick={() => handleDeleteSeller(buyer)}
                    className="btn btn-xs btn-error text-white font-semibold"
                  >
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
