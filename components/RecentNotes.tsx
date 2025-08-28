import { Plus } from 'lucide-react';
import React from 'react'
import RecentNote from './RecentNote';

const RecentNotes = () => {
  return (
    <div>
      <div className="w-[520px] h-[295px] border-1 rounded-sm p-1">
        <div className="flex flex-row justify-between p-2">
          <div className="text-xl">Medications</div>
          <div className="flex items-center text-green-500 gap-2">
            <p className="text-base">New Medication</p>
            <Plus />
          </div>
        </div>
        <div className="flex flex-col -mt-1">
          <RecentNote/>
          <RecentNote/>
          <RecentNote/>
        </div>
      </div>
    </div>
  );
};

export default RecentNotes;
