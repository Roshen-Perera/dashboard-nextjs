import { Plus } from 'lucide-react';
import React from 'react'

const SurgerySchedule = () => {
  return (
    <div>
      <div className="w-[1060px] h-[330px] border-1 rounded-sm p-2 items-center">
        <div className="flex flex-row justify-between p-2">
          <div className="text-xl">Surgeries</div>
          <div className="flex items-center text-green-500 gap-2">
            <p className="text-base">Schedule Surgery</p>
            <Plus />
          </div>
        </div>
        <div className="w-[1000px] h-[247px] border-1 mt-4 rounded-sm p-8 items-center justify-center mx-auto">
          <div className="pt-4 pb-4 pl-6 pr-7 grid grid-cols-5 gap-4 bg-gray-200 text-base rounded-t-sm">
            <div className="ml-4">Patient</div>
            <div className="ml-2">Date & Time</div>
            <div>Type</div>
            <div className="ml-2">Status</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SurgerySchedule
