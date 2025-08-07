import React from "react";
import { Card } from "./ui/card";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { Edit03Icon } from "@hugeicons/core-free-icons";

const Profile = () => {
  return (
    <Card className="bg-[#f5fffa] w-[1028px] h-[245px]  p-4">
      <div className="flex gap-8">
        <div>
          <Image
            src={"/assets/sarah.png"}
            width={180}
            height={180}
            alt="Doctor Profile"
            className="rounded-full"
          />
          <HugeiconsIcon icon={Edit03Icon} />
        </div>
        <div className="flex flex-row justify-between w-full">
          <div>
            <p className="text-3xl">Dr. Sarah Johnson</p>
            <p className="text-xl text-gray-500">Cardiology Specialist</p>
          </div>
          <div>
            <a href="#" className="text-green-500 text-sm">
              View All {">"}
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Profile;
