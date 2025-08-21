"use-client"

import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { ArrowDown01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

const StatusMenu = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex bg-[#f5fffa] font-normal rounded-sm border-1 p-2 gap-2 hover:cursor-pointer hover:bg-green-100">
          All Status
          <HugeiconsIcon icon={ArrowDown01Icon} />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default StatusMenu
