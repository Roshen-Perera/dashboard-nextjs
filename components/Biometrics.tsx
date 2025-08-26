import { Edit03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import React from "react";

const Biometrics = () => {
  return (
    <div>
      <div className="w-[520px] h-[252px] border-1 rounded-sm p-1">
        <div className="flex flex-row justify-between p-2">
          <div className="text-xl">Biometrics</div>
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
            <div className="text-base text-gray-500">View</div>
            <div className="text-base">145 lbs (65.8 kg)</div>
          </div>
          <div className="flex flex-row justify-between p-2">
            <div className="text-base text-gray-500">Height</div>
            <div className="text-base">5’7” (170 cm)</div>
          </div>
          <div className="flex flex-row justify-between p-2">
            <div className="text-base text-gray-500">BMI (calc.)</div>
            <div className="text-base">22.7</div>
          </div>
          <div className="flex flex-row justify-between p-2">
            <div className="text-base text-gray-500">MUAC</div>
            <div className="text-base">12.5 cm</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biometrics;
