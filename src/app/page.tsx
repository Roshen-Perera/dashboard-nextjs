"use client";

import { AppSidebar } from "@/components/app-sidebar";
import { CalendarDemo } from "@/components/Calendar";
import NextAppointments from "@/components/NextAppointments";
import NextPatientDetails from "@/components/NextPatientDetails";
import Notice from "@/components/Notice";
import PatientCount from "@/components/PatientCount";
import PieChartCard from "@/components/PieChart";
import PieChartCardPer from "@/components/PieChartPer";
import Surgeries from "@/components/Surgeries";
import TodaySurgeries from "@/components/TodaySurgeries";
import { ChartConfig } from "@/components/ui/chart";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { Bell } from "lucide-react";
import Image from "next/image";
import React from "react";

const Home = () => {
  const chartData1 = [
    { status: "Checked", visitors: 80, fill: "var(--color-checked)" },
    { status: "All", visitors: 20, fill: "var(--color-all)" },
  ];
  const chartConfig1 = {
    visitors: {
      label: "All",
    },
    checked: {
      label: "Checked",
      color: "#2F0D68",
    },
    all: {
      label: "All",
      color: "#cfcfcfff",
    },
  } satisfies ChartConfig;

  const chartData2 = [
    {
      status: "Reserved",
      visitors: 80,
      fill: "var(--color-reserved)",
    },
    {
      status: "Not Reserved",
      visitors: 20,
      fill: "var(--color-notReserved)",
    },
  ];
  const chartConfig2 = {
    visitors: {
      label: "Visitors",
    },
    reserved: {
      label: "Chrome",
      color: "#C6B200",
    },
    notReserved: {
      label: "Safari",
      color: "#e4dfb9ff",
    },
  } satisfies ChartConfig;

  const chartData3 = [
    {
      status: "Male",
      visitors: 170,
      fill: "#009966",
    },
    {
      status: "Female",
      visitors: 80,
      fill: "#90dbc2ff",
    },
  ];

  const chartConfig3 = {
    visitors: {
      label: "Monthly Patients",
    },
    male: {
      label: "Male",
      color: "#009966",
    },
    female: {
      label: "Female",
      color: "#90dbc2ff",
    },
  } satisfies ChartConfig;
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <div className="pl-4 pr-4 bg-[#f5fffa]">
            <div className="flex flex-row justify-between items-center mt-4 mb-4">
              <input
                type="text"
                placeholder="Search..."
                className="text-sm px-3 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <div className="flex items-center gap-2 text-sm font-medium rounded-lg pr-1 pl-1">
                <Bell />
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

            <Notice />
            <div className="flex flex-row gap-4 flex-wrap mt-4">
              <div className="flex flex-col justify-between">
                <PatientCount totalMalePatients={85} totalFemalePatients={45} />
                <Surgeries surgeries={120} />
              </div>
              <PieChartCard
                chartTitle="Appointments"
                chartInnerTitle="Today"
                chartData={chartData1}
                chartConfig={chartConfig1}
              />
              <PieChartCard
                chartTitle="Ward Staff"
                chartInnerTitle="All"
                chartData={chartData2}
                chartConfig={chartConfig2}
              />
              <PieChartCardPer
                chartTitle="Monthly Patients"
                chartInnerTitle="All"
                chartData={chartData3}
                chartConfig={chartConfig3}
              />
            </div>
            <div className="flex flex-row flex-wrap gap-4 pt-4">
              <NextPatientDetails />
              <CalendarDemo />
            </div>
            <div className="flex flex-row gap-4 pt-4">
              <TodaySurgeries />
              <div className="-mt-6">
                <NextAppointments />
              </div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
};

export default Home;
