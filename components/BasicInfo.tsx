import React from 'react'
import { Card } from './ui/card';

const BasicInfo = () => {
  return (
    <Card className="w-[332px] h-[235px] bg-[#f5fffa] p-4">
      <div className="ml-3 flex flex-col">
        <p className="text-xl mb-3">Basic Information</p>
        <div className='flex flex-col gap-2'>
          <div className="flex flex-col">
            <p className="text-base text-gray-500">Department</p>
            <p className="text-base">Cardiology</p>
          </div>
          <div className="flex flex-col">
            <p className="text-base text-gray-500">Qualifications</p>
            <p className="text-base">MBBS, MD</p>
          </div>
          <div className="flex flex-col">
            <p className="text-base text-gray-500">Languages</p>
            <p className="text-base">English, Spanish</p>
          </div>
        </div>
      </div>
    </Card>
  );
};
export default BasicInfo;
