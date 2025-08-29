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
import { Bed } from "lucide-react";
import { Textarea } from "./ui/textarea";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";

export function AddNewPatient() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <div className="ml-3 flex gap-2 text-sm text-green-600 cursor-pointer hover:text-green-900 transition-colors">
            <Bed size={18} />
            Add new Patient
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
              <Label htmlFor="admission-date" className="font-normal ">Select Department</Label>
              <DropdownMenu>
                <DropdownMenuTrigger id="select-department" className="flex bg-[#f5fffa] font-normal justify-between rounded-sm border-900-green border-1 p-2 gap-2 hover:cursor-pointer hover:bg-green-100">
                  Select Department
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
              <Label htmlFor="admission-date" className="font-normal ">
                Admission Date
              </Label>
              <Input id="admission-date" type="date" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="discharge-date" className="font-normal">
                Expected Discharge Date
              </Label>
              <Input id="discharge-date" type="date" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="notes" className="font-normal">
                Notes
              </Label>
              <Textarea id="notes" rows={5} placeholder="Enter notes here..." />
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" className="bg-[#f5fffa] font-normal">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" className="bg-green-600 font-normal">
              Confirm Admission
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
