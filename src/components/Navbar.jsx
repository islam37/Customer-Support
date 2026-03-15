import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-lg font-semibold">CS — Ticket System</div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          <li className="hover:text-black cursor-pointer">Home</li>
          <li className="hover:text-black cursor-pointer">FAQ</li>
          <li className="hover:text-black cursor-pointer">Changelog</li>
          <li className="hover:text-black cursor-pointer">Blog</li>
          <li className="hover:text-black cursor-pointer">Download</li>
          <li className="hover:text-black cursor-pointer">Contact</li>
        </ul>

        {/* Button (Desktop) */}
        <div className="hidden md:block">
          <button className="bg-black text-white px-4 py-2 rounded-md text-sm hover:bg-gray-800">
            New Ticket
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-gray-700 focus:outline-none"
          >
            {/* Hamburger Icon */}
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2">
          <ul className="flex flex-col gap-2 text-gray-700">
            <li className="hover:text-black cursor-pointer">Home</li>
            <li className="hover:text-black cursor-pointer">FAQ</li>
            <li className="hover:text-black cursor-pointer">Changelog</li>
            <li className="hover:text-black cursor-pointer">Blog</li>
            <li className="hover:text-black cursor-pointer">Download</li>
            <li className="hover:text-black cursor-pointer">Contact</li>
          </ul>
          <button className="w-full bg-black text-white px-4 py-2 rounded-md text-sm hover:bg-gray-800 mt-2">
            New Ticket
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;