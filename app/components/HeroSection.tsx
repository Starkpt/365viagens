// REACT
import { useEffect, useRef } from "react";

// LIBRARIES
import Image from "next/image";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

// STYLES
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/swiper-bundle.css";

// TYPES
import { SwiperClass } from "swiper/react";

// ASSETS
import MexicoCardImage from "@/public/assets/Viagens/América/América Latina/mexico/mexico.jpg";
import MarrocosCardImage from "@/public/assets/Viagens/Árfrica/Marrocos/marrocos.jpg";
import UzebequistanCardImage from "@/public/assets/Viagens/Ásia/Ásia Central/Uzbequistão.jpg";

const images = [
  "https://images.unsplash.com/photo-1590004953392-5aba2e72269a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
  "https://images.unsplash.com/photo-1590004845575-cc18b13d1d0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
  "https://images.unsplash.com/photo-1590004987778-bece5c9adab6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
  "https://images.unsplash.com/photo-1590005176489-db2e714711fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
];

const travels = [
  { travelName: "México", rnavtRef: "RNAVT 1234", imgSrc: MexicoCardImage, price: 410 },
  { travelName: "Marrocos", rnavtRef: "RNAVT 1234", imgSrc: MarrocosCardImage, price: 4123 },
  { travelName: "Uzebequistan", rnavtRef: "RNAVT 1234", imgSrc: UzebequistanCardImage, price: 423 },
  { travelName: "México", rnavtRef: "RNAVT 1234", imgSrc: MexicoCardImage, price: 2300 },
  { travelName: "Marrocos", rnavtRef: "RNAVT 1234", imgSrc: MarrocosCardImage, price: 1232 },
  { travelName: "Uzebequistan", rnavtRef: "RNAVT 1234", imgSrc: UzebequistanCardImage, price: 123 },
  { travelName: "México", rnavtRef: "RNAVT 1234", imgSrc: MexicoCardImage, price: 311 },
  { travelName: "Marrocos", rnavtRef: "RNAVT 1234", imgSrc: MarrocosCardImage, price: 598 },
  { travelName: "Uzebequistan", rnavtRef: "RNAVT 1234", imgSrc: UzebequistanCardImage, price: 413 },
];

function HeroSection() {
  const heroSwiperRef = useRef<HTMLElement & { swiper: SwiperClass }>(null);
  const travelCardsSwiperRef = useRef<HTMLElement & { swiper: SwiperClass }>(null);

  useEffect(() => {
    const heroSwiperElement = travelCardsSwiperRef.current;
    const travelCardsSwiperElement = travelCardsSwiperRef.current;

    if (heroSwiperElement) {
      heroSwiperElement?.swiper.update();
    }

    if (travelCardsSwiperElement) {
      // Set the breakpoints programmatically
      travelCardsSwiperElement.swiper.params.breakpoints = {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1280: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
      };

      // Update Swiper to apply the new breakpoints
      travelCardsSwiperElement.swiper.update();
    }
  }, []);

  return (
    <div className="flex w-full relative justify-center items-center " style={{ height: "650px" }}>
      {/* Swiper */}
      <swiper-container
        ref={heroSwiperRef}
        modules={[EffectFade, Navigation, Autoplay]}
        slides-per-view="1"
        style={{ height: "100%", position: "absolute", width: "100%" }}
        loop="true"
        effect="fade"
        autoplay='{"delay": 2500}'
      >
        {images.map((src, id) => (
          <swiper-slide key={id}>
            <Image
              priority={id === 0}
              src={src}
              alt={src}
              sizes="650px"
              fill
              style={{ objectFit: "cover" }}
            />
          </swiper-slide>
        ))}
      </swiper-container>

      {/* Cards */}
      <div className="absolute lg:w-7/12 xl:w-8/12 h-4/6 z-10">
        <div className="w-full h-full">
          <div className="w-full h-full bg-white rounded-md py-4 px-6">
            <div className="">
              <h5 className="text-xl text-primary font-black">Promotions</h5>
              <hr />
            </div>

            <div className="my-5">
              <swiper-container
                ref={travelCardsSwiperRef}
                modules={[EffectFade, Navigation, Autoplay]}
                space-between="30"
                loop="true"
                autoplay='{"delay": 2500}'
                style={{
                  height: "250px",
                  width: "100%",
                }}
                pagination="true"
                // pagination-dynamic-bullets="true"
              >
                {travels.map((travel, id) => (
                  <swiper-slide key={id} className="h-5/6 drop-shadow-md">
                    <Image
                      priority={id === 0}
                      src={travel.imgSrc}
                      alt={travel.travelName}
                      fill
                      className="rounded-md"
                      style={{ objectFit: "cover" }}
                    />
                  </swiper-slide>
                ))}
              </swiper-container>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
