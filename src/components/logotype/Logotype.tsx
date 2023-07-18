import { useContext } from "react";
import logo from "../../assets/images/logo.webp";
import LazyImage from "../lazyImage/LazyImage";
import "./logotype.scss";
import { ROUTES } from "../../routing/routes";
import { Link } from "react-router-dom";

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
