import { Languages, Menu, X } from "lucide-react";

interface navProps {
  scrollToSection: (id: string) => void;
  scrolled: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  mobileMenuOpen: boolean;
}

const Navigation = ({
  scrollToSection,
  scrolled,
  setMobileMenuOpen,
  mobileMenuOpen,
}: navProps) => {
  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-amber-900/95 backdrop-blur-sm shadow-lg" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-amber-900/95 to-orange-900 rounded-lg flex items-center justify-center">
            <Languages className="w-6 h-6 text-white" />
          </div>
          <span
            className={`text-2xl font-bold ${scrolled ? "text-white" : "text-amber-900"}`}
          >
            Asoro
          </span>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection("vision")}
            className={`${scrolled ? "text-white hover:text-amber-200" : "text-amber-900 hover:text-amber-700"} font-semibold transition-all`}
          >
            Vision
          </button>
          <button
            onClick={() => scrollToSection("features")}
            className={`${scrolled ? "text-white hover:text-amber-200" : "text-amber-900 hover:text-amber-700"} font-semibold transition-all`}
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection("technical")}
            className={`${scrolled ? "text-white hover:text-amber-200" : "text-amber-900 hover:text-amber-700"} font-semibold transition-all`}
          >
            Technical
          </button>
          <button
            onClick={() => scrollToSection("investment")}
            className={`${scrolled ? "text-white hover:text-amber-200" : "text-amber-900 hover:text-amber-700"} font-semibold transition-all`}
          >
            Investment
          </button>
          <button
            onClick={() => scrollToSection("cta")}
            className="bg-amber-900/95 hover:bg-amber-900 text-white px-6 py-2 rounded-lg font-semibold transition-all"
          >
            {`Let's Build This`}
          </button>
        </div>

        <button
          className="md:hidden text-amber-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-amber-900 border-t border-amber-800">
          <div className="px-6 py-4 space-y-3">
            <button
              onClick={() => scrollToSection("vision")}
              className="block w-full text-left text-white hover:text-amber-200 font-semibold"
            >
              Vision
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="block w-full text-left text-white hover:text-amber-200 font-semibold"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("technical")}
              className="block w-full text-left text-white hover:text-amber-200 font-semibold"
            >
              Technical
            </button>
            <button
              onClick={() => scrollToSection("investment")}
              className="block w-full text-left text-white hover:text-amber-200 font-semibold"
            >
              Investment
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
