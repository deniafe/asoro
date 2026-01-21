import { Languages } from "lucide-react";

interface navProps {
  scrollToSection: (id: string) => void;
}

const Footer = ({ scrollToSection }: navProps) => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center">
              <Languages className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold">Asoro</span>
          </div>
          <p className="text-amber-200 text-sm">
            African languages for everyone. Building cultural infrastructure
            through technology.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-amber-200 text-sm">
            <li>
              <button
                onClick={() => scrollToSection("executive")}
                className="hover:text-white transition-colors"
              >
                Vision
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("features")}
                className="hover:text-white transition-colors"
              >
                Features
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("technical")}
                className="hover:text-white transition-colors"
              >
                Technical
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("investment")}
                className="hover:text-white transition-colors"
              >
                Investment
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Contact</h4>
          <ul className="space-y-2 text-amber-200 text-sm">
            <li>Location: Lagos, Nigeria</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-amber-800 pt-8 text-center text-amber-200 text-sm">
        <p>© 2026 Asoro. Building the future of African language learning.</p>
        <p className="mt-2">
          Proposal Version 1.0 • Confidential & Proprietary
        </p>
      </div>
    </div>
  );
};

export default Footer;
