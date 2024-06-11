import { SwiperModule } from "swiper/types";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "swiper-container": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        ref?: React.Ref<any>;
        modules?: SwiperModule[];
        "slides-per-view"?: string;
        "space-between"?: string;
        style?: React.CSSProperties;
        loop?: string;
        autoplay?: string;
        pagination?: string;
        effect?: string;
      };
      "swiper-slide": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
