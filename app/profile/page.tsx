"use client";

import { AppSidebar } from "@/components/app-sidebar";
import BasicInfo from "@/components/basicInfo";
import ContactDetails from "@/components/contactDetails";
import LicenseInfo from "@/components/liscenseInfo";
import Profile from "@/components/profile";
import ProTimeline from "@/components/proTimeline";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <div className="pl-4 pr-15 bg-[#f5fffa]">
            <div className="flex flex-row justify-between items-center mt-4 mb-4">
              <input
                type="text"
                placeholder="Search..."
                className="text-sm px-3 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <div className="flex items-center gap-2 text-sm font-medium rounded-lg pr-1 pl-1">
                <Image
                  src={"/assets/icons/bell.png"}
                  width={20}
                  height={20}
                  alt="Notification"
                />
                |
                <Image
                  src={"/assets/dragisa.png"}
                  width={30}
                  height={30}
                  alt="Profile"
                  className="rounded-full"
                />
                <div>
                  <p className="text-sm">Dr. Dragisa</p>
                  <p className="text-xs text-gray-500">Jun 25, 2024 06:00 AM</p>
                </div>
              </div>
            </div>
            <Profile />
            <div className="pt-4 flex flex-row gap-4">
              <BasicInfo />
              <LicenseInfo />
              <ContactDetails />
            </div>
            <div className="pt-4 flex flex-row gap-4">
              <ProTimeline />
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
};

export default Home;
