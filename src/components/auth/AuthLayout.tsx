
import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <div className="hidden lg:flex lg:w-1/2 bg-black text-white p-12 flex-col justify-between">
        <div className="space-y-6">
          <img
            src="/public/lovable-uploads/cd4d98c4-fe09-4ec6-9448-b529396ea9ec.png"
            alt="KPIN Logo"
            className="w-12 h-12"
          />
          <div className="space-y-2">
            <h1 className="text-4xl font-bold">Welcome to KPIN!</h1>
            <p className="text-gray-400">
              Your one-stop solution to manage and grow your business.
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Finish Your Setup</h2>
          <p className="text-gray-400">
            Review your details and confirm to start using the KPIN Business
            Dashboard.
          </p>
        </div>
        <div className="flex gap-2">
          <div className="h-2 w-2 rounded-full bg-white" />
          <div className="h-2 w-2 rounded-full bg-white/30" />
          <div className="h-2 w-2 rounded-full bg-white/30" />
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center p-6 lg:p-12">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
