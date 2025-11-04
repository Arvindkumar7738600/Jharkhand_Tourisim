import hundruFalls from "@/assets/places/hundru-falls.jpg";
import jagannathTemple from "@/assets/places/jagannath-temple.jpg";
import betlaNationalPark from "@/assets/places/betla-national-park.jpg";
import netarhat from "@/assets/places/netarhat.jpg";
import dassamFalls from "@/assets/places/dassam-falls.jpg";
import jubileePark from "@/assets/places/jubilee-park.jpg";
import patratuValley from "@/assets/places/patratu-valley.jpg";
import rockGarden from "@/assets/places/rock-garden.jpg";

export interface Place {
  id: number;
  name: string;
  location: string;
  description: string;
  additionalInfo?: string;
  highlights: string[];
  bestTime: string;
  entryFee: string;
  rating: number;
  category: string;
  images: string[];
  timings?: string;
  activities?: string[];
}

export const placesData: Place[] = [
  {
    id: 1,
    name: "Hundru Falls",
    location: "Ranchi",
    description: "One of the most spectacular waterfalls in Jharkhand, plunging 100 meters down rocky cliffs surrounded by lush forests. The falls are formed by the Subarnarekha River and create a mesmerizing sight as water cascades down in multiple streams.",
    additionalInfo: "The journey to Hundru Falls is an adventure in itself, with scenic routes passing through dense forests and tribal villages. The waterfall is especially magnificent during monsoon season when the water flow is at its peak.",
    highlights: ["100m height", "Scenic viewpoint", "Photography spot", "Picnic area", "Rope bridge", "Natural pool"],
    bestTime: "July to December",
    entryFee: "₹20 per person",
    rating: 4.5,
    category: "Waterfalls",
    images: [hundruFalls, hundruFalls, hundruFalls],
    timings: "7:00 AM - 6:00 PM",
    activities: ["Photography", "Trekking", "Picnicking", "Nature walks"]
  },
  {
    id: 2,
    name: "Jagannath Temple",
    location: "Ranchi",
    description: "A magnificent 17th-century temple dedicated to Lord Jagannath. The architecture resembles the famous Puri temple and attracts thousands of devotees annually. The temple complex features intricate stone carvings and beautiful sculptures.",
    additionalInfo: "Built by the Nagvanshi rulers, this temple is an important pilgrimage site and hosts the grand Rath Yatra festival every year, drawing devotees from across the country.",
    highlights: ["Ancient architecture", "Religious significance", "Annual Rath Yatra", "Peaceful atmosphere", "Stone carvings", "Cultural events"],
    bestTime: "October to March",
    entryFee: "Free",
    rating: 4.7,
    category: "Temples",
    images: [jagannathTemple, jagannathTemple, jagannathTemple],
    timings: "5:00 AM - 9:00 PM",
    activities: ["Temple worship", "Rath Yatra participation", "Photography", "Meditation"]
  },
  {
    id: 3,
    name: "Betla National Park",
    location: "Palamu",
    description: "One of India's first tiger reserves, home to tigers, elephants, leopards, and diverse bird species. Spread across 1026 sq km of pristine forest, it offers an incredible wildlife experience in the heart of Jharkhand.",
    additionalInfo: "The park is part of the Palamu Tiger Reserve and features ancient forts within its boundaries. It's a paradise for wildlife enthusiasts and photographers, offering jeep safaris and elephant rides.",
    highlights: ["Tiger safari", "Elephant spotting", "Bird watching", "Dense forest", "Ancient forts", "Biodiversity"],
    bestTime: "November to April",
    entryFee: "₹100 per person + Safari charges",
    rating: 4.6,
    category: "Wildlife",
    images: [betlaNationalPark, betlaNationalPark, betlaNationalPark],
    timings: "6:00 AM - 5:00 PM",
    activities: ["Jeep safari", "Wildlife photography", "Bird watching", "Nature trails"]
  },
  {
    id: 4,
    name: "Jonha Falls",
    location: "Ranchi",
    description: "Also known as Gautamdhara, this 43-meter high waterfall is associated with Lord Buddha and is believed to be the place where he bathed. The serene surroundings make it perfect for meditation and relaxation.",
    highlights: ["43m waterfall", "Historical significance", "Temple nearby", "Natural pool", "Trekking trails", "Spiritual atmosphere"],
    bestTime: "July to February",
    entryFee: "₹20 per person",
    rating: 4.4,
    category: "Waterfalls",
    images: [hundruFalls, hundruFalls, hundruFalls],
    timings: "8:00 AM - 6:00 PM",
    activities: ["Swimming", "Trekking", "Meditation", "Photography"]
  },
  {
    id: 5,
    name: "Baidyanath Dham",
    location: "Deoghar",
    description: "One of the twelve Jyotirlingas, this sacred temple complex is a major pilgrimage site for Hindus. During Shravan, millions of devotees known as Kanwariyas visit this holy shrine carrying holy water from the Ganges.",
    highlights: ["Jyotirlinga", "Ancient temple", "Spiritual energy", "Shravan Mela", "Architectural beauty", "Religious significance"],
    bestTime: "October to March",
    entryFee: "Free",
    rating: 4.8,
    category: "Temples",
    images: [jagannathTemple, jagannathTemple, jagannathTemple],
    timings: "4:00 AM - 9:00 PM",
    activities: ["Temple darshan", "Shravan pilgrimage", "Prayer ceremonies", "Spiritual retreat"]
  },
  {
    id: 6,
    name: "Netarhat",
    location: "Latehar",
    description: "Known as the 'Queen of Chotanagpur', Netarhat offers stunning sunrise and sunset views from its hilltops. The cool climate and scenic beauty make it a perfect hill station getaway, with pine forests and rolling hills.",
    additionalInfo: "At an altitude of 1128 meters, Netarhat is famous for its Magnolia Point sunrise view and Sunset Point. The area is also home to several waterfalls and trekking trails.",
    highlights: ["Sunrise point", "Sunset point", "Cool climate", "Pine forests", "Waterfalls nearby", "Trekking trails"],
    bestTime: "September to May",
    entryFee: "Free",
    rating: 4.5,
    category: "Hill Stations",
    images: [netarhat, netarhat, netarhat],
    activities: ["Sunrise viewing", "Trekking", "Photography", "Nature walks"]
  },
  {
    id: 7,
    name: "Dassam Falls",
    location: "Ranchi",
    description: "The Kanchi River creates this beautiful 44-meter waterfall that cascades down in a wide curtain of water. The wide cascade creates a mesmerizing sight, especially during monsoons when the water flow is at its peak.",
    highlights: ["44m cascade", "Wide waterfall", "Picnic spot", "Rock formations", "Swimming area", "Photography"],
    bestTime: "July to December",
    entryFee: "₹20 per person",
    rating: 4.3,
    category: "Waterfalls",
    images: [dassamFalls, dassamFalls, dassamFalls],
    timings: "7:00 AM - 6:00 PM",
    activities: ["Swimming", "Picnicking", "Photography", "Rock climbing"]
  },
  {
    id: 8,
    name: "Parasnath Hill",
    location: "Giridih",
    description: "The highest mountain peak in Jharkhand at 1365 meters, sacred to Jains. According to Jain tradition, 20 out of 24 Tirthankaras attained salvation here, making it one of the most important Jain pilgrimage sites.",
    highlights: ["Highest peak", "Jain pilgrimage", "Trekking trails", "Temples", "Panoramic views", "Spiritual significance"],
    bestTime: "October to March",
    entryFee: "Free",
    rating: 4.6,
    category: "Mountains",
    images: [netarhat, netarhat, netarhat],
    activities: ["Pilgrimage trek", "Temple visits", "Mountain climbing", "Meditation"]
  },
  {
    id: 9,
    name: "Jubilee Park",
    location: "Ranchi",
    description: "One of the largest parks in Ranchi, Jubilee Park is a beautifully landscaped garden featuring fountains, a lake, children's play areas, and walking paths. It's a perfect spot for families and morning joggers.",
    highlights: ["Musical fountain", "Boating lake", "Children's park", "Walking paths", "Rose garden", "Open gym"],
    bestTime: "October to March",
    entryFee: "₹10 per person",
    rating: 4.2,
    category: "Parks",
    images: [jubileePark, jubileePark, jubileePark],
    timings: "5:00 AM - 8:00 PM",
    activities: ["Boating", "Jogging", "Picnicking", "Children's activities"]
  },
  {
    id: 10,
    name: "Patratu Valley",
    location: "Ramgarh",
    description: "A stunning valley offering breathtaking views of the dam reservoir surrounded by hills. The scenic beauty, especially during sunset, makes it a popular spot for photographers and nature lovers.",
    highlights: ["Dam view", "Valley scenery", "Sunset point", "Photography", "Hill views", "Peaceful environment"],
    bestTime: "October to April",
    entryFee: "Free",
    rating: 4.4,
    category: "Valleys",
    images: [patratuValley, patratuValley, patratuValley],
    activities: ["Photography", "Scenic drives", "Sunset viewing", "Picnicking"]
  },
  {
    id: 11,
    name: "Maithon Dam",
    location: "Dhanbad",
    description: "One of the most scenic dams in Jharkhand, built on the Barakar River. The dam offers boating facilities and the surrounding area is perfect for picnics with beautiful water views and lush greenery.",
    highlights: ["Dam structure", "Boating facility", "Water sports", "Picnic spots", "Scenic beauty", "Bird watching"],
    bestTime: "October to March",
    entryFee: "₹10 per person",
    rating: 4.3,
    category: "Dams",
    images: [patratuValley, patratuValley, patratuValley],
    timings: "8:00 AM - 6:00 PM",
    activities: ["Boating", "Picnicking", "Photography", "Water sports"]
  },
  {
    id: 12,
    name: "Rock Garden",
    location: "Ranchi",
    description: "An artistic garden created using rocks and featuring beautiful landscapes, waterfalls, and creative sculptures. The garden showcases the natural beauty of rocks combined with human creativity.",
    highlights: ["Rock sculptures", "Waterfalls", "Landscaping", "Photography spot", "Art installations", "Peaceful ambiance"],
    bestTime: "September to March",
    entryFee: "₹20 per person",
    rating: 4.2,
    category: "Gardens",
    images: [rockGarden, rockGarden, rockGarden],
    timings: "9:00 AM - 6:00 PM",
    activities: ["Sightseeing", "Photography", "Art appreciation", "Relaxation"]
  },
  {
    id: 13,
    name: "Dalma Wildlife Sanctuary",
    location: "Jamshedpur",
    description: "A protected wildlife sanctuary known for its elephant population and diverse flora and fauna. The sanctuary offers trekking trails and wildlife viewing opportunities in a pristine natural setting.",
    highlights: ["Elephant herds", "Wildlife spotting", "Trekking", "Bird watching", "Forest trails", "Biodiversity"],
    bestTime: "November to April",
    entryFee: "₹50 per person",
    rating: 4.5,
    category: "Wildlife",
    images: [betlaNationalPark, betlaNationalPark, betlaNationalPark],
    timings: "6:00 AM - 5:00 PM",
    activities: ["Wildlife safari", "Trekking", "Bird watching", "Nature photography"]
  },
  {
    id: 14,
    name: "Dimna Lake",
    location: "Jamshedpur",
    description: "A serene artificial lake surrounded by hills and forests, offering boating facilities and a peaceful environment. The lake is a popular weekend getaway with beautiful sunset views.",
    highlights: ["Boating", "Scenic views", "Sunset point", "Picnic area", "Hill surroundings", "Water activities"],
    bestTime: "October to March",
    entryFee: "₹10 per person",
    rating: 4.3,
    category: "Lakes",
    images: [patratuValley, patratuValley, patratuValley],
    timings: "7:00 AM - 6:00 PM",
    activities: ["Boating", "Picnicking", "Photography", "Nature walks"]
  },
  {
    id: 15,
    name: "Basukinath Temple",
    location: "Dumka",
    description: "An ancient Shiva temple of great religious significance, particularly during the month of Shravan when thousands of devotees visit. The temple is known for its spiritual atmosphere and beautiful architecture.",
    highlights: ["Ancient temple", "Shiva lingam", "Religious significance", "Shravan pilgrimage", "Peaceful atmosphere", "Architecture"],
    bestTime: "October to March",
    entryFee: "Free",
    rating: 4.6,
    category: "Temples",
    images: [jagannathTemple, jagannathTemple, jagannathTemple],
    timings: "4:00 AM - 9:00 PM",
    activities: ["Temple worship", "Pilgrimage", "Prayer ceremonies", "Spiritual retreat"]
  },
  {
    id: 16,
    name: "Deori Temple",
    location: "Ranchi",
    description: "An ancient temple complex featuring beautiful carved stones and historical significance. The temple is dedicated to various deities and showcases excellent Nagvanshi-era architecture.",
    highlights: ["Ancient architecture", "Stone carvings", "Historical site", "Multiple shrines", "Cultural heritage", "Peaceful setting"],
    bestTime: "October to March",
    entryFee: "Free",
    rating: 4.2,
    category: "Temples",
    images: [jagannathTemple, jagannathTemple, jagannathTemple],
    timings: "6:00 AM - 7:00 PM",
    activities: ["Temple visits", "Architecture appreciation", "Photography", "Cultural exploration"]
  },
  {
    id: 17,
    name: "Birsa Zoological Park",
    location: "Ranchi",
    description: "A well-maintained zoo home to various species of animals, birds, and reptiles. The zoo is set in a natural habitat and offers educational programs about wildlife conservation.",
    highlights: ["Diverse species", "Natural habitat", "Educational programs", "Safari", "Bird aviary", "Conservation center"],
    bestTime: "October to March",
    entryFee: "₹30 per person",
    rating: 4.1,
    category: "Wildlife",
    images: [betlaNationalPark, betlaNationalPark, betlaNationalPark],
    timings: "9:00 AM - 5:00 PM (Closed on Monday)",
    activities: ["Animal viewing", "Safari ride", "Photography", "Educational tours"]
  },
  {
    id: 18,
    name: "Tagore Hill",
    location: "Ranchi",
    description: "A scenic hilltop where Rabindranath Tagore used to meditate and spend time during his visits to Ranchi. The hill offers panoramic views of the city and houses a small museum dedicated to Tagore.",
    highlights: ["Historical significance", "Tagore museum", "City views", "Peaceful environment", "Rock formations", "Literary heritage"],
    bestTime: "October to March",
    entryFee: "₹10 per person",
    rating: 4.3,
    category: "Hills",
    images: [netarhat, netarhat, netarhat],
    timings: "8:00 AM - 6:00 PM",
    activities: ["Sightseeing", "Museum visit", "Photography", "Meditation"]
  },
  {
    id: 19,
    name: "Rajrappa Temple",
    location: "Ramgarh",
    description: "A famous temple dedicated to Goddess Chinnamasta, located at the confluence of rivers Bhera and Damodar. The temple is a significant Tantric pilgrimage site with unique rituals.",
    highlights: ["Goddess Chinnamasta", "River confluence", "Tantric significance", "Unique rituals", "Natural beauty", "Waterfall nearby"],
    bestTime: "October to March",
    entryFee: "Free",
    rating: 4.5,
    category: "Temples",
    images: [jagannathTemple, jagannathTemple, jagannathTemple],
    timings: "5:00 AM - 8:00 PM",
    activities: ["Temple worship", "River view", "Photography", "Spiritual practices"]
  },
  {
    id: 20,
    name: "Khondoli Park",
    location: "Saraikela",
    description: "A beautiful park featuring well-maintained gardens, walking paths, and recreational facilities. The park is perfect for families and offers a peaceful environment for relaxation.",
    highlights: ["Landscaped gardens", "Walking paths", "Recreational areas", "Children's zone", "Flower displays", "Open spaces"],
    bestTime: "October to March",
    entryFee: "₹10 per person",
    rating: 4.0,
    category: "Parks",
    images: [jubileePark, jubileePark, jubileePark],
    timings: "6:00 AM - 7:00 PM",
    activities: ["Walking", "Jogging", "Picnicking", "Children's play"]
  },
  {
    id: 21,
    name: "Usri Falls",
    location: "Giridih",
    description: "A beautiful three-tiered waterfall cascading from a height of about 40 feet. The waterfall is surrounded by dense forests and offers a peaceful retreat into nature.",
    highlights: ["Three-tier cascade", "Natural pool", "Forest surroundings", "Trekking path", "Photography spot", "Peaceful atmosphere"],
    bestTime: "July to December",
    entryFee: "₹20 per person",
    rating: 4.2,
    category: "Waterfalls",
    images: [dassamFalls, dassamFalls, dassamFalls],
    timings: "7:00 AM - 6:00 PM",
    activities: ["Trekking", "Swimming", "Photography", "Nature walks"]
  },
  {
    id: 22,
    name: "Kanke Dam",
    location: "Ranchi",
    description: "A popular picnic spot with a scenic dam reservoir surrounded by hills. The area offers boating facilities and beautiful views, making it a favorite weekend destination for locals.",
    highlights: ["Dam view", "Boating", "Picnic areas", "Hill views", "Sunset point", "Recreational facilities"],
    bestTime: "October to March",
    entryFee: "₹10 per person",
    rating: 4.1,
    category: "Dams",
    images: [patratuValley, patratuValley, patratuValley],
    timings: "8:00 AM - 6:00 PM",
    activities: ["Boating", "Picnicking", "Photography", "Relaxation"]
  },
  {
    id: 23,
    name: "Sun Temple",
    location: "Ranchi",
    description: "A magnificent temple dedicated to the Sun God, built on a hill and featuring architecture inspired by the famous Konark Sun Temple. The temple offers stunning views and spiritual ambiance.",
    highlights: ["Sun deity", "Hilltop location", "Beautiful architecture", "Panoramic views", "18 wheels chariot", "Spiritual atmosphere"],
    bestTime: "October to March",
    entryFee: "Free",
    rating: 4.4,
    category: "Temples",
    images: [jagannathTemple, jagannathTemple, jagannathTemple],
    timings: "6:00 AM - 8:00 PM",
    activities: ["Temple worship", "Sunrise viewing", "Photography", "Spiritual meditation"]
  },
  {
    id: 24,
    name: "Dhruva Dam",
    location: "Ranchi",
    description: "A serene reservoir offering peaceful surroundings and beautiful water views. The dam is less crowded compared to other spots, making it perfect for those seeking tranquility.",
    highlights: ["Peaceful environment", "Water reservoir", "Scenic beauty", "Bird watching", "Picnic spot", "Less crowded"],
    bestTime: "October to March",
    entryFee: "Free",
    rating: 4.0,
    category: "Dams",
    images: [patratuValley, patratuValley, patratuValley],
    timings: "Open 24 hours",
    activities: ["Picnicking", "Photography", "Bird watching", "Relaxation"]
  }
];