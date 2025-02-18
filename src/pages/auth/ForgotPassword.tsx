
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AuthLayout from "@/components/auth/AuthLayout";
import { useToast } from "@/hooks/use-toast";

const ForgotPassword = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Check your email",
      description: "We've sent you a link to reset your password.",
    });
  };

  return (
    <AuthLayout>
      <div className="space-y-6 w-full max-w-md">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Reset Password</h1>
          <p className="text-muted-foreground">
            Enter your email address and we'll send you a link to reset your
            password.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <Input type="email" placeholder="example@business.com" required />
          </div>

          <Button type="submit" className="w-full">
            Send Reset Link
          </Button>
        </form>

        <p className="text-center text-sm text-muted-foreground">
          Remember your password?{" "}
          <a href="/login" className="text-primary hover:underline">
            Sign In
          </a>
        </p>
      </div>
    </AuthLayout>
  );
};

export default ForgotPassword;
