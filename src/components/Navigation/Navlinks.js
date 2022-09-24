import { auth } from "../../config/firebaseConfig";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
const Navlinks = () => {
  return (
    <div className="navlinks">
      {!auth.currentUser && (
        <div className="links">
          <Link to={"/login"}> Login</Link>
          <Link to={"/register"}> Sign up</Link>
        </div>
      )}

      {auth.currentUser && (
        <div className="links">
          <Link to={"/"}> New blog</Link>
          <Link to={"/profile"}> Profile</Link>
          <Link to={"/"} onClick={signOut(auth)}>
            Log out
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navlinks;
