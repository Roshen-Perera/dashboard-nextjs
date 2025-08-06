import React from 'react'
import { Card } from './ui/card';

const ContactDetails = () => {
  return (
    <Card className="w-[332px] h-[235px] bg-[#f5fffa] p-4">
      <div className="ml-3 flex flex-col">
        <p className="text-xl mb-3">Contact Details</p>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col">
            <p className="text-base text-gray-500">Email</p>
            <p className="text-base">example@gmail.com</p>
          </div>
          <div className="flex flex-col">
            <p className="text-base text-gray-500">Phone Number</p>
            <p className="text-base">+94-75-578-3011</p>
          </div>
          <div className="flex flex-col">
            <p className="text-base text-gray-500">Office Phone</p>
            <p className="text-base">+94-75-578-3011</p>
          </div>
        </div>
      </div>
    </Card>
  );
};
export default ContactDetails;
