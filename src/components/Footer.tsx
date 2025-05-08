
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-starbucks-darkGreen">About Us</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-gray-600 hover:text-starbucks-green">Our Company</Link></li>
              <li><Link to="/careers" className="text-gray-600 hover:text-starbucks-green">Careers</Link></li>
              <li><Link to="/social-impact" className="text-gray-600 hover:text-starbucks-green">Social Impact</Link></li>
              <li><Link to="/business-partners" className="text-gray-600 hover:text-starbucks-green">For Business Partners</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-starbucks-darkGreen">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/faq" className="text-gray-600 hover:text-starbucks-green">FAQ</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-starbucks-green">Contact Us</Link></li>
              <li><Link to="/accessibility" className="text-gray-600 hover:text-starbucks-green">Accessibility</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-starbucks-green">Terms of Use</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-starbucks-darkGreen">DevSecOps</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/devsecops" className="text-gray-600 hover:text-starbucks-green">Overview</Link></li>
              <li><a href="https://github.com/vijaygiduthuri/starbucks" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-starbucks-green">GitHub Repository</a></li>
              <li><Link to="/aws" className="text-gray-600 hover:text-starbucks-green">AWS Architecture</Link></li>
              <li><Link to="/security" className="text-gray-600 hover:text-starbucks-green">Security Practices</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-starbucks-darkGreen">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-600 hover:text-starbucks-green">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-starbucks-green">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-starbucks-green">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-starbucks-green">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://github.com/vijaygiduthuri/starbucks" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-starbucks-green">
                <Github className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-gray-500">
              Download our app for the best experience
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <img src="/logo.svg" alt="Starbucks logo" className="h-8 w-8 mr-2" />
            <span className="text-starbucks-green font-bold">STARBUCKS CLONE</span>
          </div>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Starbucks Clone. All rights reserved.
            <br />
            <span className="text-xs">This is a demo project for educational purposes only.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
