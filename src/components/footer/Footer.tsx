import { useContext } from "react";
import "./footer.scss";
import Logotype from "../logotype/Logotype";
import { ThemeContext } from "../../layout/Layout";
import SocialMediaIcons from "../socialMediaIcons/SocialMediaIcons";
import { HashLink as Link } from "react-router-hash-link";
import { ROUTES } from "../../routing/routes";

function Footer() {
  const theme = useContext(ThemeContext);

  return (
    <footer className="footer">
      <div className="footer-logo">
        <Logotype theme={theme} />
        <p>© Copyright 2023</p>
      </div>
      <div className="footer-contacts">
        <Link to={{ pathname: ROUTES.about, hash: "address" }}>
          <h2>Адреси наших магазинів:</h2>
          <p>вул. Любомира Гузара, 24a, 2ий поверх</p>
          <p> вул. вул.Павла Тичини, 7, 2ий поверх</p>
        </Link>
      </div>
      <SocialMediaIcons />
    </footer>
  );
}

export default Footer;
