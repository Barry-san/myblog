import "../styles/Login.css";
import { auth } from "../config/firebaseConfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../App";

const Register = () => {
  const navigate = useNavigate();
  const user = useContext(userContext);
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
        updateProfile(user, { displayName: firstName + lastName });
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
            <label>First Name:</label>
            <input
              type="text"
              required
              value={firstName}
              onChange={handleFirst}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              required
              value={lastName}
              onChange={handleLast}
            />
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
