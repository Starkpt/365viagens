import localFont from "next/font/local";

export const nexa = localFont({
  src: [
    {
      path: "./fonts/Nexa Extra Light.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/Nexa Light.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/Nexa Regular.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Nexa Bold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/Nexa Heavy.ttf",
      weight: "900",
      style: "normal",
    },
  ],
});
