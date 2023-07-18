import { socialMediaIcons } from "../../constants/headerData";
import SocialMediaIcon from "./socialMediaIcon/SocialMediaIcon";
import "./socialMediaIcons.scss";

function SocialMediaIcons() {
  return (
    <div className="social-media-icons">
      {socialMediaIcons.map((item) => (
        <SocialMediaIcon iconData={item} key={item.id} />
      ))}
    </div>
  );
}

export default SocialMediaIcons;
