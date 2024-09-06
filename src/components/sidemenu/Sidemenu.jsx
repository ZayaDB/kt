import React, { useState } from "react";
import icon1 from "../../assets/Frame_6340902.png";
import vector from "../../assets/Vector320.svg";
import icon2 from "../../assets/Vector321.png";
import icon3 from "../../assets/Vector322.png";
import icon4 from "../../assets/Vector323.png";
import icon5 from "../../assets/Vector324.png";
import icon6 from "../../assets/Vector325.png";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "../../styles/sidemenu.css"; // Your CSS file

export default function Sidebar() {
  // State to manage which menus are open
  const [activeMenu, setActiveMenu] = useState(null);

  // Function to toggle the active menu
  const toggleMenu = (menuName) => {
    if (activeMenu === menuName) {
      setActiveMenu(null); // Close if already open
    } else {
      setActiveMenu(menuName); // Open selected menu
    }
  };

  return (
    <aside className="sidebar">
      <ul className="menu">
        <li>
          <div className="menu-item" onClick={() => toggleMenu("현황정보")}>
            <img src={icon1} alt="" />
            현황정보
            <i
              className={`fas fa-chevron-down ${
                activeMenu === "현황정보" ? "rotate" : ""
              }`}
            ></i>
          </div>
          {activeMenu === "현황정보" && (
            <ul className="submenu">
              <ul>대시보드</ul>
              <li>직접 PPA 서비스</li>
              <li>전국 발전소 현황</li>
              <li>직접 PPA 계약 현황</li>
              <li>실시간 공급-수요 현황</li>
            </ul>
          )}
        </li>
        <li>
          <div className="menu-item" onClick={() => toggleMenu("계약정보")}>
            <img src={icon2} alt="" />
            계약정보
            <i
              className={`fas fa-chevron-down ${
                activeMenu === "계약정보" ? "rotate" : ""
              }`}
            ></i>
          </div>
          {activeMenu === "계약정보" && (
            <ul className="submenu">
              <ul>전력거래 매물</ul>
              <li>전력거래 매물 현황</li>
              <li>전력 판매 정보</li>
              <li>전력 구매 정보</li>
              <li>계약 단계별 진행현황</li>
              <ul>계약 관리(관리자)</ul>
              <li>계약등록</li>
              <li>공동계약등록</li>
              <li>계약목록</li>
              <li>최종계약목록(거래유형)</li>
            </ul>
          )}
        </li>
        <li>
          <div className="menu-item" onClick={() => toggleMenu("거래정산")}>
            <img src={icon3} alt="" />
            거래정산
            <i
              className={`fas fa-chevron-down ${
                activeMenu === "거래정산" ? "rotate" : ""
              }`}
            ></i>
          </div>
          {activeMenu === "거래정산" && (
            <ul className="submenu">
              <ul>청구/정산</ul>
              <li>발전사업자</li>
              <li>전기사용자</li>
              <ul>전력거래소 청구</ul>
              <li>청구 조회</li>
              <li>거래소 데이터 관리</li>
              <ul>한국전력 청구</ul>
              <li>청구 조회</li>
              <li>청구자료 등록</li>
              <li>한전 데이터 관리</li>
            </ul>
          )}
        </li>
        <li>
          <div className="menu-item" onClick={() => toggleMenu("통계정보")}>
            <img src={icon4} alt="" />
            통계정보
            <i
              className={`fas fa-chevron-down ${
                activeMenu === "통계정보" ? "rotate" : ""
              }`}
            ></i>
          </div>
          {activeMenu === "통계정보" && (
            <ul className="submenu">
              <ul>한국산업단지 전용</ul>
              <li>공급·수요 운영실적</li>
              <li>전력거래 수익 통계</li>

              <ul>재생에너지 전기공급자용</ul>
              <li>전력거래 통계</li>
              <li>거래항목별 통계</li>
              <li>발전 통계</li>
              <li>계약 통계</li>

              <ul>발전사업자용</ul>
              <li>발전현황</li>

              <ul>전기사용자용</ul>
              <li>전기사용현황</li>
            </ul>
          )}
        </li>
        <li>
          <div className="menu-item" onClick={() => toggleMenu("고객관리")}>
            <img src={icon5} alt="" />
            고객관리
            <i
              className={`fas fa-chevron-down ${
                activeMenu === "고객관리" ? "rotate" : ""
              }`}
            ></i>
          </div>
          {activeMenu === "고객관리" && (
            <ul className="submenu">
              <ul>고객센터</ul>
              <li>공지사항</li>
              <li>자주 묻는 질문</li>
              <li>유관기관 사이트</li>
              <li>KT RDMS 소개</li>
              <li>개인정보처리지침</li>
              <li>서비스약관</li>

              <ul>고객정보(관리자)</ul>
              <li>전기사용자 정보관리</li>
              <li>발전사업자 정보관리</li>
            </ul>
          )}
        </li>
        <li>
          <div className="menu-item" onClick={() => toggleMenu("시스템설정")}>
            <img src={icon6} alt="" />
            시스템설정
            <i
              className={`fas fa-chevron-down ${
                activeMenu === "시스템설정" ? "rotate" : ""
              }`}
            ></i>
          </div>
          {activeMenu === "시스템설정" && (
            <ul className="submenu">
              <ul>시스템 관리(관리자)</ul>
              <li>사용자 그룹(SSO)</li>
              <li>사용자 등록(SSO)</li>
              <li>메뉴권한(SSO)</li>
              <li>로그인 로그</li>
              <li>시스템 로그</li>
              <li>메뉴 로그</li>
              <li>비상연락망 현황</li>
              <li>비상연락망 등록</li>
              <li>사용자권한신청조회(SSO)</li>
              <li>사용자권한신청등록(SSO)</li>
              <li>기준정보관리</li>
            </ul>
          )}
        </li>
      </ul>
    </aside>
  );
}
