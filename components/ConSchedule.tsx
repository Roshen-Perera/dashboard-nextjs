import React from 'react'
import { Card } from './ui/card';

const ConSchedule = () => {
  return (
    <Card className="w-[558px] h-[180px] bg-[#f5fffa] p-4">
      <div className="ml-2">
        <p className="text-xl mb-3">Basic Information</p>
        <div className="flex flex-row justify-around">
          <div className="flex flex-col items-center gap-2">
            <p className="text-xs">Mon</p>
            <div className="bg-[#0099665b] p-2 rounded-md">
              <p className="text-xs">9:00 - 12:00</p>
            </div>
            <div className="bg-[#0099665b] p-2 rounded-md">
              <p className="text-xs">9:00 - 12:00</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-xs">Mon</p>
            <div className="bg-[#0099665b] p-2 rounded-md">
              <p className="text-xs">9:00 - 12:00</p>
            </div>
            <div className="bg-[#0099665b] p-2 rounded-md">
              <p className="text-xs">9:00 - 12:00</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-xs">Tue</p>
            <div className="bg-[#0099665b] p-2 rounded-md">
              <p className="text-xs">9:00 - 12:00</p>
            </div>
            <div className="bg-[#0099665b] p-2 rounded-md">
              <p className="text-xs">9:00 - 12:00</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-xs">Thu</p>
            <div className="bg-[#0099665b] p-2 rounded-md">
              <p className="text-xs">9:00 - 12:00</p>
            </div>
            <div className="bg-[#0099665b] p-2 rounded-md">
              <p className="text-xs">9:00 - 12:00</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-xs">Fri</p>
            <div className="bg-[#0099665b] p-2 rounded-md">
              <p className="text-xs">9:00 - 12:00</p>
            </div>
            <div className="bg-[#0099665b] p-2 rounded-md">
              <p className="text-xs">9:00 - 12:00</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ConSchedule;
