import LazyImage from "../lazyImage/LazyImage";
import "./imageButton.scss";

interface ImageButtonProps {
  src: string;
  alt: string;
  clickButtonHandler?: () => void;
  theme?: string;
}

function ImageButton({
  src,
  alt,
  clickButtonHandler,
  theme,
}: ImageButtonProps) {
  return (
    <button
      className={`image-button ${
        theme === "light" ? "" : "light-style-image-button"
      }`}
      onClick={clickButtonHandler}
    >
      <LazyImage src={src} alt={alt} />
    </button>
  );
}

export default ImageButton;
