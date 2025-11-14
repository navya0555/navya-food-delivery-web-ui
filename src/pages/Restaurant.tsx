import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { restaurants, menuItems } from "@/data/restaurants";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, MapPin, Plus } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useState } from "react";

const Restaurant = () => {
  const { id } = useParams();
  const restaurant = restaurants.find((r) => r.id === id);
  const items = menuItems[id || ""] || [];
  const { addItem } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  if (!restaurant) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container py-16 text-center">
          <h1 className="text-2xl font-bold">Restaurant not found</h1>
        </div>
      </div>
    );
  }

  const categories = ["all", ...new Set(items.map((item) => item.category))];
  const filteredItems =
    selectedCategory === "all"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="relative h-64 overflow-hidden">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="container -mt-12 relative z-10 pb-16">
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <h1 className="mb-2 text-3xl font-bold">{restaurant.name}</h1>
                <p className="mb-4 text-muted-foreground">{restaurant.description}</p>
                
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="font-medium">{restaurant.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{restaurant.deliveryTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>2.5 km away</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <Badge
                  variant={restaurant.isOpen ? "default" : "secondary"}
                  className="w-fit"
                >
                  {restaurant.isOpen ? "Open Now" : "Closed"}
                </Badge>
                <Badge variant="outline">{restaurant.cuisine}</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mb-6">
          <h2 className="mb-4 text-2xl font-bold">Menu</h2>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="flex-shrink-0 capitalize"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <Card key={item.id} className="overflow-hidden transition-all hover:shadow-lg">
              <div className="aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition-transform hover:scale-110"
                />
              </div>
              <CardContent className="p-4">
                <div className="mb-2 flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">
                    ${item.price.toFixed(2)}
                  </span>
                  <Button
                    size="sm"
                    onClick={() =>
                      addItem({
                        ...item,
                        restaurantId: restaurant.id,
                        restaurantName: restaurant.name,
                      })
                    }
                    className="gap-1"
                  >
                    <Plus className="h-4 w-4" />
                    Add
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
