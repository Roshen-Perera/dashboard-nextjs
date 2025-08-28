import { Plus } from 'lucide-react';
import React from 'react'
import MedicalCondition from './MedicalCondition';

const MedicalConditions = () => {
  return (
    <div>
      <div className="w-[520px] h-[295px] border-1 rounded-sm p-2">
        <div className="flex flex-row justify-between p-2">
          <div className="text-xl">Medical Conditions</div>
          <div className="flex items-center text-green-500 gap-2">
            <p className="text-base">Add New</p>
            <Plus />
          </div>
        </div>
        <div className='-mt-2'>
          <MedicalCondition />
          <MedicalCondition />
          <MedicalCondition />
        </div>
      </div>
    </div>
  );
}

export default MedicalConditions
