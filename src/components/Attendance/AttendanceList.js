import React, { useState } from "react";
import "./AttendanceList.css";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Dashboard/Sidebar/Sidebar";
import Navbar from "../Dashboard/Navbar/Navbar";
import { FaSearch } from "react-icons/fa";
import { FaEllipsis } from "react-icons/fa6";
import PlusIcon from "./images/Plus.svg";
import WPlusIcon from "./images/WPlus.svg";

function AttendanceList() {
  const navigate = useNavigate();

  const [employees] = useState([
    {
      id: "11D001",
      name: "MAGHESH",
      email: "magesh@Dotcod.in",
      joinDate: "2023-04-15",
      designation: "Software Engineer",
      status: "Confirmed",
      createdDate: "2023-04-10",
      salaryHikeByDate: "2024-06-15",
      releavedDate: "2025-04-15",
    },
    {
      id: "11D002",
      name: "Tesla",
      email: "tsahull@Dotcod.in",
      joinDate: "2022-03-15",
      designation: "Programmer",
      status: "Probation",
      createdDate: "2022-04-10",
      salaryHikeByDate: "2023-06-15",
      releavedDate: "2025-04-15",
    },
    {
      id: "11D003",
      name: "GM",
      email: "gm@Dotcod.in",
      joinDate: "2023-04-15",
      designation: "Software Engineer",
      status: "Probation",
      createdDate: "2022-04-10",
      salaryHikeByDate: "2023-04-15",
      releavedDate: "2025-03-18",
    },
    {
      id: "11D004",
      name: "AARP",
      email: "aarp@Dotcod.in",
      joinDate: "2022-04-18",
      designation: "Developer",
      status: "Confirmed",
      createdDate: "2022-04-10",
      salaryHikeByDate: "2023-04-15",
      releavedDate: "2025-03-18",
    },
    {
      id: "11D005",
      name: "Disney",
      email: "disney@Dotcod.in",
      joinDate: "2022-04-20",
      designation: "Developer",
      status: "Probation",
      createdDate: "2022-04-13",
      salaryHikeByDate: "2023-06-15",
      releavedDate: "2024-12-15",
    },
    {
      id: "11D006",
      name: "Prime Therapeutics",
      email: "primetheraputics@Dotcod.in",
      joinDate: "2022-04-12",
      designation: "Software Engineer",
      status: "Probation",
      createdDate: "2022-04-13",
      salaryHikeByDate: "2023-02-15",
      releavedDate: "2024-12-15",
    },
    {
      id: "11D007",
      name: "Match.com",
      email: "match@Dotcod.in",
      joinDate: "2022-04-28",
      designation: "Programmer",
      status: "Confirmed",
      createdDate: "2022-06-23",
      salaryHikeByDate: "2023-02-15",
      releavedDate: "2024-12-15",
    },
    {
      id: "11D009",
      name: "Chevy",
      email: "chevy@Dotcod.in",
      joinDate: "2023-05-18",
      designation: "Software Engineer",
      status: "Confirmed",
      createdDate: "2022-06-23",
      salaryHikeByDate: "2023-04-15",
      releavedDate: "2024-04-25",
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [sortColumn, setSortColumn] = useState("name");
  const [sortDirection, setSortDirection] = useState("asc");
  const [filters, setFilters] = useState({
    joinDate: "",
    designation: "",
    status: "",
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
        (!filters.joinDate || compareDate(employee, filters.joinDate));

      return matchesSearch && matchesFilters;
    })
    .sort((a, b) => {
      const valueA =
        sortColumn === "joinDate" ? new Date(a[sortColumn]) : a[sortColumn];
      const valueB =
        sortColumn === "joinDate" ? new Date(b[sortColumn]) : b[sortColumn];
      if (valueA < valueB) return sortDirection === "asc" ? -1 : 1;
      if (valueA > valueB) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });

  const designationOptions = [
    { label: "All", value: "" },
    { label: "Software Engineer", value: "Software Engineer" },
    { label: "Programmer", value: "Programmer" },
    { label: "Developer", value: "Developer" },
  ];

  const statusOptions = [
    { label: "All", value: "" },
    { label: "Confirmed", value: "Confirmed" },
    { label: "Probation", value: "Probation" },
  ];

  const joinDateOptions = [
    { label: "All", value: "" },
    { label: "Joined Date", value: "joinDate" },
    { label: "Created Date", value: "createdDate" },
    { label: "Releved Date", value: "releavedDate" },
    { label: "Salary Hike date by", value: "salaryHikeByDate" },
  ];

  return (
    <div className="employee-container">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="attcontent-wrapper">
          <div className="header-section">
            <h1>Attendances</h1>
            <div className="button-container">
              <div className="action-button" color="white">
                <img src={PlusIcon} alt="Plus" />
                Import Excel
              </div>
              <div
                className="action-button"
                onClick={() => navigate("/employeeform")}
                color="black"
              >
                <img src={WPlusIcon} alt="Add Employee" />
                Add Employee
              </div>
            </div>
          </div>

          <div className="employee-list-heading">
            <div className="employee-count">
              {" "}
              Attendances {filteredEmployees.length}
            </div>
            <div className="attsearch-bar-container">
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
                {/* <th onClick={() => handleSort("id")}></th> */}
                <th onClick={() => handleSort("name")}>Name</th>
                <th>
                  Join Date
                  <select
                    value={filters.joinDate}
                    onChange={(e) =>
                      handleFilterChange("joinDate", e.target.value)
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
                  Designation
                  <select
                    value={filters.designation}
                    onChange={(e) =>
                      handleFilterChange("designation", e.target.value)
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
                    {designationOptions.map((option) => (
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
                      width: "13%",
                      marginLeft: "0.5rem",
                    }}
                  >
                    {statusOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </th>
                <th>Options</th>
              </tr>
            </thead>

            <tbody>
              {filteredEmployees.map((employee) => (
                <tr key={employee.id}>
                {/*   <td data-label="ID : ">
                    <input type="checkbox" />
                    {employee.id}
                  </td> */}
                  <td data-label="Name : " >
                  <span style={{ fontWeight : '600' , fontSize:'14px', fontFamily:'bold'}}>{employee.name}</span>
                    <br />
                    <span>{employee.email}</span>
                  </td>
                  <td>
                    {filters.joinDate
                      ? new Date(
                          compareDate(employee, filters.joinDate)
                        ).toLocaleDateString()
                      : new Date(employee.joinDate).toLocaleDateString()}
                  </td>
                  <td>{employee.designation}</td>
                  <td>{employee.status}</td>
                  <td className="three-dot-button">
                    <FaEllipsis />
                  </td>
                  <hr></hr>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AttendanceList;
