"use client";

import React, { useState } from "react";
import { Download } from "lucide-react";
import ApprovedAppointments from "./ApprovedAppointments";
import NotApprovedAppointments from "./NotApprovedAppointments";
import { DatePicker } from "./DatePicker";
import StatusMenu from "./StatusMenu";

const FilterHeader = ({
  leftButtonText = "Approved",
  rightButtonText = "Not Approved",
  defaultActive = "Approved",
}) => {
  const [activeStatus, setActiveStatus] = useState(defaultActive);

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
            className={`px-4 py-3 text-base transition-all duration-200 relative border-b-2 ${
              activeStatus === leftButtonText
                ? "border-green-600 text-gray-900"
                : "border-transparent text-gray-900"
            }`}
          >
            {leftButtonText}
          </button>

          <button
            onClick={() => setActiveStatus(rightButtonText)}
            className={`px-4 py-3 text-base transition-all duration-200 relative border-b-2 ${
              activeStatus === rightButtonText
                ? "border-green-600 text-gray-900"
                : "border-transparent text-gray-900"
            }`}
          >
            {rightButtonText}
          </button>
        </div>

        {/* Right side - Controls */}
        <div className="flex items-center gap-3">
          {/* Status Dropdown */}
          <StatusMenu />
          <DatePicker />
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
        {activeStatus === "Approved" && <ApprovedAppointments />}

        {/* Show Not Approved Table */}
        {activeStatus === "Not Approved" && <NotApprovedAppointments />}
      </div>
    </>
  );
};

export default FilterHeader;
