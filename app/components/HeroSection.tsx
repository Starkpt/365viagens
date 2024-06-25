// REACT
import { useEffect, useRef, useState } from "react";

// LIBRARIES
import dayjs, { Dayjs } from "dayjs";
import { Field, Form, Formik, FormikHelpers } from "formik";
import Image from "next/image";
import { Button, DateRangePicker, Select, SelectItem } from "@nextui-org/react";
import { CalendarDate, getLocalTimeZone, today } from "@internationalized/date";

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

const countries = [
  {
    value: "madrid",
    name: "Madrid",
  },
  {
    value: "lisbon",
    name: "Lisbon",
  },
  {
    value: "london",
    name: "London",
  },
  {
    value: "paris",
    name: "Paris",
  },
  {
    value: "porto",
    name: "Porto",
  },
];

const passangers = [
  { value: "1adults", name: "1 Adults, Economy" },
  { value: "2adults", name: "2 Adults, Economy" },
  { value: "1adults-1child", name: "1 Adults + 1 Child, Economy" },
  { value: "2adults-2children", name: "2 Adults + 2 Children, Economy" },
];

interface FormValues {
  travelDates: CalendarDate | Date;
  departure: number | null;
  arrival: number | null;
  passengers: string | null;
}

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

      {/* Cards */}
      <div className="lg:w-7/12 xl:w-8/12 min-h-96 py-24 z-10">
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

            <div className="">
              <h5 className="text-xl text-primary font-black">Search & Go</h5>
              <hr />
            </div>

            <div className="my-5">
              <div>
                <Formik
                  initialValues={{
                    travelDates: today(getLocalTimeZone()),
                    departure: null,
                    arrival: null,
                    passengers: null,
                  }}
                  onSubmit={(values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
                    // setTimeout(() => {
                    //   alert(JSON.stringify(values, null, 2));
                    //   setSubmitting(false);
                    // }, 500);

                    const formData = {
                      travelDates: values.travelDates,
                      departure: values.departure
                        ? countries[Number(values.departure)].value
                        : null,
                      arrival: values.arrival ? countries[Number(values.arrival)].value : null,
                    };

                    console.log({ values, c1: values.departure, c2: values.arrival, formData });
                  }}
                >
                  {({ setFieldValue, values }) => (
                    <Form className="flex xl:flex-row lg:flex-col md:flex-col gap-2">
                      <Field name="travelDates">
                        {({ field }) => (
                          <DateRangePicker
                            size="sm"
                            className="xl:w-2/6 lg:w-full md:w-full"
                            label="Choose dates"
                            visibleMonths={2}
                            pageBehavior="single"
                            minValue={today(getLocalTimeZone())}
                            defaultValue={today(getLocalTimeZone())}
                            onChange={(travelDates) => setFieldValue("travelDates", travelDates)}
                            isRequired
                            {...field}
                          />
                        )}
                      </Field>

                      <div className="flex flex-row gap-2 xl:w-2/6 lg:w-full">
                        <Field name="departure">
                          {({ field }) => (
                            <Select
                              size={"sm"}
                              label="Departure"
                              className="xl:w-1/2 lg:w-1/2"
                              onChange={(departure) => setFieldValue("departure", departure)}
                              isRequired
                              {...field}
                            >
                              {countries.map((country, key) => (
                                <SelectItem key={key} value={country.value}>
                                  {country.name}
                                </SelectItem>
                              ))}
                            </Select>
                          )}
                        </Field>

                        <Field name="arrival">
                          {({ field }) => (
                            <Select
                              size={"sm"}
                              label="Arrival"
                              className="xl:w-1/2 lg:w-1/2"
                              onChange={(arrival) => setFieldValue("arrival", arrival)}
                              isRequired
                              {...field}
                            >
                              {countries.map((country, key) => (
                                <SelectItem key={key} value={country.value}>
                                  {country.name}
                                </SelectItem>
                              ))}
                            </Select>
                          )}
                        </Field>
                      </div>

                      <Field name="passengers">
                        {({ field }) => (
                          <Select
                            size={"sm"}
                            label="Passangers"
                            className="xl:w-1/6 lg:w-full"
                            isRequired
                          >
                            {passangers.map((passanger, key) => (
                              <SelectItem key={key} value={passanger.value}>
                                {passanger.name}
                              </SelectItem>
                            ))}
                          </Select>
                        )}
                      </Field>

                      <Button
                        type="submit"
                        color="primary"
                        className="xl:w-1/6 rounded-md text-white"
                        size="lg"
                      >
                        Search
                      </Button>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
