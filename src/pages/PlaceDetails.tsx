import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, IndianRupee, Star, ArrowLeft, Navigation } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { placesData } from "@/data/placesData";

const PlaceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const place = placesData.find(p => p.id === Number(id));

  if (!place) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 pt-32 pb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Place Not Found</h1>
          <Button onClick={() => navigate("/places")}>Back to Places</Button>
        </div>
        <Footer />
      </div>
    );
  }

  const handleGetDirections = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const destination = `${place.name}, ${place.location}, Jharkhand, India`;
          const mapsUrl = `https://www.google.com/maps/dir/${latitude},${longitude}/${encodeURIComponent(destination)}`;
          window.open(mapsUrl, '_blank');
        },
        (error) => {
          console.error("Error getting location:", error);
          const destination = `${place.name}, ${place.location}, Jharkhand, India`;
          const mapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(destination)}`;
          window.open(mapsUrl, '_blank');
        }
      );
    } else {
      const destination = `${place.name}, ${place.location}, Jharkhand, India`;
      const mapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(destination)}`;
      window.open(mapsUrl, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Button 
            variant="ghost" 
            onClick={() => navigate("/places")}
            className="mb-6 hover:bg-primary/10"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Places
          </Button>

          {/* Image Carousel */}
          <Card className="overflow-hidden mb-8 animate-fade-in">
            <Carousel className="w-full">
              <CarouselContent>
                {place.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative h-[60vh] min-h-[400px]">
                      <img 
                        src={image} 
                        alt={`${place.name} - View ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <Badge className="absolute top-4 right-4 bg-heritage text-heritage-foreground text-lg px-4 py-2">
                        {place.category}
                      </Badge>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </Card>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Title & Rating */}
              <div className="animate-fade-in">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h1 className="text-4xl md:text-5xl font-bold">{place.name}</h1>
                  <div className="flex items-center gap-2 bg-heritage/20 px-4 py-2 rounded-full">
                    <Star className="h-6 w-6 fill-heritage text-heritage" />
                    <span className="text-2xl font-bold text-heritage">{place.rating}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-muted-foreground text-lg">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>{place.location}, Jharkhand</span>
                </div>
              </div>

              {/* Description */}
              <Card className="animate-fade-in" style={{ animationDelay: "100ms" }}>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">About</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {place.description}
                  </p>
                  {place.additionalInfo && (
                    <p className="text-muted-foreground text-lg leading-relaxed mt-4">
                      {place.additionalInfo}
                    </p>
                  )}
                </CardContent>
              </Card>

              {/* Highlights */}
              <Card className="animate-fade-in" style={{ animationDelay: "200ms" }}>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Highlights</h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {place.highlights.map((highlight, index) => (
                      <div 
                        key={index} 
                        className="flex items-center gap-2 bg-primary/5 px-4 py-3 rounded-lg border border-primary/10"
                      >
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        <span className="text-sm font-medium">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Activities */}
              {place.activities && (
                <Card className="animate-fade-in" style={{ animationDelay: "300ms" }}>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-4">Things to Do</h2>
                    <ul className="space-y-2">
                      {place.activities.map((activity, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="text-primary font-bold">•</span>
                          <span className="text-muted-foreground">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Visit Info Card */}
              <Card className="sticky top-24 animate-fade-in" style={{ animationDelay: "400ms" }}>
                <CardContent className="p-6 space-y-6">
                  <h2 className="text-2xl font-bold">Visit Information</h2>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-5 w-5 text-primary" />
                        <span className="font-semibold">Best Time to Visit</span>
                      </div>
                      <p className="text-lg pl-7">{place.bestTime}</p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <IndianRupee className="h-5 w-5 text-primary" />
                        <span className="font-semibold">Entry Fee</span>
                      </div>
                      <p className="text-lg pl-7">{place.entryFee}</p>
                    </div>

                    {place.timings && (
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Clock className="h-5 w-5 text-primary" />
                          <span className="font-semibold">Timings</span>
                        </div>
                        <p className="text-lg pl-7">{place.timings}</p>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 space-y-3">
                    <Button 
                      onClick={handleGetDirections}
                      className="w-full text-lg py-6"
                      size="lg"
                    >
                      <Navigation className="h-5 w-5 mr-2" />
                      Get Directions
                    </Button>
                    
                    <Button 
                      variant="outline"
                      className="w-full text-lg py-6"
                      size="lg"
                      onClick={() => navigate("/rentals")}
                    >
                      Plan Your Visit
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Map Preview */}
              <Card className="animate-fade-in" style={{ animationDelay: "500ms" }}>
                <CardContent className="p-0">
                  <iframe
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(place.name + ", " + place.location + ", Jharkhand")}`}
                  />
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

export default PlaceDetails;