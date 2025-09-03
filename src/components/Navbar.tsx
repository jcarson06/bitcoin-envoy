import React, { useState, memo } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X, Coins } from "lucide-react";
import { useThrottledScroll } from "@/hooks/useThrottledScroll";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";

const Navbar = memo(() => {
  const isScrolled = useThrottledScroll({ threshold: 10, throttleMs: 16 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Use custom hook for body scroll management
  useBodyScrollLock(isMenuOpen);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };
  return <header className={cn("fixed top-0 left-0 right-0 z-50 py-2 sm:py-3 md:py-4 transition-all duration-300 will-change-transform", isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent")}>
      <div className="container flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-primary rounded-lg" aria-label="Bitcoin Education & Coaching">
          <Coins className="h-7 w-7 text-amber-500 hover:text-amber-600 transition-colors" />
          <span className="font-brockmann text-2xl font-bold text-pulse-600 hover:text-pulse-700 transition-colors">
            Bitcoin Envoy
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8" role="navigation">
          <Link to="/" className="nav-link focus:outline-none focus:ring-2 focus:ring-primary rounded">
            Home
          </Link>
          <Link to="/learn" className="nav-link focus:outline-none focus:ring-2 focus:ring-primary rounded">Learn</Link>
          <Link to="/coaching" className="nav-link focus:outline-none focus:ring-2 focus:ring-primary rounded">Coaching</Link>
        </nav>

        {/* Mobile menu button - increased touch target */}
        <button className="md:hidden text-gray-700 p-3 focus:outline-none focus:ring-2 focus:ring-primary rounded-lg" onClick={toggleMenu} aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation - improved for better touch experience */}
      <div className={cn("fixed inset-0 z-60 bg-white/95 backdrop-blur-md flex flex-col pt-20 px-6 md:hidden transition-all duration-300 ease-out", isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none")}>
        <nav className="flex flex-col space-y-6 items-center mt-12">
          <Link to="/" className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link to="/learn" className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>
            Learn
          </Link>
          <Link to="/coaching" className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>
            Coaching
          </Link>
        </nav>
      </div>
    </header>;
});

Navbar.displayName = 'Navbar';

export default Navbar;