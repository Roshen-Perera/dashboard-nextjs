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
import { Bed, Plus } from "lucide-react";
import { Textarea } from "./ui/textarea";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";

export function RequestTest() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white text-sm font-normal rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-1 transition-colors">
            <Plus className="w-4 h-4" />
            New Test
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] bg-[#f5fffa]">
          <DialogHeader>
            <DialogTitle className="font-normal mb-4">
              Admit Patient
            </DialogTitle>
          </DialogHeader>

          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="typeOfTest" className="font-normal ">
                Type of Test
              </Label>
              <DropdownMenu>
                <DropdownMenuTrigger
                  id="typeOfTest"
                  className="flex bg-[#f5fffa] font-normal justify-between rounded-sm border-900-green border-1 p-2 gap-2 hover:cursor-pointer hover:bg-green-100"
                >
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
              <Label htmlFor="testName" className="font-normal ">
                Test Name
              </Label>
              <Input id="testName" type="text" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="reasonForTest" className="font-normal">
                Reason for Test
              </Label>
              <Textarea
                id="reasonForTest"
                rows={5}
                placeholder="Enter reason for test here..."
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
              Request Test
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
