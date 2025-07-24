const Navbar = () => {
  return (
    <nav className="bg-white h-[82.5px] py-5 fixed top-0 left-0 w-full z-50">
      <div className="flex justify-center items-center mx-auto px-4">

      
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Flag_of_Serbia.svg"
            alt="Serbia flag"
            className="h-8 w-auto px-3 "
          />

        {/* Navigacioni modul */}
        <div className="bg-[#3c344b] text-white flex items-center rounded-xl overflow-hidden divide-x divide-white">
        
         

         
          <a href="/" className="px-4 py-2 hover:bg-white hover:text-black transition">Home</a>
          <a href="/" className="px-4 py-2 hover:bg-white hover:text-black transition">My Tours</a>
          <a href="/" className="px-4 py-2 hover:bg-white hover:text-black transition">About Me</a>
          <a href="/" className="px-4 py-2 hover:bg-white hover:text-black transition">Gallery</a>

          
          <button className="px-4 py-2 hover:bg-white hover:text-black transition">
            <span className="text-xl">&#9776;</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
