import React from 'react'

const UsersTable = ({users}) => {
    return (
      <table className="table-auto text-left ">
        <thead className="bg-green-700 flex text-white ">
          <tr className="flex  mb-4">
            <th className="px-4 py-2 w-1/4 text-center">User ID</th>
            <th className="px-4 py-2 w-1/4 ">Name</th>
            <th className="px-4 py-2 w-1/4 ">Email Address</th>
            <th className="px-4 py-2 w-1/4 ">Phone</th>
            <th className="px-4 py-2 w-1/4 ">Street Address</th>
          </tr>
        </thead>
        {/* Remove the nasty inline CSS fixed height on production and replace it with a CSS class — this is just for demonstration purposes! */}
        <tbody className="bg-grey-light flex flex-col items-center justify-between overflow-y-scroll ">
          {users &&
            users.map((user) => {
              return (
                <tr className="flex  mb-2" key={user.id}>
                  <td className="p-2 w-1/4 text-center">{user.id}</td>
                  <td className="p-2 w-1/4 ">{user.name}</td>
                  <td className="p-2 w-1/4 ">{user.email}</td>
                  <td className="p-2 w-1/4 ">{user.phone}</td>
                  <td className="p-2 w-1/4 ">{user.address.street}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    );
}

export default UsersTable
