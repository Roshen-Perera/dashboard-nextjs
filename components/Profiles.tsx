import React from "react";
import { Card } from "./ui/card";
import Image from "next/image";

const Profile = () => {
  return (
    <Card className="bg-[#f5fffa] w-[1028px] h-[245px]  p-4">
      <div>
        <Image
          src={"/assets/sarah.png"}
          width={200}
          height={200}
          alt="Doctor Profile"
          className="rounded-full"
        />
      </div>
    </Card>
  );
};

export default Profile;
