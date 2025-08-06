"use client";

import React from "react";
import { Card } from "./ui/card";
import Image from "next/image";

const NextPatientDetail = () => {
  return (
    <>
      <Card className="bg-[#f5fffa] w-[662px] h-[252px] flex flex-col justify-between p-4">
        <div className="-mt-2 flex flex-row justify-between">
          <p className="text-xl">Next Patient Details</p>
          <a href="#" className="text-green-500 text-sm">
            View All {">"}
          </a>
        </div>
        <div className="flex -mt-10 justify-around items-center gap-4 pr-10">
          <div className="flex flex-col items-center">
            <Image
              className="rounded-full"
              src="/assets/pic.png"
              width={120}
              height={120}
              alt="Picture of the author"
            />
            <p className="text-lg">Hadassah Lester</p>
            <p className="text-base text-gray-500">OPD Treatment</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <p className="text-lg">Patient ID</p>
              <p className="text-base text-gray-500">123456789</p>
            </div>
            <div className="flex flex-col">
              <p className="text-lg">Gender</p>
              <p className="text-base text-gray-500">Male</p>
            </div>
            <div className="flex flex-col">
              <p className="text-lg">Age</p>
              <p className="text-base text-gray-500">32</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <p className="text-lg">Height</p>
              <p className="text-base text-gray-500">155 cm</p>
            </div>
            <div className="flex flex-col">
              <p className="text-lg">Weight</p>
              <p className="text-base text-gray-500">50 Kg</p>
            </div>
            <div className="flex flex-col">
              <p className="text-lg">Last Visit</p>
              <p className="text-base text-gray-500">2024.01.24</p>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default NextPatientDetail;
