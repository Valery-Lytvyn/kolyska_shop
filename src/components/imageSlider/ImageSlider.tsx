import { useState, useEffect } from "react";
import { BannerPhoto } from "../../constants/homeData";
import LazyImage from "../lazyImage/LazyImage";
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

  useEffect(() => {
    if (photos) {
      setPhotosArr([...photos]);
    }
  }, []);

  useEffect(() => {
    if (!isStopSlider) {
      const changeTimer = setTimeout(() => forwardStep(), 5000);
      return () => clearTimeout(changeTimer);
    }
  }, [currentImageIndex, isStopSlider]);

  const lengthImagesArr = photos.length - 1;

  const backStep = () => {
    currentImageIndex === 0
      ? setCurrentImageIndex(lengthImagesArr)
      : setCurrentImageIndex((prev) => prev - 1);
  };
  const forwardStep = () => {
    currentImageIndex === lengthImagesArr
      ? setCurrentImageIndex(0)
      : setCurrentImageIndex((prev) => prev + 1);
  };

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
                src={photosArr[currentImageIndex].image}
                alt={photosArr[currentImageIndex].label}
                key={photosArr[currentImageIndex].label}
              />
              <p className="image-slider-motto">
                {photosArr[currentImageIndex].motto}
              </p>
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
