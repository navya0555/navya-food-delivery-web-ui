import { Button } from "@/components/ui/button";
import { useState } from "react";

const categories = [
  { id: "all", name: "All", icon: "🍽️" },
  { id: "pizza", name: "Pizza", icon: "🍕" },
  { id: "burger", name: "Burgers", icon: "🍔" },
  { id: "sushi", name: "Sushi", icon: "🍣" },
  { id: "chinese", name: "Chinese", icon: "🥡" },
  { id: "dessert", name: "Desserts", icon: "🍰" },
  { id: "healthy", name: "Healthy", icon: "🥗" },
];

const CategoryFilter = () => {
  const [selected, setSelected] = useState("all");

  return (
    <div className="container py-8">
      <h2 className="mb-6 text-2xl font-bold">What are you craving?</h2>
      <div className="flex gap-3 overflow-x-auto pb-2">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selected === category.id ? "default" : "outline"}
            className={`flex-shrink-0 gap-2 ${
              selected === category.id
                ? "bg-primary text-primary-foreground shadow-md"
                : ""
            }`}
            onClick={() => setSelected(category.id)}
          >
            <span className="text-lg">{category.icon}</span>
            {category.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
