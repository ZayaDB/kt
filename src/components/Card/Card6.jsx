import React from "react";
import home from "../../assets/home.svg";
import "../../styles/card6.css";
import rectangle from "../../assets/Rectangle463.png";
function Card6() {
  return (
    <section className="title">
      <p>직접 PPA 서비스</p>

      <div className="rightside">
        <span className="path">
          <img src={home} alt="" className="home" /> > 현황정보 > 직접 PPA
          거래시장
        </span>
        <span className="path2">
          재생에너지 직접 PPA 거래현황 정보를 제공합니다.
        </span>
      </div>
      <div className="backimg">
        <img className="backtext" src={rectangle} alt="" />
        <p className="covertext">산업단지별 직접 PPA 거래현황을 제공합니다.</p>
      </div>
    </section>
  );
}

export default Card6;
