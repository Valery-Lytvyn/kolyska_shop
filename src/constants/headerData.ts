import { ROUTES } from "../routing/routes";
import phoneLogo from "../assets/icon/header_icons/icons8-mobile-phone-64.png";
import phoneColorLogo from "../assets/icon/header_icons/icons8-mobile-phone-64_color.png";
import instaLogo from "../assets/icon/header_icons/icons8-insta-64.png";
import instaColorLogo from "../assets/icon/header_icons/icons8-insta-64_color.png";
import facebookLogo from "../assets/icon/header_icons/icons8-facebook-64.png";
import facebookColorLogo from "../assets/icon/header_icons/icons8-facebook-64_color.png";

//Navbar
export const navBarList = [
  { title: "Про нас", link: ROUTES.about },
  { title: "Контакти", link: ROUTES.contact },
  { title: "Інфо", link: ROUTES.info },
];

export interface SocialMediaIconData {
  id: number;
  name: string;
  icon: string;
  colorIcon: string;
  link: string;
}

export const socialMediaIcons: SocialMediaIconData[] = [
  {
    id: 1,
    name: "phone",
    icon: phoneLogo,
    colorIcon: phoneColorLogo,
    link: "tel:050-821-6082",
  },
  {
    id: 2,
    name: "facebook",
    icon: facebookLogo,
    colorIcon: facebookColorLogo,
    link: "https://www.facebook.com",
  },
  {
    id: 3,
    name: "instagram",
    icon: instaLogo,
    colorIcon: instaColorLogo,
    link: "https://www.instagram.com/kolyska.if",
  },
];
