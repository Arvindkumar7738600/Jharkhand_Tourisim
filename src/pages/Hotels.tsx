import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { MapPin, Star, Wifi, Car as CarIcon, Utensils, Coffee, Waves, Phone, Mail, Navigation } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

// Hotel Images
import radissonImg from "@/assets/hotels/radisson-blu.jpg";
import capitolImg from "@/assets/hotels/capitol-hill.jpg";
import lemonTreeImg from "@/assets/hotels/lemon-tree.jpg";
import fernImg from "@/assets/hotels/fern-residency.jpg";
import greenParkImg from "@/assets/hotels/green-park.jpg";
import chanakyaImg from "@/assets/hotels/chanakya-bnr.jpg";
import sayajiImg from "@/assets/hotels/sayaji.jpg";

// Restaurant Images
import kaveriImg from "@/assets/restaurants/kaveri.jpg";
import yellowSapphireImg from "@/assets/restaurants/yellow-sapphire.jpg";
import gharJaisaImg from "@/assets/restaurants/ghar-jaisa.jpg";

interface Accommodation {
  id: number;
  name: string;
  type: "Hotel" | "Restaurant";
  location: string;
  description: string;
  amenities: string[];
  priceRange: string;
  rating: number;
  reviews: number;
  category: string;
  image: string;
  images: string[];
  address: string;
  phone: string;
  email: string;
  coordinates: { lat: number; lng: number };
}

