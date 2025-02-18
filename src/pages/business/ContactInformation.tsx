
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ContactInformation = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-xl text-primary font-medium">Contact Information</h2>

      <div className="grid gap-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label>Phone Number</Label>
            <div className="flex gap-2">
              <select className="w-24 rounded-md border border-input px-3">
                <option>🇳🇬 +234</option>
              </select>
              <Input type="tel" className="flex-1" />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Email Address</Label>
            <Input type="email" placeholder="Enter your Email Address" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label>Address Line 1</Label>
            <Input placeholder="Enter your business address" />
          </div>

          <div className="space-y-2">
            <Label>Address Line 2</Label>
            <Input placeholder="Enter your Address" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="space-y-2">
            <Label>City</Label>
            <Input placeholder="Enter City name" />
          </div>

          <div className="space-y-2">
            <Label>State</Label>
            <Input placeholder="Enter State" />
          </div>

          <div className="space-y-2">
            <Label>Zip</Label>
            <Input placeholder="Enter Zip" />
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg text-primary font-medium">Social Media Accounts</h3>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Twitter</Label>
              <div className="relative">
                <Input placeholder="Enter your Twitter page URL" />
                <span className="absolute left-3 top-1/2 -translate-y-1/2">
                  <svg width="24" height="24" className="text-muted-foreground">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Facebook</Label>
              <div className="relative">
                <Input placeholder="Enter your Facebook page URL" />
                <span className="absolute left-3 top-1/2 -translate-y-1/2">
                  <svg width="24" height="24" className="text-muted-foreground">
                    <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                  </svg>
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Instagram</Label>
              <div className="relative">
                <Input placeholder="Enter your Instagram page URL" />
                <span className="absolute left-3 top-1/2 -translate-y-1/2">
                  <svg width="24" height="24" className="text-muted-foreground">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <Label>TikTok</Label>
              <div className="relative">
                <Input placeholder="Enter your TikTok page URL" />
                <span className="absolute left-3 top-1/2 -translate-y-1/2">
                  <svg width="24" height="24" className="text-muted-foreground">
                    <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
