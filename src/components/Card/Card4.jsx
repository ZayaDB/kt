import React from "react";
import "../../styles/card4.css";
import home from "../../assets/home.svg";
import rectangle from "../../assets/Rectangle463.png";
export default function Card4() {
  return (
    <>
      <section className="title">
        <p>직접 PPA 서비스</p>

        <div className="rightside">
          <span className="path">
            <img src={home} alt="" className="home" /> > 현황정보 > 직접 PPA
            거래시장
          </span>
          <span>재생에너지 거래시장 시세를 제공합니다. </span>
        </div>
        <div className="backimg">
          <img className="backtext" src={rectangle} alt="" />
          <p className="covertext">산업단지별 전력 거래 시세를 제공합니다.</p>
        </div>
      </section>
    </>
  );
}
