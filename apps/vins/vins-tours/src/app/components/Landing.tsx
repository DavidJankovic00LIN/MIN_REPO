'use client'
import Image from 'next/image'
import Link from 'next/link'
import BackGround from "@/foto/privremena.png";
import Maya from "@/foto/maya.jpg";

const Landing = () => {
  return (
    <div className="hero min-h-screen relative bg-black/40 mt-[82.5px]">
      
      {/* Background image */}
      <Image
        src={BackGround}
        alt="Pozadina"
        fill
        priority
        className="object-cover -z-10"
      />

    <div className='py-[20px]'>
      {/* Sekcija 1: Levo - Tekst + Slika Maje */}
      <div className="absolute top-4 left-12 bg-white/30 p-6 w-[300px] rounded-md backdrop-blur-md shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Explore and Travel with Maya
        </h2>
        <Image
          src={Maya}
          alt="Maya"
          className="rounded-md w-full"
        />
      </div>

      {/* Sekcija 3: Gore desno - LOGO */}
      <div className="absolute top-10 right-12 bg-white/40 px-8 py-4 rounded-md backdrop-blur-md shadow">
        <span className="text-lg font-semibold text-gray-700">LOGO</span>
      </div>

      {/* Sekcija 2: Dole desno - Dobrodošli kartica */}
      <div className="absolute bottom-26 right-12 bg-white/40 p-6 w-[400px] rounded-md backdrop-blur-md text-gray-800 shadow-lg">
        <h3 className="text-2xl font-semibold mb-2">Dobrodošli!</h3>
        <p className="leading-relaxed text-xl">
          Pridružite mi se u otkrivanju skrivenih kutaka, bogate istorije i autentične lepote Srbije i šire. <br />
          Svaka tura je više od putovanja – to je priča, doživljaj i uspomena koju nosite zauvek!
        </p>
      </div>
    </div>
      {/* Dugmad dole centrirana */}
   <div className="absolute bottom-26 left-1/2 -translate-x-1/2 flex justify-center gap-4 bg-white/40 p-6 w-[350px] rounded-md backdrop-blur-md shadow-md">
  <button className="bg-[#3c344b] text-white px-6 py-2 w-[150px] rounded-sm hover:bg-white hover:text-black transition">
    Rezerviši
  </button>
  <button className="bg-[#3c344b] text-white px-6 py-2 w-[150px] rounded-sm hover:bg-white hover:text-black transition">
    Pošalji upit
  </button>
</div>

    </div>
  );
};

export default Landing;
