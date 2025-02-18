
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ProfileDetails = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-xl text-primary font-medium">Profile details</h2>

      <div className="grid gap-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label>Business Name</Label>
            <Input placeholder="Enter Business Name" />
          </div>

          <div className="space-y-2">
            <Label>Industry</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Restaurant" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="restaurant">Restaurant</SelectItem>
                <SelectItem value="cafe">Cafe</SelectItem>
                <SelectItem value="bar">Bar</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Business Description</Label>
          <Textarea
            placeholder="Describe your business"
            className="h-32"
          />
        </div>

        <div className="space-y-2">
          <Label>Upload Business Logo</Label>
          <div className="border-2 border-dashed rounded-lg p-4">
            <input type="file" accept="image/*" className="w-full" />
            <p className="text-sm text-muted-foreground mt-2">
              Supported formats: JPG, PNG (Max size: 2MB)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
