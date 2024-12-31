import React, { useState } from "react";
import "./EmployeeManagement.css";
/* import EmpNavbar from "./EmpNavbar.js";
import EmpSidebar from "./EmpSidebar.js"; */
import DepartmentSection from "./DepartmentSection.js";
import ConfigurationSection from "./ConfigurationSection.js";
import Sidebar from "../Dashboard/Sidebar/Sidebar.js";
import Navbar from "../Dashboard/Navbar/Navbar.js";

import DateCalenderIcon from "./images/ic_calendar.svg";
import MinusIcon from "./images/Minus.svg";
import PlusIcon from "./images/Plus.svg";

const EmployeeManagement = () => {
  const [formData, setFormData] = useState({
    employeeName: "",
    employeeNumber: "11D0012",
    dateOfJoining: "",
    emailId: "",
    mobileNumber: "",
    employeeStatus: "",
    dateOfBirth: "",
    gender: "",
    maritalStatus: "",
    isPhysicalChallenged: "Yes",
    bloodGroup: "O+",
    personalEmail: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="employee-management">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="dashboard-content">
           <div className="content-wrapper">
            <div className="form-section">
              
              <div className="imgicon">
              <h2>Add details of an employee</h2>
                <img src={MinusIcon} alt="MinusIcon" className="icon"/>
              </div>
              <form>
                <div className="form-row">
                  <div className="form-group">
                    <label>
                      Employee Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      name="employeeName"
                      placeholder="Enter Employee Name"
                      value={formData.employeeName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      Employee Number <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      name="employeeNumber"
                      value={formData.employeeNumber}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      Date of joining <span className="required">*</span>
                    </label>
                    <div className="date-input">
                      <input
                        type="date"
                        name="dateOfJoining"
                        value={formData.dateOfJoining}
                        onChange={handleChange}
                      />
                      {/*  <img
                        src={DateCalenderIcon}
                        alt="calendar"
                      /> */}
                    </div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>
                      Email Id <span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      name="emailId"
                      placeholder="Enter Email id"
                      value={formData.emailId}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      Mobile Number <span className="required">*</span>
                    </label>
                    <input
                      type="tel"
                      name="mobileNumber"
                      placeholder="Enter Mobile Number"
                      value={formData.mobileNumber}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      Employee Status <span className="required">*</span>
                    </label>
                    <select
                      name="employeeStatus"
                      value={formData.employeeStatus}
                      onChange={handleChange}
                    >
                      <option value="">Employee Status</option>
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  </div>
                </div>

                <div className="section-title">  
                                             
                  <div className="imgicon">
                  <h2>Personal Details</h2>
                    <img src={MinusIcon} alt="MinusIcon" className="icon"/>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>
                      Date Of Birth <span className="required">*</span>
                    </label>
                    <div className="date-input">
                      <input
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                      />
                      {/*  <img
                        src={DateCalenderIcon}
                        alt="calendar"
                      /> */}
                    </div>
                  </div>
                  <div className="form-group">
                    <label>
                      Gender <span className="required">*</span>
                    </label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                    >
                      <option value="">Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>
                      Marital Status <span className="required">*</span>
                    </label>
                    <select
                      name="maritalStatus"
                      value={formData.maritalStatus}
                      onChange={handleChange}
                    >
                      <option value="">Marital Status</option>
                      <option value="single">Single</option>
                      <option value="married">Married</option>
                      <option value="divorced">Divorced</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>
                      Is Physical Challanged <span className="required">*</span>
                    </label>
                    <select
                      name="isPhysicalChallenged"
                      value={formData.isPhysicalChallenged}
                      onChange={handleChange}
                    >
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>
                      Blood Group <span className="required">*</span>
                    </label>
                    <select
                      name="bloodGroup"
                      value={formData.bloodGroup}
                      onChange={handleChange}
                    >
                      <option value="O+">O+</option>
                      <option value="A+">A+</option>
                      <option value="B+">B+</option>
                      <option value="AB+">AB+</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>
                      Personal Email id <span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      name="personalEmail"
                      placeholder="Enter Email id"
                      value={formData.personalEmail}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </form>
            </div>

            <DepartmentSection />
           
            <ConfigurationSection />
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeManagement;
