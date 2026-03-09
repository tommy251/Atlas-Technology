import { useState } from "react";
import { X, Eye, EyeOff } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const AuthModal = () => {
  const { isAuthOpen, setIsAuthOpen, signIn, signUp } = useAuth();
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  if (!isAuthOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (isSignUp) {
      const { error } = await signUp(email, password, fullName);
      if (error) {
        toast.error(error.message);
      } else {
        toast.success("Account created! Please check your email to verify.");
        setIsAuthOpen(false);
      }
    } else {
      const { error } = await signIn(email, password);
      if (error) {
        toast.error(error.message);
      } else {
        toast.success("Welcome back!");
        setIsAuthOpen(false);
      }
    }
    setLoading(false);
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setIsAuthOpen(false)}>
        <div className="bg-card w-full max-w-md p-8 relative shadow-elevated animate-fade-in" onClick={e => e.stopPropagation()}>
          <button onClick={() => setIsAuthOpen(false)} className="absolute top-4 right-4 p-2 hover:bg-secondary rounded-full transition-colors">
            <X className="h-5 w-5" />
          </button>

          <h2 className="text-2xl font-display font-bold text-foreground text-center mb-2">
            {isSignUp ? "Create Account" : "Sign In"}
          </h2>
          <p className="text-sm text-muted-foreground font-body text-center mb-6">
            {isSignUp ? "Already have an account? " : "Don't have an account yet? "}
            <button onClick={() => setIsSignUp(!isSignUp)} className="text-accent hover:underline font-medium">
              {isSignUp ? "Sign in" : "Sign up for free"}
            </button>
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {isSignUp && (
              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={e => setFullName(e.target.value)}
                required
                className="w-full px-4 py-3 border border-border bg-card text-foreground font-body text-sm outline-none focus:border-accent transition-colors"
              />
            )}
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border border-border bg-card text-foreground font-body text-sm outline-none focus:border-accent transition-colors"
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                minLength={6}
                className="w-full px-4 py-3 border border-border bg-card text-foreground font-body text-sm outline-none focus:border-accent transition-colors pr-12"
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>

            {!isSignUp && (
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 font-body text-muted-foreground cursor-pointer">
                  <input type="checkbox" className="accent-accent" />
                  Stay signed in
                </label>
                <button type="button" className="text-accent hover:underline font-body">Forgot your password?</button>
              </div>
            )}

            <Button type="submit" disabled={loading} className="w-full gradient-brand text-primary-foreground font-display tracking-wider py-6">
              {loading ? "Please wait..." : isSignUp ? "Create Account" : "Sign In"}
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AuthModal;
