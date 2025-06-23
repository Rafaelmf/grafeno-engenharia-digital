
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3"
          >
            <img
              src="/lovable-uploads/59c10998-0965-4c18-8782-079cd7e9a3c3.png"
              alt="GRAFENO Logo"
              className="h-12 w-12"
            />
            <div>
              <h1 className="text-xl font-bold text-grafeno-blue">GRAFENO</h1>
              <p className="text-sm text-gray-600">Engenharia e Construção</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {["início", "sobre", "serviços", "clientes", "contato"].map((item) => (
              <Button
                key={item}
                variant="ghost"
                onClick={() => scrollToSection(item)}
                className="text-grafeno-blue hover:text-grafeno-green transition-colors capitalize"
              >
                {item}
              </Button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4"
          >
            {["início", "sobre", "serviços", "clientes", "contato"].map((item) => (
              <Button
                key={item}
                variant="ghost"
                onClick={() => scrollToSection(item)}
                className="w-full text-left justify-start text-grafeno-blue hover:text-grafeno-green capitalize"
              >
                {item}
              </Button>
            ))}
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};
