import React, { useContext, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
export default function Navbar() {
  const { currentUser } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  // const user = true;

  return (
    <nav>
      <div className="left">
        <a className="logo" href="/">
          <img src="/logo.png" alt="Logo" />
          <span>Shre Estate</span>
        </a>
        <a href="/">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">Agents</a>
      </div>
      <div className="right">
        {currentUser ? (
          <div className="user">
            <img
              src={currentUser.avatar || "/noavatar.jpg"}
              alt=""
            />
            <span>{currentUser.username}</span>
            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <div className="links">
            <a href="/login">Sign In</a>
            <a href="/register" className="register">
              Sign Up
            </a>
          </div>
        )}
        <div className="menuIcon">
          <img src="/menu.png" alt="Menu" onClick={() => setOpen(!open)} />
        </div>
        <div className={open ? "menu active" : "menu passive"}>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contact</a>
          <a href="">Agents</a>
          <a href="">Sign In</a>
          <a href="">Sign Up</a>
        </div>
      </div>
    </nav>
  );
}
