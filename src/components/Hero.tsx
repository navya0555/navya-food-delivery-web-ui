import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroImage from "@/assets/hero-food.jpg";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent to-secondary/10">
      <div className="container grid gap-8 py-16 md:grid-cols-2 md:py-24">
        <div className="flex flex-col justify-center gap-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Delicious Food
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Delivered Fast
            </span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Order from your favorite restaurants and get fresh, hot food delivered to your door in minutes.
          </p>
          
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search for restaurants or dishes..."
                className="pl-10"
              />
            </div>
            <Button size="lg" className="bg-gradient-to-r from-primary to-primary/90 shadow-lg hover:shadow-xl transition-all">
              Search
            </Button>
          </div>

          <div className="flex gap-4 text-sm">
            <div>
              <div className="text-2xl font-bold">500+</div>
              <div className="text-muted-foreground">Restaurants</div>
            </div>
            <div className="h-12 w-px bg-border" />
            <div>
              <div className="text-2xl font-bold">30 min</div>
              <div className="text-muted-foreground">Avg Delivery</div>
            </div>
            <div className="h-12 w-px bg-border" />
            <div>
              <div className="text-2xl font-bold">4.8★</div>
              <div className="text-muted-foreground">Rating</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-square overflow-hidden rounded-2xl shadow-2xl">
            <img
              src={heroImage}
              alt="Delicious food"
              className="h-full w-full object-cover transition-transform hover:scale-105"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 rounded-xl bg-secondary p-4 shadow-lg">
            <div className="text-sm font-medium text-secondary-foreground">🎉 Free Delivery</div>
            <div className="text-xs text-secondary-foreground/80">On orders over $30</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
