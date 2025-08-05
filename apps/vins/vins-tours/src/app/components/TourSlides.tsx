'use client';
import Image, { StaticImageData } from "next/image";

type CardProps = {
  src: StaticImageData;
  alt?: string;
  title: string;
  description: string;
};

type Props = {
  items: CardProps[];
};

const TourSlider = ({ items }: Props) => {
  return (
    <div className="bg-white text-center z-10 px-4 w-full flex flex-col items-center py-[20px]">
      <div className="max-w-6xl w-full">
        <h2 className="text-2xl font-semibold bg-[#3c324a] text-white px-4 py-2 mb-4 inline-block rounded">Ture meseca</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {items.map((item, i) => (
            <div
              key={i}
              className="relative group w-full max-w-sm rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src={item.src}
                alt={item.alt || ""}
                className="w-full h-60 object-cover"
              />
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-white text-center p-4">
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TourSlider;
