import { Edit03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import React from "react";

const CurrentVitals = () => {
  return (
    <div>
      <div className="w-[520px] h-[252px] border-1 rounded-sm p-1">
        <div className="flex flex-row justify-between p-2">
          <div className="text-xl">Current Vitals</div>
          <div className="flex items-center gap-2">
            <HugeiconsIcon
              icon={Edit03Icon}
              className="w-4 h-4 text-green-500"
            />
            <p className="text-sm text-green-500">Edit</p>
          </div>
        </div>
        <div>
          <div className="flex flex-row justify-between p-2">
            <div className="text-base text-gray-500">Blood Pressure</div>
            <div className="text-base">120/80 mmHg</div>
          </div>
          <div className="flex flex-row justify-between p-2">
            <div className="text-base text-gray-500">Heart Rate</div>
            <div className="text-base">72 bpm</div>
          </div>
          <div className="flex flex-row justify-between p-2">
            <div className="text-base text-gray-500">Temperature</div>
            <div className="text-base">98.6°F</div>
          </div>
          <div className="flex flex-row justify-between p-2">
            <div className="text-base text-gray-500">Oxygen Saturation</div>
            <div className="text-base">98%</div>
          </div>
          <div className="flex flex-row justify-between p-2">
            <div className="text-base text-gray-500">Blood Sugar</div>
            <div className="text-base">20mg/dL</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentVitals;
