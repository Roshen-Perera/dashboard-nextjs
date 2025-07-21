"use client";

import NextPatientDetails from "@/components/NextPatientDetails";
import PatientCount from "@/components/PatientCount";
import PieChartCard from "@/components/PieChart";
import PieChartCardPer from "@/components/PieChartPer";
import Surgeries from "@/components/Surgeries";
import { ChartConfig } from "@/components/ui/chart";
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
      <div className="flex flex-row gap-4 flex-wrap">
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
        <NextPatientDetails/>
      </div>
    </>
  );
};

export default Home;
