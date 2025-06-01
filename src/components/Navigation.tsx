
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-40 transition-all duration-300 py-4 px-6 md:px-12">
      <div className="flex items-center justify-between">
        <a 
          href="#hero" 
          className="text-xl md:text-2xl font-bold gradient-text"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("hero");
          }}
        >
          Thapelo Sikhosana
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {["about", "projects", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="text-foreground hover:text-primary transition-colors capitalize"
            >
              {section}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full glass animate-fade-in py-4 px-6">
          <div className="flex flex-col space-y-4">
            {["about", "projects", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-foreground hover:text-primary transition-colors capitalize py-2"
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
