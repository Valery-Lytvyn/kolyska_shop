import NavBarItem from "../navBarItem/NavBarItem";
import { navBarList } from "../../../constants/headerData";
import "./navbar.scss";

function Navbar() {
  return (
    <ul className="navbar">
      {navBarList.map(({ title, link }) => (
        <NavBarItem key={link} item={title} link={link} />
      ))}
    </ul>
  );
}

export default Navbar;
