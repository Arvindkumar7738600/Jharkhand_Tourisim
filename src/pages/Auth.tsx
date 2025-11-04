import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { Loader2, Mail, ArrowRight, ArrowLeft, ArrowUpLeftFromSquareIcon } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import heroImage from "@/assets/auth-hero.jpg";
import logoIcon from "@/assets/logo-icon.png";

const Auth = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        navigate("/");
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        navigate("/");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-otp', {
        body: {
          email,
          firstName: isSignUp ? firstName : undefined,
          lastName: isSignUp ? lastName : undefined,
          isSignUp,
        },
      });

      if (error) throw error;

      if (!data.success) {
        throw new Error(data.error || "Failed to send OTP");
      }

      setOtpSent(true);
      toast.success("OTP sent! Please check your email for the 6-digit code.");
    } catch (error: any) {
      toast.error(error.message || "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('verify-otp', {
        body: {
          email,
          otp,
          firstName: isSignUp ? firstName : undefined,
          lastName: isSignUp ? lastName : undefined,
          isSignUp,
        },
      });

      if (error) throw error;

      if (!data.success) {
        throw new Error(data.error || "Invalid OTP");
      }

      // If login successful with magic link, verify it
      if (data.action_link) {
        const url = new URL(data.action_link);
        const token = url.searchParams.get('token');
        const type = url.searchParams.get('type') as any;
        
        if (token && type) {
          const { error: verifyError } = await supabase.auth.verifyOtp({
            token_hash: token,
            type,
          });
          
          if (verifyError) throw verifyError;
        }
      }

      toast.success(isSignUp ? "Account created successfully!" : "Welcome back!");
      navigate("/");
    } catch (error: any) {
      toast.error(error.message || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/`,
        },
      });

      if (error) throw error;
    } catch (error: any) {
      toast.error(error.message || "Failed to sign in with Google");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Hero Image */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        {/* Animated Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[20s] ease-in-out hover:scale-110"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-waterfall/80 to-heritage/95 animate-pulse" 
             style={{ animationDuration: '8s' }} />
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-waterfall/30 rounded-full  animate-pulse" 
             style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-heritage/20 rounded-full  animate-pulse" 
             style={{ animationDuration: '6s', animationDelay: '2s' }} />
        
        <div className="relative z-10 flex flex-col justify-between p-12 text-white w-full">
          <div className="flex items-center gap-3 animate-fade-in">
            <img src={logoIcon} alt="Logo" className="w-12 h-12 hover:rotate-12 transition-transform duration-300" />
            <span className="text-2xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent hover:scale-105">
              Jharkhand Tourism
            </span>
          </div>
          
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-6xl font-bold leading-tight drop-shadow-2xl">
              Discover the<br />
              <span className="bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
                Beauty of Jharkhand
              </span>
            </h1>
            <p className="text-xl text-white/90 max-w-md drop-shadow-lg leading-relaxed">
              Your gateway to unforgettable experiences, scenic destinations, and seamless travel planning.
            </p>
            
            {/* Animated Feature Pills */}
            <div className="flex flex-wrap gap-3 pt-4">
              {['🏔️ Nature', '🏛️ Heritage', '🎨 Culture', '🌊 Waterfalls'].map((feature, i) => (
                <div 
                  key={i}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-default animate-fade-in"
                  style={{ animationDelay: `${0.4 + i * 0.1}s` }}
                >
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <Button 
            variant="outline" 
            className="w-fit bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm hover:scale-105 transition-all duration-300 animate-fade-in shadow-lg"
            onClick={() => navigate("/")}
            style={{ animationDelay: '0.6s' }}
          >
            Back to website
            <ArrowUpLeftFromSquareIcon className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Right Side - Auth Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="w-full max-w-md space-y-8 animate-fade-in">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center justify-center gap-3 mb-8">
            <img src={logoIcon} alt="Logo" className="w-10 h-10" />
            <span className="text-xl font-bold">Explore Jharkhand</span>
          </div>

          <div className="space-y-2">
            <h2 className="text-4xl font-bold">
              {isSignUp ? "Create an account" : "Welcome back"}
            </h2>
            <p className="text-muted-foreground">
              {isSignUp ? "Already have an account? " : "Don't have an account? "}
              <button
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-primary hover:underline font-semibold"
              >
                {isSignUp ? "Log in" : "Sign up"}
              </button>
            </p>
          </div>

          <form onSubmit={otpSent ? handleVerifyOTP : handleSendOTP} className="space-y-4">
            {!otpSent ? (
              <>
                {isSignUp && (
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First name</Label>
                      <Input
                        id="firstName"
                        placeholder="Fletcher"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last name</Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                {isSignUp && (
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="terms"
                      required
                      className="h-4 w-4 rounded border-input"
                    />
                    <label htmlFor="terms" className="text-sm text-muted-foreground">
                      I agree to the{" "}
                      <a href="#" className="text-primary hover:underline">
                        Terms & Conditions
                      </a>
                    </label>
                  </div>
                )}

                <Button
                  type="submit"
                  variant="hero"
                  className="w-full hover-lift"
                  disabled={loading}
                >
                  {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {isSignUp ? "Send OTP" : "Send Login OTP"}
                </Button>
              </>
            ) : (
              <>
                <div className="space-y-2">
                  <Label htmlFor="otp">Enter OTP</Label>
                  <p className="text-sm text-muted-foreground">
                    We sent a 6-digit code to <strong>{email}</strong>
                  </p>
                  <Input
                    id="otp"
                    type="text"
                    placeholder="000000"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                    maxLength={6}
                    required
                    className="text-center text-2xl tracking-widest font-mono"
                  />
                </div>

                <div className="flex gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1"
                    onClick={() => {
                      setOtpSent(false);
                      setOtp("");
                    }}
                    disabled={loading}
                  >
                    Back
                  </Button>
                  <Button 
                    type="submit" 
                    variant="hero"
                    className="flex-1 hover-lift" 
                    disabled={loading || otp.length !== 6}
                  >
                    {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Verify OTP
                  </Button>
                </div>

                <Button
                  type="button"
                  variant="ghost"
                  className="w-full text-sm"
                  onClick={handleSendOTP}
                  disabled={loading}
                >
                  Didn't receive code? Resend OTP
                </Button>
              </>
            )}
          </form>

          {!otpSent && (
            <>
              <div className="relative">
                <Separator />
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-2 text-xs text-muted-foreground">
                  Or continue with
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  onClick={handleGoogleSignIn}
                  disabled={loading}
                  className="w-full"
                >
                  <FcGoogle className="mr-2 h-5 w-5" />
                  Google
                </Button>
                <Button
                  variant="outline"
                  onClick={async () => {
                    setLoading(true);
                    try {
                      const { error } = await supabase.auth.signInWithOAuth({
                        provider: "apple",
                        options: {
                          redirectTo: `${window.location.origin}/`,
                        },
                      });
                      if (error) throw error;
                    } catch (error: any) {
                      toast.error("Apple login not configured. Please enable it in Auth Settings.");
                      setLoading(false);
                    }
                  }}
                  disabled={loading}
                  className="w-full"
                >
                  <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  Apple
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
