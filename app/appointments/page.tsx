"use client";

import { AppSidebar } from "@/components/app-sidebar";
import CompletedCount from "@/components/CompletedCount";
import FilterHeader from "@/components/FilterHeader";
import PendingCount from "@/components/PendingCount";
import TodayAppointmentCount from "@/components/TodayAppointmentCount";
import TodayUpcomingCount from "@/components/TodayUpcomingCount";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset className="bg-[#f5fffa]">
          
          <div className="flex justify-between p-5">
            <TodayAppointmentCount />
            <TodayUpcomingCount />
            <CompletedCount />
            <PendingCount />
          </div>
          <div className="pl-5 pr-5">
            <FilterHeader />
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
};

export default Home;
