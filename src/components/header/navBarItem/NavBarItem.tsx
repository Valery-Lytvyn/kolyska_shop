import { Link } from "react-router-dom";
import "./navBarItem.scss";

interface NavBarItemProps {
  item: string;
  link: string;
}

function NavBarItem({ item, link }: NavBarItemProps) {
  return (
    <li className="navbar-item-wrap">
      <Link to={link} className="navbar-item">
        {item}
      </Link>
    </li>
  );
}

export default NavBarItem;
