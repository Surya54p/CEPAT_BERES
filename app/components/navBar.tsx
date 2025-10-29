import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="shrink-0">
            <span className="text-lg font-normal italic text-gray-800">CepatBeres</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            <a
              href="#"
              className="px-4 py-2 text-sm text-gray-800 border border-gray-300 rounded hover:bg-gray-100 transition-colors"
            >
              Home
            </a>
            <a href="#" className="px-4 py-2 text-sm text-gray-800 hover:text-gray-600 transition-colors">
              Jasa
            </a>
            <a href="#" className="px-4 py-2 text-sm text-gray-800 hover:text-gray-600 transition-colors">
              Kontak
            </a>
          </div>

          {/* CTA Button */}
          <div className="flex items-center">
            <button className="px-5 py-2 text-sm text-white bg-gray-800 rounded hover:bg-gray-700 transition-colors">
              Pesan jasa
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:bg-gray-100 focus:outline-none"
              aria-expanded="false"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
          <a href="#" className="block px-3 py-2 text-base text-gray-800 hover:bg-gray-50 rounded-md">
            Home
          </a>
          <a href="#" className="block px-3 py-2 text-base text-gray-800 hover:bg-gray-50 rounded-md">
            Jasa
          </a>
          <a href="#" className="block px-3 py-2 text-base text-gray-800 hover:bg-gray-50 rounded-md">
            Kontak
          </a>
        </div>
      </div>
    </nav>
  );
}
