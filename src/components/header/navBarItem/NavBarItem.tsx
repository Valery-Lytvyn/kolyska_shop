import { Link } from "react-router-dom";
import "./navBarItem.scss";

interface NavBarItemProps {
  item: string;
  link: string;
}

function NavBarItem({ item, link }: NavBarItemProps) {
  return (
    <li className="navbar-item">
      <Link to={link}>{item}</Link>
    </li>
  );
}

export default NavBarItem;
