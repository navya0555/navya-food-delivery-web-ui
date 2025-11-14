import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ShoppingBag } from "lucide-react";

const Cart = () => {
  const isCartEmpty = true;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container py-8">
        <h1 className="mb-8 text-3xl font-bold">Your Cart</h1>
        
        {isCartEmpty ? (
          <Card className="text-center py-16">
            <CardContent className="flex flex-col items-center gap-4">
              <ShoppingBag className="h-16 w-16 text-muted-foreground" />
              <h2 className="text-2xl font-semibold">Your cart is empty</h2>
              <p className="text-muted-foreground">Add items from a restaurant to get started</p>
              <Button className="mt-4">Browse Restaurants</Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              {/* Cart items will go here */}
            </div>
            <div>
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 text-lg font-semibold">Order Summary</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>$0.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Delivery Fee</span>
                      <span>$0.00</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-base font-semibold">
                      <span>Total</span>
                      <span>$0.00</span>
                    </div>
                  </div>
                  <Button className="mt-6 w-full" size="lg">
                    Proceed to Checkout
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
