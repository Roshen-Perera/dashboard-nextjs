import { ScrollText } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const LastCheckedPatients = () => {
  const [patients] = useState([
    {
      id: "P-001234",
      name: "John Smith",
      email: "johnsmith@example.com",
      lastVisit: { date: "Jan 25, 2024", time: "09:30 AM" },
      reason: "Regular Checkup",
      avatar: "/assets/lastCheckedPatients/patient1.png",
    },
    {
      id: "P-001234",
      name: "John Smith",
      email: "johnsmith@example.com",
      lastVisit: { date: "Jan 25, 2024", time: "09:30 AM" },
      reason: "Regular Checkup",
      avatar: "/assets/lastCheckedPatients/patient2.png",
    },
    {
      id: "P-001234",
      name: "John Smith",
      email: "johnsmith@example.com",
      lastVisit: { date: "Jan 25, 2024", time: "09:30 AM" },
      reason: "Regular Checkup",
      avatar: "/assets/lastCheckedPatients/patient3.png",
    },
    {
      id: "P-001234",
      name: "John Smith",
      email: "johnsmith@example.com",
      lastVisit: { date: "Jan 25, 2024", time: "09:30 AM" },
      reason: "Regular Checkup",
      avatar: "/assets/lastCheckedPatients/patient4.png",
    },
    {
      id: "P-001234",
      name: "John Smith",
      email: "johnsmith@example.com",
      lastVisit: { date: "Jan 25, 2024", time: "09:30 AM" },
      reason: "Regular Checkup",
      avatar: "/assets/lastCheckedPatients/patient5.png",
    },
    {
      id: "P-001234",
      name: "John Smith",
      email: "johnsmith@example.com",
      lastVisit: { date: "Jan 25, 2024", time: "09:30 AM" },
      reason: "Regular Checkup",
      avatar: "/assets/lastCheckedPatients/patient6.png",
    },
    {
      id: "P-001234",
      name: "John Smith",
      email: "johnsmith@example.com",
      lastVisit: { date: "Jan 25, 2024", time: "09:30 AM" },
      reason: "Regular Checkup",
      avatar: "/assets/lastCheckedPatients/patient7.png",
    },
    {
      id: "P-001234",
      name: "John Smith",
      email: "johnsmith@example.com",
      lastVisit: { date: "Jan 25, 2024", time: "09:30 AM" },
      reason: "Regular Checkup",
      avatar: "/assets/lastCheckedPatients/patient8.png",
    },
    {
      id: "P-001234",
      name: "John Smith",
      email: "johnsmith@example.com",
      lastVisit: { date: "Jan 25, 2024", time: "09:30 AM" },
      reason: "Regular Checkup",
      avatar: "/assets/lastCheckedPatients/patient9.png",
    },
    {
      id: "P-001234",
      name: "John Smith",
      email: "johnsmith@example.com",
      lastVisit: { date: "Jan 25, 2024", time: "09:30 AM" },
      reason: "Regular Checkup",
      avatar: "/assets/lastCheckedPatients/patient10.png",
    },
  ]);
  return (
    <div>
      <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr_auto] bg-gray-200 text-lg font-normal p-4 rounded-t-sm">
        <div className="whitespace-nowrap">Patient Name</div>
        <div className="whitespace-nowrap">Patient ID</div>
        <div className="whitespace-nowrap">Last Visit</div>
        <div className="whitespace-nowrap">Visit Reason</div>
      </div>
      {patients.map((patient, index) => (
        <div
          key={index}
          className="grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr_auto] flex-1 p-4"
        >
          <div className="flex items-center space-x-2">
            <Image src={patient.avatar} alt="appo" width={40} height={40} />
            <div>
              <div className="text-base font-normal">{patient.name}</div>
              <div className="text-sm font-normal text-gray-500">
                {patient.email}
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-1 text-base font-normal">
            <span>{patient.reason}</span>
          </div>
          <div>
            <div className="text-base font-normal">
              {patient.lastVisit.date}
            </div>
            <div className="text-sm font-normal text-gray-500">
              {patient.lastVisit.time}
            </div>
          </div>
          <div className="flex items-center text-base font-normal">
            <span>{patient.reason}</span>
          </div>
          <div className="flex items-center text-base font-normal text-green-800 cursor-pointer gap-2">
            <ScrollText className="w-4 h-4" />
            <span>Reschedule</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LastCheckedPatients;
