import React from "react";
import "../../styles/card2.css";
import vector1 from "../../assets/Vector1.svg";
import vector2 from "../../assets/Vector2.svg";
import vector3 from "../../assets/Vector7.svg";
import vector4 from "../../assets/Vector8.svg";
import vector5 from "../../assets/Vector9.svg";
import vector6 from "../../assets/Vector10.svg";
import vector7 from "../../assets/Vector11.svg";

export default function Card2() {
  return (
    <>
      <div className="rectangle1">
        <div className="container1">
          <p>즐겨찿기</p>
          <div className="imagecard1">
            <img className="cardimage" src={vector1} alt="" />
            정보등록
          </div>
          <div className="imagecard1">
            <img className="cardimage" src={vector2} alt="" />
            발전사업자등록
          </div>
          <div className="imagecard1">
            <img className="cardimage" src={vector3} alt="" />
            전기사용자 등록
          </div>
          <div className="imagecard1">
            <img className="cardimage" src={vector5} alt="" />
            이용안내
          </div>
          <div className="imagecard1 row-2">
            <img className="cardimage" src={vector4} alt="" />
            정산관리
          </div>
          <div className="imagecard1">
            <img className="cardimage" src={vector6} alt="" />
            FAQ
          </div>
          <div className="imagecard1">
            <img className="cardimage" src={vector7} alt="" />
            공지사항
          </div>
        </div>
      </div>
    </>
  );
}
