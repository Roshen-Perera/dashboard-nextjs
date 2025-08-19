"use client";

import React, { useState } from "react";
import { Download } from "lucide-react";

const FilterHeader = ({
  leftButtonText = "Approved",
  rightButtonText = "Not Approved",
  defaultActive = "Approved",
}) => {
  const [activeStatus, setActiveStatus] = useState(defaultActive);
  // Example data
  const approvedData = [
    { id: 1, name: "John Doe", status: "Approved" },
    { id: 2, name: "Jane Smith", status: "Approved" },
  ];

  const notApprovedData = [
    { id: 3, name: "Mark Lee", status: "Not Approved" },
    { id: 4, name: "Sara Kim", status: "Not Approved" },
  ];

  const handleExport = () => {
    console.log("Exporting data...");
  };

  return (
    <>
      <div className="flex items-center justify-between px-4 py-3">
        {/* Left side - Status toggle */}
        <div className="flex items-center relative">
          <button
            onClick={() => setActiveStatus(leftButtonText)}
            className={`px-4 py-3 text-base transition-all duration-200 relative ${
              activeStatus === leftButtonText
                ? "text-gray-900"
                : "text-gray-900"
            }`}
          >
            {leftButtonText}
          </button>
          <button
            onClick={() => setActiveStatus(rightButtonText)}
            className={`px-4 py-3 text-base transition-all duration-200 relative ${
              activeStatus === rightButtonText
                ? "text-gray-900"
                : "text-gray-900"
            }`}
          >
            {rightButtonText}
          </button>
          {/* Sliding horizontal line indicator */}
          <div
            className={`absolute bottom-0 h-0.5 bg-green-500 transition-all duration-300 ease-in-out ${
              activeStatus === leftButtonText ? "left-0" : "left-1/2"
            }`}
            style={{
              width: "50%",
            }}
          />
        </div>

        {/* Right side - Controls */}
        <div className="flex items-center gap-3">
          {/* Status Dropdown */}
          <div className="relative"></div>
          <button
            onClick={handleExport}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-1 transition-colors"
          >
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>
      <div>
        {activeStatus === "Approved" && (
          <table className="w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border">ID</th>
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Status</th>
              </tr>
            </thead>
            <tbody>
              {approvedData.map((row) => (
                <tr key={row.id}>
                  <td className="p-2 border">{row.id}</td>
                  <td className="p-2 border">{row.name}</td>
                  <td className="p-2 border">{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {/* Show Not Approved Table */}
        {activeStatus === "Not Approved" && (
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
        )}
      </div>
    </>
  );
};

export default FilterHeader;
