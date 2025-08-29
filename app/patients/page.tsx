"use client"

import { AppSidebar } from '@/components/app-sidebar';
import PageHeader from '@/components/PageHeader';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import React from 'react'

const Home = () => {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset className="bg-[#f5fffa]">
          <div className="pl-4 pr-8">
            <PageHeader />
            
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}

export default Home
