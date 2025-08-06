import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  FemaleSymbolIcon,
  MaleSymbolIcon,
} from "@hugeicons/core-free-icons";
import Image from "next/image";

interface PatientCountProps {
  totalMalePatients: number;
  totalFemalePatients: number;
}

const PatientCount: React.FC<PatientCountProps> = ({ totalMalePatients, totalFemalePatients }) => {
  return (
    <>
      <Card className=" bg-[#f5fffa] flex w-[210px] h-[100px]">
        <CardHeader className="flex -mt-2 items-center gap-2 ">
          <CardTitle>Total Patients</CardTitle>
          <Image 
            src={"/assets/icons/people.png"}
            width={15}
            height={15}
            alt="Patient Icon"
          />
        </CardHeader>
        <CardContent>
          <div className="-mt-2 flex flex-row justify-between items-center">
            <div className="flex gap-2">
              <HugeiconsIcon icon={MaleSymbolIcon} size={25} color="#00beff" />
              <div className="text-xl">{totalMalePatients}</div>
            </div>
            <div className="flex gap-2">
              <HugeiconsIcon
                icon={FemaleSymbolIcon}
                size={25}
                color="#FF00CA"
              />
              <div className="text-xl">{totalFemalePatients}</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default PatientCount;
