"use client";

import { AppSidebar } from "@/components/app-sidebar";
import PageHeader from "@/components/PageHeader";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import React from "react";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset className="bg-[#f5fffa]">
          <div className="pl-4 pr-8">
            <PageHeader />
            <div className="flex flex-row">
              <div>
                <h1 className="text-2xl text-gray-900 mb-1">
                  Dr. Sarah Johnson
                </h1>
                <div className="flex flex-row gap-4">
                  <p className="text-base text-gray-500">Female, 35 years</p>
                  <p className="text-base text-gray-500">ID 20041231030</p>
                  <p className="text-base text-gray-500">
                    Phone: (+94) 75 578 3011
                  </p>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
};

export default Home;
