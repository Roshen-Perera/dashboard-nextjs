import React from 'react'

const NotApprovedAppointments = () => {
  

  const notApprovedData = [
    { id: 3, name: "Mark Lee", status: "Not Approved" },
    { id: 4, name: "Sara Kim", status: "Not Approved" },
  ];
  return (
    <>
      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Status</th>
          </tr>
        </thead>
        <tbody>
          {notApprovedData.map((row) => (
            <tr key={row.id}>
              <td className="p-2 border">{row.id}</td>
              <td className="p-2 border">{row.name}</td>
              <td className="p-2 border">{row.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default NotApprovedAppointments
