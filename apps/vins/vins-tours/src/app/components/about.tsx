'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { useParallax } from 'react-scroll-parallax'
import ParalaxImage from '@/foto/privremena_2.png'

const About = () => {
  // Ref za sekciju koja je meta paralaksa (mora biti eksplicitno HTMLDivElement)
  const containerRef = useRef<HTMLDivElement>(null)

  // Hook za paralaks efekat
  const parallax = useParallax<HTMLDivElement>({
    speed: -20,
    targetElement: containerRef.current ?? undefined,
  })

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax pozadinska slika */}
      <div ref={parallax.ref} className="absolute inset-0 -z-10">
        <Image
          src={ParalaxImage}
          alt="Parallax pozadina"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Sadržaj preko slike */}
      <div className="text-white text-center z-10 px-4">
        <h2 className="text-2xl font-semibold bg-[#3c324a] text-white px-4 py-2 mb-4 inline-block rounded">O meni</h2>
        <p className="text-lg leading-relaxed bg-black/40 p-12 rounded-md backdrop-blur-sm">
      Dobrodošli u deo stranice gde ćete saznati više o meni i mojim turama.
      Cilj mi je da svaki gost ponese autentično i nezaboravno iskustvo!
    </p>

    <br/>

    <h2 className="text-4xl font-bold mb-6 py-[30px]">Moje prednosti kao vodič</h2>

<div className="flex flex-col items-center gap-4">
  <div className="flex flex-wrap justify-center gap-4">
    {["Lokalno znanje", "Autentična iskustva", "Sigurnost", "Zabava"].map((item, i) => (
      <div
        key={i}
        className="px-6 py-4 min-w-[160px] text-center bg-black/40 text-lg text-white font-medium rounded-md backdrop-blur-sm shadow-md"
      >
        {item}
      </div>
    ))}
  </div>

  <div className="flex flex-wrap justify-center gap-4">
    {["Poverenje", "Avantura", "Edukacija"].map((item, i) => (
      <div
        key={i}
        className="px-6 py-4 min-w-[160px] text-center bg-black/40 text-lg text-white font-medium rounded-md backdrop-blur-sm shadow-md"
      >
        {item}
      </div>
    ))}
  </div>
</div>


        
      </div>
    </section>
  )
}

export default About
