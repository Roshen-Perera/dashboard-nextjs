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

export function AddMedicationNote() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <div className="flex items-center text-green-500 gap-2 cursor-pointer">
            <p className="text-base">New Note</p>
            <Plus />
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] bg-[#f5fffa]">
          <DialogHeader>
            <DialogTitle className="font-normal mb-4">Add Note</DialogTitle>
          </DialogHeader>

          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="diagnosedDate" className="font-normal ">
                Diagnosed Date
              </Label>
              <Input id="diagnosedDate" type="date" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="diagnosedNote" className="font-normal">
                Note
              </Label>
              <Textarea
                id="diagnosedNote"
                rows={5}
                placeholder="Enter notes here..."
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
              Add Medication
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
