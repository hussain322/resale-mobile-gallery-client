import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";

const AllSellers = () => {
  const [deletingSellers, setDeletingSellers] = useState(null);
  const closeModal = () => {
    setDeletingSellers(null);
  };

  const { data: sellers = [], refetch } = useQuery({
    queryKey: ["sellers"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/sellers");
      const data = await res.json();
      return data;
    },
  });

  const handleDeleteSeller = (seller) => {
    console.log(seller);
    fetch(`http://localhost:5000/sellers/${seller._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success(`Seller ${seller.name} deleted successfully`);
          refetch();
        }

        console.log(data);
      });
  };

  const handleVerifySeller = (id) => {
    fetch(`http://localhost:5000/users/sellerVerify/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Seller Verified Successfully");
          refetch();
        }
      });
  };
  return (
    <div>
      <h1 className="text-2xl font-semibold pt-8 pb-4">
        All Sellers : {sellers.length}
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
            {sellers.map((seller, i) => (
              <tr key={seller._id}>
                <th>{i + 1}</th>
                <td>{seller.name}</td>
                <td>{seller.email}</td>
                <td>
                  {seller?.status ? (
                    <button className="btn btn-accent btn-xs">
                      Seller Verified
                    </button>
                  ) : (
                    <button
                      onClick={() => handleVerifySeller(seller._id)}
                      className="btn btn-xs"
                    >
                      Click to verify seller
                    </button>
                  )}
                </td>
                <td>
                  <label
                    onClick={() => setDeletingSellers(seller)}
                    htmlFor="my-modal"
                    className="btn btn-xs btn-error text-white font-semibold"
                  >
                    X
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deletingSellers && (
        <ConfirmationModal
          title={`Are you sure want to delete ${deletingSellers.name}?`}
          message={`If you delete ${deletingSellers.name} It can't be undone`}
          closeModal={closeModal}
          successDelete={handleDeleteSeller}
          modalData={deletingSellers}
          successButtonName={`Delete`}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default AllSellers;
