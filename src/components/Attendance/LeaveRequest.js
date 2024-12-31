import React, { useState } from "react";
import "./Attendance.css";
import Navbar from "../Dashboard/Navbar/Navbar";
import Sidebar from "../Dashboard/Sidebar/Sidebar";
import AttendanceLeaveCards from "./AttendanceLeaveCards";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
/* import { FaEllipsisV } from "react-icons/fa"; */
import { FaEllipsis } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

import { FaCheck, FaEye } from "react-icons/fa6";

const Dashboard = () => {
  const navigate = useNavigate();

  const [employees] = useState([
    {
      id: "11D001",
      name: "MAGHESH",
      email: "magesh@Dotcod.in",
      joinDate: "2023-04-15",
      designation: "Software Engineer",
      status: "Approved",
      noDays: "01",
      requestDate: "2023-04-10",
      salaryHikeByDate: "2024-06-15",
      releavedDate: "2025-04-15",
      createdDate: "2023-04-10",
      leaveType: "Casual Leave",
      reason: "Personal Reason",
    },
    {
      id: "11D002",
      name: "Tesla",
      email: "tsahull@Dotcod.in",
      joinDate: "2022-03-15",
      designation: "Programmer",
      status: "Pending",
      noDays: "01",
      requestDate: "2022-04-10",
      salaryHikeByDate: "2023-06-15",
      releavedDate: "2025-04-15",
      createdDate: "2022-04-10",
      leaveType: "Sick Leave",
      reason: "Health Issue",
    },
    {
      id: "11D003",
      name: "GM",
      email: "gm@Dotcod.in",
      joinDate: "2023-04-15",
      designation: "Software Engineer",
      status: "Pending",
      noDays: "02",
      requestDate: "2022-04-10",
      salaryHikeByDate: "2023-04-15",
      releavedDate: "2025-03-18",
      createdDate: "2022-04-10",
      leaveType: "Sick Leave",
      reason: "Health Issue",
    },
    {
      id: "11D004",
      name: "AARP",
      email: "aarp@Dotcod.in",
      joinDate: "2022-04-18",
      designation: "Developer",
      status: "Approved",
      noDays: "01",
      requestDate: "2022-04-10",
      salaryHikeByDate: "2023-04-15",
      releavedDate: "2025-03-18",
      createdDate: "2022-04-10",
      leaveType: "Casual Leave",
      reason: "Marriage Function",
    },
    {
      id: "11D005",
      name: "Disney",
      email: "disney@Dotcod.in",
      joinDate: "2022-04-20",
      designation: "Developer",
      status: "Pending",
      noDays: "01",
      requestDate: "2022-04-13",
      salaryHikeByDate: "2023-06-15",
      releavedDate: "2024-12-15",
      createdDate: "2022-04-13",
      leaveType: "Sick Leave",
      reason: "Medical Checkup",
    },
    {
      id: "11D006",
      name: "Prime Therapeutics",
      email: "primetheraputics@Dotcod.in",
      joinDate: "2022-04-12",
      designation: "Software Engineer",
      status: "Rejected",
      noDays: "02",
      requestDate: "2022-04-13",
      salaryHikeByDate: "2023-02-15",
      releavedDate: "2024-12-15",
      createdDate: "2022-04-13",
      leaveType: "Casual Leave",
      reason: "Marriage Function",
    },
    {
      id: "11D007",
      name: "Match",
      email: "match@Dotcod.in",
      joinDate: "2022-04-28",
      designation: "Programmer",
      status: "Approved",
      noDays: "04",
      requestDate: "2022-06-23",
      salaryHikeByDate: "2023-02-15",
      releavedDate: "2024-12-15",
      createdDate: "2022-06-23",
      leaveType: "Sick Leave",
      reason: "Medical Checkup",
    },
    {
      id: "11D009",
      name: "Chevy",
      email: "chevy@Dotcod.in",
      joinDate: "2023-05-18",
      designation: "Software Engineer",
      noDays: "02",
      status: "Approved",
      requestDate: "2022-06-23",
      salaryHikeByDate: "2023-04-15",
      releavedDate: "2024-04-25",
      createdDate: "2022-06-23",
      leaveType: "Casual Leave",
      reason: "Personal Reason",
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [sortColumn, setSortColumn] = useState("name");
  const [sortDirection, setSortDirection] = useState("asc");
  const [filters, setFilters] = useState({
    requestDate: "",
    joinDate: "",
    designation: "",
    status: "",
    noDays: "",
    leaveType: "",
    reason: "",
  });

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const handleFilterChange = (column, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [column]: value,
    }));
  };

  const compareDate = (employee, selectedDateType) => {
    const dateFieldMap = {
      joinDate: employee.joinDate,
      requestDate: employee.requestDate,
      createdDate: employee.createdDate,
      releavedDate: employee.releavedDate,
      salaryHikeByDate: employee.salaryHikeByDate,
    };
    const targetDate = new Date(dateFieldMap[selectedDateType]);
    return targetDate;
    /* .toISOString().split("T")[0] === filters.joinDate;  */ // Adjust for your date format
  };

  const filteredEmployees = employees
    .filter((employee) => {
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        employee.name.toLowerCase().includes(query) ||
        employee.email.toLowerCase().includes(query);

      const matchesFilters =
        (!filters.designation ||
          employee.designation === filters.designation) &&
        (!filters.status || employee.status === filters.status) &&
        (!filters.noDays || employee.noDays === filters.noDays) &&
        (!filters.leaveType || employee.leaveType === filters.leaveType) &&
        (!filters.reason || employee.reason === filters.reason) &&
        (!filters.joinDate || compareDate(employee, filters.joinDate)) &&
        (!filters.requestDate || compareDate(employee, filters.requestDate));

      return matchesSearch && matchesFilters;
    })
    .sort((a, b) => {
      const valueA =
        sortColumn === "requestDate" ? new Date(a[sortColumn]) : a[sortColumn];
      const valueB =
        sortColumn === "requestDate" ? new Date(b[sortColumn]) : b[sortColumn];
      if (valueA < valueB) return sortDirection === "asc" ? -1 : 1;
      if (valueA > valueB) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });

  const [dropdownVisible, setDropdownVisible] = useState(null);

  const toggleDropdown = (index) => {
    setDropdownVisible(dropdownVisible === index ? null : index);
  };

  const statusOptions = [
    { label: "All", value: "", icon: "" },
    { label: "Approved", value: "Approved", icon: "✅" },
    { label: "Pending", value: "Pending", icon: "⏳" },
    { label: "Rejected", value: "Rejected", icon: "❌" },
  ];

  const reasonOptions = [
    { label: "All", value: "" },
    { label: "Personal Reason", value: "Personal Reason" },
    { label: "Health Issue", value: "Health Issue" },
    { label: "Marriage Function", value: "Marriage Function" },
    { label: "Medical Checkup", value: "Medical Checkup" },
  ];

  const noDaysOptions = [
    { label: "All", value: "" },
    { label: "1 Day", value: "01" },
    { label: "2 Days", value: "02" },
    { label: "4 Days", value: "04" },
  ];

  const joinDateOptions = [
    { label: "All", value: "" },
    { label: "Request Date", value: "requestDate" },
    { label: "Joined Date", value: "joinDate" },
    { label: "Created Date", value: "createdDate" },
    { label: "Releved Date", value: "releavedDate" },
    { label: "Salary Hike date by", value: "salaryHikeByDate" },
  ];

  const LeaveOptions = [
    { label: "All", value: "" },
    { label: "Casual Leave", value: "Casual Leave" },
    { label: "Sick Leave", value: "Sick Leave" },
  ];

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="dashboard-content1">
          <div className="dashboard-content">
            <h1 className="dashboard-title">Leave Request</h1>

            <AttendanceLeaveCards />

            <div className="attendance-list-heading">
              <div className="attendance-count">
                {" "}
                Leave Request {filteredEmployees.length}
              </div>
              <div className="search-bar-container">
                <div className="search-icon-wrapper">
                  <FaSearch />
                </div>
                <input
                  className="search-input"
                  type="text"
                  placeholder="Type here..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <table>
              <thead>
                <tr>
                  <th onClick={() => handleSort("name")}>Name</th>
                  <th>
                    Request Date
                    <select
                      value={filters.requestDate}
                      onChange={(e) =>
                        handleFilterChange("requestDate", e.target.value)
                      }
                      style={{
                        padding: "0.1rem",
                        marginTop: "0.5rem",
                        border: "1px solid #ddd",
                        borderRadius: "4px",
                        fontSize: "0.85rem",
                        width: "10%",
                        marginLeft: "0.5rem",
                      }}
                    >
                      {joinDateOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </th>
                  <th>
                    Leave Type
                    <select
                      value={filters.leaveType}
                      onChange={(e) =>
                        handleFilterChange("leaveType", e.target.value)
                      }
                      style={{
                        padding: "0.1rem",
                        marginTop: "0.5rem",
                        border: "1px solid #ddd",
                        borderRadius: "4px",
                        fontSize: "0.85rem",
                        width: "15%",
                        marginLeft: "0.5rem",
                      }}
                    >
                      {LeaveOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </th>
                  <th>
                    Reason
                    <select
                      value={filters.reason}
                      onChange={(e) =>
                        handleFilterChange("reason", e.target.value)
                      }
                      style={{
                        padding: "0.1rem",
                        marginTop: "0.5rem",
                        border: "1px solid #ddd",
                        borderRadius: "4px",
                        fontSize: "0.85rem",
                        width: "15%",
                        marginLeft: "0.5rem",
                      }}
                    >
                      {reasonOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </th>
                  <th>
                    No Days
                    <select
                      value={filters.noDays}
                      onChange={(e) =>
                        handleFilterChange("noDays", e.target.value)
                      }
                      style={{
                        padding: "0.1rem",
                        marginTop: "0.5rem",
                        border: "1px solid #ddd",
                        borderRadius: "4px",
                        fontSize: "0.85rem",
                        width: "20%",
                        marginLeft: "0.5rem",
                      }}
                    >
                      {noDaysOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </th>
                  <th>
                    Status
                    <select
                      value={filters.status}
                      onChange={(e) =>
                        handleFilterChange("status", e.target.value)
                      }
                      style={{
                        padding: "0.1rem",
                        marginTop: "0.5rem",
                        border: "1px solid #ddd",
                        borderRadius: "4px",
                        fontSize: "0.85rem",
                        width: "14%",
                        marginLeft: "0.5rem",
                      }}
                    >
                      {statusOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label} {option.icon}
                        </option>
                      ))}
                    </select>
                  </th>

                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {filteredEmployees.map((employee, index) => (
                  <tr key={employee.id}>
                    <td data-label="Name : ">
                      <span
                        style={{
                          fontWeight: "600",
                          fontSize: "14px",
                          fontFamily: "bold",
                        }}
                      >
                        {employee.name}
                      </span>
                      <br />
                      <span>{employee.email}</span>
                    </td>
                    <td>
                      {filters.requestDate
                        ? new Date(
                            compareDate(employee, filters.requestDate)
                          ).toLocaleDateString()
                        : new Date(employee.requestDate).toLocaleDateString()}
                    </td>
                    <td>{employee.leaveType}</td>
                    <td>{employee.reason}</td>
                    <td>{employee.noDays}</td>
                    <td>
                      {" "}
                      <span
                        style={{
                          background:
                            employee.status === "Approved"
                              ? "lightgreen"
                              : employee.status === "Pending"
                              ? "lightblue"
                              : "lightred",
                          fontSize: "14px",
                        }}
                      >
                        {employee.status}
                      </span>
                    </td>
                    <td>
                      <FaEllipsis
                        style={{
                          marginLeft: "7px",
                          marginTop: "10px",
                          alignItems: "center",
                        }}
                        onClick={() => toggleDropdown(index)}
                      ></FaEllipsis>
                      {dropdownVisible === index && (
                        <div className="menu">
                          <button>
                            <FaCheck style={{ color: "#28a745" }} /> Approve
                            Leave
                          </button>
                          <button>
                            <FaTimes style={{ color: "#dc3545" }} /> Reject
                            Leave
                          </button>
                          <button>
                            <FaEye style={{ color: "#007bff" }} /> View Details
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
