import React from 'react'
import RecentNote from './RecentNote';
import { AddMedicationNote } from './AddMedicationNote';

const RecentNotes = () => {
  return (
    <div>
      <div className="w-[520px] h-[295px] border-1 rounded-sm p-1">
        <div className="flex flex-row justify-between p-2">
          <div className="text-xl">Recent Notes</div>
          <AddMedicationNote/>
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
