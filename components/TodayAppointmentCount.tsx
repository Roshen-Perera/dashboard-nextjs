import React from 'react'
import { Card } from './ui/card';
import { Calendar } from 'lucide-react';

const TodayAppointmentCount = () => {
  return (
    <Card className="bg-[#f5fffa] w-[250px] h-[100px] p-5 rounded-md">
      <div className="flex flex-row gap-4 items-center">
        <div>
          <Calendar />
        </div>
        <div className="flex flex-col">
          <p className="text-lg text-gray-500">Today</p>
          <p className="text-xl text-gray-900">12</p>
        </div>
      </div>
    </Card>
  );
};

export default TodayAppointmentCount;
