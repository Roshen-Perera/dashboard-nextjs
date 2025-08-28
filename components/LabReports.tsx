import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Download } from "lucide-react";

const LabReports = () => {
  const [reports] = useState([
    {
      id: 1,
      date: "Jun 15, 2024",
      time: "09:00 AM",
      type: "Blood Test",
      name: "Complete Blood Count",
      status: "pending",
    },
    {
      id: 2,
      date: "Jun 15, 2024",
      time: "09:00 AM",
      type: "Blood Test",
      name: "Complete Blood Count",
      status: "normal",
    },
    {
      id: 3,
      date: "Jun 15, 2024",
      time: "09:00 AM",
      type: "Blood Test",
      name: "Complete Blood Count",
      status: "normal",
    },
    {
      id: 4,
      date: "Jun 15, 2024",
      time: "09:00 AM",
      type: "Blood Test",
      name: "Complete Blood Count",
      status: "normal",
    },
  ]);
  return (
    <div>
      <div className="grid grid-cols-[1fr_1fr_2fr_1fr_0.3fr_auto] bg-gray-200 text-lg font-normal p-4 rounded-t-sm">
        <div className="whitespace-nowrap">Date & Time</div>
        <div className="whitespace-nowrap">Report Type</div>
        <div className="whitespace-nowrap">Test Name</div>
        <div className="whitespace-nowrap">Report Status</div>
      </div>
      {/* Rows */}
      {reports.map((report) => (
        <Accordion key={report.id} type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="grid grid-cols-[1fr_1fr_2fr_1fr_0.1fr_auto] items-center text-base p-4 -mb-2 font-normal">
              <div>
                <div className="text-base font-normal">{report.date}</div>
                <div className="text-xs font-normal text-gray-500">
                  {report.time}
                </div>
              </div>
              <div className="whitespace-nowrap">{report.type}</div>
              <div className="whitespace-nowrap">{report.name}</div>
              <div>
                <span
                  className={`px-3 py-1 rounded-xl text-xs font-normal ${
                    report.status === "Normal" || report.status === "normal"
                      ? "bg-[#0099665b] text-black" // Yellow for "Normal"
                      : "bg-[#eab20870] text-black" // Greenish for "Pending"
                  }`}
                >
                  {report.status}
                </span>
              </div>
              <div className="text-green-500">
                <Download width={15} />
              </div>
            </AccordionTrigger>

            <AccordionContent className="p-4"></AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
};

export default LabReports;
