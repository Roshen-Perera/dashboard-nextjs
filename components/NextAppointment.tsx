import React from 'react'
import { Card } from './ui/card';
import Appointment from './appointment';
const NextAppointment = () => {
  return (
    <div>
      <Card className="bg-#f5fffa w-[348px] h-[276px] flex flex-col p-4">
        <div className="-mt-2 flex flex-row justify-between">
          <p className="text-xl">Today&apos;s Appointments</p>
        </div>
        <div className="flex flex-col gap-6">
          {/* Appointment 1 */}
          <Appointment
            name="John Doe"
            time="10:00 AM"
            type="Confirmed"
            image="/assets/bronson.png"
          />
          <Appointment
            name="John Doe"
            time="10:00 AM"
            type="Confirmed"
            image="/assets/bronson.png"
          />
          <hr />
          <p className='text-xs text-color-red'>View all Appointments</p>
        </div>
      </Card>
    </div>
  );
}

export default NextAppointment;
