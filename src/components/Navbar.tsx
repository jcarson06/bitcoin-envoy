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
  return (
    <>
      {/* Header - stays visible */}
      <header className={cn("fixed top-0 left-0 right-0 z-40 py-2 sm:py-3 md:py-4 transition-all duration-300", isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent")}>
        <div className="container flex items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-primary rounded-lg" aria-label="Bitcoin Education & Coaching" onClick={scrollToTop}>
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

          {/* Mobile menu button */}
          <button className="md:hidden text-gray-700 p-3 focus:outline-none focus:ring-2 focus:ring-primary rounded-lg" onClick={toggleMenu} aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Dark overlay - click to close */}
      <div 
        className={cn("fixed inset-0 z-50 bg-black/50 md:hidden transition-opacity duration-300", isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none")}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile sidebar menu */}
      <div className={cn("fixed top-0 right-0 h-full w-80 max-w-[85vw] z-50 bg-white shadow-xl md:hidden transition-transform duration-300 ease-out", isMenuOpen ? "translate-x-0" : "translate-x-full")}>
        {/* Header in sidebar */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <Link to="/" className="flex items-center space-x-2" onClick={() => setIsMenuOpen(false)}>
            <Coins className="h-6 w-6 text-amber-500" />
            <span className="font-brockmann text-lg font-bold text-pulse-600">
              Bitcoin Envoy
            </span>
          </Link>
          <button className="p-2 text-gray-500 hover:text-gray-700" onClick={toggleMenu}>
            <X size={20} />
          </button>
        </div>

        {/* Navigation links */}
        <nav className="flex flex-col p-6 space-y-2">
          <Link 
            to="/" 
            className="text-lg font-medium py-3 px-4 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors" 
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/learn" 
            className="text-lg font-medium py-3 px-4 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors" 
            onClick={() => setIsMenuOpen(false)}
          >
            Learn
          </Link>
          <Link 
            to="/coaching" 
            className="text-lg font-medium py-3 px-4 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors" 
            onClick={() => setIsMenuOpen(false)}
          >
            Coaching
          </Link>
        </nav>
      </div>
    </>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;