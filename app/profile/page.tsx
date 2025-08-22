"use client";

import { AppSidebar } from "@/components/app-sidebar";
import BasicInfo from "@/components/BasicInfo";
import ConSchedule from "@/components/ConSchedule";
import ContactDetails from "@/components/ContactDetail";
import LicenseInfo from "@/components/LicenseInfo";
import Profile from "@/components/Profiles";
import ProTimeline from "@/components/ProTimelines";
import SpecialtyAreas from "@/components/SpecialtyAreas";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <div className="pl-4 pr-8 bg-[#f5fffa]">
            
            <Profile />
            <div className="pt-4 flex flex-row gap-4">
              <BasicInfo />
              <LicenseInfo />
              <ContactDetails />
            </div>
            <div className="pt-4 flex flex-row gap-4">
              <ProTimeline />
              <div className="flex flex-col">
                <ConSchedule />
                <SpecialtyAreas />
              </div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
};

export default Home;
