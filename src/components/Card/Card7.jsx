import React, { useState } from "react";
import "../../styles/card7.css";
import icon1 from "../../assets/mdi_industrial.svg";
import contents1 from "../../assets/Group34853.svg";

export default function Card7() {
  const [activeSideMenu, setActiveSideMenu] = useState("menu1");
  const [activeTab, setActiveTab] = useState("전체");

  const handleSideMenuClick = (menu) => {
    setActiveSideMenu(menu);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="main-container">
        <div className="side-menu">
          <div
            className={`menu-item1 ${
              activeSideMenu === "menu1" ? "active" : ""
            }`}
            onClick={() => handleSideMenuClick("menu1")}
          >
            <img src={icon1} alt="" />
            인천 남동
          </div>
          <div
            className={`menu-item1 ${
              activeSideMenu === "menu2" ? "active" : ""
            }`}
            onClick={() => handleSideMenuClick("menu2")}
          >
            <img src={icon1} alt="" />
            전남 군산
          </div>
          <div
            className={`menu-item1 ${
              activeSideMenu === "menu3" ? "active" : ""
            }`}
            onClick={() => handleSideMenuClick("menu3")}
          >
            <img src={icon1} alt="" />
            광주 첨단
          </div>
        </div>

        {/* 탭 메뉴 */}
        <div className="tab-container">
          <div className="tabs">
            <div
              className={`tab ${activeTab === "전체" ? "active" : ""}`}
              style={{
                width: "260px",
                height: "48.01px",
              }}
              onClick={() => handleTabClick("전체")}
            >
              전체
            </div>
            <div
              className={`tab ${activeTab === "최근 12개월" ? "active" : ""}`}
              style={{
                width: "260px",
                height: "48.01px",
              }}
              onClick={() => handleTabClick("최근 12개월")}
            >
              최근 12개월
            </div>
            <div
              className={`tab ${activeTab === "최근 30일" ? "active" : ""}`}
              style={{
                width: "260px",
                height: "48.01px",
              }}
              onClick={() => handleTabClick("최근 30일")}
            >
              최근 30일
            </div>
          </div>

          {/* 각 탭에 맞는 내용 표시 */}
          <div className="tab-content">
            {activeTab === "전체" && (
              <div>
                <img className="tabimg" src={contents1} alt="" />
              </div>
            )}
            {activeTab === "최근 12개월" && (
              <div>
                <img className="tabimg" src={contents1} alt="" />
              </div>
            )}
            {activeTab === "최근 30일" && (
              <div>
                <img className="tabimg" src={contents1} alt="" />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
