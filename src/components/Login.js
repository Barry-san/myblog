import "../styles/Login.css";
import { auth } from "../config/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
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
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <div className="login">
      <div className="banner"></div>
      <div className="form-container">
        <form action="">
          <div className="form-group">
            <label>Email</label>
            <input type="email" required value={email} onChange={handleEmail} />
          </div>
          <div className="form-group">
            <label>password</label>
            <input
              type="password"
              required
              value={password}
              onChange={handlePassword}
            />
          </div>
          <div>
            <button className="login-btn" onClick={handleSubmit}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
