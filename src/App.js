import "./styles/App.css";
import { auth } from "./config/firebaseConfig";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Navigation/Header";
import Hero from "./components/Hero";
import Login from "./components/Login.js";
import MobileNav from "./components/Navigation/MobileNav";
import Profile from "./components/Profile";
import Register from "./components/Register";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {window.innerWidth > 450 && <Header></Header>}
        {window.innerWidth <= 450 && <MobileNav />}
        <Routes>
          <Route exact path="/" element={<Hero></Hero>}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
          {auth.currentUser && (
            <Route exact path="/profile" element={<Profile />}></Route>
          )}
          <Route
            path="/*"
            element={
              <div>
                <h1>Error!!!!</h1>
              </div>
            }
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
