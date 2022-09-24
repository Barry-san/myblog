import "../../styles/Header.css";
import Navlinks from "./Navlinks";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to={"/"} className="blogname">
        Blog
      </Link>
      <Navlinks />
    </div>
  );
};
export default Header;
