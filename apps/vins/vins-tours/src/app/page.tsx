import Navbar from "./components/Navbar";
import Landing from "./components/Landing"
import About from "./components/about"
import MyTours from "./components/MyTours";
import ImageSlider from "./components/ImageSlider";
import TourSlider from "./components/TourSlides";

import img1 from "@/foto/1.jpg";
import img2 from "@/foto/2.jpg";
import img4 from "@/foto/4.jpg";
import img5 from "@/foto/5.jpg";
import img6 from "@/foto/6.jpg";
import img7 from "@/foto/7.jpg";
import img8 from "@/foto/8.jpg";
import img9 from "@/foto/9.jpg";
import img10 from "@/foto/10.jpg";
import img11 from "@/foto/11.jpg";
import img12 from "@/foto/12.jpg";
import img13 from "@/foto/13.jpg";
import img14 from "@/foto/14.jpg";
import img15 from "@/foto/15.jpg";
import img16 from "@/foto/16.jpg";








export default function Home() {


  const images = [
  { src: img1, alt: "Tura 1" },
  { src: img2, alt: "Tura 2" },
 
  { src: img4, alt: "Tura 4" },
  { src: img5, alt: "Tura 5" },
  { src: img6, alt: "Tura 6" },
  { src: img7, alt: "Tura 7" },
  { src: img8, alt: "Tura 8" },
  { src: img9, alt: "Tura 9" },
  { src: img10, alt: "Tura 10" },
  { src: img11, alt: "Tura 11" },
  { src: img12, alt: "Tura 12" },
  { src: img13, alt: "Tura 13" },
  { src: img14, alt: "Tura 14" },
  { src: img15, alt: "Tura 15" },
  { src: img16, alt: "Tura 16" },
]

const items = [
  {
    src: img1,
    alt: "Slika 1",
    title: "Tura po Beogradu",
    description: "Šetnja kroz Kalemegdan i Skadarliju",
  },
  {
    src: img2,
    alt: "Slika 2",
    title: "Tura po Vojvodini",
    description: "Novi Sad i vinske ture u Sremskim Karlovcima",
  },
  {
    src: img4,
    alt: "Slika 3",
    title: "Tura po Istočnoj Srbiji",
    description: "Đerdapska klisura i Lepenski Vir",
  },
];


  return (

    <>
    <Navbar />
    <Landing />
    <About />
    <MyTours />
    <ImageSlider images={images} />
    <TourSlider items={items}/>
    </>
  );
}
