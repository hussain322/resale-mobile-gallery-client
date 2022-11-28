import { async } from "@firebase/util";
import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../../Contexts/AuthProvider/AuthProvider";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });
  console.log(bookings);
  return (
    <div>
      <h1 className="text-2xl font-semibold py-10">
        My Orders : {bookings.length}
      </h1>

      {/* Table  */}
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>SL NO</th>
              <th>Product Name</th>
              <th>Customer Name</th>
              <th>Price</th>
              <th></th>
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
                  <button className="btn btn-ghost btn-xs">details</button>
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
