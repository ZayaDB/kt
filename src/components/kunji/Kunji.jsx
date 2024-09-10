import React from "react";
import "../../styles/kunji.css";

export default function Kunji() {
  return (
    <>
      <div className="rectangle">
        <div className="container">
          <div className="title1">
            공지사항
            <div>더보기 +</div>
          </div>
          <hr />
        </div>
        <div className="contents">
          <span>
            2024년도 공공기관 종합청렴도 평가 관련 개인정보 제3자 제공사항 알림
            <span className="new">New</span>
            <span>2024.07.16</span>
          </span>
          <span>
            일반수소발전시장 입찰제안서 제출기한 연장 안내
            <span>2024.07.12</span>
          </span>
          <span>
            2024년도 청정수소발전시장 경쟁입찰 FAQ
            <span>2024.07.08</span>
          </span>
          <span>
            한국전력거래소 2025년도 연구개발과제 제안서 공모
            <span>2024.07.01</span>
          </span>
          <span>
            육지 후비 전력관제센터 건립공사 하도급공사 계약자료 공개
            <span>2024.06.13</span>
          </span>
        </div>
      </div>
    </>
  );
}
