import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(
        "https://resale-market-server-roan.vercel.app/users"
      );
      const data = await res.json();
      return data;
    },
  });

  const handleMakeAdmin = (id) => {
    fetch(`https://resale-market-server-roan.vercel.app/users/admin/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Make Admin Successful");
          refetch();
        }
      });
  };

  const handleDeleteUser = (user) => {
    fetch(`https://resale-market-server-roan.vercel.app/sellers/${user._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success(`User ${user.name} deleted successfully`);
          refetch();
        }
      });
  };
  return (
    <div>
      <h3 className="text-2xl font-semibold pt-8 pb-4">
        All Users : {users.length}
      </h3>
      <hr className="bg-black h-[2px]" />

      {/* Table  */}

      <div className="overflow-x-auto w-full my-6">
        <table className="table w-full">
          <thead>
            <tr>
              <th>SL</th>
              <th>Name</th>
              <th>Category</th>
              <th>Make Admin</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="/tailwind-css-component-profile-2@56w.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.name}</div>
                    </div>
                  </div>
                </td>
                <td>{user.category}</td>
                <td>
                  {user?.role !== "admin" && (
                    <button
                      onClick={() => handleMakeAdmin(user._id)}
                      className="btn btn-info btn-xs"
                    >
                      Make Admin
                    </button>
                  )}
                </td>
                <th>
                  <label
                    onClick={() => handleDeleteUser(user)}
                    htmlFor="my-modal"
                    className="btn btn-xs btn-error text-white font-semibold"
                  >
                    X
                  </label>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
