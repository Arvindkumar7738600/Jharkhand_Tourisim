import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send, Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useState } from "react";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      first_name: formData.get("firstName") as string,
      last_name: formData.get("lastName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    try {
      const { error } = await supabase
        .from("contact_submissions")
        .insert([data]);

      if (error) throw error;

      toast.success("Message sent! We'll get back to you soon.");
      e.currentTarget.reset();
    } catch (error: any) {
      toast.error(error.message || "Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCardClick = (action: string, value: string) => {
    switch (action) {
      case "address":
        window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(value)}`, "_blank");
        break;
      case "phone":
        window.location.href = `tel:${value}`;
        break;
      case "email":
        window.location.href = `mailto:${value}`;
        break;
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Main Road, Ranchi", "Jharkhand - 834001", "India"],
      color: "primary"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 1234567890", "+91 0987654321", "Mon-Sat: 9AM - 6PM"],
      color: "waterfall"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@ranchirhythms.com", "support@ranchirhythms.com", "We reply within 24 hours"],
      color: "heritage"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Friday: 9AM - 6PM", "Saturday: 10AM - 4PM", "Sunday: Closed"],
      color: "secondary"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-12">
        {/* Header */}
        <div className="container mx-auto px-4 mb-12 animate-fade-in">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>

        {/* Contact Info Cards */}
        <div className="container mx-auto px-4 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card 
                key={info.title}
                className="hover-lift animate-fade-in cursor-pointer group"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => {
                  if (info.title === "Visit Us") handleCardClick("address", "Main Road, Ranchi, Jharkhand - 834001");
                  else if (info.title === "Call Us") handleCardClick("phone", "+911234567890");
                  else if (info.title === "Email Us") handleCardClick("email", "info@ranchirhythms.com");
                }}
              >
                <CardContent className="p-6 text-center space-y-3">
                  <div className={`mx-auto w-12 h-12 rounded-full bg-${info.color}/10 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <info.icon className={`h-6 w-6 text-${info.color}`} />
                  </div>
                  <h3 className="font-semibold text-lg">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{detail}</p>
                    ))}
                  </div>
                  <Button variant="ghost" size="sm" className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    Click to {info.title.includes("Visit") ? "Navigate" : info.title.includes("Call") ? "Call" : info.title.includes("Email") ? "Email" : "View"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Form & Map */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="animate-fade-in">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" name="firstName" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" name="lastName" placeholder="Doe" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="john@example.com" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="+91 1234567890" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" name="subject" placeholder="How can we help?" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message"
                      name="message"
                      placeholder="Tell us more about your inquiry..." 
                      rows={6}
                      required 
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full" disabled={loading}>
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Google Map */}
            <Card className="animate-fade-in overflow-hidden h-full">
              <CardContent className="p-0 h-full min-h-[600px]">
                <iframe
                  src="https://www.google.com/maps?q=Ranchi,Jharkhand&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "600px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ranchi Location Map"
                />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="container mx-auto px-4 mt-20">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">What are your operating hours?</h3>
                  <p className="text-muted-foreground">We're open Monday to Friday from 9 AM to 6 PM, and Saturday from 10 AM to 4 PM. We're closed on Sundays.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">How do I book a tour package?</h3>
                  <p className="text-muted-foreground">You can book through our website, call us directly, or visit our office. We'll help you customize the perfect itinerary.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Do you provide travel guides?</h3>
                  <p className="text-muted-foreground">Yes! We offer experienced local guides who can show you the best of Jharkhand's hidden gems and popular attractions.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
