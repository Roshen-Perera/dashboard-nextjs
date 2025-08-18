import React from 'react'
import Image from 'next/image';

const PendingCount = () => {
  return (
    <div className="bg-[#f5fffa] w-[250px] h-[100px] p-4 border-1 rounded-md">
      <div className="flex flex-row gap-4 items-center">
        <div>
          <Image
            src={"/assets/icons/pending.png"}
            width={20}
            height={20}
            alt="Notification"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg text-gray-500">Pending</p>
          <p className="text-xl text-gray-900">12</p>
        </div>
      </div>
      
    </div>
  );
};

export default PendingCount;
