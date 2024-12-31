import React from 'react';
import { useNavigate } from "react-router-dom";
import './AddEmployee.css';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import Navbar from '../Dashboard/Navbar/Navbar';

import EmpIcon from './images/addemp.svg';
import OrgIcon from './images/orgaddress.svg';

const EmployeeTile = ({ icon, label }) => {
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
        alt="Employee Icon"
        style={iconStyles}
      />
      <span style={labelStyles}>{label}</span>
    </div>
  );
};


const OrgConfigTile = ({ icon, label }) => {
  return (
    <div className="org-config-tile">
      <div className="org-config-content">
        <div className="org-config-icon">
          <img 
            src={icon} 
            alt="Organization Config Icon" 
            width={56} 
            height={56}
          />
        </div>
        <div className="org-config-label">
          {label}
        </div>
      </div>
    </div>
  );
};



const AddEmployee = () => {
  const navigate = useNavigate();

  const handleAddEmployee = () => {
    navigate("/employeelist");
  };
  return (
    <div className="AddEmployee">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="tiles-header">
        <h1>Employee</h1></div>
        <div className="tiles-container">

        <button className='btnStyle' onClick={handleAddEmployee}>
          <EmployeeTile icon={EmpIcon} label="Employee" /> </button>

          <OrgConfigTile icon={OrgIcon} label="Org Config" />
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
