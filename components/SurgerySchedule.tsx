import { Plus } from "lucide-react";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { ScheduleNewSurgery } from "./ScheduleNewSurgery";

const SurgerySchedule = () => {
  const [activeTab, setActiveTab] = useState("Notes");

  const tabs = ["Notes", "Medications", "Instructions", "Reason"];
  return (
    <div>
      <div className="w-[1060px] border-1 rounded-sm p-2 items-center">
        <div className="flex flex-row justify-between p-2">
          <div className="text-xl">Surgeries</div>
          <ScheduleNewSurgery />
        </div>
        <div className="w-[1000px] border-1 mt-4 rounded-sm p-3 items-center justify-center mx-auto">
          {/* Header */}
          <div className="grid grid-cols-4 bg-gray-200 text-lg font-normal p-4 rounded-t-sm">
            <div className="whitespace-nowrap">Patient</div>
            <div className="whitespace-nowrap -ml-4">Date & Time</div>
            <div className="whitespace-nowrap ml-6">Type</div>
            <div className="whitespace-nowrap">Status</div>
          </div>

          {/* Rows */}
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="flex flex-row items-center text-base p-4 -mb-2 font-normal">
                <div className="whitespace-nowrap">John Doe</div>
                <div className="whitespace-nowrap">27 Aug, 10:30 AM</div>
                <div className="whitespace-nowrap">Checkup</div>
                <div className="whitespace-nowrap">Approved</div>
              </AccordionTrigger>

              <AccordionContent className="p-4">
                <div className="mx-auto border-1 rounded-sm -mt-4 p-4">
                  <div className="0 rounded">
                    <div className="flex">
                      <div className="w-32">
                        {tabs.map((tab) => (
                          <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`w-full px-3 py-2 text-left text-sm last:border-b-0 ${
                              activeTab === tab
                                ? "font-semibold border-l-2 border-l-green-500"
                                : "text-gray-700 hover:bg-gray-100 border-l-2 border-l-transparent"
                            }`}
                          >
                            {tab}
                          </button>
                        ))}
                      </div>

                      <div className="flex-1 min-h-40">
                        <textarea
                          className="w-full h-full min-h-40 p-3 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder={`Enter ${activeTab.toLowerCase()} here...`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default SurgerySchedule;
