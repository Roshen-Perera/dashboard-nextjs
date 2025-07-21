import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { HugeiconsIcon } from "@hugeicons/react";
import { FemaleSymbolIcon, MaleSymbolIcon, UserMultipleIcon } from "@hugeicons/core-free-icons";

const PatientCount = () => {
  return (
    <>
      <Card className="flex w-[210px] h-[100px]">
        <CardHeader className="flex -mt-2 items-center gap-2 ">
          <CardTitle>Card Title</CardTitle>
          <HugeiconsIcon icon={UserMultipleIcon} size={16} />
        </CardHeader>
        <CardContent>
          
        </CardContent>
      </Card>
    </>
  );
};

export default PatientCount;
