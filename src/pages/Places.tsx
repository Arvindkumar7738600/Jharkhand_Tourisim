import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, IndianRupee, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { placesData } from "@/data/placesData";

const Places = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  const categories = ["All", "Waterfalls", "Temples", "Wildlife", "Hill Stations", "Mountains", "Parks", "Valleys", "Dams", "Gardens", "Lakes", "Hills"];

  const filteredPlaces = selectedCategory === "All" 
    ? placesData 
    : placesData.filter(place => place.category === selectedCategory);

  const handleGetDirections = (place: typeof placesData[0]) => {
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
        {/* Header */}
        <div className="container mx-auto px-4 mb-12 animate-fade-in">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold mb-4">
              Tourist <span className="gradient-text">Destinations</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Discover the natural beauty and cultural heritage of Jharkhand's most captivating locations
            </p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="container mx-auto px-4 mb-8 animate-fade-in">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Places Grid */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPlaces.map((place, index) => (
              <Card 
                key={place.id}
                className="overflow-hidden hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Image */}
                <div className="h-56 relative overflow-hidden group">
                  <img 
                    src={place.images[0]} 
                    alt={place.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <Badge className="absolute top-4 right-4 bg-heritage text-heritage-foreground z-10">
                    {place.category}
                  </Badge>
                </div>

                <CardContent className="p-6 space-y-4">
                  {/* Title & Rating */}
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-2xl font-bold">{place.name}</h3>
                    <div className="flex items-center gap-1 bg-heritage/10 px-2 py-1 rounded-full">
                      <Star className="h-4 w-4 fill-heritage text-heritage" />
                      <span className="text-sm font-semibold text-heritage">{place.rating}</span>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="text-sm">{place.location}</span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {place.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {place.highlights.slice(0, 3).map((highlight) => (
                      <Badge key={highlight} variant="secondary" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>

                  {/* Info Grid */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                    <div className="space-y-1">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>Best Time</span>
                      </div>
                      <p className="text-sm font-medium">{place.bestTime}</p>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <IndianRupee className="h-3 w-3" />
                        <span>Entry Fee</span>
                      </div>
                      <p className="text-sm font-medium">{place.entryFee}</p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 pt-2">
                    <Button 
                      variant="default" 
                      className="flex-1"
                      onClick={() => navigate(`/places/${place.id}`)}
                    >
                      View Details
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => handleGetDirections(place)}
                    >
                      Get Directions
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Places;
