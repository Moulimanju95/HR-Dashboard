// DashboardCards.js
import React from 'react';
import './DashboardCard.css';


const DashboardCards = () => {
  const stats = {
    leaveRequest: '04',
    attendance: 10,
    totalEmployees: 24,
    payroll: {
      total: 48,
      men: 12,
      women: 12,
      growth: '+2%'
    },
    taskRequest: {
      total: 16,
      men: 6,
      women: 10,
      growth: '+5%'
    }
  };
  
  return (
    <div className="stats-container">

        <div className="stat-card-leave-request">
          <h3 className='h3'>Leave Request</h3>
          <div className="stat-number">{stats.leaveRequest}</div>
        </div>
        <div className="stat-card-attendance">
          <h3 className='h3'>Attendance</h3>
          <div className="stat-number">{stats.attendance}</div>
        </div>
        <div className="stat-card-total-employees">
          <h3 className='h3'>Total Employees</h3>
          <div className="stat-number">{stats.totalEmployees}</div>
        </div>

       
   
      </div>

    
  );
};

export default DashboardCards;
