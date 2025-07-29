import Image from 'next/image'
import img1 from "@/foto/utisak_1.jpg"
import img2 from "@/foto/utsak_2.jpg"
import img3 from "@/foto/utisak_3.jpg"
import img4 from "@/foto/utisak_4.jpg"

const images = [
  { src: img1 },
  { src: img2 },
  { src: img3 },
  { src: img4 },
]

const FeedBack = () =>{
    return (
        <div className="bg-white text-center z-10 px-4 w-full flex flex-col items-center">
              <div className="max-w-6xl w-full">
                <h2 className="text-4xl text-black font-bold mb-6 py-[80px]">Utisci</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 py-[85px]">
                  {images.map((item, i) => (
                    <div
                      key={i}
                      className="relative rounded overflow-hidden shadow-md transition-transform duration-300 hover:scale-105"
                    >
                      <Image
                        src={item.src}
                        alt={"feedback"}
                        className="w-full h-full object-cover"
                        placeholder="blur"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
    );
}

export default FeedBack;