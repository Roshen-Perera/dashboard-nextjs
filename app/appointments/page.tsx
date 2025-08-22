"use client";

import { AppSidebar } from "@/components/app-sidebar";
import CompletedCount from "@/components/CompletedCount";
import FilterHeader from "@/components/FilterHeader";
import PageHeader from "@/components/PageHeader";
import PendingCount from "@/components/PendingCount";
import TodayAppointmentCount from "@/components/TodayAppointmentCount";
import TodayUpcomingCount from "@/components/TodayUpcomingCount";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import React from "react";

const Home = () => {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset className="bg-[#f5fffa]">
          <div className="pl-4 pr-8">
            <PageHeader />
          </div>

          <div className="flex justify-between p-4">
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
