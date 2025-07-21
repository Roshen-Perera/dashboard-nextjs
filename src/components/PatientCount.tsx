import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  FemaleSymbolIcon,
  MaleSymbolIcon,
  UserMultipleIcon,
} from "@hugeicons/core-free-icons";

const PatientCount = () => {
  return (
    <>
      <Card className="flex w-[210px] h-[100px]">
        <CardHeader className="flex -mt-2 items-center gap-2 ">
          <CardTitle>Card Title</CardTitle>
          <HugeiconsIcon icon={UserMultipleIcon} size={16} />
        </CardHeader>
        <CardContent>
          <div className="-mt-2 flex flex-row justify-between items-center">
            <div className="flex">
              <HugeiconsIcon icon={MaleSymbolIcon} size={35} color="#00beff" />
              {85}
            </div>
            <div className="flex">
              <HugeiconsIcon
                icon={FemaleSymbolIcon}
                size={35}
                color="#FF00CA"
              />
              {85}
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default PatientCount;
