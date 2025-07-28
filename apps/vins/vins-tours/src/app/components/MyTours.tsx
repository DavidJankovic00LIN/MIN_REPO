'use client'

import Image from 'next/image'
import img1 from "@/foto/privremena.png"
import img2 from "@/foto/privremena.png"
import img3 from "@/foto/privremena.png"
import img4 from "@/foto/privremena.png"

const images = [
  { src: img1, title: "Porodične ture" },
  { src: img2, title: "Privatne ture" },
  { src: img3, title: "Istorijske ture" },
  { src: img4, title: "Istorijske ture" },
]

const MyTours = () => {
  return (
    <div className="bg-white text-center z-10 px-4 w-full flex flex-col items-center">
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl text-black font-bold mb-6 py-[80px]">Moje ture</h2>
        <p className="text-lg text-white leading-relaxed bg-black/70 p-6 rounded-md backdrop-blur-sm">
          Vodila sam raznovrsne ture kroz istorijski Beograd, prirodna čuda istočne Srbije i kulturne dragulje Vojvodine.
          Posebno iskustvo mi je bila organizacija tura kroz Kapadokiju i Istanbul u Turskoj.
          Svaka tura je prilagođena interesovanjima i tempu grupe sa autentičnim lokalnim doživljajem.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 py-[85px]">
          {images.map((item, i) => (
            <div
              key={i}
              className="relative rounded overflow-hidden shadow-md transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={item.src}
                alt={item.title}
                className="w-full h-48 object-cover"
                placeholder="blur"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-center py-2">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MyTours
