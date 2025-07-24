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
import { Calendar03Icon, DashboardSquare03Icon, Doctor01Icon, MedicalFileIcon, Message01FreeIcons, PatientIcon, PaymentIcon,  Setting06FreeIcons,  Settings01FreeIcons,  UserSquareIcon } from "@hugeicons/core-free-icons";

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
          icon: DashboardSquare03Icon,
        },
        {
          title: "Profile",
          url: "#",
          isActive: false,
          icon: UserSquareIcon,
        },
        {
          title: "Appointments",
          url: "#",
          isActive: false,
          icon: Calendar03Icon,
        },
        {
          title: "Patients",
          url: "#",
          isActive: false,
          icon: PatientIcon,
        },
        {
          title: "Surgeries",
          url: "#",
          isActive: false,
          icon: Doctor01Icon,
        },
        {
          title: "Payments",
          url: "#",
          isActive: false,
          icon: PaymentIcon,
        },
        {
          title: "Medical Records",
          url: "#",
          isActive: false,
          icon: MedicalFileIcon,
        },
        {
          title: "Messages",
          url: "#",
          isActive: false,
          icon: Message01FreeIcons,
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="bg-red" {...props}>
      <SidebarHeader>
        <p className="text-3xl font-semibold mb-5">MediSync</p>
      </SidebarHeader>
      <SidebarContent>
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
                          <HugeiconsIcon icon={item.icon} />
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
      <div className="mt-auto p-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="#settings" className="flex items-center gap-2">
                <HugeiconsIcon icon={Settings01FreeIcons} />
                Settings
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a
                href="#signout"
                className="flex items-center gap-2 text-red-500"
              >
                <HugeiconsIcon icon={UserSquareIcon} />
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
