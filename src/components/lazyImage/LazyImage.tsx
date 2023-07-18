import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./lazyImage.scss";

interface LazyImageProps {
  src: string;
  alt: string;
}

const LazyImage = ({ src, alt }: LazyImageProps) => (
  <LazyLoadImage
    alt={alt}
    src={src}
    delayTime={2000}
    effect="blur"
    width="100%"
    height="100%"
  />
);

export default LazyImage;
