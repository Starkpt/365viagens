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
import { travels } from "@/app/data/travels";

const swiperBreakpoints = {
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

function HeroSectionSwiper() {
  const travelCardsSwiperRef = useRef<HTMLElement & { swiper: SwiperClass }>(null);

  useEffect(() => {
    const travelCardsSwiperElement = travelCardsSwiperRef.current;

    if (travelCardsSwiperElement) {
      // Set the breakpoints programmatically
      travelCardsSwiperElement.swiper.params.breakpoints = swiperBreakpoints;

      // Update Swiper to apply the new breakpoints
      travelCardsSwiperElement.swiper.update();
    }
  }, []);
  return (
    <>
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
    </>
  );
}

export default HeroSectionSwiper;
