import RestaurantCard from "./RestaurantCard";
import { restaurants } from "@/data/restaurants";

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
