const Kontakt = () => {
  const mreze = [
    {
      title: "Broj telefona",
      desc: "+381 223681",
      svg: (
        <svg width="40px" height="40px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <style>{`.a{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;}.b{fill:#000;}`}</style>
          </defs>
          <path className="a" d="M24.29,4.5q-.63,0-1.26,0a16.71,16.71,0,0,0-14.4,9.21,16.33,16.33,0,0,0-2,8.21,16.9,16.9,0,0,0,4.75,12.11c1.8,1.92,2.35,2.3,7.15,5a19.89,19.89,0,0,1,3.94,2.89L24,43.5l1.81-1.69a23.46,23.46,0,0,1,4.06-2.93c1.25-.67,3.15-1.84,4.22-2.59a17.69,17.69,0,0,0,5.49-22.16,17.4,17.4,0,0,0-8.16-8A14.75,14.75,0,0,0,24.29,4.5Z"/>
          <line className="a" x1="16.53" y1="13.5" x2="31.47" y2="13.5"/>
          <line className="a" x1="16.53" y1="30.13" x2="31.47" y2="30.13"/>
          <rect className="a" x="16.53" y="9.32" width="14.94" height="24.99" rx="1.79"/>
          <circle className="b" cx="24" cy="32.23" r="0.75"/>
        </svg>
      ),
    },
    {
      title: "Facebook",
      desc: "ImeiPrezime",
      svg: (
        <svg width="40px" height="40px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <style>{`.a{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;}`}</style>
          </defs>
          <path className="a" d="M24,42.5V18.57a5.07,5.07,0,0,1,5.08-5.07h0c2.49,0,4.05.74,5.12,2.12"/>
          <line className="a" x1="19.7" y1="23.29" x2="29.85" y2="23.29"/>
          <path className="a" d="M7.48,5.5a2,2,0,0,0-2,2v33a2,2,0,0,0,2,2H40.52a2,2,0,0,0,2-2v-33a2,2,0,0,0-2-2H7.48Z"/>
        </svg>
      ),
    },
    {
      title: "Email",
      desc: "info@firma.rs",
      svg: (
        <svg width="40px" height="40px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <style>{`.cls-1{fill:none;stroke:#000;stroke-miterlimit:10;}`}</style>
          </defs>
          <path className="cls-1" d="M13.39,12.15V38.54H7.06A2.56,2.56,0,0,1,4.5,36V16.82"/>
          <path className="cls-1" d="M34.61,12.15V38.54h6.33A2.56,2.56,0,0,0,43.5,36V16.82"/>
          <path className="cls-1" d="M24,31.45,43.5,17V13.4a3.94,3.94,0,0,0-6.28-3.16L24,20.06,10.78,10.24A3.94,3.94,0,0,0,4.5,13.4V17Z"/>
        </svg>
      ),
    },
    {
      title: "Tiktok",
      desc: "@imenatiktoku",
      svg: (
        <svg width="40px" height="40px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <style>{`.a{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;}`}</style>
          </defs>
          <path className="a" d="M18.73,22.4A10.55,10.55,0,1,0,29.27,33V4.5A10.55,10.55,0,0,0,39.82,15.05"/>
        </svg>
      ),
    },
    {
      title: "Instagram",
      desc: "@moja_firma",
      svg: (
        <svg width="40px" height="40px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <style>{`.cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;}`}</style>
          </defs>
          <path className="cls-1" d="M35.38,10.46a2.19,2.19,0,1,0,2.16,2.22v-.06A2.18,2.18,0,0,0,35.38,10.46Z"/>
          <path className="cls-1" d="M40.55,5.5H7.45a2,2,0,0,0-1.95,2v33.1a2,2,0,0,0,2,2h33.1a2,2,0,0,0,2-2V7.45A2,2,0,0,0,40.55,5.5Z"/>
          <path className="cls-1" d="M24,15.72A8.28,8.28,0,1,0,32.28,24h0A8.28,8.28,0,0,0,24,15.72Z"/>
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-[#3c344b] p-8 min-h-screen">
      <h1 className="text-white text-center py-5 text-5xl font-bold">Kontakt</h1>
      <p className="text-lg max-w-3xl mx-auto text-center text-white mb-8">
        Za sve dodatne informacije budite slobodni da nas kontaktirate putem
        kontakt forme ili putem neke od naših društvenih mreža.
      </p>

      <div className="grid grid-cols-3 gap-4">
        {/* Leva kolona */}
        <div className="col-span-1 bg-gray-200 p-6 rounded-lg flex flex-col gap-6">
          <h3 className="text-black text-2xl font-semibold mb-4">
            Društvene mreže
          </h3>

          {mreze.map((mreza, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="bg-blue-100 p-3 rounded-full">{mreza.svg}</div>
              <div>
                <h3 className="text-lg font-semibold text-black">{mreza.title}</h3>
                <p className="text-gray-600">{mreza.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desna kolona */}
        
         

            <div className="col-span-2 bg-gray-100 flex items-center justify-center rounded-lg p-8">
                <form className="w-full max-w-lg space-y-4">
                    <div>
                    <label className="block text-gray-700 font-semibold mb-1">
                        Ime i prezime
                    </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Unesite ime i prezime"
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                    </div>

                    <div>
                    <label className="block text-gray-700 font-semibold mb-1">
                        Email adresa
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Unesite email adresu"
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                    </div>

                    <div>
                    <label className="block text-gray-700 font-semibold mb-1">
                        Telefon (opciono)
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="+381 6x xxx xxxx"
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    </div>

                    <div>
                    <label className="block text-gray-700 font-semibold mb-1">
                        Poruka
                    </label>
                    <textarea
                        name="message"
                        placeholder="Unesite vašu poruku..."
                        rows={4}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                    </div>

                    <button className="bg-[#3c344b] text-white px-6 py-2 w-[150px] rounded-sm hover:bg-white :hover:border-color-[#3c344b] hover:text-black transition">
                    Pošalji upit
                    </button>
                </form>
            </div>




        </div>
          
            <div className="flex items-center justify-center my-8 py-[20px]">
                <div className="flex-grow h-px bg-gradient-to-l from-gray-400 via-gray-400 to-transparent"></div>
                <div className="flex-grow h-px bg-gradient-to-r from-gray-400 via-gray-400 to-transparent"></div>
            </div>
         <h2 className="px-4 text-4xl font-bold text-white whitespace-nowrap  text-center">Autenticna tura pocinje sa ljudima!</h2>


     </div>
    
  );
};

export default Kontakt;
