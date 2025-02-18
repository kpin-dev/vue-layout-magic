
import { Button } from "@/components/ui/button";

const SocialAuth = () => {
  return (
    <div className="grid grid-cols-3 gap-3">
      <Button variant="outline" className="w-full">
        <img
          src="https://www.google.com/favicon.ico"
          alt="Google"
          className="w-5 h-5"
        />
      </Button>
      <Button variant="outline" className="w-full">
        <img
          src="https://www.apple.com/favicon.ico"
          alt="Apple"
          className="w-5 h-5"
        />
      </Button>
      <Button variant="outline" className="w-full">
        <img
          src="https://www.facebook.com/favicon.ico"
          alt="Facebook"
          className="w-5 h-5"
        />
      </Button>
    </div>
  );
};

export default SocialAuth;
