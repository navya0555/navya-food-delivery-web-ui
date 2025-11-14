import { Star, Clock, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface RestaurantCardProps {
  id: string;
  name: string;
  image: string;
  rating: number;
  deliveryTime: string;
  cuisine: string;
  priceRange: string;
  isOpen: boolean;
}

const RestaurantCard = ({
  name,
  image,
  rating,
  deliveryTime,
  cuisine,
  priceRange,
  isOpen,
}: RestaurantCardProps) => {
  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg cursor-pointer">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform group-hover:scale-110"
        />
        {!isOpen && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <Badge variant="secondary" className="text-base">
              Closed
            </Badge>
          </div>
        )}
        <Badge className="absolute right-2 top-2 gap-1 bg-background/90 text-foreground">
          <Star className="h-3 w-3 fill-primary text-primary" />
          {rating}
        </Badge>
      </div>
      <CardContent className="p-4">
        <h3 className="mb-2 text-lg font-semibold">{name}</h3>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {deliveryTime}
          </div>
          <div className="flex items-center gap-1">
            <DollarSign className="h-4 w-4" />
            {priceRange}
          </div>
        </div>
        <div className="mt-2">
          <Badge variant="outline" className="text-xs">
            {cuisine}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default RestaurantCard;
