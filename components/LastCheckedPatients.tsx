import Image from 'next/image';
import React, { useState } from 'react'

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
      <div className="grid grid-cols-5 bg-gray-200 text-lg font-normal p-4 rounded-t-sm">
        <div className="whitespace-nowrap">Patient Name</div>
        <div className="whitespace-nowrap -ml-4">Patient ID</div>
        <div className="whitespace-nowrap ml-6">Last Visit</div>
        <div className="whitespace-nowrap">Visit Reason</div>
      </div>
      {patients.map((patient, index) => (
        <div key={index} className="grid grid-cols-5 p-4 border-b ">
          <div className="flex items-center">
            <Image src={patient.avatar} alt={patient.name} width={40} height={40} className="rounded-full mr-2" />
            <span>{patient.name}</span>
          </div>
          <div className="whitespace-nowrap -ml-4">{patient.id}</div>
          <div className="whitespace-nowrap ml-6">
            {patient.lastVisit.date} at {patient.lastVisit.time}
          </div>
          <div className="whitespace-nowrap">{patient.reason}</div>
        </div>
      ))}
    </div>
  );
}

export default LastCheckedPatients
