// REACT
import { useEffect, useRef } from "react";

// LIBRARIES
import Image from "next/image";

// Swiper
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

// DATA (DUMMY)
import { images } from "@/app/data/external_images";
import HeroSectionSwiper from "./HeroSectionSwiper";
import HeroSectionForm from "./HeroSectionForm";

function HeroSection() {
  const heroSwiperRef = useRef<HTMLElement & { swiper: SwiperClass }>(null);

  useEffect(() => {
    const heroSwiperElement = heroSwiperRef.current;

    if (heroSwiperElement) {
      // Update Swiper to apply the new breakpoints
      heroSwiperElement?.swiper.update();
    }
  }, []);

  return (
    <div
      className="flex w-full relative justify-center items-center "
      style={{ minHeight: "650px" }}
    >
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

      <div className="xl:w-8/12 lg:w-7/12 md:w-8/12 w-10/12 min-h-96 py-24 z-10">
        <div className="w-full h-full">
          <div className="w-full h-full bg-white rounded-md py-4 px-6">
            <HeroSectionSwiper />
            <HeroSectionForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
