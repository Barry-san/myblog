import "../styles/Login.css";
import { auth } from "../config/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirst] = useState("");
  const [lastName, setLast] = useState("");
  const handlePassword = (e) => {
    const input = e.target.value;
    setPassword(input);
  };
  const handleEmail = (e) => {
    const input = e.target.value;
    setEmail(input);
  };
  const handleFirst = (e) => {
    const input = e.target.value;
    setFirst(input);
  };
  const handleLast = (e) => {
    const input = e.target.value;
    setLast(input);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
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
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label for="firstName">First Name:</label>
            <input
              type="text"
              required
              value={firstName}
              onChange={handleFirst}
              id="firstName"
            />
          </div>
          <div className="form-group">
            <label for="lastName">Last Name</label>
            <input
              type="text"
              required
              value={lastName}
              onChange={handleLast}
              id="lastName"
            />
          </div>
          <div className="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={handleEmail}
              id="email"
            />
          </div>
          <div className="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={handlePassword}
              id="password"
            />
          </div>
          <div className="btn-div">
            <button classnanme="reg-btn" name="register button">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
