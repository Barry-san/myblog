import { Link } from "react-router-dom";
import Navlinks from "./Navlinks";
import "../../styles/mobileNav.css";

const MobileNav = () => {
  let open = false;
  const handleOpen = () => {
    document.querySelector(".dropdown").style.transform = "translateX(0%)";
  };
  const handleClose = () => {
    document.querySelector(".dropdown").style.transform = "translateX(-100%)";
  };
  const handlClick = () => {
    open ? handleClose() : handleOpen();
    open = !open;
  };
  return (
    <div
      className="mobile-nav"
      onBlur={() => {
        handleClose();
        open = false;
      }}
    >
      <div className="nav">
        <Link to={"/"} className="blog-name">
          Bankai!
        </Link>
        <button onClick={handlClick} className="home"></button>
      </div>

      {
        <div className="dropdown">
          <Navlinks></Navlinks>
        </div>
      }
    </div>
  );
};

export default MobileNav;
