
interface CoffeeProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  calories: number;
  category: string;
}

export const coffeeProducts: CoffeeProduct[] = [
  {
    id: "1",
    name: "Caramel Macchiato",
    description: "Freshly steamed milk with vanilla-flavored syrup marked with espresso and topped with a caramel drizzle for an oh-so-sweet finish.",
    price: 4.95,
    image: "https://globalassets.starbucks.com/assets/58db701349cb48738069e8c912e2b3ac.jpg?impolicy=1by1_wide_topcrop_630",
    calories: 250,
    category: "espresso",
  },
  {
    id: "2",
    name: "Caffè Latte",
    description: "Our dark, rich espresso balanced with steamed milk and a light layer of foam. A perfect milk-forward warm-up.",
    price: 3.95,
    image: "https://globalassets.starbucks.com/assets/b635f407bbcd49e7b5dd83809946e2f3.jpg?impolicy=1by1_wide_topcrop_630",
    calories: 190,
    category: "espresso",
  },
  {
    id: "3",
    name: "Cold Brew Coffee",
    description: "Handcrafted in small batches daily, slow-steeped in cool water for 20 hours, without touching heat—Starbucks Cold Brew is made from our custom blend of beans grown to steep long and cold for a super-smooth flavor.",
    price: 3.75,
    image: "https://globalassets.starbucks.com/assets/103b2cd172fc4928bc2bb6d6cc1f5231.jpg?impolicy=1by1_wide_topcrop_630",
    calories: 5,
    category: "cold coffee",
  },
  {
    id: "4",
    name: "Nitro Cold Brew",
    description: "Our small-batch cold brew—slow-steeped for a super-smooth taste—gets even smoother when infused with nitrogen and served from our tap.",
    price: 4.25,
    image: "https://globalassets.starbucks.com/assets/8c5dcfa053504f85b3e59f80f99c7356.jpg?impolicy=1by1_wide_topcrop_630",
    calories: 5,
    category: "cold coffee",
  },
  {
    id: "5",
    name: "Chai Tea Latte",
    description: "Black tea infused with cinnamon, clove and other warming spices is combined with steamed milk and topped with foam for the perfect balance of sweet and spicy.",
    price: 4.25,
    image: "https://globalassets.starbucks.com/assets/f344c66e8de74a4faf5e5b7bf82c1b45.jpg?impolicy=1by1_wide_topcrop_630",
    calories: 240,
    category: "tea",
  },
  {
    id: "6",
    name: "Iced White Chocolate Mocha",
    description: "Our signature espresso meets white chocolate sauce, milk and ice, and then is finished off with sweetened whipped cream to create this supreme white chocolate delight.",
    price: 4.95,
    image: "https://globalassets.starbucks.com/assets/b80d893714854b5c946ee6c7f0d369d7.jpg?impolicy=1by1_wide_topcrop_630",
    calories: 420,
    category: "espresso",
  },
  {
    id: "7",
    name: "Salted Caramel Cream Cold Brew",
    description: "Our slow-steeped custom blend of Starbucks® Cold Brew coffee accented with vanilla and topped with a salted, rich cold foam that's sweet with a touch of salt.",
    price: 4.95,
    image: "https://globalassets.starbucks.com/assets/d668acbc691b47249548a3eeac449916.jpg?impolicy=1by1_wide_topcrop_630",
    calories: 220,
    category: "cold coffee",
  },
  {
    id: "8",
    name: "Java Chip Frappuccino",
    description: "We blend mocha sauce and Frappuccino® chips with coffee, milk and ice, then top it off with whipped cream and a mocha drizzle to bring you endless java joy.",
    price: 5.45,
    image: "https://globalassets.starbucks.com/assets/5c515339667943ce84dc56effdf5fc1b.jpg?impolicy=1by1_wide_topcrop_630",
    calories: 440,
    category: "frappuccino",
  },
];

export const categories = [
  "all",
  "espresso",
  "cold coffee",
  "frappuccino",
  "tea",
];
