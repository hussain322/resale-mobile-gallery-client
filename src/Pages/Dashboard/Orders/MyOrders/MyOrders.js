import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Contexts/AuthProvider/AuthProvider";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const url = `https://resale-market-server-roan.vercel.app/bookings?email=${user?.email}`;

  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });
  return (
    <div>
      <h1 className="text-2xl font-semibold pt-8 pb-4">
        My Orders : {bookings.length}
      </h1>
      <hr className="bg-black h-[2px]" />

      {/* Table  */}
      <div className="overflow-x-auto w-full my-6">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>SL NO</th>
              <th>Product Name</th>
              <th>Customer Name</th>
              <th>Price</th>
              <th>Payment Status</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {bookings.map((book, i) => (
              <tr key={book._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={book.img}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{book.productName}</div>
                      <span className="badge badge-ghost badge-sm">
                        {book.location}
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  {book.customerName}
                  <br />
                </td>
                <td>{book.price}</td>
                <th>
                  {book?.price && !book?.paid && (
                    <Link to={`/dashboard/payment/${book._id}`}>
                      <button className="btn btn-info btn-sm text-white">
                        Pay
                      </button>
                    </Link>
                  )}
                  {book.price && book.paid && (
                    <span className="bg-success px-8 rounded-md py-2 text-white">
                      Paid
                    </span>
                  )}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
