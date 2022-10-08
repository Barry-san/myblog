import { auth } from "../../config/firebaseConfig";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import { userContext } from "../../App";
import { useContext } from "react";
const Navlinks = () => {
  const user = useContext(userContext);
  return (
    <div className="navlinks">
      {!user && (
        <div className="links">
          <Link to={"/login"}> Login</Link>
          <Link to={"/register"}> Sign up</Link>
        </div>
      )}
      {user && (
        <div className="links">
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
