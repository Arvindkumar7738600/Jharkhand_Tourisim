import { Card, CardContent } from "@/components/ui/card";
import { Mountain, Users, Landmark, TreePine, Sparkles, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  const facts = [
    {
      icon: Calendar,
      title: "Established",
      value: "15th November 2000",
      description: "Carved out of Bihar"
    },
    {
      icon: Mountain,
      title: "Geography",
      value: "79,716 km²",
      description: "Rich mineral deposits"
    },
    {
      icon: Users,
      title: "Population",
      value: "~38 Million",
      description: "Diverse tribal culture"
    },
    {
      icon: Landmark,
      title: "Capital",
      value: "Ranchi",
      description: "City of waterfalls"
    },
  ];

  const culturalHighlights = [
    {
      title: "Tribal Heritage",
      description: "Home to 32 tribal communities including Santhal, Munda, Oraon, and Ho tribes. Each community has unique traditions, art forms, and festivals.",
      icon: Users,
      color: "primary"
    },
    {
      title: "Natural Wonders",
      description: "Blessed with spectacular waterfalls, dense forests, and wildlife sanctuaries. Known as the 'Land of Forests' with over 29% forest cover.",
      icon: TreePine,
      color: "waterfall"
    },
    {
      title: "Festivals",
      description: "Vibrant celebrations like Sarhul, Karma, Tusu Parab showcase the rich cultural tapestry. Traditional dances like Paika and Chhau are mesmerizing.",
      icon: Sparkles,
      color: "secondary"
    },
    {
      title: "Historical Sites",
      description: "Ancient temples, rock art dating back to prehistoric times, and architectural marvels that tell stories of glorious past.",
      icon: Landmark,
      color: "heritage"
    },
  ];

  // Define color mapping for dynamic colors
  const colorMap: { [key: string]: string } = {
    primary: "#3b82f6",
    waterfall: "#06b6d4", 
    secondary: "#8b5cf6",
    heritage: "#f59e0b"
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-12">
        {/* Hero Section */}
        <div className="relative h-96 mb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-waterfall to-heritage">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTIwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptLTIwIDBjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />
          </div>
          
          <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
            <div className="text-center animate-fade-in text-primary-foreground">
              <h1 className="text-6xl font-bold mb-4">About Jharkhand</h1>
              <p className="text-2xl opacity-90 max-w-3xl mx-auto">
                The Land of Forests - Where Nature Meets Heritage
              </p>
            </div>
          </div>
        </div>

        {/* Quick Facts */}
        <div className="container mx-auto px-4 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facts.map((fact, index) => (
              <Card 
                key={fact.title}
                className="hover:shadow-lg transition-shadow duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center space-y-3">
                  <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <fact.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{fact.title}</p>
                    <p className="text-2xl font-bold text-primary">{fact.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{fact.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 mb-16">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-4xl font-bold mb-6">The Heart of Tribal India</h2>
              <p className="text-muted-foreground leading-relaxed">
                Jharkhand, meaning "The Land of Forests," is a state in eastern India carved out of the southern part of Bihar on 15th November 2000. Known for its rich mineral resources, dense forests, and vibrant tribal culture, Jharkhand is a treasure trove of natural beauty and cultural heritage.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                The state is home to some of India's most spectacular waterfalls, including Hundru Falls, Jonha Falls, and Dassam Falls. Its landscape varies from the Chota Nagpur Plateau to dense Sal forests, creating a paradise for nature lovers and adventure enthusiasts.
              </p>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-waterfall/10 rounded-2xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold mb-4">Did You Know?</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Jharkhand produces 40% of India's mineral wealth, including coal, iron ore, and copper.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>The state is named after the dense forests that cover nearly 29% of its area.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Netarhat is called the "Queen of Chotanagpur" for its stunning hill station views.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>MS Dhoni, India's legendary cricket captain, hails from Ranchi, Jharkhand.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Cultural Highlights */}
        <div className="container mx-auto px-4 mb-20">
          <div className="text-center mb-16 animate-fade-in">
            <p className="text-lg font-semibold text-primary uppercase tracking-widest">Our Roots</p>
            <h2 className="text-5xl font-extrabold mb-4">Cultural Treasures</h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              Discover the rich tapestry of traditions, festivals, and heritage that define Jharkhand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {culturalHighlights.map((item, index) => (
              <Card 
                key={item.title}
                className="hover:shadow-2xl transition-shadow duration-300 rounded-2xl border-l-4 bg-white"
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  borderLeftColor: colorMap[item.color] || "#3b82f6"
                }}
              >
                <CardContent className="p-8 flex flex-col md:flex-row items-start gap-6">
                  <div 
                    className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${colorMap[item.color] || "#3b82f6"}20` }}
                  >
                    <item.icon 
                      className="h-8 w-8" 
                      style={{ color: colorMap[item.color] || "#3b82f6" }}
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-800">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Cuisine Section */}
        <div className="bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h2 className="text-4xl font-bold mb-6">Traditional Cuisine</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Jharkhandi cuisine is a delightful blend of simplicity and flavor. The traditional dishes are primarily vegetarian, made with locally grown ingredients. Popular dishes include <span className="font-semibold text-foreground">Dhuska</span> (rice pancakes), <span className="font-semibold text-foreground">Litti Chokha</span>, <span className="font-semibold text-foreground">Rugra</span> (mushroom curry), and <span className="font-semibold text-foreground">Chilka Roti</span>. The tribal communities have their unique preparations using forest produce, herbs, and minimal spices, creating authentic flavors that are both nutritious and delicious.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge color="#3b82f6">Dhuska</Badge>
                <Badge color="#06b6d4">Litti Chokha</Badge>
                <Badge color="#8b5cf6">Rugra</Badge>
                <Badge color="#f59e0b">Chilka Roti</Badge>
                <Badge color="#10b981">Pittha</Badge>
                <Badge color="#ef4444">Arsa</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

// Fixed Badge component with proper props
const Badge = ({ children, color }: { children: React.ReactNode; color: string }) => (
  <span 
    className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium transition-all hover:shadow-md"
    style={{ 
      backgroundColor: `${color}10`,
      color: color
    }}
  >
    {children}
  </span>
);

export default About;