const Hotels = () => {
  const [selectedType, setSelectedType] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [bookingDialog, setBookingDialog] = useState(false);
  const [detailsDialog, setDetailsDialog] = useState(false);
  const [selectedAccommodation, setSelectedAccommodation] = useState<Accommodation | null>(null);

  const accommodations: Accommodation[] = [
    {
      id: 1,
      name: "Radisson Blu Hotel Ranchi",
      type: "Hotel",
      location: "Ranchi",
      description: "Premium 5-star hotel in the heart of Ranchi with world-class amenities and services. Perfect for business and leisure travelers.",
      amenities: ["WiFi", "Pool", "Parking", "Restaurant", "Gym", "Spa"],
      priceRange: "₹5,000 - ₹10,000",
      rating: 4.5,
      reviews: 1248,
      category: "Luxury",
      image: radissonImg,
      images: [radissonImg, radissonImg, radissonImg, radissonImg],
      address: "Hinoo, Ranchi, Jharkhand 834002",
      phone: "+91 651 6613333",
      email: "info.ranchi@radissonblu.com",
      coordinates: { lat: 23.3569, lng: 85.3310 }
    },
    {
      id: 2,
      name: "Hotel Capitol Hill",
      type: "Hotel",
      location: "Ranchi",
      description: "Comfortable mid-range hotel with excellent connectivity and modern facilities. Great value for money.",
      amenities: ["WiFi", "Parking", "Restaurant", "Conference Room"],
      priceRange: "₹2,500 - ₹4,000",
      rating: 4.2,
      reviews: 856,
      category: "Mid-Range",
      image: capitolImg,
      images: [capitolImg, capitolImg, capitolImg, capitolImg],
      address: "Main Road, Ranchi, Jharkhand 834001",
      phone: "+91 651 2331234",
      email: "info@capitolhillranchi.com",
      coordinates: { lat: 23.3441, lng: 85.3096 }
    },
    {
      id: 3,
      name: "Lemon Tree Hotel",
      type: "Hotel",
      location: "Ranchi",
      description: "Trendy and vibrant hotel known for its cheerful ambiance and excellent service. Close to major attractions.",
      amenities: ["WiFi", "Restaurant", "Gym", "Parking"],
      priceRange: "₹3,000 - ₹5,500",
      rating: 4.3,
      reviews: 645,
      category: "Mid-Range",
      image: lemonTreeImg,
      images: [lemonTreeImg, lemonTreeImg, lemonTreeImg, lemonTreeImg],
      address: "Harmu, Ranchi, Jharkhand 834002",
      phone: "+91 651 2491234",
      email: "hi.ranchi@lemontreehotels.com",
      coordinates: { lat: 23.3498, lng: 85.3212 }
    },
    {
      id: 4,
      name: "The Fern Residency",
      type: "Hotel",
      location: "Ranchi",
      description: "Eco-friendly luxury hotel with modern amenities and sustainable practices. Perfect blend of comfort and nature.",
      amenities: ["WiFi", "Pool", "Spa", "Restaurant", "Gym"],
      priceRange: "₹4,500 - ₹8,000",
      rating: 4.4,
      reviews: 523,
      category: "Luxury",
      image: fernImg,
      images: [fernImg, fernImg, fernImg, fernImg],
      address: "Doranda, Ranchi, Jharkhand 834002",
      phone: "+91 651 6605555",
      email: "reservation.ranchi@fernhotels.com",
      coordinates: { lat: 23.3621, lng: 85.3287 }
    },
    {
      id: 5,
      name: "Hotel Green Park",
      type: "Hotel",
      location: "Ranchi",
      description: "Business hotel with modern conference facilities and comfortable rooms. Ideal for corporate travelers.",
      amenities: ["WiFi", "Conference Rooms", "Restaurant", "Parking"],
      priceRange: "₹3,500 - ₹6,000",
      rating: 4.1,
      reviews: 412,
      category: "Business",
      image: greenParkImg,
      images: [greenParkImg, greenParkImg, greenParkImg, greenParkImg],
      address: "Lalpur, Ranchi, Jharkhand 834001",
      phone: "+91 651 2445678",
      email: "info@greenparkranchi.com",
      coordinates: { lat: 23.3701, lng: 85.3301 }
    },
    {
      id: 6,
      name: "Chanakya BNR Hotel",
      type: "Hotel",
      location: "Ranchi",
      description: "Heritage property with traditional architecture and modern amenities. Experience royal hospitality.",
      amenities: ["WiFi", "Restaurant", "Banquet Hall", "Parking"],
      priceRange: "₹2,800 - ₹5,000",
      rating: 4.2,
      reviews: 389,
      category: "Heritage",
      image: chanakyaImg,
      images: [chanakyaImg, chanakyaImg, chanakyaImg, chanakyaImg],
      address: "Station Road, Ranchi, Jharkhand 834001",
      phone: "+91 651 2201234",
      email: "info@chanakyabnr.com",
      coordinates: { lat: 23.3521, lng: 85.3156 }
    },
    {
      id: 7,
      name: "Sayaji Hotel Ranchi",
      type: "Hotel",
      location: "Ranchi",
      description: "Five-star luxury hotel with grand architecture and world-class facilities. Perfect for special occasions.",
      amenities: ["WiFi", "Pool", "Spa", "Multiple Restaurants", "Gym", "Bar"],
      priceRange: "₹6,000 - ₹12,000",
      rating: 4.6,
      reviews: 1102,
      category: "Luxury",
      image: sayajiImg,
      images: [sayajiImg, sayajiImg, sayajiImg, sayajiImg],
      address: "Hinoo, Ranchi, Jharkhand 834002",
      phone: "+91 651 7171717",
      email: "info@sayajiranchi.com",
      coordinates: { lat: 23.3587, lng: 85.3298 }
    },
    {
      id: 8,
      name: "Kaveri Restaurant",
      type: "Restaurant",
      location: "Ranchi",
      description: "Multi-cuisine restaurant famous for authentic North Indian and Chinese dishes. Family-friendly atmosphere.",
      amenities: ["AC", "Family Seating", "Parking", "Takeaway"],
      priceRange: "₹300 - ₹800 per person",
      rating: 4.4,
      reviews: 2145,
      category: "Multi-Cuisine",
      image: kaveriImg,
      images: [kaveriImg, kaveriImg, kaveriImg, kaveriImg],
      address: "Main Road, Ranchi, Jharkhand 834001",
      phone: "+91 651 2234567",
      email: "info@kaverirestaurant.com",
      coordinates: { lat: 23.3437, lng: 85.3092 }
    },
    {
      id: 9,
      name: "Yellow Sapphire",
      type: "Restaurant",
      location: "Ranchi",
      description: "Premium fine-dining experience with continental and Indian fusion cuisine. Elegant ambiance.",
      amenities: ["AC", "Bar", "Parking", "WiFi"],
      priceRange: "₹800 - ₹2,000 per person",
      rating: 4.6,
      reviews: 987,
      category: "Fine Dining",
      image: yellowSapphireImg,
      images: [yellowSapphireImg, yellowSapphireImg, yellowSapphireImg, yellowSapphireImg],
      address: "Doranda, Ranchi, Jharkhand 834002",
      phone: "+91 651 2445566",
      email: "reservation@yellowsapphire.com",
      coordinates: { lat: 23.3598, lng: 85.3276 }
    },
    {
      id: 10,
      name: "Ghar Jaisa",
      type: "Restaurant",
      location: "Ranchi",
      description: "Authentic Jharkhandi cuisine in a traditional setting. Must-try local delicacies and thalis.",
      amenities: ["AC", "Traditional Seating", "Parking"],
      priceRange: "₹200 - ₹500 per person",
      rating: 4.3,
      reviews: 1534,
      category: "Local Cuisine",
      image: gharJaisaImg,
      images: [gharJaisaImg, gharJaisaImg, gharJaisaImg, gharJaisaImg],
      address: "Harmu Road, Ranchi, Jharkhand 834001",
      phone: "+91 651 2223344",
      email: "contact@gharjaisa.com",
      coordinates: { lat: 23.3512, lng: 85.3201 }
    },
  ];

  const types = ["All", "Hotel", "Restaurant"];
  const locations = ["All", "Ranchi"];

  const filteredAccommodations = accommodations
    .filter(item => selectedType === "All" || item.type === selectedType)
    .filter(item => selectedLocation === "All" || item.location === selectedLocation);

  const getIcon = (amenity: string) => {
    const icons: { [key: string]: any } = {
      WiFi: Wifi,
      Wifi: Wifi,
      Parking: CarIcon,
      Restaurant: Utensils,
      Pool: Waves,
      AC: Coffee,
    };
    const Icon = icons[amenity] || Coffee;
    return <Icon className="h-3 w-3" />;
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Booking request submitted! We'll contact you shortly.");
    setBookingDialog(false);
  };

  const handleGetDirections = (accommodation: Accommodation) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${accommodation.coordinates.lat},${accommodation.coordinates.lng}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-12">
        {/* Header */}
        <div className="container mx-auto px-4 mb-12 animate-fade-in">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold mb-4">
              Hotels & <span className="gradient-text">Restaurants</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Discover comfortable stays and delicious dining experiences across Jharkhand
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="container mx-auto px-4 mb-8 animate-fade-in">
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <div className="flex flex-wrap justify-center gap-3">
              {types.map((type) => (
                <Button
                  key={type}
                  variant={selectedType === type ? "heritage" : "outline"}
                  onClick={() => setSelectedType(type)}
                >
                  {type}
                </Button>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {locations.map((location) => (
                <Button
                  key={location}
                  variant={selectedLocation === location ? "default" : "outline"}
                  onClick={() => setSelectedLocation(location)}
                >
                  {location}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Accommodations Grid */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAccommodations.map((item, index) => (
              <Card 
                key={item.id}
                className="overflow-hidden hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover hover-scale"
                  />
                  <Badge className="absolute top-4 right-4 bg-background/90 text-foreground">
                    {item.type}
                  </Badge>
                  <div className="absolute top-4 left-4 flex items-center gap-1 bg-heritage text-heritage-foreground px-2 py-1 rounded-full">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm font-bold">{item.rating}</span>
                    <span className="text-xs">({item.reviews})</span>
                  </div>
                </div>

                <CardContent className="p-6 space-y-4">
                  {/* Name & Location */}
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {item.description}
                  </p>

                  {/* Amenities */}
                  <div className="flex flex-wrap gap-2">
                    {item.amenities.slice(0, 4).map((amenity) => (
                      <Badge key={amenity} variant="secondary" className="text-xs flex items-center gap-1">
                        {getIcon(amenity)}
                        {amenity}
                      </Badge>
                    ))}
                    {item.amenities.length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{item.amenities.length - 4} more
                      </Badge>
                    )}
                  </div>

                  {/* Price & Category */}
                  <div className="pt-4 border-t border-border space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">Category</span>
                      <Badge variant="outline">{item.category}</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">Price Range</span>
                      <span className="text-sm font-bold text-heritage">{item.priceRange}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 pt-2">
                    <Button 
                      variant="heritage" 
                      className="flex-1"
                      onClick={() => {
                        setSelectedAccommodation(item);
                        setBookingDialog(true);
                      }}
                    >
                      {item.type === "Hotel" ? "Book Room" : "Reserve Table"}
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => {
                        setSelectedAccommodation(item);
                        setDetailsDialog(true);
                      }}
                    >
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Booking Dialog */}
      <Dialog open={bookingDialog} onOpenChange={setBookingDialog}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              {selectedAccommodation?.type === "Hotel" ? "Book Room" : "Reserve Table"} - {selectedAccommodation?.name}
            </DialogTitle>
          </DialogHeader>
          
          {selectedAccommodation && (
            <div className="space-y-6 animate-fade-in">
              {/* Images Carousel */}
              <Carousel className="w-full">
                <CarouselContent>
                  {selectedAccommodation.images.map((img, idx) => (
                    <CarouselItem key={idx}>
                      <div className="relative h-64 rounded-lg overflow-hidden">
                        <img 
                          src={img} 
                          alt={`${selectedAccommodation.name} ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>

              {/* Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h3 className="font-semibold flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    Address
                  </h3>
                  <p className="text-sm text-muted-foreground">{selectedAccommodation.address}</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary" />
                    Phone
                  </h3>
                  <p className="text-sm text-muted-foreground">{selectedAccommodation.phone}</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold flex items-center gap-2">
                    <Mail className="h-4 w-4 text-primary" />
                    Email
                  </h3>
                  <p className="text-sm text-muted-foreground">{selectedAccommodation.email}</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Price Range</h3>
                  <p className="text-sm font-bold text-heritage">{selectedAccommodation.priceRange}</p>
                </div>
              </div>

              {/* Booking Form */}
              <form onSubmit={handleBooking} className="space-y-4 pt-4 border-t">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" required placeholder="Enter your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" type="tel" required placeholder="+91 1234567890" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" required placeholder="your@email.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="guests">Number of {selectedAccommodation.type === "Hotel" ? "Guests" : "People"} *</Label>
                    <Input id="guests" type="number" required min="1" placeholder="2" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="checkIn">{selectedAccommodation.type === "Hotel" ? "Check-in Date" : "Reservation Date"} *</Label>
                    <Input id="checkIn" type="date" required />
                  </div>
                  {selectedAccommodation.type === "Hotel" && (
                    <div className="space-y-2">
                      <Label htmlFor="checkOut">Check-out Date *</Label>
                      <Input id="checkOut" type="date" required />
                    </div>
                  )}
                  {selectedAccommodation.type === "Restaurant" && (
                    <div className="space-y-2">
                      <Label htmlFor="time">Preferred Time *</Label>
                      <Input id="time" type="time" required />
                    </div>
                  )}
                </div>
                <Button type="submit" variant="heritage" className="w-full" size="lg">
                  Confirm {selectedAccommodation.type === "Hotel" ? "Booking" : "Reservation"}
                </Button>
              </form>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Details Dialog */}
      <Dialog open={detailsDialog} onOpenChange={setDetailsDialog}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl">{selectedAccommodation?.name}</DialogTitle>
          </DialogHeader>
          
          {selectedAccommodation && (
            <div className="space-y-6 animate-fade-in">
              {/* Images Carousel */}
              <Carousel className="w-full">
                <CarouselContent>
                  {selectedAccommodation.images.map((img, idx) => (
                    <CarouselItem key={idx}>
                      <div className="relative h-80 rounded-lg overflow-hidden">
                        <img 
                          src={img} 
                          alt={`${selectedAccommodation.name} ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>

              {/* Rating & Reviews */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-heritage text-heritage-foreground px-4 py-2 rounded-full">
                  <Star className="h-5 w-5 fill-current" />
                  <span className="text-lg font-bold">{selectedAccommodation.rating}</span>
                </div>
                <span className="text-muted-foreground">{selectedAccommodation.reviews} reviews</span>
                <Badge variant="outline" className="ml-auto">{selectedAccommodation.category}</Badge>
              </div>

              {/* Description */}
              <div>
                <h3 className="font-semibold text-lg mb-2">About</h3>
                <p className="text-muted-foreground">{selectedAccommodation.description}</p>
              </div>

              {/* Amenities */}
              <div>
                <h3 className="font-semibold text-lg mb-3">Amenities</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedAccommodation.amenities.map((amenity) => (
                    <Badge key={amenity} variant="secondary" className="flex items-center gap-2 px-3 py-2">
                      {getIcon(amenity)}
                      {amenity}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t">
                <div className="space-y-2">
                  <h3 className="font-semibold flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    Address
                  </h3>
                  <p className="text-sm text-muted-foreground">{selectedAccommodation.address}</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary" />
                    Contact
                  </h3>
                  <p className="text-sm text-muted-foreground">{selectedAccommodation.phone}</p>
                  <p className="text-sm text-muted-foreground">{selectedAccommodation.email}</p>
                </div>
              </div>

              {/* Price */}
              <div className="bg-muted p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Price Range</span>
                  <span className="text-2xl font-bold text-heritage">{selectedAccommodation.priceRange}</span>
                </div>
              </div>

              {/* Google Maps */}
              <div>
                <h3 className="font-semibold text-lg mb-3">Location</h3>
                <div className="rounded-lg overflow-hidden border border-border">
                  <iframe
                    src={`https://www.google.com/maps?q=${selectedAccommodation.coordinates.lat},${selectedAccommodation.coordinates.lng}&output=embed`}
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <Button 
                  variant="heritage" 
                  size="lg" 
                  className="flex-1"
                  onClick={() => {
                    setDetailsDialog(false);
                    setBookingDialog(true);
                  }}
                >
                  {selectedAccommodation.type === "Hotel" ? "Book Now" : "Reserve Table"}
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => handleGetDirections(selectedAccommodation)}
                >
                  <Navigation className="h-4 w-4 mr-2" />
                  Get Directions
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Hotels;