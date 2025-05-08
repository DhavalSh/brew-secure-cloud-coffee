
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Coffee, ShoppingBag, User } from "lucide-react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <div className="flex items-center">
          <Link to="/" className="flex items-center mr-4">
            <img 
              src="/logo.svg" 
              alt="Starbucks" 
              className="w-12 h-12"
            />
            <span className="hidden md:inline-block ml-2 text-xl font-bold text-starbucks-green">
              STARBUCKS
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/menu" className="text-starbucks-text hover:text-starbucks-green font-medium text-sm">MENU</Link>
            <Link to="/rewards" className="text-starbucks-text hover:text-starbucks-green font-medium text-sm">REWARDS</Link>
            <Link to="/gift-cards" className="text-starbucks-text hover:text-starbucks-green font-medium text-sm">GIFT CARDS</Link>
            <Link to="/devsecops" className="text-starbucks-text hover:text-starbucks-green font-medium text-sm">DEVSECOPS</Link>
          </nav>
        </div>

        <div className="flex items-center space-x-2 md:space-x-4">
          <Button variant="ghost" size="icon" className="text-starbucks-text hover:text-starbucks-green hover:bg-starbucks-lightGreen">
            <User className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-starbucks-text hover:text-starbucks-green hover:bg-starbucks-lightGreen">
            <ShoppingBag className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="sm" className="hidden md:inline-flex border-starbucks-green text-starbucks-green hover:bg-starbucks-lightGreen">
            Sign in
          </Button>
          <Button size="sm" className="hidden md:inline-flex bg-starbucks-green hover:bg-starbucks-darkGreen text-white">
            Join now
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="py-3 px-4 space-y-3">
            <Link to="/menu" className="block py-2 text-starbucks-text hover:text-starbucks-green font-medium">MENU</Link>
            <Link to="/rewards" className="block py-2 text-starbucks-text hover:text-starbucks-green font-medium">REWARDS</Link>
            <Link to="/gift-cards" className="block py-2 text-starbucks-text hover:text-starbucks-green font-medium">GIFT CARDS</Link>
            <Link to="/devsecops" className="block py-2 text-starbucks-text hover:text-starbucks-green font-medium">DEVSECOPS</Link>
            
            <div className="pt-3 border-t border-gray-200 flex flex-col space-y-2">
              <Button variant="outline" className="w-full border-starbucks-green text-starbucks-green hover:bg-starbucks-lightGreen">
                Sign in
              </Button>
              <Button className="w-full bg-starbucks-green hover:bg-starbucks-darkGreen text-white">
                Join now
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
