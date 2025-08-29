import React from 'react'

const LastCheckedPatients = () => {
  return (
    <div>
      <div className="grid grid-cols-4 bg-gray-200 text-lg font-normal p-4 rounded-t-sm">
        <div className="whitespace-nowrap">Patient Name</div>
        <div className="whitespace-nowrap -ml-4">Patient ID</div>
        <div className="whitespace-nowrap ml-6">Last Visit</div>
        <div className="whitespace-nowrap">Visit Reason</div>
      </div>
    </div>
  );
}

export default LastCheckedPatients
