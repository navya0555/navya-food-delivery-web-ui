export interface Restaurant {
  id: string;
  name: string;
  image: string;
  rating: number;
  deliveryTime: string;
  cuisine: string;
  priceRange: string;
  isOpen: boolean;
  description: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export const restaurants: Restaurant[] = [
  {
    id: "1",
    name: "Bella Italia",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
    rating: 4.8,
    deliveryTime: "25-35 min",
    cuisine: "Italian",
    priceRange: "$$",
    isOpen: true,
    description: "Authentic Italian cuisine with homemade pasta and wood-fired pizzas",
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
    description: "Fresh sushi and traditional Japanese dishes made by master chefs",
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
    description: "Juicy burgers made with premium beef and fresh ingredients",
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
    description: "Fresh salads, smoothie bowls, and healthy meal options",
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
    description: "Traditional Chinese dishes with bold flavors and fresh ingredients",
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
    description: "Artisanal cakes, pastries, and desserts made fresh daily",
  },
];

export const menuItems: Record<string, MenuItem[]> = {
  "1": [
    {
      id: "1-1",
      name: "Margherita Pizza",
      description: "Classic pizza with fresh mozzarella, tomato sauce, and basil",
      price: 14.99,
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80",
      category: "Pizza",
    },
    {
      id: "1-2",
      name: "Pepperoni Pizza",
      description: "Traditional pepperoni with mozzarella and tomato sauce",
      price: 16.99,
      image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&q=80",
      category: "Pizza",
    },
    {
      id: "1-3",
      name: "Spaghetti Carbonara",
      description: "Creamy pasta with pancetta, eggs, and parmesan",
      price: 15.99,
      image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400&q=80",
      category: "Pasta",
    },
    {
      id: "1-4",
      name: "Lasagna",
      description: "Layered pasta with meat sauce, ricotta, and mozzarella",
      price: 17.99,
      image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400&q=80",
      category: "Pasta",
    },
  ],
  "2": [
    {
      id: "2-1",
      name: "Salmon Nigiri",
      description: "Fresh salmon over seasoned rice (2 pieces)",
      price: 8.99,
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&q=80",
      category: "Nigiri",
    },
    {
      id: "2-2",
      name: "California Roll",
      description: "Crab, avocado, and cucumber wrapped in rice",
      price: 11.99,
      image: "https://images.unsplash.com/photo-1579584415947-b65fee9cf1dd?w=400&q=80",
      category: "Rolls",
    },
    {
      id: "2-3",
      name: "Spicy Tuna Roll",
      description: "Fresh tuna with spicy mayo and cucumber",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=400&q=80",
      category: "Rolls",
    },
    {
      id: "2-4",
      name: "Dragon Roll",
      description: "Shrimp tempura with eel and avocado on top",
      price: 15.99,
      image: "https://images.unsplash.com/photo-1582450871972-ab5ca641643d?w=400&q=80",
      category: "Specialty",
    },
  ],
  "3": [
    {
      id: "3-1",
      name: "Classic Burger",
      description: "Beef patty with lettuce, tomato, onion, and special sauce",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80",
      category: "Burgers",
    },
    {
      id: "3-2",
      name: "Cheese Burger",
      description: "Double beef patty with melted cheddar cheese",
      price: 14.99,
      image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&q=80",
      category: "Burgers",
    },
    {
      id: "3-3",
      name: "BBQ Bacon Burger",
      description: "Beef patty with crispy bacon, BBQ sauce, and onion rings",
      price: 15.99,
      image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&q=80",
      category: "Burgers",
    },
    {
      id: "3-4",
      name: "Crispy Fries",
      description: "Golden french fries with sea salt",
      price: 4.99,
      image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=80",
      category: "Sides",
    },
  ],
  "4": [
    {
      id: "4-1",
      name: "Greek Salad",
      description: "Mixed greens, feta, olives, tomatoes, and cucumber",
      price: 11.99,
      image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&q=80",
      category: "Salads",
    },
    {
      id: "4-2",
      name: "Acai Bowl",
      description: "Acai blend topped with granola, berries, and honey",
      price: 9.99,
      image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&q=80",
      category: "Bowls",
    },
    {
      id: "4-3",
      name: "Quinoa Power Bowl",
      description: "Quinoa with roasted vegetables, chickpeas, and tahini",
      price: 13.99,
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80",
      category: "Bowls",
    },
    {
      id: "4-4",
      name: "Green Smoothie",
      description: "Spinach, banana, mango, and almond milk",
      price: 6.99,
      image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=400&q=80",
      category: "Drinks",
    },
  ],
  "6": [
    {
      id: "6-1",
      name: "Chocolate Cake",
      description: "Rich chocolate layer cake with ganache",
      price: 7.99,
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80",
      category: "Cakes",
    },
    {
      id: "6-2",
      name: "Tiramisu",
      description: "Classic Italian dessert with coffee and mascarpone",
      price: 8.99,
      image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&q=80",
      category: "Cakes",
    },
    {
      id: "6-3",
      name: "Croissant",
      description: "Buttery, flaky French pastry",
      price: 4.99,
      image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&q=80",
      category: "Pastries",
    },
    {
      id: "6-4",
      name: "Macarons (6 pack)",
      description: "Assorted French macarons in various flavors",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=400&q=80",
      category: "Pastries",
    },
  ],
};
