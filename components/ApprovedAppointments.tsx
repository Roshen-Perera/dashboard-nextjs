import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Calendar, MapPin, User } from "lucide-react";
import React, { useState } from "react";

const ApprovedAppointments = () => {
  const [appointments] = useState([
    {
      id: 1,
      patientName: "Lorem Ipsum",
      patientId: "#710102",
      date: "Today",
      time: "2:00 PM",
      visitType: "In-Person",
      status: "Upcoming",
      appointmentType: "Routine Check-up",
      reasonForVisit: "Annual health examination and blood work review",
    },
    {
      id: 2,
      patientName: "John Doe",
      patientId: "#710103",
      date: "Tomorrow",
      time: "10:30 AM",
      visitType: "Virtual",
      status: "Upcoming",
      appointmentType: "Follow-up",
      reasonForVisit: "Review of medication adjustments",
    },
    {
      id: 3,
      patientName: "Jane Smith",
      patientId: "#710104",
      date: "Aug 20, 2025",
      time: "4:00 PM",
      visitType: "In-Person",
      status: "Completed",
      appointmentType: "Consultation",
      reasonForVisit: "Discussion of test results and next steps",
    },
    {
      id: 4,
      patientName: "Michael Johnson",
      patientId: "#710105",
      date: "Aug 22, 2025",
      time: "9:00 AM",
      visitType: "Virtual",
      status: "Cancelled",
      appointmentType: "Therapy Session",
      reasonForVisit: "Stress management and counseling",
    },
    {
      id: 5,
      patientName: "Emily Davis",
      patientId: "#710106",
      date: "Aug 25, 2025",
      time: "11:15 AM",
      visitType: "In-Person",
      status: "Upcoming",
      appointmentType: "Dental Cleaning",
      reasonForVisit: "Routine teeth cleaning and check-up",
    },
  ]);

  return (
    <>
      <div className="border-1 rounded-lg">
        <div className="pt-4 pb-4 pl-5 grid grid-cols-5 gap-4 bg-gray-200 text-base rounded-t-sm">
          <div>Patient</div>
          <div>Date & Time</div>
          <div>Type</div>
          <div>Status</div>
        </div>
        {appointments.map((appointment) => (
          <Accordion key={appointment.id} type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <div className="grid grid-cols-5 items-center flex-1 gap-4 pl-5">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-gray-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">
                        {appointment.patientName}
                      </div>
                      <div className="text-sm text-gray-500">P0001</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {appointment.date}, {appointment.time}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{appointment.appointmentType}</span>
                  </div>
                  <div className="ml-3">
                    <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-700">
                      {appointment.status}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-gray-600 cursor-pointer">
                    <Calendar className="w-4 h-4" />
                    <span>Reschedule</span>
                  </div>
                </div>
              </AccordionTrigger>

              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
              <hr className=" border-gray-300" />
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </>
  );
};

export default ApprovedAppointments;
