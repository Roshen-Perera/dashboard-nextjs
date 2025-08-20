import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Calendar, MapPin, User } from "lucide-react";
import React, { useState } from "react";
import { Textarea } from "./ui/textarea";

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
        <div className="pt-4 pb-4 pl-7 pr-7 grid grid-cols-5 gap-4 bg-gray-200 text-base rounded-t-sm">
          <div>Patient</div>
          <div>Date & Time</div>
          <div>Type</div>
          <div>Status</div>
        </div>
        {appointments.map((appointment) => (
          <Accordion
            key={appointment.id}
            type="single"
            collapsible
            className="pr-5 pl-5"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <div className="grid grid-cols-5 items-center flex-1 gap-4 pl-5">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-gray-600" />
                    </div>
                    <div>
                      <div className="text-base font-normal">
                        {appointment.patientName}
                      </div>
                      <div className="text-sm font-normal text-gray-500">
                        {appointment.patientId}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 text-base font-normal">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {appointment.date}, {appointment.time}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1 text-base font-normal">
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
                <div className="border-1 rounded-md p-4">
                  <p className="text-base mb-4">
                    Appointment Type: {appointment.appointmentType}
                  </p>
                  <div className="flex flex-row">
                    <div>
                      <p className="text-base whitespace-nowrap pr-7">
                        Reason for visit:
                      </p>
                    </div>
                    <Textarea className="resize-none" />
                  </div>
                  <div className="flex items-center justify-between mt-5">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="markChecked"
                        className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                      />
                      <label
                        htmlFor="markChecked"
                        className="text-sm text-gray-700"
                      >
                        Mark as Checked
                      </label>
                      {/* <button className="px-4 py-2 bg-teal-500 text-white text-sm font-medium rounded-md hover:bg-teal-600 transition-colors">
                          🏥 Admit Patient
                        </button> */}
                    </div>

                    <div className="flex items-center">
                      <a
                        href="#"
                        className="text-green-600 text-sm hover:text-green-700 transition-colors flex items-center"
                      >
                        View Medical Record
                        <svg
                          className="ml-1 w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </AccordionContent>
              <hr className=" border-gray-400" />
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </>
  );
};

export default ApprovedAppointments;
