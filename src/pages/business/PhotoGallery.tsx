
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Image, Trash2, Pencil, MoreVertical } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

interface Photo {
  id: string;
  url: string;
}

const PhotoGallery = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const { toast } = useToast();

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    if (photos.length + files.length > 8) {
      toast({
        variant: "destructive",
        title: "Maximum photos reached",
        description: "You can only upload up to 8 photos.",
      });
      return;
    }

    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotos((prev) => [
          ...prev,
          { id: Math.random().toString(), url: reader.result as string },
        ]);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleDelete = (id: string) => {
    setPhotos((prev) => prev.filter((photo) => photo.id !== id));
    toast({
      title: "Photo deleted",
      description: "The photo has been removed from your gallery.",
    });
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-xl text-primary font-medium">Photo Gallery</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Upload Photos</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Upload Gallery Photos</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div
                className="border-2 border-dashed rounded-lg p-8 text-center"
                onClick={() =>
                  document.querySelector<HTMLInputElement>("#photo-input")?.click()
                }
              >
                <div className="flex flex-col items-center gap-2">
                  <Image className="w-12 h-12 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">
                    Drag files here or click to upload
                  </p>
                </div>
                <input
                  id="photo-input"
                  type="file"
                  multiple
                  accept="image/*"
                  className="hidden"
                  onChange={handleUpload}
                />
              </div>
              <p className="text-xs text-muted-foreground">
                Add up to 8 high-quality images. Supported formats: JPG, PNG (Max
                size: 5 MB each).
              </p>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {photos.length === 0 ? (
        <div className="text-center py-12 border-2 border-dashed rounded-lg">
          <div className="flex flex-col items-center gap-4">
            <Image className="w-16 h-16 text-muted-foreground" />
            <div className="space-y-2">
              <h3 className="font-medium">No Photos Uploaded Yet</h3>
              <p className="text-sm text-muted-foreground max-w-md mx-auto">
                Start uploading photos to showcase your business. Highlight your
                dishes, ambiance, and more to attract customers.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="relative group rounded-lg overflow-hidden"
            >
              <img
                src={photo.url}
                alt="Gallery"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-3 flex justify-center gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-white text-black hover:bg-white/90"
                  >
                    <Pencil className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-white text-black hover:bg-white/90"
                    onClick={() => handleDelete(photo.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-white text-black hover:bg-white/90"
                  >
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
