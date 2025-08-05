'use client'

import { useState } from 'react'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
         <nav className="bg-white h-[60px] lg:h-[82.5px] py-3 lg:py-5 fixed top-0 left-0 w-full z-50">
       <div className="flex justify-center lg:justify-center items-center mx-auto px-2 lg:px-4 relative max-w-full">
        
                 {/* Logo/Flag */}
         <img
           src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Flag_of_Serbia.svg"
           alt="Serbia flag"
           className="h-6 lg:h-8 w-auto px-1 lg:px-3"
         />

        {/* Desktop Navigacioni modul - originalni dizajn */}
        <div className="hidden lg:flex bg-[#3c344b] text-white items-center rounded-xl overflow-hidden divide-x divide-white ml-4">
          <a href="/" className="px-4 py-2 hover:bg-white hover:text-black transition">Home</a>
          <a href="/" className="px-4 py-2 hover:bg-white hover:text-black transition">My Tours</a>
          <a href="/" className="px-4 py-2 hover:bg-white hover:text-black transition">About Me</a>
          <a href="/" className="px-4 py-2 hover:bg-white hover:text-black transition">Gallery</a>
        </div>

                 {/* Mobilni hamburger meni - pozicioniran apsolutno */}
         <button 
           onClick={toggleMobileMenu}
           className="lg:hidden absolute right-2 lg:right-4 bg-[#3c344b] text-white p-2 rounded-lg hover:bg-gray-700 transition"
         >
           <span className="text-xl">&#9776;</span>
         </button>
      </div>

             {/* Mobilni meni */}
       {isMobileMenuOpen && (
         <div className="lg:hidden bg-[#3c344b] text-white mt-2 mx-2 lg:mx-4 rounded-lg shadow-lg absolute top-full left-0 right-0 z-50">
           <div className="flex flex-col divide-y divide-white">
             <a href="/" className="px-4 py-3 hover:bg-white hover:text-black transition">Home</a>
             <a href="/" className="px-4 py-3 hover:bg-white hover:text-black transition">My Tours</a>
             <a href="/" className="px-4 py-3 hover:bg-white hover:text-black transition">About Me</a>
             <a href="/" className="px-4 py-3 hover:bg-white hover:text-black transition">Gallery</a>
           </div>
         </div>
       )}
    </nav>
  );
};

export default Navbar;
