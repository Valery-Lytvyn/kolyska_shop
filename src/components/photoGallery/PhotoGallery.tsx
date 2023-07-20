import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import LazyImage from "../lazyImage/LazyImage";
import { ROUTES } from "../../routing/routes";
import { choiceSelectedCategoryId } from "../../services/services";
import { filterProductCategory } from "../../redux/slices/productsSlice";
import "./photoGallery.scss";

interface ArrayItem {
  image: string;
  label: string;
  link?: string;
}

interface PhotoGalleryProps {
  galleryArray: ArrayItem[];
}

function PhotoGallery({ galleryArray }: PhotoGalleryProps) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const clickHandler = (category: string) => {
    const categoryID = choiceSelectedCategoryId(category);
    navigate(ROUTES.category(category));
    dispatch(filterProductCategory(categoryID));
  };

  return (
    <div className="photo-gallery">
      {galleryArray.map(({ image, label, link }) => (
        <div
          className="gallery-item"
          key={image}
          onClick={() => link && clickHandler(link)}
        >
          <LazyImage src={image} alt={label} />
          <div className="gallery-item-label">{label}</div>
        </div>
      ))}
    </div>
  );
}

export default PhotoGallery;
