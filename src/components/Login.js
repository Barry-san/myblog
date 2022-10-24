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
        .then(() => {
          navigate("/");
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  return (
    <div className="login">
      <div className="banner"></div>
      <div className="form-container">
        <div className="top-content">
          <h1 className="Login-heading">Login</h1>
          <div>
            <button
              onClick={() => {
                signInWithRedirect(auth, provider)
                  .then(navigate("/"))
                  .catch((err) => {
                    console.log(err.message);
                    console.log(err);
                  });
              }}
              name="sign-in with google"
            >
              Sign in with google
            </button>
          </div>
          <p>or sign in with email and password:</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={handleEmail}
            />
          </div>
          <div className="form-group">
            <label for="password">Password</label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={handlePassword}
            />
          </div>
          <div className="btn-div">
            <button className="login-btn" name="login button" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
