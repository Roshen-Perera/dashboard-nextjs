"use client";

import { AppSidebar } from "@/components/app-sidebar";
import PageHeader from "@/components/PageHeader";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import React, { useState } from "react";
import Image from "next/image";
import { Download, Plus, Printer } from "lucide-react";
import MedicalHistory from "@/components/MedicalHistory";
import LabReports from "@/components/LabReports";
import StatusMenu from "@/components/StatusMenu";
import { DatePicker } from "@/components/DatePicker";

const Home = () => {
  const leftButtonText = "Medical History";
  const middleButtonText = "Lab Reports";
  const rightButtonText = "Other";
  const defaultActive = "Medical History";
  const [activeStatus, setActiveStatus] = useState(defaultActive);

  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset className="bg-[#f5fffa]">
          <div className="pl-4 pr-8">
            <PageHeader />
            <div className="flex flex-row pt-4 justify-between">
              <div className="flex flex-row gap-4">
                <div>
                  <Image
                    src={"/assets/sarah.png"}
                    width={80}
                    height={80}
                    alt="Doctor Profile"
                    className="rounded-full"
                  />
                </div>
                <div className="mt-1">
                  <h1 className="text-3xl text-gray-900 mb-1">
                    Dr. Sarah Johnson
                  </h1>
                  <div className="flex flex-row gap-4">
                    <p className="text-lg text-gray-500">Female, 35 years</p>
                    <p className="text-lg text-gray-500">ID 20041231030</p>
                    <p className="text-lg text-gray-500">
                      Phone: (+94) 75 578 3011
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-x-4 items-center">
                <button className="flex flex-row items-center gap-2 px-4 py-2 bg-[#f5fffa] text-black text-base hover:bg-gray-200 border-2 border-black rounded-sm transition-colors w-fit h-fit">
                  <Printer className="w-4 h-4" />
                  Print
                </button>
                <button className="flex flex-row items-center gap-2 px-4 py-2 bg-green-600 text-white text-base border-green-600 border-2 hover:border-green-900 hover:bg-green-900 rounded-sm transition-colors w-fit h-fit">
                  <Download className="w-4 h-4" />
                  Export
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between px-4 py-3">
              {/* Left side - Status toggle */}
              <div className="flex items-center relative">
                <button
                  onClick={() => setActiveStatus(leftButtonText)}
                  className={`px-4 py-3 text-base transition-all duration-200 relative border-b-2 ${
                    activeStatus === leftButtonText
                      ? "border-green-600 text-gray-900"
                      : "border-transparent text-gray-900"
                  }`}
                >
                  {leftButtonText}
                </button>

                <button
                  onClick={() => setActiveStatus(middleButtonText)}
                  className={`px-4 py-3 text-base transition-all duration-200 relative border-b-2 ${
                    activeStatus === middleButtonText
                      ? "border-green-600 text-gray-900"
                      : "border-transparent text-gray-900"
                  }`}
                >
                  {middleButtonText}
                </button>

                <button
                  onClick={() => setActiveStatus(rightButtonText)}
                  className={`px-4 py-3 text-base transition-all duration-200 relative border-b-2 ${
                    activeStatus === rightButtonText
                      ? "border-green-600 text-gray-900"
                      : "border-transparent text-gray-900"
                  }`}
                >
                  {rightButtonText}
                </button>
              </div>
              {activeStatus === "Lab Reports" && (
                <div className="flex items-center gap-3">
                  {/* Status Dropdown */}
                  <StatusMenu />
                  <DatePicker />
                  <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white text-sm font-normal rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-1 transition-colors">
                    <Plus className="w-4 h-4" />
                    New Test
                  </button>
                </div>
              )}
            </div>
            <div>
              {activeStatus === "Medical History" && <MedicalHistory />}

              {/* Show Not Approved Table */}
              {activeStatus === "Lab Reports" && <LabReports />}

              {activeStatus === "Other" && "Other"}
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
};

export default Home;
