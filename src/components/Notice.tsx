import React from "react";
import { Card } from "./ui/card";
import { Bell } from "lucide-react";

const Notice = () => {
  return (
    <Card className="bg-[#f5fffa] w-[1028px] h-[65px] flex items-center p-4">
      <div className="flex items-center gap-4">
        <Bell/>
        <p className="text-lg">
          Important Notice : Please adhere to all COVID-19 safety protocols
          while in the hospital...
        </p>
      </div>
    </Card>
  );
};

export default Notice;
