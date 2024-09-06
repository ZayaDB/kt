import React from "react";
import logo from "../../assets/img_logo.png";
import bell from "../../assets/bell1.png";
import sortdown from "../../assets/SortDown.png";
import umbrella from "../../assets/umbrella.png";
import water from "../../assets/water.png";
import wind from "../../assets/wind.png";
import sun from "../../assets/sun.png";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";

import "../../styles/header.css";

export default function Header() {
  return (
    <header>
      <Link to="/" className="logo-text">
        <img src={logo} alt="Logo" className="logo" />
        <h3 className="logotext">RDMS</h3>
      </Link>
      <div className="weather-user-section">
        <div className="REC-PPA">
          <div className="REC">
            REC 정보
            <div className="AVG">
              평균 <div className="price-1">74,949</div>
            </div>
          </div>
          <div className="PPA">
            PPA 정보
            <div className="price">135.69</div>
          </div>
        </div>
        <div className="weather">
          <span className="location-weather">
            인천항보 산업단지
            <img src={sun} alt="" />
            <span className="Gradus"> 26°C</span>
          </span>
          <img src={umbrella} alt="" />
          <span> 20%</span>
          <img src={water} alt="" />
          <span>25%</span>
          <img src={wind} alt="" />
          <span>16m/s</span>
        </div>
        <div className="user-info">
          <img src={bell} alt="" />
          <span className="bold">알림</span>

          <span className="notif">3</span>
          <img src={sortdown} alt="" />
          <FaRegUser />
          <span className="bold">홍길동</span>
          <span>관리자</span>
          <img src={sortdown} alt="" />
        </div>
      </div>
    </header>
  );
}
