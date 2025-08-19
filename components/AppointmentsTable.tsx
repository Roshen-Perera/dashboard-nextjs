"use client";
import React, { useState, useMemo } from "react";
import FilterHeader from "./FilterHeader";

const ParentComponent = () => {
  const [activeStatus, setActiveStatus] = useState("Approved");

  const data = useMemo(
    () => [
      { id: 1, name: "Item A", status: "Approved" },
      { id: 2, name: "Item B", status: "Not Approved" },
      { id: 3, name: "Item C", status: "Approved" },
    ],
    []
  );

  // Filter data when activeStatus changes
  const filteredData = useMemo(
    () => data.filter((item) => item.status === activeStatus),
    [data, activeStatus]
  );

  const handleExport = () => {
    console.log("Exporting:", filteredData);
    // here you can implement CSV/Excel export
  };

  return (
    <div>
      <FilterHeader onStatusChange={setActiveStatus} onExport={handleExport} />

      <div className="mt-4 space-y-2">
        {filteredData.map((item) => (
          <div key={item.id} className="p-2 border rounded bg-gray-50">
            {item.name} - {item.status}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParentComponent;
