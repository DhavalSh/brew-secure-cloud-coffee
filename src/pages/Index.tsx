
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import DevSecOpsSection from "@/components/DevSecOpsSection";
import { coffeeProducts, categories } from "@/data/coffeeProducts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts = activeCategory === "all"
    ? coffeeProducts.slice(0, 8)
    : coffeeProducts.filter(product => product.category === activeCategory).slice(0, 8);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <div className="hero-pattern">
          <div className="container mx-auto px-4 py-12 md:py-20 flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Brew Secure. <span className="text-starbucks-lightGreen">Deploy Smooth.</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mb-8">
              A secure Starbucks clone featuring best practices in DevSecOps and AWS cloud deployment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-starbucks-green hover:bg-starbucks-darkGreen text-white px-8 py-6 rounded-full text-lg">
                View Menu
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 rounded-full text-lg">
                Learn About DevSecOps
              </Button>
            </div>
          </div>
        </div>

        {/* Featured Products */}
        <section className="bg-starbucks-cream py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-center text-starbucks-darkGreen">
              Featured Menu
            </h2>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  className={`px-4 py-2 text-sm font-medium capitalize cursor-pointer ${
                    activeCategory === category 
                      ? "bg-starbucks-green hover:bg-starbucks-darkGreen" 
                      : "hover:bg-starbucks-lightGreen hover:text-starbucks-darkGreen"
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  image={product.image}
                  calories={product.calories}
                />
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Button 
                className="bg-white border-2 border-starbucks-green text-starbucks-green hover:bg-starbucks-lightGreen"
              >
                View Full Menu
              </Button>
            </div>
          </div>
        </section>

        {/* Promo Sections */}
        <Hero
          title="Special Summer Drinks"
          description="Beat the heat with our refreshing lineup of cold brews and iced drinks. Perfect for those sunny days!"
          image="https://globalassets.starbucks.com/assets/5de5c5b1b5614617a51cb410ae837a1b.jpg"
          buttonText="Explore Summer Menu"
          bgColor="bg-starbucks-lightGreen"
          textColor="text-starbucks-darkGreen"
        />

        <Hero
          title="Introducing Our Rewards Program"
          description="Join now to earn Stars with every purchase and redeem them for free drinks, food, and more!"
          image="https://globalassets.starbucks.com/assets/196581be9eda4f4d8b9393d7f4acea68.jpg"
          buttonText="Join Rewards"
          bgColor="bg-starbucks-darkGreen"
          textColor="text-white"
          reverse={true}
        />

        {/* DevSecOps Section */}
        <DevSecOpsSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
