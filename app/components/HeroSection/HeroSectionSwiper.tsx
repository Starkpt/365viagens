"use client";

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
import { Button, Card, CardBody, CardFooter, CardHeader, Spinner } from "@nextui-org/react";

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
        {travels && (
          <swiper-container
            ref={travelCardsSwiperRef}
            // modules={[EffectFade, Navigation, Autoplay]}
            modules={[EffectFade, Navigation]}
            space-between="30"
            // autoplay='{"delay": 2500}'
            loop="true"
            pagination="true"
            // pagination-dynamic-bullets="true"
            style={{
              height: "250px",
              width: "100%",
            }}
          >
            {travels ? (
              travels.map((travel, id) => (
                <swiper-slide key={id} className="h-5/6 z-0">
                  {travel && (
                    <Card
                      className="w-full h-full rounded-md"
                      style={{
                        // backgroundImage: `url('${travel.imgSrc.src}')`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                      isPressable
                      isBlurred
                      isHoverable
                    >
                      <Image
                        priority={id === 0}
                        src={travel.imgSrc}
                        alt={travel.travelName}
                        fill
                        className="rounded-md"
                        style={{ objectFit: "cover" }}
                      />
                      <CardBody>
                        <div className="w-full">
                          <h3 className="font-bold text-primary text-lg text-left">
                            {travel.travelName}
                          </h3>
                          <p className="text-xs text-primary text-left">{travel.rnavtRef}</p>

                          <Button
                            size="sm"
                            className="rounded-md w-fit px-3 min-w-12 h-6 bg-green-700 text-white font-semibold"
                            style={{ fontSize: "0.75rem" }}
                          >
                            {travel.price}€
                          </Button>
                        </div>
                      </CardBody>
                    </Card>
                  )}
                </swiper-slide>
              ))
            ) : (
              <swiper-slide>
                <Spinner />
              </swiper-slide>
            )}
          </swiper-container>
        )}
      </div>
    </>
  );
}

export default HeroSectionSwiper;
