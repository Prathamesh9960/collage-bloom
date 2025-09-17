import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Colleges", href: "/colleges" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-primary to-accent shadow-lg nav-slide">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={logo} 
              alt="College Finder" 
              className="w-10 h-10 transition-transform duration-300 group-hover:scale-110" 
            />
            <span className="text-xl font-bold text-white">
              CollegeFinder
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Button
                key={item.name}
                variant="nav"
                asChild
                className={`
                  link-underline px-4 py-2 rounded-md font-medium transition-all duration-300
                  ${isActive(item.href) ? 'bg-white/20 text-white' : 'text-white/90 hover:text-white'}
                `}
              >
                <Link to={item.href}>
                  {item.name}
                </Link>
              </Button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="nav"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/20 py-4 animate-slide-down">
            <div className="space-y-2">
              {navigation.map((item) => (
                <Button
                  key={item.name}
                  variant="nav"
                  asChild
                  className={`
                    w-full justify-start px-4 py-3 rounded-md font-medium transition-all duration-300
                    ${isActive(item.href) ? 'bg-white/20 text-white' : 'text-white/90 hover:text-white hover:bg-white/10'}
                  `}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Link to={item.href}>
                    {item.name}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;