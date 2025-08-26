import { Plus } from 'lucide-react';
import React from 'react'

const SurgerySchedule = () => {
  return (
    <div>
      <div className="w-[1060px] h-[330px] border-1 rounded-sm p-2">
        <div className="flex flex-row justify-between p-2">
          <div className="text-xl">Surgeries</div>
          <div className="flex items-center gap-2">
            <Plus/>
            <p className="text-base text-green-500">Schedule Surgery</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SurgerySchedule
