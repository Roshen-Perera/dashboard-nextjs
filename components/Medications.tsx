import { Plus } from "lucide-react";
import React from "react";
import { AddMedications } from "./AddMedications";

const Medications = () => {
  return (
    <div>
      <div className="w-[1060px] border-1 rounded-sm p-2 items-center">
        <div className="flex flex-row justify-between p-2">
          <div className="text-xl">Medications</div>
          <AddMedications />
        </div>
        <div className="flex flex-row justify-around">
          <div className="w-[240px] border-1 rounded-sm">
            <div className="flex flex-row justify-between p-2">
              <div className="">
                <p className="text-xl -mt-1 font-normal text-gray-800">Propranolol</p>
                <p className="text-sm mt-2 font-normal text-gray-500">500mg</p>
                <p className="text-sm mt-2 font-normal text-gray-500">2x daily (day, night)</p>
              </div>
              <div>
                <span className="bg-[#0099665b] px-3 py-1 rounded-xl text-xs font-normal">
                  Finished
                </span>
              </div>
            </div>
          </div>
          <div className="w-[240px] border-1 rounded-sm">
            <div className="flex flex-row justify-between p-2">
              <div className="">
                <p className="text-xl -mt-1 font-normal text-gray-800">Propranolol</p>
                <p className="text-sm mt-2 font-normal text-gray-500">500mg</p>
                <p className="text-sm mt-2 font-normal text-gray-500">2x daily (day, night)</p>
              </div>
              <div>
                <span className="bg-[#0099665b] px-3 py-1 rounded-xl text-xs font-normal">
                  Finished
                </span>
              </div>
            </div>
          </div>
          <div className="w-[240px] border-1 rounded-sm">
            <div className="flex flex-row justify-between p-2">
              <div className="">
                <p className="text-xl -mt-1 font-normal text-gray-800">Propranolol</p>
                <p className="text-sm mt-2 font-normal text-gray-500">500mg</p>
                <p className="text-sm mt-2 font-normal text-gray-500">2x daily (day, night)</p>
              </div>
              <div>
                <span className="bg-[#0099665b] px-3 py-1 rounded-xl text-xs font-normal">
                  Finished
                </span>
              </div>
            </div>
          </div>
          <div className="w-[240px] border-1 rounded-sm">
            <div className="flex flex-row justify-between p-2">
              <div className="">
                <p className="text-xl -mt-1 font-normal text-gray-800">Propranolol</p>
                <p className="text-sm mt-2 font-normal text-gray-500">500mg</p>
                <p className="text-sm mt-2 font-normal text-gray-500">2x daily (day, night)</p>
              </div>
              <div>
                <span className="bg-[#0099665b] px-3 py-1 rounded-xl text-xs font-normal">
                  Finished
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Medications;
