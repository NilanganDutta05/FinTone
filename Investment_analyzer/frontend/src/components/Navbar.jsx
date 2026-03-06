import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 glass-panel border-b border-white/10 shadow-xl transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
              <span className="text-white font-bold text-xl">F</span>
            </div>
            <span className="font-bold text-2xl tracking-tight text-white hidden sm:block">
              FinTone
            </span>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center space-x-10">
            <li>
              <button className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                Dashboard
              </button>
            </li>
            <li>
              <button className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                Calculator
              </button>
            </li>
            <li>
              <button className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                Insights
              </button>
            </li>
          </ul>

          {/* Action Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Log in
            </button>
            <button className="bg-white text-slate-900 px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-200 transition-all transform hover:scale-105 shadow-md">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col space-y-1.5 p-2 rounded-lg hover:bg-white/5 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`block w-6 h-0.5 bg-white transition duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition duration-300 ${isOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-64 border-t border-white/10' : 'max-h-0'}`}>
        <div className="bg-slate-900/95 backdrop-blur-xl">
          <ul className="px-4 py-6 space-y-4">
            <li>
              <button className="text-slate-300 hover:text-white transition-colors w-full text-left py-2 font-medium">
                Dashboard
              </button>
            </li>
            <li>
              <button className="text-slate-300 hover:text-white transition-colors w-full text-left py-2 font-medium">
                Calculator
              </button>
            </li>
            <li>
              <button className="bg-linear-to-r from-purple-500 to-blue-500 text-white w-full rounded-lg py-3 font-medium mt-4">
                Get Started
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
