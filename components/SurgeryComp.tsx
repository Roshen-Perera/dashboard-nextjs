import React from "react";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

interface SurgeriesProps {
  surgeries: number;
}

const Surgeries: React.FC<SurgeriesProps> = ({ surgeries }) => {
  return (
    <>
      <Card className="bg-[#f5fffa] flex w-[210px] h-[100px]">
        <CardHeader className="flex -mt-2 items-center gap-2 ">
          <CardTitle>Total Surgeries</CardTitle>
          <Image
            src={"/assets/icons/surgery.png"}
            width={15}
            height={15}
            alt="Surgery Icon"
          />
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
