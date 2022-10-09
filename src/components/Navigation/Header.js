import "../../styles/Header.css";
import Navlinks from "./Navlinks";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header sticky">
      <Link to={"/"} className="blogname">
        BANKAI!
      </Link>
      <Navlinks />
    </div>
  );
};
export default Header;
