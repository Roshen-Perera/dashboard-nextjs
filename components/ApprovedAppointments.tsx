import React from 'react'

const ApprovedAppointments = () => {
    const approvedData = [
      { id: 1, name: "John Doe", status: "Approved" },
      { id: 2, name: "Jane Smith", status: "Approved" },
    ];
  return (
    <>
      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Patient</th>
            <th className="p-2 border">Date & Time</th>
            <th className="p-2 border">Type</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border"></th>
          </tr>
        </thead>
        <tbody>
          {approvedData.map((row) => (
            <tr key={row.id}>
              <td className="p-2 border">{row.id}</td>
              <td className="p-2 border">{row.name}</td>
              <td className="p-2 border">{row.name}</td>
              <td className="p-2 border">{row.name}</td>
              <td className="p-2 border">{row.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ApprovedAppointments
