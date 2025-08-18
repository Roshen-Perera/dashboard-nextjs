import React from 'react'
import { Card } from './ui/card';
import { Calendar } from 'lucide-react';

const TodayAppointmentCount = () => {
  return (
    <Card className="bg-[#f5fffa] w-[250px] h-[100px] p-6 rounded-md">
      <div className='flex flex-row'>
        <Calendar />
        <div className='flex flex-col'>
          
        </div>
      </div>
    </Card>
  );
};

export default TodayAppointmentCount;
