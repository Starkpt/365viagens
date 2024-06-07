// REACT
import { useRef } from "react";

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

const images = [
  "https://images.unsplash.com/photo-1590004953392-5aba2e72269a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
  "https://images.unsplash.com/photo-1590004845575-cc18b13d1d0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
  "https://images.unsplash.com/photo-1590004987778-bece5c9adab6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
  "https://images.unsplash.com/photo-1590005176489-db2e714711fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
];

function HeroSection() {
  const swiperElRef = useRef(null);

  return (
    <div className="w-full">
      <swiper-container
        ref={swiperElRef}
        modules={[EffectFade, Navigation, Autoplay]}
        slides-per-view="1"
        style={{ height: "650px" }}
        loop="true"
        autoplay='{"delay": 2500}'
      >
        {images.map((src, id) => (
          <swiper-slide key={id}>
            <Image
              priority={id === 0}
              src={src}
              alt={src}
              sizes="100%"
              fill
              style={{ objectFit: "cover" }}
            />
          </swiper-slide>
        ))}
      </swiper-container>
    </div>
  );
}

export default HeroSection;
