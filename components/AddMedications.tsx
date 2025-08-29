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

export function AddMedications() {
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
              <Label htmlFor="medicationName" className="font-normal ">
                Medication Name
              </Label>
              <Input id="medicationName" type="text" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="medicationDosage" className="font-normal">
                Dosage
              </Label>
              <Input id="medicationDosage" type="text" />
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
              Add Medication
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
