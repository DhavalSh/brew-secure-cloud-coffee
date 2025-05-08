
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ShoppingBag, Heart } from "lucide-react";
import { toast } from "sonner";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  calories: number;
}

const ProductCard = ({ id, name, description, price, image, calories }: ProductCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    toast.success(
      isFavorite ? `${name} removed from favorites` : `${name} added to favorites`
    );
  };

  const addToCart = () => {
    toast.success(`${name} added to bag`);
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative overflow-hidden pt-[100%]">
        <img
          src={image}
          alt={name}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full"
          onClick={toggleFavorite}
        >
          <Heart
            className={`h-5 w-5 ${isFavorite ? "fill-red-500 text-red-500" : "text-gray-500"}`}
          />
        </Button>
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg line-clamp-1">{name}</h3>
          <span className="font-medium text-sm bg-starbucks-lightGreen text-starbucks-darkGreen px-2 py-0.5 rounded">
            {calories} cal
          </span>
        </div>
        <p className="text-muted-foreground text-sm line-clamp-2 mb-2">{description}</p>
        <p className="font-bold text-lg">${price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          onClick={addToCart} 
          className="w-full bg-starbucks-green hover:bg-starbucks-darkGreen text-white"
        >
          <ShoppingBag className="mr-2 h-4 w-4" />
          Add to bag
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
