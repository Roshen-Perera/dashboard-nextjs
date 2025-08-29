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
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";
import { Plus } from "lucide-react";

export function AddMedicalCondition() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <div className="flex items-center text-green-500 gap-2 cursor-pointer">
            <p className="text-base">Add New</p>
            <Plus />
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] bg-[#f5fffa]">
          <DialogHeader>
            <DialogTitle className="font-normal mb-4">
              Add Condition
            </DialogTitle>
          </DialogHeader>

          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="allergyName" className="font-normal ">
                Allergy Name
              </Label>
              <Input id="allergyName" type="text" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="diagnosedDate" className="font-normal ">
                Diagnosed Date
              </Label>
              <Input id="diagnosedDate" type="date" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="selectDepartment" className="font-normal ">
                Select Department
              </Label>
              <DropdownMenu>
                <DropdownMenuTrigger
                  id="selectDepartment"
                  className="flex bg-[#f5fffa] font-normal justify-between rounded-sm border-900-green border-1 p-2 gap-2 hover:cursor-pointer hover:bg-green-100"
                >
                  Select Department
                  <HugeiconsIcon icon={ArrowDown01Icon} />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Monitored</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" className="bg-[#f5fffa] font-normal">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" className="bg-green-600 font-normal">
              Add Condition
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
