import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Car, Hotel, Mountain, Sparkles, ArrowRight, Star, Users, Camera, TrendingUp, Quote, Locate, Leaf } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-jharkhand.jpg";
import { useEffect, useState } from "react";

// Import Jharkhand tourist location images
import hundruFalls from "@/assets/places/hundru-falls.jpg";
import betlaPark from "@/assets/places/betla-national-park.jpg";
import jagannathTemple from "@/assets/places/jagannath-temple.jpg";
import dassamFalls from "@/assets/places/dassam-falls.jpg";
import netarhat from "@/assets/places/netarhat.jpg";
import patratuValley from "@/assets/places/patratu-valley.jpg";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero carousel data with Jharkhand famous locations
  const heroSlides = [
    {
      image: hundruFalls,
      title: "Hundru Falls",
      subtitle: "Experience the majestic 100m waterfall surrounded by pristine forests"
    },
    {
      image: betlaPark,
      title: "Betla National Park",
      subtitle: "Discover wildlife sanctuary with tigers, elephants and diverse flora"
    },
    {
      image: jagannathTemple,
      title: "Jagannath Temple",
      subtitle: "Marvel at the 17th-century architectural masterpiece of Ranchi"
    },
    {
      image: dassamFalls,
      title: "Dassam Falls",
      subtitle: "Witness the cascading beauty of this spectacular waterfall"
    },
    {
      image: netarhat,
      title: "Netarhat",
      subtitle: "The Queen of Chotanagpur - breathtaking sunrise and sunset views"
    },
    {
      image: patratuValley,
      title: "Patratu Valley",
      subtitle: "Stunning reservoir valley offering panoramic scenic vistas"
    }
  ];
  

  // Auto-rotate carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const features = [
    {
      icon: MapPin,
      title: "Tourist Places",
      description: "Explore breathtaking waterfalls, ancient temples, and lush forests",
      link: "/places",
      gradient: "from-primary to-primary-glow",
      stats: "50+ Locations",
    },
    {
      icon: Car,
      title: "Car Rentals",
      description: "Comfortable and affordable vehicles for your journey",
      link: "/rentals",
      gradient: "from-waterfall to-blue-600",
      stats: "24/7 Service",
    },
    {
      icon: Hotel,
      title: "Hotels & Restaurants",
      description: "Premium stays and authentic Jharkhandi cuisine",
      link: "/hotels",
      gradient: "from-heritage to-yellow-600",
      stats: "100+ Partners",
    },
  ];

  const stats = [
    { icon: Users, value: "50K+", label: "Happy Travelers" },
    { icon: Camera, value: "100+", label: "Destinations" },
    { icon: Star, value: "4.9", label: "Average Rating" },
    { icon: TrendingUp, value: "98%", label: "Satisfaction" },
  ];

  // --- 🌟 BEST ADDITION: Must-Visit Destinations with Real Images ---
  // Using high-quality placeholder images for visual appeal
  const mustVisitDestinations = [
    {
      name: "Netarhat, Hill Station",
      description: "The 'Queen of Chota Nagpur' famous for its stunning sunrise and sunset views.",
      image: "https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2024/01/08/9ffc869f0419cc62a4e18896dc9b388b_1000x1000.jpg",
      tag: "Hill & Views",
      icon: Locate,
      delay: 0
    },
    {
      name: "Jagannath Temple, Ranchi",
      description: "An iconic 17th-century architectural marvel and a significant cultural heritage site.",
      image: "https://xplro.com/wp-content/uploads/2024/06/Untitled-design-73.jpg.webp",
      tag: "Heritage",
      icon: MapPin,
      delay: 150
    },
    {
      name: "Betla National Park",
      description: "A rich wildlife sanctuary offering thrilling jungle safaris and nature trails.",
      image: "https://d3sftlgbtusmnv.cloudfront.net/blog/wp-content/uploads/2024/09/Betla-National-Park-Cover-Photo-840x425.jpg",
      tag: "Wildlife Safari",
      icon: Leaf,
      delay: 300
    },
  ];

  // --- 💬 NEW: Testimonial Data for Social Proof ---
  const testimonials = [
    { quote: "The best travel experience! Flawless booking and expert local guidance.", name: "Arvind Kumar", location: "India" },
    { quote: "Jharkhand is beautiful! The car rental service was prompt and professional.", name: "Ankita Pathak", location: "Jharkhand" },];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section with Dynamic Carousel */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Carousel Background Images */}
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
            style={{ 
              backgroundImage: `url(${slide.image})`,
              transform: `translateY(${scrollY * 0.3}px)`
            }}
          >
            <div className="absolute inset-0 " />
          </div>
        ))}
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="animate-fade-in">
              <h1 className="text-6xl md:text-8xl font-extrabold text-primary-foreground drop-shadow-2xl mb-6">
                Discover the Soul of <br />
                <span className="gradient-text text-7xl md:text-9xl">Jharkhand</span>
              </h1>
            </div>
            
            {/* Dynamic location text */}
            <div className="min-h-[100px] flex items-center justify-center">
              {heroSlides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute transition-all duration-700 ${
                    index === currentSlide 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-4'
                  }`}
                >
                  <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground drop-shadow-lg mb-3">
                    {slide.title}
                  </h2>
                  <p className="text-lg md:text-2xl text-primary-foreground/90 drop-shadow-lg font-light max-w-3xl mx-auto">
                    {slide.subtitle}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8 animate-scale-in">
              <Button variant="hero" size="xl" asChild className="group hover-glow">
                <Link to="/places">
                  <Mountain className="mr-2 h-6 w-6 group-hover:rotate-12 transition-transform" />
                  Start Exploring
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild className="bg-background/20 backdrop-blur-md border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary hover-glow">
                <Link to="/about">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide 
                  ? 'w-12 h-3 bg-primary-foreground' 
                  : 'w-3 h-3 bg-primary-foreground/40 hover:bg-primary-foreground/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="w-8 h-12 border-2 border-primary-foreground/50 rounded-full flex justify-center p-2">
            <div className="w-1.5 h-4 bg-primary-foreground/50 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* 2. 📈 STATS SECTION (Enhanced Contrast) */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-yellow-400/20 hover:scale-[1.05] transition-transform duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <stat.icon className="h-12 w-12 mx-auto mb-4 text-yellow-400" />
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ✨ FEATURES SECTION (Clean & Focused) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-extrabold mb-6 text-gray-900">
              Your <span className="text-primary">Seamless</span> Travel Toolkit
            </h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">
              Everything you need for an unforgettable journey through Jharkhand
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Link key={feature.title} to={feature.link}>
                <Card 
                  className="group relative overflow-hidden hover:shadow-2xl hover:border-primary transition-all duration-500 animate-fade-in bg-white/95 h-full"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  <CardContent className="p-10 text-center space-y-6 relative z-10">
                    <div className={`mx-auto w-20 h-20 rounded-full bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg group-hover:scale-105 transition-all duration-500`}>
                      <feature.icon className="h-10 w-10 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    
                    <div className="pt-4">
                      <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                        <span>{feature.stats}</span>
                      </div>
                    </div>
                    
                    <Button variant="default" className="mt-6 w-full bg-primary hover:bg-primary/90 transition-all">
                      Explore Now
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 📸 HIGHLIGHTS SECTION (Visual Enhancement with Images) */}
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-extrabold mb-6 text-gray-900">
              Must-Visit <span className="text-primary">Destinations</span>
            </h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">
              Experience the most breathtaking locations Jharkhand has to offer
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {mustVisitDestinations.map((place, index) => (
              <Card 
                key={place.name}
                className="group overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${place.delay}ms` }}
              >
                <div className="h-64 relative overflow-hidden">
                    <img 
                        src={place.image} 
                        alt={place.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
                    {/* Tag Overlay */}
                    <span className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">{place.tag}</span>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{place.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{place.description}</p>
                  <Button variant="outline" className="mt-4 w-full group-hover:bg-primary/500 transition-all">
                  <Link to="/places">
                    View Details
                    </Link>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                  </Button>
                  
                  
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="hero" size="lg" asChild className="bg-primary hover:bg-primary/90 text-white shadow-lg">
              <Link to="/places">
                View All Destinations
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* 5. 💬 TESTIMONIALS (NEW SECTION FOR TRUST) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-extrabold mb-6 text-gray-900">
              Travelers <span className="text-primary">Love</span> Our Service
            </h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">
              Don't just take our word for it—see what our happy customers are saying!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {testimonials.map((t, index) => (
                  <Card key={t.name} className="p-8 shadow-xl border-t-4 border-primary/50 hover:shadow-2xl transition-shadow duration-300 animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                      <Quote className="h-10 w-10 text-primary mb-4" />
                      <p className="text-lg italic text-gray-700 mb-6">"{t.quote}"</p>
                      <div className="font-semibold text-gray-900">
                          {t.name}
                          <span className="text-sm text-gray-500 block">{t.location}</span>
                      </div>
                  </Card>
              ))}
          </div>
        </div>
      </section>

      {/* 6. 📞 CTA SECTION (Final Polish) */}
      <section className="relative py-20 bg-primary-dark overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-black">
            Ready for an Adventure?
          </h2>
          <p className="text-2xl mb-12 text-gray-600 max-w-3xl mx-auto">
            Start planning your perfect Jharkhand getaway today and create memories that last a lifetime
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button variant="default" size="xl" asChild className="bg-yellow-400 text-gray-900 hover:bg-yellow-500 shadow-xl">
              <Link to="/contact">
                <Sparkles className="mr-2 h-6 w-6" />
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              variant="default" 
              size="xl" 
              className=" bg-yellow-400 text-gray-900 hover:bg-yellow-500 shadow-xl"
              asChild
            >
              <Link to="/rentals">
                <Car className="mr-2 h-5 w-5" />
                Book a Vehicle
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;