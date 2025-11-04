import { Link } from "react-router-dom";
import { Mountain, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube, MapPinCheckInside } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-card via-card to-primary/5 border-t border-border mt-20 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 group">
              <MapPinCheckInside className="h-10 w-10 text-primary transition-all group-hover:scale-110 group-hover:rotate-12" />
              <span className="text-2xl font-bold text-green-600">Jharkhand Tourism</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your gateway to exploring the natural beauty and cultural heritage of Jharkhand.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all hover-glow"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all hover-glow"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://www.youtube.com/@ArvindkumarIITM" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all hover-glow"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all hover-glow"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-6 text-foreground text-lg">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/places" className="text-sm text-muted-foreground hover:text-primary hover:translate-x-2 transition-all inline-flex items-center gap-2 group">
                <span className="w-0 h-0.5 bg-primary group-hover:w-4 transition-all" />
                Tourist Places
              </Link></li>
              <li><Link to="/rentals" className="text-sm text-muted-foreground hover:text-primary hover:translate-x-2 transition-all inline-flex items-center gap-2 group">
                <span className="w-0 h-0.5 bg-primary group-hover:w-4 transition-all" />
                Car Rentals
              </Link></li>
              <li><Link to="/hotels" className="text-sm text-muted-foreground hover:text-primary hover:translate-x-2 transition-all inline-flex items-center gap-2 group">
                <span className="w-0 h-0.5 bg-primary group-hover:w-4 transition-all" />
                Hotels
              </Link></li>
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-primary hover:translate-x-2 transition-all inline-flex items-center gap-2 group">
                <span className="w-0 h-0.5 bg-primary group-hover:w-4 transition-all" />
                About Jharkhand
              </Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-6 text-foreground text-lg">Services</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                Tour Packages
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                Hotel Booking
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                Vehicle Rentals
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                Travel Guide
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-6 text-foreground text-lg">Contact Us</h3>
            <ul className="space-y-4">
              <li 
                onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Ranchi, Jharkhand, India")}`, "_blank")}
                className="flex items-start gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group cursor-pointer"
              >
                <MapPin className="h-5 w-5 mt-0.5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>Near Radission Blu Ranchi, Jharkhand</span>
              </li>
              <li 
                onClick={() => window.location.href = "tel:9608792602"}
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group cursor-pointer"
              >
                <Phone className="h-5 w-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>+91 9608792602</span>
              </li>
              <li 
                onClick={() => window.location.href = "tel:9608792602"}
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group cursor-pointer"
              >
                <Phone className="h-5 w-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>+91 9798153117</span>
              </li>
              <li 
                onClick={() => window.location.href = "mailto:info@explorejharkhand.com"}
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group cursor-pointer"
              >
                <Mail className="h-5 w-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>infojharkhandtourism.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground">&copy; 2025 Jharkhand Tourism. All rights reserved.</p>
          <p className="text-xs text-muted-foreground/70 mt-2">Made By Arvind Kumar [IIT MADRAS]❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
