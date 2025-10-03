import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Leaf, Mail, Phone, Globe } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Welcome = () => {
  const navigate = useNavigate();
  const [loginMethod, setLoginMethod] = useState<"email" | "phone">("email");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleLogin = () => {
    // In a real app, this would authenticate the user
    navigate("/dashboard");
  };

  const handleGuestLogin = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-background via-[hsl(var(--eco-light))] to-background relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-[image:var(--gradient-glow)] pointer-events-none"></div>
      
      {/* Logo and Tagline */}
      <div className="text-center mb-8 space-y-4 relative z-10">
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="w-20 h-20 rounded-3xl bg-[image:var(--gradient-eco)] flex items-center justify-center shadow-[var(--shadow-strong)] animate-in zoom-in duration-700">
            <Leaf className="w-12 h-12 text-primary-foreground" />
          </div>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold bg-[image:var(--gradient-eco)] bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Yourja
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">Your Energy. Your Impact.</p>
      </div>

      {/* Login Card */}
      <Card className="w-full max-w-md shadow-[var(--shadow-strong)] border-border/50 backdrop-blur-sm bg-card/95 relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Welcome</CardTitle>
          <CardDescription>Choose your login method to get started</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Login Method Toggle */}
          <div className="flex gap-2 p-1 bg-muted rounded-lg">
            <Button
              variant={loginMethod === "email" ? "default" : "ghost"}
              className="flex-1"
              onClick={() => setLoginMethod("email")}
            >
              <Mail className="mr-2" />
              Email
            </Button>
            <Button
              variant={loginMethod === "phone" ? "default" : "ghost"}
              className="flex-1"
              onClick={() => setLoginMethod("phone")}
            >
              <Phone className="mr-2" />
              Phone
            </Button>
          </div>

          {/* Login Form */}
          <div className="space-y-4">
            {loginMethod === "email" ? (
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            ) : (
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            )}

            <Button 
              variant="eco" 
              size="lg" 
              className="w-full"
              onClick={handleLogin}
            >
              Continue
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">Or</span>
              </div>
            </div>

            <Button
              variant="outline"
              size="lg"
              className="w-full"
              onClick={handleGuestLogin}
            >
              Continue as Guest
            </Button>
          </div>

          {/* Language Selector */}
          <div className="pt-4 border-t">
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <Globe className="mr-2" />
              English (US)
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Footer */}
      <div className="mt-8 text-center text-sm text-muted-foreground relative z-10 animate-in fade-in duration-1000 delay-500">
        <p>By continuing, you agree to our Terms & Privacy Policy</p>
      </div>
    </div>
  );
};

export default Welcome;
