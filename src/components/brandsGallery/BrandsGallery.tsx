import { brandsArray } from "../../constants/homeData";
import LazyImage from "../../components/lazyImage/LazyImage";
import "./brandsGallery.scss";

function BrandsGallery() {
  return (
    <div className="brands-gallery">
      {brandsArray.map(({ image, label }) => (
        <div className="brand" key={label}>
          <LazyImage src={image} alt={label} />
        </div>
      ))}
    </div>
  );
}

export default BrandsGallery;
