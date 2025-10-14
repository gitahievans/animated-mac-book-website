import React from "react";
import AppleLogo from "../assets/icons8-apple-100.png";
import { Search, ShoppingBag } from "lucide-react";
import { links } from "../Constants";
const Navbar = () => {
  return (
    <header className="flex flex-row items-center justify-between p-3">
      <div className="flex items-center justify-center">
        <img className="w-8 h-8" src={AppleLogo} alt="Apple Logo" />
      </div>

      <ul className="flex flex-row items-center justify-between gap-4">
        {links.map(({ label }) => (
          <li key={label} className="text-sm">
            <a href="label">{label}</a>
          </li>
        ))}
      </ul>

      <div className="flex flex-row p-2 gap-4">
        <button>
          <Search className="w-6 h-6" />
        </button>
        <button>
          <ShoppingBag className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
