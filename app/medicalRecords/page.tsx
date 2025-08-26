"use client";

import { AppSidebar } from "@/components/app-sidebar";
import PageHeader from "@/components/PageHeader";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import React from "react";
import Image from "next/image";
import { Download } from "lucide-react";

const Home = () => {
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
                    width={100}
                    height={100}
                    alt="Doctor Profile"
                    className="rounded-full"
                  />
                </div>
                <div className="mt-3">
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
                <button className="flex flex-row items-center gap-2 px-4 py-2 bg-white text-black text-sm hover:bg-gray-200 border-2 border-black rounded-sm transition-colors w-fit h-fit">
                  <Download className="w-4 h-4" />
                  Export
                </button>
                <button className="flex flex-row items-center gap-2 px-4 py-2 bg-green-600 text-white text-sm border-green-600 border-2 hover:border-green-900 hover:bg-green-900 rounded-sm transition-colors w-fit h-fit">
                  <Download className="w-4 h-4" />
                  Export
                </button>
              </div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
};

export default Home;
