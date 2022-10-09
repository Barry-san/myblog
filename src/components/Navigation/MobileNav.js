import { Link } from "react-router-dom";
import Navlinks from "./Navlinks";
import "../../styles/mobileNav.css";

const MobileNav = () => {
  let clicked = false;
  const handlClick = () => {
    clicked = !clicked;
    clicked
      ? (document.querySelector(".dropdown").style.display = "block")
      : (document.querySelector(".dropdown").style.display = "none");
  };
  return (
    <div className="mobile-nav">
      <div className="nav">
        <Link to={"/"} className="blog-name">
          Bankai!
        </Link>
        <button onClick={handlClick} className="home"></button>
      </div>

      {
        <div className="dropdown" onBlur={handlClick}>
          <Navlinks></Navlinks>
        </div>
      }
    </div>
  );
};

export default MobileNav;
