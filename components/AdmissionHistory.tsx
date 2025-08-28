import { Plus } from "lucide-react";
import React from "react";

const AdmissionHistory = () => {
  return (
    <div>
      <div className="w-[1060px] border-1 rounded-sm p-2 items-center">
        <div className="flex flex-row justify-between p-2">
          <div className="text-xl">Admission History</div>
          <div className="flex items-center text-green-500 gap-2">
            <p className="text-base">New Admission</p>
            <Plus />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionHistory;
