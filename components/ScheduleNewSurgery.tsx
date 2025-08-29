import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";
import { Textarea } from "./ui/textarea";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";

export function ScheduleNewSurgery() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <div className="flex items-center text-green-500 gap-2 cursor-pointer">
            <p className="text-base">Schedule Surgery</p>
            <Plus />
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] bg-[#f5fffa]">
          <DialogHeader>
            <DialogTitle className="font-normal mb-4">
              Admit Patient
            </DialogTitle>
          </DialogHeader>

          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="surgeryType" className="font-normal ">
                Surgery Type
              </Label>
              <Input id="surgeryType" type="text" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="operationRoom" className="font-normal ">
                Operation Room
              </Label>
              <DropdownMenu>
                <DropdownMenuTrigger
                  id="operationRoom"
                  className="flex bg-[#f5fffa] font-normal justify-between rounded-sm border-900-green border-1 p-2 gap-2 hover:cursor-pointer hover:bg-green-100"
                >
                  Select Operation Room
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
            <div className="grid gap-3">
              <Label htmlFor="surgeryDate" className="font-normal ">
                Surgery Date
              </Label>
              <Input id="surgeryDate" type="date" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="surgeryTime" className="font-normal">
                Surgery Time
              </Label>
              <Input id="surgeryTime" type="time" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="reason" className="font-normal">
                Reason for Surgery
              </Label>
              <Textarea
                id="reason"
                rows={5}
                placeholder="Enter reason here..."
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="instructions" className="font-normal">
                Instructions
              </Label>
              <Textarea
                id="instructions"
                rows={5}
                placeholder="Enter instructions here..."
              />
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" className="bg-[#f5fffa] font-normal">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" className="bg-green-600 font-normal">
              Schedule Surgery
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
