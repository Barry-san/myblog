import { auth } from "../../config/firebaseConfig";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
const Navlinks = (props) => {
  return (
    <div className="navlinks">
      {!props.user && (
        <div className="links">
          <Link to={"/login"}> Login</Link>
          <Link to={"/register"}> Sign up</Link>
        </div>
      )}
      {props.user && (
        <div className="links">
          {console.log("navlinks:", props)}
          <Link to={"/create"}> New blog</Link>
          <Link to={"/"}> Profile</Link>
          <Link to={"/"} onClick={signOut(auth)}>
            Log out
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navlinks;
