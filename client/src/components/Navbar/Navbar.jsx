import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
const navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">Олжас Сулейменов</div>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Главная
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                Информация
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Описание
              </Link>
            </li>
            <li>
              <Link to="testimonial" spy={true} smooth={true}>
                Отзывы
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default navbar;
