import React from 'react'
import { Card } from './ui/card';

const LicenseInfo = () => {
  return (
    <Card className="w-[332px] h-[235px] bg-[#f5fffa] p-4">
      <div className="ml-3 flex flex-col">
        <p className="text-xl mb-3">License Information</p>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col">
            <p className="text-base text-gray-500">License Number</p>
            <p className="text-base">MD123456</p>
          </div>
          <div className="flex flex-col">
            <p className="text-base text-gray-500">Valid Through</p>
            <p className="text-base">December 31, 2025</p>
          </div>
          <div className="flex flex-col">
            <p className="text-base text-gray-500">State</p>
            <p className="text-base">California</p>
          </div>
        </div>
      </div>
    </Card>
  );
};
export default LicenseInfo;
