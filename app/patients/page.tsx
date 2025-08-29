"use client"

import { AppSidebar } from '@/components/app-sidebar';
import { DatePicker } from '@/components/DatePicker';
import LastCheckedPatients from '@/components/LastCheckedPatients';
import PageHeader from '@/components/PageHeader';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import React, { useState } from 'react'

const Home = () => {
    const leftButtonText = "Last Checked";
    const rightButtonText = "Upcoming";
    const defaultActive = "Last Checked";
    const [activeStatus, setActiveStatus] = useState(defaultActive);
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset className="bg-[#f5fffa]">
          <div className="pl-4 pr-8">
            <PageHeader />
            <div>
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

                {/* Right side - Controls */}
                <div className="flex items-center gap-3">
                  <DatePicker />
                </div>
              </div>
              <div>
                {activeStatus === "Last Checked" && <LastCheckedPatients />}

                {/* Show Not Approved Table */}
                {activeStatus === "Upcoming" && "<Upcoming />"}
              </div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}

export default Home
