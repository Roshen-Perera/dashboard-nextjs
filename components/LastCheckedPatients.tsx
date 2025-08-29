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
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
      id: "P-001234",
      name: "John Smith",
      email: "johnsmith@example.com",
      lastVisit: { date: "Jan 25, 2024", time: "09:30 AM" },
      reason: "Regular Checkup",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
      id: "P-001234",
      name: "John Smith",
      email: "johnsmith@example.com",
      lastVisit: { date: "Jan 25, 2024", time: "09:30 AM" },
      reason: "Regular Checkup",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
    {
      id: "P-001234",
      name: "John Smith",
      email: "johnsmith@example.com",
      lastVisit: { date: "Jan 25, 2024", time: "09:30 AM" },
      reason: "Regular Checkup",
      avatar: "https://i.pravatar.cc/150?img=4",
    },
    {
      id: "P-001234",
      name: "John Smith",
      email: "johnsmith@example.com",
      lastVisit: { date: "Jan 25, 2024", time: "09:30 AM" },
      reason: "Regular Checkup",
      avatar: "https://i.pravatar.cc/150?img=5",
    },
    {
      id: "P-001234",
      name: "John Smith",
      email: "johnsmith@example.com",
      lastVisit: { date: "Jan 25, 2024", time: "09:30 AM" },
      reason: "Regular Checkup",
      avatar: "https://i.pravatar.cc/150?img=6",
    },
    {
      id: "P-001234",
      name: "John Smith",
      email: "johnsmith@example.com",
      lastVisit: { date: "Jan 25, 2024", time: "09:30 AM" },
      reason: "Regular Checkup",
      avatar: "https://i.pravatar.cc/150?img=7",
    },
    {
      id: "P-001234",
      name: "John Smith",
      email: "johnsmith@example.com",
      lastVisit: { date: "Jan 25, 2024", time: "09:30 AM" },
      reason: "Regular Checkup",
      avatar: "https://i.pravatar.cc/150?img=8",
    },
    {
      id: "P-001234",
      name: "John Smith",
      email: "johnsmith@example.com",
      lastVisit: { date: "Jan 25, 2024", time: "09:30 AM" },
      reason: "Regular Checkup",
      avatar: "https://i.pravatar.cc/150?img=9",
    },
    {
      id: "P-001234",
      name: "John Smith",
      email: "johnsmith@example.com",
      lastVisit: { date: "Jan 25, 2024", time: "09:30 AM" },
      reason: "Regular Checkup",
      avatar: "https://i.pravatar.cc/150?img=10",
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
