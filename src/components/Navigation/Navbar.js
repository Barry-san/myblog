import Header from "./Header";
import MobileNav from "./MobileNav";

const Navbar = (props) => {
  return (
    <div className="Navbar">
      {window.innerWidth > 710 && <Header user={props.user}></Header>}
      {window.innerWidth <= 710 && <MobileNav user={props.user} />}
    </div>
  );
};

export default Navbar;
