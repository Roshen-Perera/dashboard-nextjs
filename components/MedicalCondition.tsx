import React from 'react'

const MedicalCondition = () => {
  return (
    <div>
      <div className="flex flex-row justify-between p-3 border-1 rounded-sm mt-2">
        <div className="">
          <p className="text-xl -mt-1 font-normal text-gray-800">
            Type 2 Diabetes
          </p>
          <p className="text-sm mt-1 font-normal text-gray-500">
            Diagnosed: jan 2020
          </p>
        </div>
        <div>
          <span className="bg-[#0099665b] px-3 py-1 rounded-xl text-xs font-normal">
            Monitored
          </span>
        </div>
      </div>
    </div>
  );
}

export default MedicalCondition
