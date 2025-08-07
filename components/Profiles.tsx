import React from "react";
import { Card } from "./ui/card";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { Edit03Icon } from "@hugeicons/core-free-icons";

const Profile = () => {
  return (
    <Card className="bg-[#f5fffa] w-[1028px] h-[280px] p-6">
      <div className="flex gap-6">
        <div className="relative">
          <Image
            src={"/assets/sarah.png"}
            width={220}
            height={220}
            alt="Doctor Profile"
            className="rounded-full"
          />
          <div className="absolute -bottom-2 -right-3 bg-white rounded-full p-2 shadow-lg">
            <HugeiconsIcon
              icon={Edit03Icon}
              className="w-4 h-4 text-green-600"
            />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl text-gray-900 mb-1">
                Dr. Sarah Johnson
              </h1>
              <p className="text-lg text-gray-500">Cardiology Specialist</p>
            </div>
            <div className="flex items-center gap-2">
              <HugeiconsIcon
                icon={Edit03Icon}
                className="w-4 h-4 text-green-500"
              />
              <p className="text-sm text-green-500">Edit Profile</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <Card className="bg-[#f5fffa] rounded-lg p-4 border border-gray-200">
              <p className="text-lg text-gray-500">Experience</p>
              <p className="text-xl text-gray-900">15+ Years</p>
            </Card>
            <Card className="bg-[#f5fffa] rounded-lg p-4 border border-gray-200">
              <p className="text-lg text-gray-500">Patients</p>
              <p className="text-xl text-gray-900">10,000+</p>
            </Card>
            <Card className="bg-[#f5fffa] rounded-lg p-4 border border-gray-200">
              <p className="text-lg text-gray-500">Rating</p>
              <p className="text-xl text-gray-900">4.9/5.0</p>
            </Card>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Profile;
