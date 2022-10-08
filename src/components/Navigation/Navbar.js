import Header from "./Header";
import MobileNav from "./MobileNav";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  if (location.pathname === "/login") return null;
  return (
    <div className="Navbar">
      <Header />
      <MobileNav />
    </div>
  );
};

export default Navbar;
