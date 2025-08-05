'use client'

import { useEffect, useRef } from "react"
import Image from "next/image"
import type { StaticImageData } from "next/image";


type Props = {
  images: { src: string | StaticImageData ; alt?: string }[] // moraš da šalješ niz objekata, ne samo stringove ako koristiš Image komponentu
}

function ImageSlider({ images }: Props) {
  const sliderRef = useRef<HTMLDivElement>(null)
  const scrollInterval = useRef<ReturnType<typeof setInterval> | null>(null)
  const autoScrollInterval = useRef<number | null>(null)

  const autoScroll = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 0.5
      const { scrollLeft, scrollWidth } = sliderRef.current
      const halfScrollWidth = scrollWidth / 2
      if (scrollLeft >= halfScrollWidth) {
        sliderRef.current.scrollLeft = scrollLeft - halfScrollWidth
      }
    }
    autoScrollInterval.current = requestAnimationFrame(autoScroll)
  }

  const startAutoScroll = () => {
    autoScrollInterval.current = requestAnimationFrame(autoScroll)
  }

  const stopAutoScroll = () => {
    if (autoScrollInterval.current) cancelAnimationFrame(autoScrollInterval.current)
  }

  const startScroll = (direction: "left" | "right") => {
    stopAutoScroll()
    const scrollAmount = direction === "left" ? -2 : 2
    scrollInterval.current = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollLeft += scrollAmount
        const { scrollLeft, scrollWidth } = sliderRef.current
        const halfScrollWidth = scrollWidth / 2

        if (direction === "right" && scrollLeft >= halfScrollWidth) {
          sliderRef.current.scrollLeft = scrollLeft - halfScrollWidth
        }
        if (direction === "left" && scrollLeft <= 0) {
          sliderRef.current.scrollLeft = halfScrollWidth
        }
      }
    }, 10)
  }

  const stopScroll = () => {
    if (scrollInterval.current) clearInterval(scrollInterval.current)
    startAutoScroll()
  }

  useEffect(() => {
    startAutoScroll()
    return () => stopAutoScroll()
  }, [])

  return (
    <div className="relative w-full overflow-hidden">
      <div
        ref={sliderRef}
        className="flex overflow-x-auto transition-transform duration-500 ease-in-out scrollbar-none"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {[...images, ...images].map((img, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-full sm:w-[50%] md:w-[40%] lg:w-[30%] xl:w-[25%] px-[5px] bg-white"
          >
            <div className="relative w-full aspect-[4/3]">
              <Image
                src={img.src}
                alt={img.alt || `Slika ${idx + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={idx === 0}
              />
            </div>
          </div>
        ))}
      </div>

      <div
        onMouseEnter={() => startScroll("left")}
        onMouseLeave={stopScroll}
        className="absolute left-0 top-0 w-1/3 h-full cursor-pointer z-10"
      />
      <div
        onMouseEnter={() => startScroll("right")}
        onMouseLeave={stopScroll}
        className="absolute right-0 top-0 w-1/3 h-full cursor-pointer z-10"
      />
    </div>
  )
}

export default ImageSlider
