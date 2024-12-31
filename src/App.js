import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import SignIn from "./components/SignIn/SignIn";
import EmployeeManagement from "./components/Employee/EmployeeManagement";
import AddEmployee from "./components/Employee/AddEmployee";
import PrivateRoute from "./components/utils/PrivateRoute";
import EmployeeList from "./components/Employee/EmployeeList";
import Attendance from "./components/Attendance/Attendance";
import LeaveRequest from "./components/Attendance/LeaveRequest";
import AttendanceList from "./components/Attendance/AttendanceList";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route
          path="/dashboard"
          element={<PrivateRoute element={<Dashboard />} />}
        />

        <Route
          path="/addemployee"
          element={<PrivateRoute element={<AddEmployee />} />}
        />
        <Route
          path="/employeelist"
          element={<PrivateRoute element={<EmployeeList />} />}
        />
        <Route
          path="/employeeform"
          element={<PrivateRoute element={<EmployeeManagement />} />}
        />
        <Route
          path="/attendance"
          element={<PrivateRoute element={<Attendance />} />}
        />
        <Route
          path="/leaverequest"
          element={<PrivateRoute element={<LeaveRequest />} />}
        />
        <Route
          path="/attendancelist"
          element={<PrivateRoute element={<AttendanceList />} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
