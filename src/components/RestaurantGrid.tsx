import RestaurantCard from "./RestaurantCard";

const restaurants = [
  {
    id: "1",
    name: "Bella Italia",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
    rating: 4.8,
    deliveryTime: "25-35 min",
    cuisine: "Italian",
    priceRange: "$$",
    isOpen: true,
  },
  {
    id: "2",
    name: "Sushi Master",
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&q=80",
    rating: 4.9,
    deliveryTime: "30-40 min",
    cuisine: "Japanese",
    priceRange: "$$$",
    isOpen: true,
  },
  {
    id: "3",
    name: "Burger House",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80",
    rating: 4.6,
    deliveryTime: "20-30 min",
    cuisine: "American",
    priceRange: "$",
    isOpen: true,
  },
  {
    id: "4",
    name: "Green Bowl",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
    rating: 4.7,
    deliveryTime: "15-25 min",
    cuisine: "Healthy",
    priceRange: "$$",
    isOpen: true,
  },
  {
    id: "5",
    name: "Dragon Wok",
    image: "https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=800&q=80",
    rating: 4.5,
    deliveryTime: "30-40 min",
    cuisine: "Chinese",
    priceRange: "$$",
    isOpen: false,
  },
  {
    id: "6",
    name: "Sweet Dreams Bakery",
    image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=800&q=80",
    rating: 4.9,
    deliveryTime: "20-30 min",
    cuisine: "Desserts",
    priceRange: "$",
    isOpen: true,
  },
];

const RestaurantGrid = () => {
  return (
    <div className="container py-8">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Popular Restaurants</h2>
        <span className="text-sm text-muted-foreground">{restaurants.length} restaurants</span>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} {...restaurant} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantGrid;
