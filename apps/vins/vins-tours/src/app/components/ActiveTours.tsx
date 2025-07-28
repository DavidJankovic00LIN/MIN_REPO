'use client';

import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';

type Slide = {
  image: StaticImageData;
  title: string;
  text: string;
  button1: string;
  button2: string;
};

type Props = {
  slides: Slide[];
};

const ActiveTours = ({ slides }: Props) => {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const { image, title, text, button1, button2 } = slides[current];

  return (
    <div className="bg-white">
    <div className="bg-white flex flex-col md:flex-row items-center max-w-6xl mx-auto p-4 gap-6 relative">
      {/* Slika sa strelicama */}
      <div className="relative w-full md:w-1/2 aspect-[4/3] rounded overflow-hidden shadow-lg">
        <Image src={image} alt={title} fill className="object-cover rounded" />
         <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full px-2">‹</button>
        <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full px-2">›</button>
      
      </div>

      {/* Tekst */}
      <div className="md:w-1/2 text-left">
        <h2 className="text-2xl font-semibold bg-[#3c324a] text-white px-4 py-2 mb-4 inline-block rounded">{title}</h2>
        <p className="mb-4 text-black">{text}</p>
        <div className="flex gap-4">
          <button className="bg-[#3c324a] text-white px-4 py-2 rounded">{button1}</button>
          <button className="bg-[#3c324a] text-white px-4 py-2 rounded">{button2}</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ActiveTours;
