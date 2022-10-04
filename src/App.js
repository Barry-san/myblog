import "./styles/App.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebaseConfig";
import Hero from "./components/Hero";
import Login from "./components/Login.js";
import Navbar from "./components/Navigation/Navbar";
import Register from "./components/Register";
import Create from "./components/Create";
import { useState } from "react";

function App() {
  const [user, setUser] = useState("");
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("logged in");
        localStorage.setItem("user", JSON.stringify(user));
        setUser(user);
      }
    });
  }, [user]);
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar user={user} />
        <Routes>
          <Route exact path="/" element={<Hero></Hero>}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
          <Route exact path="/create" element={<Create></Create>}></Route>
          <Route
            path="/*"
            element={
              <div>
                <h1>Error!!!!</h1>
                <p>page not found.</p>
              </div>
            }
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
