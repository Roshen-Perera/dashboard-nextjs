import { Plus } from "lucide-react";
import React, { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const AdmissionHistory = () => {
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
        <div className="grid grid-cols-4 bg-gray-200 text-lg font-normal p-4 rounded-t-sm">
          <div className="whitespace-nowrap">Department</div>
          <div className="whitespace-nowrap -ml-4">Admission Period</div>
          <div className="whitespace-nowrap ml-6">Status</div>
          <div className="whitespace-nowrap">Attending Doctor</div>
        </div>

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
                      <button
                        className={
                          "w-full px-3 py-2 text-left text-sm last:border-b-0 font-semibold border-l-2 border-l-green-500"
                        }
                      >
                        Notes
                      </button>
                    </div>

                    <div className="flex-1 min-h-40">
                      <textarea
                        className="w-full h-full min-h-40 p-3 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder={`Enter Notes here...`}
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
  );
};

export default AdmissionHistory;
