import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Sidebar from "../Sidebar/Sidebar";
import { FaAngleDown, FaBell, FaEnvelope, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import UserProfileIcon from "./images/unsplash_OH2S9XAcLhc.png";

const Navbar = () => {
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const navigate = useNavigate();

  const toggleSearchBar = () => {
    setSearchVisible(!isSearchVisible);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  // Handle online/offline status changes
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <div>
      {/* Sidebar Component */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setSidebarOpen} />

      <div className="navbar-container">
        <div className="nleft-section">
          {/* Hamburger Icon */}
          <div className="hamburger" onClick={toggleSidebar}>
            ☰
          </div>

          {/* Search Icon */}
          <div className="search-icon-wrapper" onClick={toggleSearchBar}>
            <FaSearch />
          </div>

          {/* Search Bar */}
          <div className={`search-wrapper ${isSearchVisible ? "visible" : ""}`}>
            <input type="text" placeholder="Search Employee" />
            <FaSearch />
          </div>
        </div>

        {/* Profile Section */}
        <div className="profile-section">
          <div style={{ position: "relative" }}>
            <FaBell />
            <div
              className={`status-indicator ${isOnline ? "online" : "offline"}`}
            />
          </div>

          <FaEnvelope />
          <img src={UserProfileIcon} alt="User" />
          <span>Admirra John</span>
          <FaAngleDown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
