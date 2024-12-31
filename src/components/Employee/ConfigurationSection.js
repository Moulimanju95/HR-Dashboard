import React  from 'react';
import './Configuration.css';
import { useNavigate } from "react-router-dom";

const Configuration = () => {
  const navigate = useNavigate();

  const handleSaveEmployee = () => {
    navigate("/employeelist");
  };
  return (    
   <div className='configuration-section'>
    <div className="save-cancel-buttons">
    <h2>Configuration</h2>
      <button className="cancel-button">Cancel</button>
      <button className="save-button" onClick={handleSaveEmployee}>Save</button>
    </div>
 </div>
  );
};


export default Configuration;

