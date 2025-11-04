import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { User, Mail, LogOut, Calendar, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setUser(session.user);
      } else {
        navigate("/auth");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const checkUser = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (session?.user) {
      setUser(session.user);
    } else {
      navigate("/auth");
    }
    setLoading(false);
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error("Error logging out");
    } else {
      toast.success("Logged out successfully");
      navigate("/");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  const getInitials = () => {
    const firstName = user?.user_metadata?.first_name || "";
    const lastName = user?.user_metadata?.last_name || "";
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase() || "U";
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Navbar />

      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header Card */}
          <Card className="mb-8 overflow-hidden animate-fade-in">
            <div className="h-32 bg-gradient-to-r from-primary via-waterfall to-heritage"></div>
            <CardContent className="relative px-8 pb-8">
              <div className="flex flex-col md:flex-row items-center md:items-end gap-6 -mt-16">
                <Avatar className="w-32 h-32 border-4 border-background shadow-xl">
                  <AvatarFallback className="text-4xl font-bold bg-gradient-to-br from-primary to-waterfall text-white">
                    {getInitials()}
                  </AvatarFallback>
                </Avatar>

                <div className="flex-1 text-center md:text-left space-y-2 mt-4">
                  <h1 className="text-3xl font-bold">
                    {user?.user_metadata?.first_name || "User"}{" "}
                    {user?.user_metadata?.last_name || ""}
                  </h1>
                  <p className="text-muted-foreground flex items-center justify-center md:justify-start gap-2">
                    <Mail className="w-4 h-4" />
                    {user?.email}
                  </p>
                </div>

                <Button
                  variant="outline"
                  onClick={handleLogout}
                  className="hover:bg-destructive hover:text-destructive-foreground transition-colors"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Account Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="hover-lift animate-fade-in">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3 text-primary">
                  <User className="w-5 h-5" />
                  <h3 className="font-semibold text-lg">Account Details</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">User ID</span>
                    <span className="font-mono text-xs">{user?.id?.slice(0, 8)}...</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Email Verified</span>
                    <span className={user?.email_confirmed_at ? "text-green-600" : "text-orange-600"}>
                      {user?.email_confirmed_at ? "Yes" : "Pending"}
                    </span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-muted-foreground">Account Type</span>
                    <span className="font-medium">Standard</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift animate-fade-in" style={{ animationDelay: "100ms" }}>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3 text-waterfall">
                  <Calendar className="w-5 h-5" />
                  <h3 className="font-semibold text-lg">Membership Info</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Member Since</span>
                    <span className="font-medium">
                      {user?.created_at ? formatDate(user.created_at) : "N/A"}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Last Login</span>
                    <span className="font-medium">
                      {user?.last_sign_in_at ? formatDate(user.last_sign_in_at) : "N/A"}
                    </span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-muted-foreground">Total Bookings</span>
                    <span className="font-medium">0</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <Card className="animate-fade-in" style={{ animationDelay: "200ms" }}>
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-4">Quick Actions</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button
                  variant="outline"
                  className="h-auto py-4 flex flex-col gap-2 hover-lift"
                  onClick={() => navigate("/rentals")}
                >
                  <MapPin className="w-6 h-6 text-primary" />
                  <span>Book a Car</span>
                </Button>
                <Button
                  variant="outline"
                  className="h-auto py-4 flex flex-col gap-2 hover-lift"
                  onClick={() => navigate("/places")}
                >
                  <MapPin className="w-6 h-6 text-waterfall" />
                  <span>Explore Places</span>
                </Button>
                <Button
                  variant="outline"
                  className="h-auto py-4 flex flex-col gap-2 hover-lift"
                  onClick={() => navigate("/contact")}
                >
                  <Phone className="w-6 h-6 text-heritage" />
                  <span>Contact Support</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
