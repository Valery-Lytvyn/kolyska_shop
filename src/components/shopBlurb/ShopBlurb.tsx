import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { blurbArray } from "../../constants/homeData";
import LazyImage from "../lazyImage/LazyImage";
import "./shopBlurb.scss";

function ShopBlurb() {
  const [currentBlurbID, setCurrentBlurbID] = useState(0);
  const [isShowPictureBack, setIsShowPictureBack] = useState(false);

  const handleCurrentBlurbChange = () => {
    setIsShowPictureBack(true);
  };

  const handleShowPictureBack = () => {
    if (isShowPictureBack) {
      const timer = setTimeout(() => {
        setIsShowPictureBack(false);
      }, 100);
      return () => {
        clearTimeout(timer);
      };
    }
  };

  useEffect(handleCurrentBlurbChange, [currentBlurbID]);
  useEffect(handleShowPictureBack, [isShowPictureBack]);

  const currentBlurb = blurbArray[currentBlurbID];

  return (
    <div className="shop-blurb">
      <div className="shop-blurb-picture-wrap">
        <div className="shop-blurb-picture">
          <AnimatePresence>
            {isShowPictureBack && (
              <motion.div
                className="shop-blurb-picture-back"
                initial={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 1 }}
              ></motion.div>
            )}
          </AnimatePresence>
          <LazyImage src={currentBlurb.picture} alt={currentBlurb.label} />
        </div>
      </div>
      <div className="shop-blurb-description">
        <h1 className="shop-blurb-title">
          Чому коляски купують в магазині "КОЛИСКА"{" "}
        </h1>
        <div className="shop-blurb-navigation">
          {blurbArray.map(({ id, label }) => (
            <span
              className="shop-blurb-label"
              key={id}
              onClick={() => setCurrentBlurbID(id)}
            >
              {label}
            </span>
          ))}
        </div>
        <p className="shop-blurb-motto">{currentBlurb.motto}</p>
        <p className="shop-blurb-text">{currentBlurb.text}</p>
      </div>
    </div>
  );
}

export default ShopBlurb;
