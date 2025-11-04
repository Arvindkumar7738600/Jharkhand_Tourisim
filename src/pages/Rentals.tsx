import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Car, Users, Fuel, Calendar, IndianRupee, Phone, User, MapPin, Star, Shield, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

import fronxImg from "@/assets/cars/fronx.jpg";
import dzireImg from "@/assets/cars/dzire.jpg";
import ertigaImg from "@/assets/cars/ertiga.jpg";
import innovaImg from "@/assets/cars/innova.jpg";
import hycrossImg from "@/assets/cars/hycross.jpg";
import forceImg from "@/assets/cars/force.jpg";
import zestImg from "@/assets/cars/zest.jpg";
import brezzaImg from "@/assets/cars/brezza.jpg";
import swiftImg from "@/assets/cars/swift.jpg";
import balenoImg from "@/assets/cars/baleno.jpg";
import cretaImg from "@/assets/cars/creta.jpg";
import venueImg from "@/assets/cars/venue.jpg";
import nexonImg from "@/assets/cars/nexon.jpg";
import tharImg from "@/assets/cars/thar.jpg";
import xuv700Img from "@/assets/cars/xuv700.jpg";
import scorpioImg from "@/assets/cars/scorpio.jpg";
import fortunerImg from "@/assets/cars/fortuner.jpg";
import crystaImg from "@/assets/cars/crysta.jpg";

interface Vehicle {
  id: number;
  name: string;
  type: string;
  capacity: number;
  fuel: string;
  features: string[];
  pricePerDay: number;
  pricePerKm: number;
  image: string;
  exteriorImages: string[];
  interiorImages: string[];
  owner: {
    name: string;
    phone: string;
    rating: number;
    verified: boolean;
  };
  specifications: {
    transmission: string;
    mileage: string;
    year: number;
  };
}

