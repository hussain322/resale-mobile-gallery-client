import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";

const AllSellers = () => {
  const [deletingSellers, setDeletingSellers] = useState(null);
  const closeModal = () => {
    setDeletingSellers(null);
  };

  const handleDeleteSeller = (seller) => {
    console.log(seller);
  };

  const { data: sellers = [] } = useQuery({
    queryKey: ["sellers"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/sellers");
      const data = await res.json();
      return data;
    },
  });
  return (
    <div>
      <h1 className="text-2xl font-semibold pt-8 pb-4">
        My Sellers : {sellers.length}
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
                <td>coming soon</td>
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
