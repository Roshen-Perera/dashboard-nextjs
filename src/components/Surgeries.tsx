import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { HugeiconsIcon } from "@hugeicons/react";
import { Hospital01Icon } from "@hugeicons/core-free-icons";

interface SurgeriesProps {
  surgeries: number;
}

const Surgeries: React.FC<SurgeriesProps> = ({ surgeries }) => {
  return (
    <>
      <Card className="bg-[#f5fffa] flex w-[210px] h-[100px]">
        <CardHeader className="flex -mt-2 items-center gap-2 ">
          <CardTitle>Total Surgeries</CardTitle>
          <HugeiconsIcon icon={Hospital01Icon} size={16} />
        </CardHeader>
        <CardContent>
          <div className="-mt-2 flex flex-row justify-between items-center">
            <div className="text-xl">{surgeries}</div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Surgeries;
