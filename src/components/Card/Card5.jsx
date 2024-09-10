import React from "react";
import "../../styles/card5.css";
import icon1 from "../../assets/octicon_file-added-24.svg";
import icon2 from "../../assets/Vector3.svg";
import icon3 from "../../assets/Vector4.svg";
import icon4 from "../../assets/Vector5.svg";
import icon5 from "../../assets/Vector6.svg";

export default function Card5() {
  return (
    <>
      <div className="Big-card">
        <div className="card-container">
          <h2>전력거래 대금 산정기준</h2>
          <div className="card-position">
            <div className="card-header">
              <div className="card-title">
                <img src={icon1} alt="" />
                부가정산금
              </div>
              <div className="cardvalue">
                <div className="card-value">
                  9.63
                  <div className="cardvalue1">원/kWh</div>
                </div>
                <div className="card-date">2024.07.01~2025.0.30</div>
              </div>
            </div>
            <div className="card-header">
              <div className="card-title">
                <img src={icon2} alt="" />
                거래수수료
              </div>
              <div className="cardvalue">
                <div className="card-value">
                  0.1034
                  <div className="cardvalue1">원/kWh</div>
                </div>
                <div className="card-date">2024.07.01~2025.0.30</div>
              </div>
            </div>
            <div className="card-header">
              <div className="card-title">
                <img src={icon3} alt="" />망 이용요금
              </div>
              <div className="cardvalue">
                <div className="card-value">
                  평균 20
                  <div className="cardvalue1">원/kWh</div>
                </div>
                <div className="card-date">망이용 계약 시 단가</div>
              </div>
            </div>
            <div className="card-header">
              <div className="card-title">
                <img src={icon4} alt="" />
                전력산업 기반기금
              </div>
              <div className="cardvalue">
                <div className="card-value">
                  3.2
                  <div className="cardvalue1">%</div>
                </div>
                <div className="card-date">2024.07.01~2025.0.30</div>
              </div>
            </div>
          </div>
        </div>
        <div className="next-card">
          <h2 style={{ marginTop: "31px", marginLeft: "-238px" }}>
            산업단지별 전력 대금
            <div className="rightcard">
              <div className="rightcard-title">
                <img src={icon5} alt="" />
                인천 남동
              </div>
              <div className="rightcontent">
                <div className="rightvalue">전력공급대금</div>
                <div className="rightvalue1">
                  평균
                  <div className="rightvalue2">120</div>
                  <div className="rightvalue3">원/kWh</div>
                </div>
              </div>
              <div className="rightcontent">
                <div className="rightvalue">전력거래대금</div>
                <div className="rightvalue1">
                  평균
                  <div className="rightvalue2">165</div>
                  <div className="rightvalue3">원/kWh</div>
                </div>
              </div>
            </div>
          </h2>
          <div className="rightcard1">
            <div className="rightcard-title">
              <img src={icon5} alt="" />
              인천 남동
            </div>
            <div className="rightcontent">
              <div className="rightvalue">전력공급대금</div>
              <div className="rightvalue1">
                평균
                <div className="rightvalue2">120</div>
                <div className="rightvalue3">원/kWh</div>
              </div>
            </div>
            <div className="rightcontent">
              <div className="rightvalue">전력거래대금</div>
              <div className="rightvalue1">
                평균
                <div className="rightvalue2">165</div>
                <div className="rightvalue3">원/kWh</div>
              </div>
            </div>
          </div>
          <div className="rightcard2">
            <div className="rightcard-title">
              <img src={icon5} alt="" />
              인천 남동
            </div>
            <div className="rightcontent">
              <div className="rightvalue">전력공급대금</div>
              <div className="rightvalue1">
                평균
                <div className="rightvalue2">120</div>
                <div className="rightvalue3">원/kWh</div>
              </div>
            </div>
            <div className="rightcontent">
              <div className="rightvalue">전력거래대금</div>
              <div className="rightvalue1">
                평균
                <div className="rightvalue2">165</div>
                <div className="rightvalue3">원/kWh</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
