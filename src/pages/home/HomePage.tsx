import ImageSlider from "../../components/imageSlider/ImageSlider";
import {
  bannerPhotos,
  brandsArray,
  categoriesArray,
  trendProducts,
} from "../../constants/homeData";
import PageTitle from "../../components/pageTitle/PageTitle";
import PhotoGallery from "../../components/photoGallery/PhotoGallery";
import "./homePage.scss";
import BrandsGallery from "../../components/brandsGallery/BrandsGallery";
import ShopBlurb from "../../components/shopBlurb/ShopBlurb";

function HomePage() {
  return (
    <div className="home">
      <div className="banner">
        <ImageSlider photos={bannerPhotos} />
      </div>
      <div className="container">
        <div className="home-subtitle">
          <PageTitle text="Трендові пропозиції" />
        </div>
        <PhotoGallery galleryArray={trendProducts} />
      </div>
      <ShopBlurb />
      <div className="container">
        <PageTitle text="Категорії" />
        <PhotoGallery galleryArray={categoriesArray} />
      </div>
      <PageTitle text="Бренди" />
      <BrandsGallery />
    </div>
  );
}

export default HomePage;
