import React from 'react'
import Image from 'next/image'

interface AppointmentProps {
  name: string;
  image: string;
  type: string;
  time: string;
}

const Appointment: React.FC<AppointmentProps> = ({ name, image, type, time }) => {
  return (
    <div  className="flex flex-row justify-between items-center gap-4">
      <div className="flex items-center gap-4">
        <Image
          src={image}
          alt={`Appointment for ${name}`}
          width={50}
          height={50}
        className="rounded-full"
      />
      <div className="flex flex-col justify-center">
        <p className="text-base font-medium">{name}</p>
        <p className="text-sm text-muted-foreground">{type}</p>
      </div>
      </div>
      <p className="text-2xl">{time}</p>
    </div>
  );
}

export default Appointment;