const Rentals = () => {
  const [selectedType, setSelectedType] = useState("All");
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [loading, setLoading] = useState(false);

  const handleBooking = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const pickupDate = new Date(formData.get("pickup") as string);
    const dropoffDate = new Date(formData.get("dropoff") as string);
    const days = Math.ceil((dropoffDate.getTime() - pickupDate.getTime()) / (1000 * 60 * 60 * 24));

    try {
      const { error } = await supabase.from("car_bookings").insert([{
        vehicle_name: selectedVehicle?.name || "",
        vehicle_type: selectedVehicle?.type || "",
        full_name: formData.get("name") as string,
        phone: formData.get("phone") as string,
        pickup_date: formData.get("pickup") as string,
        dropoff_date: formData.get("dropoff") as string,
        pickup_location: formData.get("pickup-location") as string,
        rental_plan: formData.get("plan") as string,
        total_days: days,
        price_per_day: selectedVehicle?.pricePerDay || 0,
        total_price: days * (selectedVehicle?.pricePerDay || 0),
      }]);

      if (error) throw error;
      toast.success("Booking confirmed! We'll contact you shortly.");
      e.currentTarget.reset();
    } catch (error: any) {
      toast.error(error.message || "Failed to book. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const vehicles: Vehicle[] = [
    {
      id: 1,
      name: "Maruti Suzuki Fronx",
      type: "SUV",
      capacity: 5,
      fuel: "Petrol",
      features: ["AC", "Music System", "GPS", "Power Windows", "ABS", "Airbags"],
      pricePerDay: 2000,
      pricePerKm: 14,
      image: fronxImg,
      exteriorImages: [fronxImg, fronxImg, fronxImg],
      interiorImages: [fronxImg, fronxImg],
      owner: {
        name: "Rajesh Kumar",
        phone: "+91 9876543210",
        rating: 4.8,
        verified: true
      },
      specifications: {
        transmission: "Manual",
        mileage: "20 km/l",
        year: 2024
      }
    },
    {
      id: 2,
      name: "Maruti Suzuki Dzire",
      type: "Sedan",
      capacity: 5,
      fuel: "Petrol",
      features: ["AC", "Music System", "GPS", "Power Windows", "Cruise Control"],
      pricePerDay: 1800,
      pricePerKm: 13,
      image: dzireImg,
      exteriorImages: [dzireImg, dzireImg, dzireImg],
      interiorImages: [dzireImg, dzireImg],
      owner: {
        name: "Amit Sharma",
        phone: "+91 9876543211",
        rating: 4.7,
        verified: true
      },
      specifications: {
        transmission: "Automatic",
        mileage: "22 km/l",
        year: 2024
      }
    },
    {
      id: 3,
      name: "Maruti Suzuki Ertiga",
      type: "MUV",
      capacity: 7,
      fuel: "Petrol",
      features: ["AC", "Music System", "GPS", "Spacious", "7 Seater"],
      pricePerDay: 2500,
      pricePerKm: 15,
      image: ertigaImg,
      exteriorImages: [ertigaImg, ertigaImg, ertigaImg],
      interiorImages: [ertigaImg, ertigaImg],
      owner: {
        name: "Priya Singh",
        phone: "+91 9876543212",
        rating: 4.9,
        verified: true
      },
      specifications: {
        transmission: "Manual",
        mileage: "19 km/l",
        year: 2023
      }
    },
    {
      id: 4,
      name: "Toyota Innova Crysta",
      type: "SUV",
      capacity: 7,
      fuel: "Diesel",
      features: ["Premium AC", "Music System", "GPS", "Leather Seats", "Spacious"],
      pricePerDay: 3500,
      pricePerKm: 18,
      image: innovaImg,
      exteriorImages: [innovaImg, innovaImg, innovaImg],
      interiorImages: [innovaImg, innovaImg],
      owner: {
        name: "Vikram Reddy",
        phone: "+91 9876543213",
        rating: 5.0,
        verified: true
      },
      specifications: {
        transmission: "Automatic",
        mileage: "14 km/l",
        year: 2023
      }
    },
    {
      id: 5,
      name: "Toyota Innova Hycross",
      type: "Luxury",
      capacity: 7,
      fuel: "Hybrid",
      features: ["Premium AC", "Premium Sound", "GPS", "Panoramic Sunroof", "Ventilated Seats"],
      pricePerDay: 4500,
      pricePerKm: 20,
      image: hycrossImg,
      exteriorImages: [hycrossImg, hycrossImg, hycrossImg],
      interiorImages: [hycrossImg, hycrossImg],
      owner: {
        name: "Ananya Gupta",
        phone: "+91 9876543214",
        rating: 4.9,
        verified: true
      },
      specifications: {
        transmission: "Automatic",
        mileage: "21 km/l",
        year: 2024
      }
    },
    {
      id: 6,
      name: "Force Urbania",
      type: "Luxury",
      capacity: 10,
      fuel: "Diesel",
      features: ["Premium AC", "Entertainment System", "GPS", "Luxury Seats", "Captain Seats"],
      pricePerDay: 6000,
      pricePerKm: 25,
      image: forceImg,
      exteriorImages: [forceImg, forceImg, forceImg],
      interiorImages: [forceImg, forceImg],
      owner: {
        name: "Suresh Patel",
        phone: "+91 9876543215",
        rating: 4.8,
        verified: true
      },
      specifications: {
        transmission: "Manual",
        mileage: "12 km/l",
        year: 2023
      }
    },
    {
      id: 7,
      name: "Tata Zest",
      type: "Sedan",
      capacity: 5,
      fuel: "Diesel",
      features: ["AC", "Music System", "GPS", "Power Windows", "ABS"],
      pricePerDay: 1600,
      pricePerKm: 12,
      image: zestImg,
      exteriorImages: [zestImg, zestImg, zestImg],
      interiorImages: [zestImg, zestImg],
      owner: {
        name: "Manoj Kumar",
        phone: "+91 9876543216",
        rating: 4.6,
        verified: true
      },
      specifications: {
        transmission: "Manual",
        mileage: "23 km/l",
        year: 2022
      }
    },
    {
      id: 8,
      name: "Maruti Suzuki Vitara Brezza",
      type: "SUV",
      capacity: 5,
      fuel: "Petrol",
      features: ["AC", "Music System", "GPS", "Alloy Wheels", "Smart Hybrid"],
      pricePerDay: 2200,
      pricePerKm: 14,
      image: brezzaImg,
      exteriorImages: [brezzaImg, brezzaImg, brezzaImg],
      interiorImages: [brezzaImg, brezzaImg],
      owner: {
        name: "Neha Verma",
        phone: "+91 9876543217",
        rating: 4.7,
        verified: true
      },
      specifications: {
        transmission: "Automatic",
        mileage: "18 km/l",
        year: 2024
      }
    },
    {
      id: 9,
      name: "Maruti Swift",
      type: "Hatchback",
      capacity: 5,
      fuel: "Petrol",
      features: ["AC", "Music System", "Power Windows", "ABS", "Airbags"],
      pricePerDay: 1200,
      pricePerKm: 10,
      image: swiftImg,
      exteriorImages: [swiftImg, swiftImg, swiftImg],
      interiorImages: [swiftImg, swiftImg],
      owner: {
        name: "Sanjay Kumar",
        phone: "+91 9876543219",
        rating: 4.6,
        verified: true
      },
      specifications: {
        transmission: "Manual",
        mileage: "23 km/l",
        year: 2024
      }
    },
    {
      id: 10,
      name: "Maruti Baleno",
      type: "Hatchback",
      capacity: 5,
      fuel: "Petrol",
      features: ["AC", "Music System", "GPS", "Power Windows", "ABS", "Airbags"],
      pricePerDay: 1400,
      pricePerKm: 11,
      image: balenoImg,
      exteriorImages: [balenoImg, balenoImg, balenoImg],
      interiorImages: [balenoImg, balenoImg],
      owner: {
        name: "Vikram Singh",
        phone: "+91 9876543220",
        rating: 4.7,
        verified: true
      },
      specifications: {
        transmission: "Automatic",
        mileage: "21 km/l",
        year: 2024
      }
    },
    {
      id: 11,
      name: "Hyundai Creta",
      type: "SUV",
      capacity: 5,
      fuel: "Diesel",
      features: ["AC", "Music System", "GPS", "Sunroof", "Power Windows", "ABS", "Airbags"],
      pricePerDay: 2800,
      pricePerKm: 16,
      image: cretaImg,
      exteriorImages: [cretaImg, cretaImg, cretaImg],
      interiorImages: [cretaImg, cretaImg],
      owner: {
        name: "Arjun Patel",
        phone: "+91 9876543221",
        rating: 4.8,
        verified: true
      },
      specifications: {
        transmission: "Automatic",
        mileage: "16 km/l",
        year: 2023
      }
    },
    {
      id: 12,
      name: "Hyundai Venue",
      type: "SUV",
      capacity: 5,
      fuel: "Petrol",
      features: ["AC", "Music System", "GPS", "Power Windows", "ABS", "Airbags"],
      pricePerDay: 2000,
      pricePerKm: 13,
      image: venueImg,
      exteriorImages: [venueImg, venueImg, venueImg],
      interiorImages: [venueImg, venueImg],
      owner: {
        name: "Deepak Sharma",
        phone: "+91 9876543222",
        rating: 4.5,
        verified: true
      },
      specifications: {
        transmission: "Manual",
        mileage: "18 km/l",
        year: 2024
      }
    },
    {
      id: 13,
      name: "Tata Nexon",
      type: "SUV",
      capacity: 5,
      fuel: "Diesel",
      features: ["AC", "Music System", "GPS", "Power Windows", "ABS", "Airbags"],
      pricePerDay: 2200,
      pricePerKm: 14,
      image: nexonImg,
      exteriorImages: [nexonImg, nexonImg, nexonImg],
      interiorImages: [nexonImg, nexonImg],
      owner: {
        name: "Manoj Gupta",
        phone: "+91 9876543223",
        rating: 4.6,
        verified: true
      },
      specifications: {
        transmission: "Automatic",
        mileage: "17 km/l",
        year: 2023
      }
    },
    {
      id: 14,
      name: "Mahindra Thar",
      type: "SUV",
      capacity: 4,
      fuel: "Diesel",
      features: ["AC", "Music System", "4WD", "Off-Road Package", "ABS", "Airbags"],
      pricePerDay: 3500,
      pricePerKm: 18,
      image: tharImg,
      exteriorImages: [tharImg, tharImg, tharImg],
      interiorImages: [tharImg, tharImg],
      owner: {
        name: "Suresh Yadav",
        phone: "+91 9876543224",
        rating: 4.9,
        verified: true
      },
      specifications: {
        transmission: "Manual",
        mileage: "15 km/l",
        year: 2024
      }
    },
    {
      id: 15,
      name: "Mahindra XUV700",
      type: "SUV",
      capacity: 7,
      fuel: "Diesel",
      features: ["AC", "Music System", "GPS", "Sunroof", "Leather Seats", "ABS", "Airbags"],
      pricePerDay: 4000,
      pricePerKm: 19,
      image: xuv700Img,
      exteriorImages: [xuv700Img, xuv700Img, xuv700Img],
      interiorImages: [xuv700Img, xuv700Img],
      owner: {
        name: "Rohit Mishra",
        phone: "+91 9876543225",
        rating: 4.8,
        verified: true
      },
      specifications: {
        transmission: "Automatic",
        mileage: "14 km/l",
        year: 2023
      }
    },
    {
      id: 16,
      name: "Mahindra Scorpio",
      type: "SUV",
      capacity: 7,
      fuel: "Diesel",
      features: ["AC", "Music System", "GPS", "Power Windows", "ABS", "Airbags"],
      pricePerDay: 3200,
      pricePerKm: 17,
      image: scorpioImg,
      exteriorImages: [scorpioImg, scorpioImg, scorpioImg],
      interiorImages: [scorpioImg, scorpioImg],
      owner: {
        name: "Karan Jha",
        phone: "+91 9876543226",
        rating: 4.7,
        verified: true
      },
      specifications: {
        transmission: "Manual",
        mileage: "15 km/l",
        year: 2023
      }
    },
    {
      id: 17,
      name: "Toyota Fortuner",
      type: "Luxury",
      capacity: 7,
      fuel: "Diesel",
      features: ["AC", "Music System", "GPS", "Sunroof", "Leather Seats", "4WD", "ABS", "Airbags"],
      pricePerDay: 5500,
      pricePerKm: 22,
      image: fortunerImg,
      exteriorImages: [fortunerImg, fortunerImg, fortunerImg],
      interiorImages: [fortunerImg, fortunerImg],
      owner: {
        name: "Ankit Verma",
        phone: "+91 9876543227",
        rating: 4.9,
        verified: true
      },
      specifications: {
        transmission: "Automatic",
        mileage: "12 km/l",
        year: 2024
      }
    },
    {
      id: 18,
      name: "Toyota Innova Crysta",
      type: "MUV",
      capacity: 7,
      fuel: "Diesel",
      features: ["AC", "Music System", "GPS", "Captain Seats", "Power Windows", "ABS", "Airbags"],
      pricePerDay: 4500,
      pricePerKm: 20,
      image: crystaImg,
      exteriorImages: [crystaImg, crystaImg, crystaImg],
      interiorImages: [crystaImg, crystaImg],
      owner: {
        name: "Praveen Kumar",
        phone: "+91 9876543228",
        rating: 4.8,
        verified: true
      },
      specifications: {
        transmission: "Automatic",
        mileage: "14 km/l",
        year: 2023
      }
    }
  ];

  const vehicleTypes = ["All", "Sedan", "SUV", "MUV", "Luxury", "Hatchback"];

  const filteredVehicles = selectedType === "All" 
    ? vehicles 
    : vehicles.filter(vehicle => vehicle.type === selectedType);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Navbar />
      
      <div className="pt-24 pb-12">
        {/* Animated Header */}
        <div className="container mx-auto px-4 mb-12 animate-fade-in">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-4">
              <Badge className="bg-primary/10 text-primary border-primary/20 px-6 py-2 text-sm animate-bounce">
                Premium Car Rentals
              </Badge>
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-waterfall to-primary bg-clip-text text-transparent">
              Your Perfect Ride Awaits
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Choose from our premium fleet of well-maintained vehicles for a comfortable and memorable journey across Jharkhand
            </p>
          </div>
        </div>

        {/* Type Filter with Glass Effect */}
        <div className="container mx-auto px-4 mb-12 animate-fade-in" style={{ animationDelay: "100ms" }}>
          <div className="glass-effect rounded-2xl p-6 max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3">
              {vehicleTypes.map((type, index) => (
                <Button
                  key={type}
                  variant={selectedType === type ? "default" : "outline"}
                  onClick={() => setSelectedType(type)}
                  className={`transition-all duration-300 hover-scale ${
                    selectedType === type 
                      ? "bg-gradient-to-r from-waterfall to-primary shadow-lg shadow-waterfall/30" 
                      : "hover:border-waterfall"
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {type}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Vehicles Grid */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVehicles.map((vehicle, index) => (
              <Card 
                key={vehicle.id}
                className="group overflow-hidden hover-lift animate-fade-in border-2 hover:border-waterfall/50 transition-all duration-500 bg-gradient-to-br from-card to-card/80"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Vehicle Image with Overlay */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Floating Badges */}
                  <Badge className="absolute top-4 left-4 bg-waterfall text-waterfall-foreground shadow-lg">
                    {vehicle.type}
                  </Badge>
                  <Badge className="absolute top-4 right-4 bg-secondary shadow-lg flex items-center gap-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    {vehicle.owner.rating}
                  </Badge>
                  
                  {/* Verified Badge */}
                  {vehicle.owner.verified && (
                    <Badge className="absolute bottom-4 right-4 bg-emerald-500 text-white shadow-lg flex items-center gap-1">
                      <Shield className="h-3 w-3" />
                      Verified
                    </Badge>
                  )}
                </div>

                <CardContent className="p-6 space-y-4">
                  {/* Vehicle Name & Year */}
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-2xl font-bold mb-1 group-hover:text-waterfall transition-colors">
                        {vehicle.name}
                      </h3>
                      <p className="text-sm text-muted-foreground flex items-center gap-1">
                        <Award className="h-3 w-3" />
                        {vehicle.specifications.year} Model
                      </p>
                    </div>
                  </div>

                  {/* Quick Specs */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="glass-effect rounded-lg p-3 text-center">
                      <Users className="h-4 w-4 text-waterfall mx-auto mb-1" />
                      <p className="text-xs text-muted-foreground">{vehicle.capacity} Seats</p>
                    </div>
                    <div className="glass-effect rounded-lg p-3 text-center">
                      <Fuel className="h-4 w-4 text-waterfall mx-auto mb-1" />
                      <p className="text-xs text-muted-foreground">{vehicle.fuel}</p>
                    </div>
                    <div className="glass-effect rounded-lg p-3 text-center">
                      <Car className="h-4 w-4 text-waterfall mx-auto mb-1" />
                      <p className="text-xs text-muted-foreground">{vehicle.specifications.transmission}</p>
                    </div>
                  </div>

                  {/* Features Tags */}
                  <div className="flex flex-wrap gap-2">
                    {vehicle.features.slice(0, 4).map((feature) => (
                      <Badge key={feature} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                    {vehicle.features.length > 4 && (
                      <Badge variant="secondary" className="text-xs">
                        +{vehicle.features.length - 4} more
                      </Badge>
                    )}
                  </div>

                  {/* Owner Info */}
                  <div className="glass-effect rounded-lg p-3 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-waterfall" />
                        <span className="text-sm font-medium">{vehicle.owner.name}</span>
                      </div>
                      <Phone className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>

                  {/* Pricing Card */}
                  <div className="bg-gradient-to-br from-waterfall/10 to-primary/10 rounded-xl p-4 space-y-2 border border-waterfall/20">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Per Day</span>
                      <span className="text-2xl font-bold text-waterfall flex items-center">
                        <IndianRupee className="h-5 w-5" />
                        {vehicle.pricePerDay}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Per Km</span>
                      <span className="text-lg font-semibold text-primary flex items-center">
                        <IndianRupee className="h-4 w-4" />
                        {vehicle.pricePerKm}
                      </span>
                    </div>
                  </div>

                  {/* Book Button */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        onClick={() => setSelectedVehicle(vehicle)}
                        className="w-full bg-gradient-to-r from-waterfall to-primary hover:from-waterfall/90 hover:to-primary/90 shadow-lg hover:shadow-waterfall/30 transition-all duration-300 hover-scale"
                      >
                        <Calendar className="mr-2 h-4 w-4" />
                        Book Now
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto animate-scale-in">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-waterfall to-primary bg-clip-text text-transparent">
                          Book {vehicle.name}
                        </DialogTitle>
                        <DialogDescription>
                          Fill in your details to reserve this premium vehicle
                        </DialogDescription>
                      </DialogHeader>

                      {/* Image Carousel */}
                      <div className="my-4">
                        <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                          <Car className="h-4 w-4 text-waterfall" />
                          Vehicle Gallery
                        </h4>
                        <Carousel className="w-full">
                          <CarouselContent>
                            {[...vehicle.exteriorImages, ...vehicle.interiorImages].map((img, idx) => (
                              <CarouselItem key={idx}>
                                <div className="relative h-48 rounded-lg overflow-hidden">
                                  <img src={img} alt={`${vehicle.name} view ${idx + 1}`} className="w-full h-full object-cover" />
                                </div>
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                          <CarouselPrevious />
                          <CarouselNext />
                        </Carousel>
                      </div>

                      {/* Vehicle Details */}
                      <div className="glass-effect rounded-lg p-4 space-y-3 mb-4">
                        <h4 className="font-semibold flex items-center gap-2">
                          <Award className="h-4 w-4 text-waterfall" />
                          Vehicle Specifications
                        </h4>
                        <div className="grid grid-cols-2 gap-3 text-sm">
                          <div>
                            <p className="text-muted-foreground">Transmission</p>
                            <p className="font-medium">{vehicle.specifications.transmission}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Mileage</p>
                            <p className="font-medium">{vehicle.specifications.mileage}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Fuel Type</p>
                            <p className="font-medium">{vehicle.fuel}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Capacity</p>
                            <p className="font-medium">{vehicle.capacity} Passengers</p>
                          </div>
                        </div>
                      </div>

                      {/* Owner Details */}
                      <div className="glass-effect rounded-lg p-4 space-y-2 mb-4">
                        <h4 className="font-semibold flex items-center gap-2">
                          <User className="h-4 w-4 text-waterfall" />
                          Owner Details
                        </h4>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">{vehicle.owner.name}</p>
                            <p className="text-sm text-muted-foreground">{vehicle.owner.phone}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-semibold">{vehicle.owner.rating}</span>
                          </div>
                        </div>
                      </div>

                      {/* Booking Form */}
                      <form onSubmit={handleBooking} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Full Name *</Label>
                            <Input id="name" placeholder="Enter your name" required className="border-waterfall/30 focus:border-waterfall" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number *</Label>
                            <Input id="phone" type="tel" placeholder="+91 1234567890" required className="border-waterfall/30 focus:border-waterfall" />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="pickup">Pick-up Date *</Label>
                            <Input id="pickup" type="date" required className="border-waterfall/30 focus:border-waterfall" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="dropoff">Drop-off Date *</Label>
                            <Input id="dropoff" type="date" required className="border-waterfall/30 focus:border-waterfall" />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="pickup-location">Pick-up Location *</Label>
                          <Input id="pickup-location" placeholder="Enter pick-up address" required className="border-waterfall/30 focus:border-waterfall" />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="plan">Rental Plan *</Label>
                          <Select name="plan" required>
                            <SelectTrigger className="border-waterfall/30 focus:border-waterfall">
                              <SelectValue placeholder="Select plan" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="daily">Daily Rental - ₹{vehicle.pricePerDay}/day</SelectItem>
                              <SelectItem value="km">Per Km Rental - ₹{vehicle.pricePerKm}/km</SelectItem>
                              <SelectItem value="weekly">Weekly Package - Special Rate</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <Button 
                          type="submit" 
                          disabled={loading}
                          className="w-full bg-gradient-to-r from-waterfall to-primary hover:from-waterfall/90 hover:to-primary/90 shadow-lg hover:shadow-waterfall/30 transition-all duration-300 text-lg py-6"
                        >
                          <Calendar className="mr-2 h-5 w-5" />
                          {loading ? "Processing..." : "Confirm Booking"}
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="container mx-auto px-4 mt-16 animate-fade-in" style={{ animationDelay: "300ms" }}>
          <div className="glass-effect rounded-2xl p-8 text-center max-w-3xl mx-auto">
            <MapPin className="h-12 w-12 text-waterfall mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-3">Need Help Choosing?</h2>
            <p className="text-muted-foreground mb-6">
              Our team is here to help you find the perfect vehicle for your journey
            </p>
            <Button 
              variant="outline" 
              size="lg" 
              className="hover:border-waterfall hover:text-waterfall"
              onClick={() => window.location.href = "tel:9608792602"}
            >
              <Phone className="mr-2 h-4 w-4" />
              Contact Us: 9608792602
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Rentals;
