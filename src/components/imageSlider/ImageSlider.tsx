import { useState, useEffect } from "react";
import { BannerPhoto } from "../../constants/homeData";
import LazyImage from "../lazyImage/LazyImage";
import useMatchMedia from "../../hooks/useMatchMedia";
import forwardArrow from "../../assets/icon/icons8-forward-64.png";
import backArrow from "../../assets/icon/icons8-back-64.png";
import "./imageSlider.scss";

interface ImageButtonProps {
  photos: BannerPhoto[];
}

function ImageSlider({ photos }: ImageButtonProps) {
  const [photosArr, setPhotosArr] = useState<BannerPhoto[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isStopSlider, setIsStopSlider] = useState(false);
  const isMobileScreen = useMatchMedia("(max-width: 578px)");

  useEffect(() => {
    if (photos) {
      setPhotosArr([...photos]);
    }
  }, [photos]);

  useEffect(() => {
    if (!isStopSlider) {
      const changeTimer = setTimeout(() => forwardStep(), 5000);
      return () => clearTimeout(changeTimer);
    }
  }, [currentImageIndex, isStopSlider]);

  const lengthImagesArr = photos.length - 1;

  const backStep = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? lengthImagesArr : prev - 1));
  };

  const forwardStep = () => {
    setCurrentImageIndex((prev) => (prev === lengthImagesArr ? 0 : prev + 1));
  };

  const currentImage = photosArr[currentImageIndex];
  return (
    <>
      {photos && (
        <div
          className="image-slider"
          onMouseEnter={() => setIsStopSlider(true)}
          onMouseLeave={() => setIsStopSlider(false)}
        >
          {photosArr.length > 0 && (
            <>
              <LazyImage
                src={
                  isMobileScreen ? currentImage.smallImage : currentImage.image
                }
                alt={currentImage.label}
                key={currentImage.label}
              />
              <p className="image-slider-motto">{currentImage.motto}</p>
            </>
          )}
          <div className="control-buttons">
            <div className="back-button" onClick={backStep}>
              <LazyImage src={backArrow} alt="back-arrow" />
            </div>
            <div className="forward-button" onClick={forwardStep}>
              <LazyImage src={forwardArrow} alt="forward-arrow" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ImageSlider;
