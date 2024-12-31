import React from "react";
import "./AttendanceLeaveCards.css";

const AttendanceLeaveCards = () => {
  const stats = {
    casualLeave: {
      cl: "04",
      growth: "+2% Jan month",
    },
    emergencyLeave: 
    {
         el: "06",
         growth: "+2% Jan month" },
    totalLeaveJan: {
      tljan: "10",
      growth: "+2% Jan month",
    },
    todayLeave: {
      tl: "02",
      growth: "23/01 Monday",
    },
  };

  return (
    <div className="stats-container">
      <div className="stat-card-casualLeave">
        <h3 className="h3">Casual Leave </h3>
        <div className="stat-number">{stats.casualLeave.cl}</div>
        <div className="stat-no">{stats.casualLeave.growth}</div>
      </div>
      <div className="stat-card-emergencyLeave">
        <h3 className="h3">Emergency Leave</h3>
        <div className="stat-number">{stats.emergencyLeave.el}</div>
        <div className="stat-no">{stats.emergencyLeave.growth}</div>
      </div>
      <div className="stat-card-totalLeaveJan">
        <h3 className="h3">Total Leave Jan</h3>
        <div className="stat-number">{stats.totalLeaveJan.tljan}</div>
        <div className="stat-no">{stats.totalLeaveJan.growth}</div>
      </div>
      <div className="stat-card-todayLeave">
        <h3 className="h3">Total Leave</h3>
        <div className="stat-number">{stats.todayLeave.tl}</div>
        <div className="stat-no">{stats.todayLeave.growth}</div>
      </div>
    </div>
  );
};

export default AttendanceLeaveCards;
