import { Plus } from 'lucide-react';
import React from 'react'

const MedicalConditions = () => {
  return (
    <div>
      <div className="w-[520px] h-[285px] border-1 rounded-sm p-2">
        <div className="flex flex-row justify-between p-2">
          <div className="text-xl">Medical Conditions</div>
          <div className="flex items-center text-green-500 gap-2">
            <p className="text-base">Add New</p>
            <Plus />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MedicalConditions
