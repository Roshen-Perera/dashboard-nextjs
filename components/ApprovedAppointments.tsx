import React from 'react'

const ApprovedAppointments = () => {
    const approvedData = [
      { id: 1, name: "John Doe", status: "Approved" },
      { id: 2, name: "Jane Smith", status: "Approved" },
    ];
  return (
    <>
      <table className="w-full border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border font-semibold">Patient</th>
            <th className="p-2 border font-semibold">Date & Time</th>
            <th className="p-2 border font-semibold">Type</th>
            <th className="p-2 border font-semibold">Status</th>
            <th className="p-2 border font-semibold"></th>
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
