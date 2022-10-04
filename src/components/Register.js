import "../styles/Login.css";
import { useState } from "react";
import { auth } from "../config/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [FirstName, setFirst] = useState("");
  const [LastName, setLast] = useState("");

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
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="login">
      <div className="banner"></div>
      <div className="form-container">
        <form>
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              required
              value={FirstName}
              onChange={handleFirst}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              required
              value={LastName}
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
          <div>
            <button className="login-btn" onClick={handleSubmit}>
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
