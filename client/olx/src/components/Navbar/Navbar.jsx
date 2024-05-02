import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
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
    <div className={`${isVisible ? "" : "hidden"} navbar scrollableDiv `}>
      <div className="container">
        <div className="flex">
          <div className="logo">
            <Link to="/">
              <img src="data:image/png;base64,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" alt="logo" />
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
              <Link to={'/add-prod'}>
               <button>E'lon berish</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
