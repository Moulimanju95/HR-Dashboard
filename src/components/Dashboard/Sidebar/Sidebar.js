
import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css"; 

// Import images
import DashboardIcon from './images/ic_dashboard.svg';
import EmployeeIcon from './images/ic_recruitment.svg';
import AttendanceIcon from './images/ic_calendar.svg';
import PayRollIcon from './images/ic_employee.svg';
import TaskIcon from './images/ic_department.svg';
import AnnouncementIcon from './images/share.svg';
import SupportIcon from './images/ic_support.svg';
import SettingsIcon from './images/ic_settings.svg';

const Sidebar = ({ isOpen, setIsOpen }) => {
  const handleLinkClick = () => {
    if (window.innerWidth <= 768) {
      setIsOpen(false);
    }
  };

  return (
    <div className={`sidebar-container ${isOpen ? "open" : ""}`}>
      <div className="sidebar-close-button" onClick={() => setIsOpen(false)}>
        ×
      </div>
      <h1 className="sidebar-logo">WeHR</h1>
      <NavLink to="/dashboard" className="sidebar-link" activeClassName="active" onClick={handleLinkClick}>
        <img src={DashboardIcon} alt="Dashboard" />
        Dashboard
      </NavLink>
      <NavLink to="/addemployee" className="sidebar-link" activeClassName="active" onClick={handleLinkClick}>
        <img src={EmployeeIcon} alt="Employee" />
        Employee
      </NavLink>
      <NavLink to="/attendance" className="sidebar-link" activeClassName="active" onClick={handleLinkClick}>
        <img src={AttendanceIcon} alt="Attendance" />
        Attendance
      </NavLink>
      <NavLink to="/payroll" className="sidebar-link" activeClassName="active" onClick={handleLinkClick}>
        <img src={PayRollIcon} alt="Payroll" />
        Payroll
      </NavLink>
      <NavLink to="/task" className="sidebar-link" activeClassName="active" onClick={handleLinkClick}>
        <img src={TaskIcon} alt="Task" />
        Task
      </NavLink>
      <NavLink to="/announcement" className="sidebar-link" activeClassName="active" onClick={handleLinkClick}>
        <img src={AnnouncementIcon} alt="Announcement" />
        Announcement
      </NavLink>
      <div className="sidebar-section-title">Other</div>
      <NavLink to="/support" className="sidebar-link" activeClassName="active" onClick={handleLinkClick}>
        <img src={SupportIcon} alt="Support" />
        Support
      </NavLink>
      <NavLink to="/settings" className="sidebar-link" activeClassName="active" onClick={handleLinkClick}>
        <img src={SettingsIcon} alt="Settings" />
        Settings
      </NavLink>
    </div>
  );
};

export default Sidebar;
