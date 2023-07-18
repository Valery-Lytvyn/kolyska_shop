import image4 from "../assets/images/main_banner/pexels-karolina-grabowska-4964488.jpg";
import image2 from "../assets/images/main_banner/pexels-nataliya-vaitkevich-4452206.jpg";
import image3 from "../assets/images/main_banner/pexels-oleksandr-canary-islands-1007773.jpg";
import image1 from "../assets/images/main_banner//pexels-pavel-danilyuk-7055917.jpg";
import image5 from "../assets/images/main_banner//pexels-rene-asmussen-13027214.jpg";
import image6 from "../assets/images/main_banner/pexels-vicki-yde-5961616.jpg";
import image7 from "../assets/images/main_banner/pexels-yan-krukau-5791039.jpg";
import trend1 from "../assets/images/trends/egg.webp";
import trend2 from "../assets/images/trends/icandy.webp";
import trend3 from "../assets/images/trends/oyster.webp";
import trend4 from "../assets/images/trends/silver_cross.webp";
import stroller from "../assets/images/product_categories/stroller.webp";
import carSeat from "../assets/images/product_categories/carSeat.webp";
import childrenTransport from "../assets/images/product_categories/childrenTransport.webp";
import playground from "../assets/images/product_categories/playground.webp";
import walker from "../assets/images/product_categories/walker.webp";
import bebetto from "../assets/icon/brand_icons/bebetto.webp";
import baby_style from "../assets/icon/brand_icons/baby_style.webp";
import besafe from "../assets/icon/brand_icons/besafe.webp";
import chicco from "../assets/icon/brand_icons/chicco.webp";
import romer from "../assets/icon/brand_icons/romer.webp";
import sybex from "../assets/icon/brand_icons/sybex.webp";
import tako from "../assets/icon/brand_icons/tako.webp";
import x_lander from "../assets/icon/brand_icons/x_lander.webp";
import blurb_pic1 from "../assets/images/shop_blurb/stroller_lifestyle_2x.webp";
import blurb_pic2 from "../assets/images/shop_blurb/comfort-tabbed.webp";
import blurb_pic3 from "../assets/images/shop_blurb/PEACE-OF-MIND.webp";

export interface BannerPhoto {
  image: string;
  label: string;
  motto: string;
}
export const bannerPhotos: BannerPhoto[] = [
  {
    image: image1,
    label: "banner-image 1",
    motto: " Магазин дитячих колясок, де ваші мрії стають реальністю",
  },
  {
    image: image2,
    label: "banner-image 2",
    motto: " Шлях до щасливого батьківства починається з наших колясок",
  },
  {
    image: image3,
    label: "banner-image 3",
    motto: "Зробіть кожну мить особливою з нашими колясками",
  },
  {
    image: image4,
    label: "banner-image 4",
    motto: "Ліжечка, які створені для безтурботного сну вашої дитини",
  },
  {
    image: image5,
    label: "banner-image 5",
    motto: "Завжди крокуємо у ногу з вашими потребами",
  },
  {
    image: image6,
    label: "banner-image 6",
    motto: "Ліжечка, що втілюють ваші бажання",
  },
  {
    image: image7,
    label: "banner-image 7",
    motto: "Зручність та комфорт у кожній прогулянці",
  },
];

export interface TrendProducts {
  image: string;
  label: string;
}
export const trendProducts: TrendProducts[] = [
  {
    image: trend1,
    label: "Egg 2",
  },
  {
    image: trend2,
    label: "iCandy Peach",
  },
  {
    image: trend3,
    label: "Oyster 3",
  },
  {
    image: trend4,
    label: "Silver Cross",
  },
];

export const categoriesArray = [
  {
    image: stroller,
    label: "Коляски",
    link: "childrenStrollers",
  },
  {
    image: carSeat,
    label: "Автокрісла",
    link: "carSeats",
  },
  {
    image: childrenTransport,
    label: "Транспорт",
    link: "childrenTransport",
  },
  {
    image: playground,
    label: "Манежі",
    link: "playgrounds",
  },
  {
    image: walker,
    label: "Стільці та ходунки",
    link: "chairs",
  },
];

export const brandsArray = [
  {
    image: bebetto,
    label: "bebetto",
  },
  {
    image: baby_style,
    label: "baby_style",
  },
  {
    image: besafe,
    label: "besafe",
  },
  {
    image: chicco,
    label: "chicco",
  },
  {
    image: romer,
    label: "romer",
  },
  {
    image: sybex,
    label: "sybex",
  },
  {
    image: tako,
    label: "tako",
  },
  {
    image: x_lander,
    label: "x_lander",
  },
];

export const blurbArray = [
  {
    id: 0,
    picture: blurb_pic1,
    label: "Якість",
    motto: "Створені для тривалого використання",
    text: "Ви будете насолоджуватися своєю коляскою протягом довгого-довгого часу.",
  },
  {
    id: 1,
    picture: blurb_pic2,
    label: "Безпека",
    motto: "Душевний спокій",
    text: "Кожна дитяча коляска ретельно перевірена, створена для довговічності та перевершує всі галузеві стандарти безпеки та якості.",
  },
  {
    id: 2,
    picture: blurb_pic3,
    label: "Комфорт",
    motto: "Неперевершений комфорт",
    text: "Складати, зберігати  та пересувати наші коляски так само легко, як і спати в них.",
  },
];
