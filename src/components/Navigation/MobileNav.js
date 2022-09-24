import { Link } from "react-router-dom";
import Navlinks from "./Navlinks";
import "../../styles/mobileNav.css";
import { useState } from "react";

const MobileNav = () => {
  let [clicked, setClick] = useState("false");
  const handlClick = () => {
    const which = () => {
      if (clicked === "false") return "true";
      return "false";
    };
    setClick(which());
  };
  return (
    <div className="mobile-nav">
      <div className="nav">
        <Link to={"/"} className="blog-name">
          Blog
        </Link>
        <button onClick={handlClick} className="home"></button>
      </div>

      {clicked === "true" && (
        <div className="dropdown">
          <Navlinks></Navlinks>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
