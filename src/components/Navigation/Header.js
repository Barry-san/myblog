import "../../styles/Header.css";
import Navlinks from "./Navlinks";
import { Link } from "react-router-dom";
const Header = (props) => {
  return (
    <div className="header sticky">
      <Link to={"/"} className="blogname">
        Bankai!
      </Link>
      <Navlinks user={props.user} />
    </div>
  );
};
export default Header;
