import { useState, useContext } from "react";
import { SocialMediaIconData } from "../../../constants/headerData";
import LazyImage from "../../lazyImage/LazyImage";
import "./socialMediaIcon.scss";
import ImageButton from "../../imageButton/ImageButton";
import { ThemeContext } from "../../../layout/Layout";

interface SocialMediaIconProps {
  iconData: SocialMediaIconData;
}

function SocialMediaIcon({ iconData }: SocialMediaIconProps) {
  const theme = useContext(ThemeContext);
  const [isShowColorIcon, setIsShowColorIcon] = useState(false);
  const togglerIconColor = () => {
    setIsShowColorIcon(!isShowColorIcon);
  };
  const { id, name, icon, colorIcon, link } = iconData;
  return (
    <a href={link} target="_blank" rel="noreferrer" key={id}>
      <div
        className="social-media-icon"
        onMouseEnter={togglerIconColor}
        onMouseLeave={togglerIconColor}
      >
        <ImageButton
          theme={theme}
          src={isShowColorIcon ? colorIcon : icon}
          alt={name}
        />
      </div>
    </a>
  );
}

export default SocialMediaIcon;
