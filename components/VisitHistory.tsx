import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const VisitHistory = () => {
  const [activeTab, setActiveTab] = useState("Notes");
  const tabs = ["Notes", "Medications", "Instructions", "Reason"];

  const [histories] = useState([
    {
      id: 1,
      date: "May 15, 2025",
      provider: "Dr.Smith",
      Reason: "Lorem ipsum sed aliquam habitass...",
    },
    {
      id: 2,
      date: "May 15, 2025",
      provider: "Dr.Smith",
      Reason: "Lorem ipsum sed aliquam habitass...",
    },
  ]);

  return (
    <div className="w-[1060px] border-1 rounded-sm p-2 items-center">
      <div className="flex flex-row justify-between p-2">
        <div className="text-xl">Visits History</div>
      </div>
      <div className="grid grid-cols-[1fr_1fr_2fr_auto]  mt-3 bg-gray-200 text-lg font-normal p-4 rounded-t-sm">
        <div className="whitespace-nowrap">Date</div>
        <div className="whitespace-nowrap">Provider</div>
        <div className="whitespace-nowrap">Reason</div>
      </div>
      {histories.map((history) => (
        <Accordion key={history.id} type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="grid grid-cols-[1fr_1fr_2fr_auto] items-center text-base p-4 -mb-2 font-normal">
              <div className="whitespace-nowrap">{history.date}</div>
              <div className="whitespace-nowrap">{history.provider}</div>
              <div className="whitespace-nowrap">{history.Reason}</div>
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
      ))}
    </div>
  );
};

export default VisitHistory;
