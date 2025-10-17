import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NaviBar() {
  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-var(--color-primary) text-var(--color-text-primary) shadow-md">
      <Link to="/" className="flex items-center gap-2">
        <BookOpen
          size={28}
          strokeWidth={2.5}
          className="text-var(--color-light)"
        />
        <span className="text-xl font-extrabold tracking-wide">TradeBook</span>
      </Link>

      <div className="flex gap-6">
        <Link
          to="/features"
          className="text-gray-700 hover:text-[var(--color-btn-hover)] transition-colors duration-300 ease-in-out
                      hover:font-bold"
        >
          Features
        </Link>

        <Link to="/Pricing" className="text-gray-700 hover:text-[var(--color-btn-hover)] transition-colors duration-300 ease-in-out
                      hover:font-bold">
          Pricing
        </Link>
        <Link to="/FAQ" className="text-gray-700 hover:text-[var(--color-btn-hover)] transition-colors duration-300 ease-in-out
                      hover:font-bold">
          FAQ
        </Link>
      </div>

      <div className="flex gap-6">
        <Link to="/login">
          <Button
            className="bg-blue-400 text-white px-6 py-2 rounded-lg font-semibold
                     hover:bg-[var(--color-btn-hover)] 
                     hover:scale-105 
                     hover:shadow-lg
                     transition duration-300 ease-in-out"
          >
            Login
          </Button>
        </Link>

        <Link to="/getStarted">
          <Button
            className="bg-blue-400 text-white px-6 py-2 rounded-lg font-semibold
                     hover:bg-[var(--color-btn-hover)] 
                     hover:scale-105 
                     hover:shadow-lg
                     transition duration-300 ease-in-out"
          >
            Get Started
          </Button>
        </Link>
      </div>
    </nav>
  );
}
