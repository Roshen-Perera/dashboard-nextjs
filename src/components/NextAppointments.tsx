import React from 'react'
import { Card } from './ui/card';

const NextAppointments = () => {
  return (
    <div>
      <Card className="w-[348px] h-[276px] flex flex-col justify-between p-4">
        <div className="-mt-2 flex flex-row justify-between">
          <p className="text-xl">Today&apos;s Surgeries</p>
        </div>
      </Card>
    </div>
  );
}

export default NextAppointments
