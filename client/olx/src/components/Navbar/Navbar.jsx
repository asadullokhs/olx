import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="flex">
          <div className="logo">
            <Link to="/">
              <img src="./images/logo.png" alt="logo" />
            </Link>
          </div>
          <ul>
            <li>
              <i class="fa-regular fa-comment"></i>
              Xabarlar
            </li>
            <li>O'z | Ру</li>
            <li>
              <i className="fa-regular fa-heart"></i>
            </li>
            <li>
              <i className="fa-regular fa-user"></i>
              Hisobingiz
            </li>
            <li>
              <button>E'lon berish</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
