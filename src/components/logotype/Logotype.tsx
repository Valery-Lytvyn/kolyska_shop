import logo from "../../assets/images/logo.webp";
import LazyImage from "../lazyImage/LazyImage";
import { ROUTES } from "../../routing/routes";
import { Link } from "react-router-dom";
import "./logotype.scss";

interface LogotypeProps {
  theme: string;
}

function Logotype({ theme }: LogotypeProps) {
  return (
    <div className={`logo ${theme === "light" ? "" : "light-style-logo"}`}>
      <Link to={ROUTES.index}>
        <LazyImage src={logo} alt="логотип" />
      </Link>
    </div>
  );
}

export default Logotype;
