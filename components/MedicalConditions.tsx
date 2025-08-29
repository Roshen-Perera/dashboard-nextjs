
import React from 'react'
import MedicalCondition from './MedicalCondition';
import { AddMedicalCondition } from './AddMedicalCondition';

const MedicalConditions = () => {
  return (
    <div>
      <div className="w-[520px] h-[295px] border-1 rounded-sm p-2">
        <div className="flex flex-row justify-between p-2">
          <div className="text-xl">Medical Conditions</div>
          <AddMedicalCondition/>
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
