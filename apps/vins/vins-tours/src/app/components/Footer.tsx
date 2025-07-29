import Image from 'next/image'

import logo from "@/foto/logo.png";


const Footer = () => {
  return (
    
      <footer className="bg-[#3c344b] text-white ">
        

        {/* Glavni deo footera */}
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">


        {/* Brzi linkovi */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold mb-4">Brzi linkovi</h3>
            <ul className="space-y-2">
              <li>
                <a href="#o_nama" className="hover:text-gray-300">
                  O nama
                </a>
              </li>
              <li>
                <a href="#Proizvodi" className="hover:text-gray-300">
                  Proizvodi
                </a>
              </li>
              <li>
                <a href="#usluzna_proizvodnja" className="hover:text-gray-300">
                  Uslužna proizvodnja
                </a>
              </li>
              <li>
                <a href="#kontakt" className="hover:text-gray-300">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>



          {/* Logo i opis */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Image
              src={logo}
              alt="LOGO"
              className="h-12 w-12 mb-12"
            />
            <p className="mb-4 max-w-xs">
              
            </p>
          </div>

          

          {/* Kontakt info */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold mb-4">Kontaktirajte nas</h3>
            <ul className="space-y-2">
              <li>
                <span>Info</span>
              </li>
              <li>
                <span>+381 63 222 333</span>
              </li>
              <li>
                <span>email@email</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Donji deo footera */}
        <div className="border-t border-gray-700 mt-6">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="mb-2 md:mb-0">
              &copy; 2025 Maja Agencija. Sva prava zadržana.
            </p>
            <div className="flex space-x-4">
              <a href="uslovi_koriscenja.html" className="hover:text-gray-300">
                Uslovi korišćenja
              </a>
              <a href="politika_privatnosti.html" className="hover:text-gray-300">
                Politika privatnosti
              </a>
            </div>
          </div>
        </div>
      </footer>
   
  );
};

export default Footer;
