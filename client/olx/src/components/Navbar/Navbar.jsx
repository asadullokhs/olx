import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`navbar scrollableDiv ${isVisible ? "" : "hidden"}`}>
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
