import React from "react";
import "./DepartmentSection.css";
import PlusIcon from "./images/Plus.svg";

const DepartmentSection = () => {
  return (
    <div className="department-section">
      <div className="imgicon">
      <h2>Department</h2>
        <img src={PlusIcon} alt="PlusIcon"  className="icon"/>
      </div>
      
    
    </div>
  );
};

export default DepartmentSection;
