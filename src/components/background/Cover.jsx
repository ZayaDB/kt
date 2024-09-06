import React from "react";
import home from "../../assets/home.svg";
import "../../styles/cover.css";
import rectangle from "../../assets/Rectangle463.png";
function Cover() {
  return (
    <section className="title">
      <p>직접 PPA 서비스</p>

      <div className="rightside">
        <span className="path">
          <img src={home} alt="" className="home" /> > 현황정보 > 직접 PPA
          거래시장
        </span>
        <span>탄소 중립과 RE100 달성을 위한 직접PPA 서비스를 제공합니다.</span>
      </div>
      <div className="backimg">
        <img className="backtext" src={rectangle} alt="" />
        <p>RE100 달성을 위한 재생에너지 직접 PPA 서비스를 제공합니다.</p>
      </div>
    </section>
  );
}

export default Cover;
