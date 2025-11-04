export const handleGetDirections = (placeName: string) => {
  // 1. Destination ko sahi tarah se encode karein.
  const destination = encodeURIComponent(placeName + ", Jharkhand");
  
  // 2. Public Google Maps URL Scheme ka upyog karein.
  // 'dir' parameter directions ke liye, aur 'destination' final point ke liye.
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
  // Ya sirf search ke liye:
  // const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${destination}`;

  // New tab mein open karein
  window.open(googleMapsUrl, "_blank");
};