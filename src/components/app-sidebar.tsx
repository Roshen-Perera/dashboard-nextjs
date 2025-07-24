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
import { LayoutDashboard } from "lucide-react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Calendar03Icon, DashboardSquare03Icon, Doctor01Icon, MedicalFileIcon, Message01FreeIcons, PatientIcon, PaymentIcon, RecordIcon, UserSquareIcon } from "@hugeicons/core-free-icons";

// This is sample data.
const data = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
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
    <Sidebar {...props}>
      <SidebarHeader>
        <p className="text-3xl font-semibold">MediSync</p>
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <div className="flex items-center gap-2">
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
      <SidebarRail />
    </Sidebar>
  );
}
