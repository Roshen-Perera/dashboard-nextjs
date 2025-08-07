
import React from "react";

const SpecialtyAreas = () => {
  const SpecialtyAreas = [
    "Heart failure",
    "Preventive Cardiology",
    "Echocardiography",
    "Cardiac Imaging",
    "Electrophysiology",
  ];
  return (
    <div className="w-[558px] h-[180px] bg-[#f5fffa] pt-4">
      <div>
        <p className="text-xl mb-3">Specialty Areas</p>
        <div className="flex flex-wrap gap-3">
          {Object.entries(SpecialtyAreas).map(([key, value]) => (
            <div className="bg-[#0099665b] p-1.5 rounded-xl" key={key}>
              <p className="text-xs">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialtyAreas;
