import "../styles/Login.css";
import { auth } from "../config/firebaseConfig";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithRedirect,
} from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handlePassword = (e) => {
    const input = e.target.value;
    setPassword(input);
  };
  const handleEmail = (e) => {
    const input = e.target.value;
    setEmail(input);
  };
  const handleSubmit = (e) => {
    if (email && password) {
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
          navigate("/");
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  const handleClicky = () => {
    signInWithRedirect(auth, provider);
  };
  return (
    <div className="login">
      <div className="banner"></div>
      <div className="form-container">
        <form>
          <div className="top-content">
            <h1 className="Login-heading">Login</h1>
            <div>
              <button
                onClick={() => {
                  handleClicky();
                  navigate("/");
                }}
                name="sign-in with google"
              >
                Sign in with google
              </button>
            </div>
            <p>or sign in with email and password:</p>
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" required value={email} onChange={handleEmail} />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={handlePassword}
            />
          </div>
          <div className="btn-div">
            <button
              className="login-btn"
              onClick={handleSubmit}
              name="login button"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
