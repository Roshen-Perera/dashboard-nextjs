import { Plus } from "lucide-react";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const AdmissionHistory = () => {
    const [histories] = useState([
      {
        id: 1,
        department: "Cardiology",
        period: "May 10, 2025 - May 14, 2025",
        status: "Discharged",
        doctor: "Dr Lorem Ipsum",
      },
      {
        id: 2,
        department: "Internal Medicine",
        period: "May 10, 2025",
        status: "Active",
        doctor: "Dr Lorem Ipsum",
      },
    ]);
  return (
    <div>
      <div className="w-[1060px] border-1 rounded-sm p-2 items-center">
        <div className="flex flex-row justify-between p-2">
          <div className="text-xl">Admission History</div>
          <div className="flex items-center text-green-500 gap-2">
            <p className="text-base">New Admission</p>
            <Plus />
          </div>
        </div>
        {/* Header */}
        <div className="grid grid-cols-[1fr_2fr_1fr_1fr_auto] mt-3 bg-gray-200 text-lg font-normal p-4 rounded-t-sm">
          <div className="whitespace-nowrap">Department</div>
          <div className="whitespace-nowrap">Admission Period</div>
          <div className="whitespace-nowrap">Status</div>
          <div className="whitespace-nowrap">Attending Doctor</div>
        </div>

        {/* Rows */}
        {histories.map((history) => (
          <Accordion key={history.id} type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="grid grid-cols-[1fr_2fr_1fr_1fr_auto] items-center text-base p-4 -mb-2 font-normal gap-4">
                <div className="whitespace-nowrap">{history.department}</div>
                <div className="whitespace-nowrap">{history.period}</div>
                <div>
                  <span className="bg-[#0099665b] px-3 py-1 rounded-xl text-xs font-normal">
                    {history.status}
                  </span>
                </div>
                <div className="whitespace-nowrap">{history.doctor}</div>
                {/* arrow auto goes here */}
              </AccordionTrigger>

              <AccordionContent className="p-4">
                <div className="mx-auto rounded-sm -mt-4 p-4 border">
                  <div className="rounded">
                    <div className="flex">
                      <div className="w-32">
                        <button className="w-full px-3 py-2 text-left text-sm font-semibold border-l-2 border-l-green-500">
                          Notes
                        </button>
                      </div>

                      <div className="flex-1 min-h-40">
                        <textarea
                          className="w-full h-full min-h-40 p-3 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Enter Notes here..."
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default AdmissionHistory;
