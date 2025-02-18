
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProfileDetails from "./ProfileDetails";
import ContactInformation from "./ContactInformation";
import OperatingHours from "./OperatingHours";
import PhotoGallery from "./PhotoGallery";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const ManageProfile = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const { toast } = useToast();

  const handleSave = () => {
    toast({
      title: "Changes saved",
      description: "Your business profile has been updated successfully.",
    });
  };

  return (
    <div className="container mx-auto p-6 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Manage Business Profile</h1>
      </div>

      <Tabs
        defaultValue="profile"
        value={activeTab}
        onValueChange={setActiveTab}
        className="space-y-6"
      >
        <TabsList className="grid grid-cols-4 gap-4 bg-transparent h-auto p-0">
          <TabsTrigger
            value="profile"
            className="data-[state=active]:bg-black data-[state=active]:text-white"
          >
            Profile details
          </TabsTrigger>
          <TabsTrigger
            value="contact"
            className="data-[state=active]:bg-black data-[state=active]:text-white"
          >
            Contact Information
          </TabsTrigger>
          <TabsTrigger
            value="hours"
            className="data-[state=active]:bg-black data-[state=active]:text-white"
          >
            Operating Hours
          </TabsTrigger>
          <TabsTrigger
            value="gallery"
            className="data-[state=active]:bg-black data-[state=active]:text-white"
          >
            Photo Gallery
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          <ProfileDetails />
        </TabsContent>

        <TabsContent value="contact" className="space-y-6">
          <ContactInformation />
        </TabsContent>

        <TabsContent value="hours" className="space-y-6">
          <OperatingHours />
        </TabsContent>

        <TabsContent value="gallery" className="space-y-6">
          <PhotoGallery />
        </TabsContent>

        <div className="flex justify-end gap-4">
          <Button variant="outline">Cancel</Button>
          <Button onClick={handleSave}>Save Changes</Button>
        </div>
      </Tabs>
    </div>
  );
};

export default ManageProfile;
