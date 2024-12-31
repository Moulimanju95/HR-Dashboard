import React from 'react';
import { useNavigate } from "react-router-dom";
import './Attendance.css';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import Navbar from '../Dashboard/Navbar/Navbar';

import LeavereqIcon from './images/Leavereq.svg';
import AttendanceIcon from './images/attendance.svg';

const AttendanceTile = ({ icon, label }) => {
  const tileStyles = {
    width: '157px',
    height: '157px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };
  

  const iconStyles = {
    width: '40px',
    height: '40px',
    marginBottom: '8px',
  };

  const labelStyles = {
    fontFamily: 'Poppins',
    fontSize: '13px',
    fontWeight: 400,
    lineHeight: '144.5%',
    color: '#E9374A',
    textAlign: 'center',
  };

  return (
    <div style={tileStyles}>
      <img 
        src={icon}
        alt="Attendance Icon"
        style={iconStyles}
      />
      <span style={labelStyles}>{label}</span>
    </div>
  );
};

const AttendanceTab = ({ icon, label }) => {
  const tileStyles = {
    width: '157px',
    height: '157px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };
  

  const iconStyles = {
    width: '40px',
    height: '40px',
    marginBottom: '8px',
  };

  const labelStyles = {
    fontFamily: 'Poppins',
    fontSize: '13px',
    fontWeight: 400,
    lineHeight: '144.5%',
    color: '#E9374A',
    textAlign: 'center',
  };

  return (
    <div style={tileStyles}>
      <img 
        src={icon}
        alt="Attendance Icon"
        style={iconStyles}
      />
      <span style={labelStyles}>{label}</span>
    </div>
  );
};

/* const AttendanceTab = ({ icon, label }) => {
  return (
    <div className="atten-tile">
      <div className="atten-content">
        <div className="atten-icon">
          <img 
            src={icon} 
            alt="Organization Config Icon" 
            width={56} 
            height={56}
          />
        </div>
        <div className="atten-label">
          {label}
        </div>
      </div>
    </div>
  );
};

 */

const Attendance = () => {
  const navigate = useNavigate();

  const handleAttendance = () => {
    navigate("/leaverequest");
  };

  const handleLeaveRequest = () => {
    navigate("/attendancelist");
  };

  return (
    <div className="Attendance">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="tiles-header">
        <h1>Attendance</h1></div>
        <div className="tiles-container">

        <button className='btnStyle' onClick={handleAttendance}>
          <AttendanceTile icon={LeavereqIcon} label="Leave Request" /> </button>
          <button className='btnStyle' onClick={handleLeaveRequest}>
          <AttendanceTab icon={AttendanceIcon} label="Attendances" /></button>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
