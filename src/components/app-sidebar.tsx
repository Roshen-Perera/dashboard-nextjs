import * as React from "react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { HugeiconsIcon } from "@hugeicons/react";
import { Calendar03Icon, DashboardSquare03Icon, Doctor01Icon, MedicalFileIcon, Message01FreeIcons, PatientIcon, PaymentIcon, Settings01FreeIcons,  UserSquareIcon } from "@hugeicons/core-free-icons";
import Image from "next/image";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Getting Started",
      url: "#",
      items: [
        {
          title: "Dashboard",
          url: "#",
          isActive: false,
          icon: "/assets/icons/dashboard.png",
        },
        {
          title: "Profile",
          url: "#",
          isActive: false,
          icon: "/assets/icons/doctor.png",
        },
        {
          title: "Appointments",
          url: "#",
          isActive: false,
          icon: "/assets/icons/calendar.png",
        },
        {
          title: "Patients",
          url: "#",
          isActive: false,
          icon: "/assets/icons/patient.png",
        },
        {
          title: "Surgeries",
          url: "#",
          isActive: false,
          icon: "/assets/icons/surgery.png",
        },
        {
          title: "Payments",
          url: "#",
          isActive: false,
          icon: "/assets/icons/payments.png",
        },
        {
          title: "Medical Records",
          url: "#",
          isActive: false,
          icon: "/assets/icons/records.png",
        },
        {
          title: "Messages",
          url: "#",
          isActive: false,
          icon: "/assets/icons/messages.png",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader className="bg-[#f5fffa] items-center">
        <p className="text-3xl font-semibold mb-4  mt-4">MediSync</p>
      </SidebarHeader>
      <SidebarContent className="bg-[#f5fffa]">
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <div className="flex items-center mb-3">
                      <SidebarMenuButton asChild isActive={item.isActive}>
                        <a href={item.url} className="flex items-center gap-2">
                          <Image
                            src={item.icon}
                            alt={item.title}
                            width={15}
                            height={15}
                          />
                          {item.title}
                        </a>
                      </SidebarMenuButton>
                    </div>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <div className="bg-[#f5fffa] mt-auto p-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="#settings" className="flex items-center gap-2">
                <Image
                  src={"/assets/icons/settings.png"}
                  width={15}
                  height={15}
                  alt="Settings Icon"
                />
                Settings
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a
                href="#signout"
                className="flex items-center gap-2"
              >
                <Image
                  src={"/assets/icons/signout.png"}
                  width={15}
                  height={15}
                  alt="Sign Out Icon"
                />
                Sign Out
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </div>
      <SidebarRail />
    </Sidebar>
  );
}
