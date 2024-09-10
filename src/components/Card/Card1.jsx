import React from "react";
import "../../styles/cart1.css";
import plant from "../../assets/powerplant_icon01.svg";
import usericon from "../../assets/powerplant_icon02.svg";
import icon1 from "../../assets/hugeicons_energy-ellipse.svg";
import icon2 from "../../assets/hugeicons_energy-ellipse1.svg";

export default function Card1() {
  return (
    <>
      <div className="Rectangle">
        <div className="Contents">
          <div className="id0">
            <p>직접 PPA 계약 발전소</p>
            <h1>
              <img src={plant} alt="" />
              35
              <h3>개</h3>
            </h1>
          </div>
          <div className="id1">
            <p>직접 PPA 전기사용자 수</p>
            <h1>
              <img src={usericon} alt="" />
              25
              <h3>개</h3>
            </h1>
          </div>
          <div className="id2">
            <p>재생에너지 발전량</p>
            <h1>
              <img src={icon1} alt="" />
              000
              <h3>MWh</h3>
            </h1>
          </div>
          <div className="id3">
            <p>재생에너지 공급량</p>
            <h1>
              <img src={icon2} alt="" />
              000
              <h3>MWh</h3>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
