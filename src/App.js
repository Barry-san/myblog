import "./styles/App.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebaseConfig";
import Home from "./components/Home";
import Login from "./components/Login.js";
import Navbar from "./components/Navigation/Navbar";
import Create from "./components/Create";
import React, { useState } from "react";
// import Blogs from "./components/Blogs";

export const userContext = React.createContext();

function App() {
  const [user, setUser] = useState("");
  useEffect(() => {
    console.log("useEffect ran");
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, [user]);

  return (
    <BrowserRouter>
      <div className="App">
        <userContext.Provider value={user}>
          <Navbar />
        </userContext.Provider>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          {user && (
            <Route exact path="/create" element={<Create></Create>}></Route>
          )}
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
