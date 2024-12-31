

import React from "react";
import "./Dashboard.css";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import MyCalendar from "./MyCalendar";
import DashboardCards from "./DashboardCards";
import AnnouncementSection from "./AnnouncementSection";

import PayrollFrame1 from "./images/Frame 52.svg";
import RobImage from "./images/rob.png";
import ImgIcon from "./images/imgicon.svg";

const Dashboard = () => {
  const statsCards = [
    {
      title: "PayRoll",
      value: "48",
      subtext1: "12 Men",
      subtext2: "12 Women",
      percentage: "+2%",
      timeframe: "Past month",
    },
    {
      title: "Task Request",
      value: "16",
      subtext1: "6 Men",
      subtext2: "10 Women",
      percentage: "+5%",
      timeframe: "Past month",
    },
  ];

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="dashboard-content1">
          <div className="dashboard-content">
            <h1 className="dashboard-title">Dashboard</h1>

            <DashboardCards />

            <div className="stats-row">
              {statsCards.map((card, index) => (
                <div key={index} className="stats-card">
                  <div className="stats-header">
                    <h3>{card.title}</h3>
                    <div className="percentage-badge">
                      <h4>{card.percentage}</h4>
                      <img src={PayrollFrame1} alt="trend" />
                    </div>
                  </div>
                  <div className="stats-value">{card.value}</div>
                  <div className="stats-details">
                    <div>{card.subtext1}</div>
                    <div>{card.subtext2}</div>
                  </div>
                  <div className="stats-timeframe">
                    {card.percentage} {card.timeframe}
                  </div>
                </div>
              ))}
            </div>

            <div className="bottom-row">
              <AnnouncementSection />
            </div>
          </div>

          <div className="mycalendar">
            <MyCalendar />
            <div className="divbirthday-calendar">
            <h3 className="birthh3">Birthday Calendar</h3>
            <div className="birthday-calendar">
              <div className="birthday-cards">
                <img src={RobImage} alt="Robert Whistable" />
                <div className="birthday-info">
                  <h4>Robert Whistable</h4>
                  <p>Product Manager</p>
                  <p>15 Feb 1998</p>
                </div>
              </div>

              <div className="birthday-cards">
                <img src={ImgIcon} alt="Robert Whistable" />
                <div className="birthday-info">
                  <h4>Robert Whistable</h4>
                  <p>Product Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Dashboard;