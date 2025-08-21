"use-client"

import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { ArrowDown01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

const StatusMenu = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex bg-[#f5fffa] font-normal rounded-sm border-900-green border-1 p-2 gap-2 hover:cursor-pointer hover:bg-green-100">
          All Status
          <HugeiconsIcon icon={ArrowDown01Icon} />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Upcoming</DropdownMenuItem>
          <DropdownMenuItem>Completed</DropdownMenuItem>
          <DropdownMenuItem>Cancelled</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default StatusMenu
