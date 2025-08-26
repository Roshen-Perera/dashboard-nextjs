import { Edit03Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import React from 'react'

const CurrentVitals = () => {
  return (
    <div>
      <div className="flex flex-row justify-around">
        <div className="text-base">Current Vitals</div>
        <div className="flex items-center gap-2">
          <HugeiconsIcon icon={Edit03Icon} className="w-4 h-4 text-green-500" />
          <p className="text-sm text-green-500">Edit</p>
        </div>
      </div>
    </div>
  );
}

export default CurrentVitals
