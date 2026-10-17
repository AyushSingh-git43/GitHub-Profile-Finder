import { useState } from "react";
import { Link } from "react-router-dom";
import GitHubLogo from "../assets/GitHub_Invertocat_White.png";

export function Navigation() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  return (
    <header className="w-full">
      <nav className="w-full px-4 sm:px-6 lg:px-10 py-4 border-b border-slate-800 text-white flex items-center">

        {/* Logo and Title */}
        <Link to="/Home" className="flex items-center gap-3 shrink-0">
          <img
            src={GitHubLogo}
            alt="GitHub Logo"
            className="w-8 h-8 object-contain"
          />

          <h3 className="font-semibold text-base sm:text-lg whitespace-nowrap">
            GitHub Finder
          </h3>
        </Link>

        {/* Navigation Links */}
        <div className="ml-auto flex items-center gap-3 sm:gap-6 md:mr-16 lg:mr-24">

          <Link
            to="/Home"
            className="text-slate-300 pb-1 border-b-2 border-transparent hover:text-white hover:border-indigo-500 transition-colors text-sm sm:text-base font-medium px-1 sm:px-2"
          >
            Home
          </Link>

          <Link
            to="/Repositories"
            className="text-slate-300 pb-1 border-b-2 border-transparent hover:text-white hover:border-indigo-500 transition-colors text-sm sm:text-base font-medium px-1 sm:px-2 whitespace-nowrap"
          >
            Repositories
          </Link>

          {/* Right Side: Theme Toggle Button */}
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
            isDarkMode 
              ? "bg-slate-800 text-slate-200 hover:bg-slate-700" 
              : "bg-slate-100 text-slate-800 hover:bg-slate-200"
          }`}
        >
          {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>

        </div>
      </nav>
    </header>
  );
}
