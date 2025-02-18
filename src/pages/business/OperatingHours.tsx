
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const OperatingHours = () => {
  const [isAlwaysOpen, setIsAlwaysOpen] = useState(false);
  const [hours, setHours] = useState(
    DAYS.map((day) => ({
      day,
      isOpen: true,
      openTime: "09:00",
      closeTime: "22:00",
    }))
  );

  const handleDayToggle = (day: string) => {
    setHours(
      hours.map((h) =>
        h.day === day ? { ...h, isOpen: !h.isOpen } : h
      )
    );
  };

  return (
    <div className="space-y-8">
      <h2 className="text-xl text-primary font-medium">Operating Hours</h2>

      <div className="flex items-center justify-between">
        <Label className="text-base">Operating Hours</Label>
        <Select
          value={isAlwaysOpen ? "always" : "specific"}
          onValueChange={(val) => setIsAlwaysOpen(val === "always")}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select hours type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="specific">Specific hours</SelectItem>
            <SelectItem value="always">Always open</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {!isAlwaysOpen && (
        <div className="space-y-4">
          <div className="grid grid-cols-4 gap-4 font-medium text-sm mb-2">
            <div>Day</div>
            <div>Opening Time</div>
            <div>Closing Time</div>
            <div></div>
          </div>

          {hours.map((day) => (
            <div
              key={day.day}
              className="grid grid-cols-4 gap-4 items-center bg-muted/10 p-3 rounded-lg"
            >
              <div className="flex items-center gap-2">
                <Checkbox
                  checked={day.isOpen}
                  onCheckedChange={() => handleDayToggle(day.day)}
                />
                <span>{day.day}</span>
              </div>

              <input
                type="time"
                value={day.openTime}
                onChange={(e) =>
                  setHours(
                    hours.map((h) =>
                      h.day === day.day
                        ? { ...h, openTime: e.target.value }
                        : h
                    )
                  )
                }
                disabled={!day.isOpen}
                className="rounded-md border px-3 py-2"
              />

              <input
                type="time"
                value={day.closeTime}
                onChange={(e) =>
                  setHours(
                    hours.map((h) =>
                      h.day === day.day
                        ? { ...h, closeTime: e.target.value }
                        : h
                    )
                  )
                }
                disabled={!day.isOpen}
                className="rounded-md border px-3 py-2"
              />

              <div className="text-sm text-muted-foreground">
                {day.isOpen ? (
                  `${day.openTime} - ${day.closeTime}`
                ) : (
                  <span className="text-destructive">closed</span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OperatingHours;
