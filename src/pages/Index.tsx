import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategoryFilter from "@/components/CategoryFilter";
import RestaurantGrid from "@/components/RestaurantGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <CategoryFilter />
      <RestaurantGrid />
      
      <footer className="border-t bg-muted/50 py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-lg font-bold">FoodExpress</h3>
              <p className="text-sm text-muted-foreground">
                Your favorite food, delivered fast and fresh.
              </p>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>About Us</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">For Restaurants</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Partner With Us</li>
                <li>Restaurant Portal</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            © 2024 FoodExpress. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
