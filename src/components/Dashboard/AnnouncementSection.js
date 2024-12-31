import React from 'react';
import './Announce.css';

const AnnouncementHeader = ({ Atitle = "Announcement", date = "Today, 13 Sep 2021" }) => {
  return (
    <div className="announcement-header">
      <div className="Atitle">{Atitle}</div>
      <div className="date-container">
        <div className="date-text">{date}</div>
      </div>
    </div>
  );
};

const AnnouncementCard = ({ Atitle, timestamp }) => {
  return (
    <div className="announcement-card">
      <div className="Atitle-frame">
        <span className="Atitle">{Atitle}</span>
      </div>
      <div className="bottom-frame">
        <span className="timestamp">{timestamp}</span>
      
      </div>
    </div>
  );
};

AnnouncementCard.defaultProps = {
  Atitle: 'Outing schedule for every department',
  timestamp: '5 Minutes ago',
};

const SeeAllAnnouncements = ({ text = "See All Announcement", onClick }) => {
  return (
    <div className="see-all-announcements" onClick={onClick}>
      <span className="text">{text}</span>
    </div>
  );
};

SeeAllAnnouncements.defaultProps = {
  text: "See All Announcement",
  onClick: () => console.log("See All Announcements clicked"),
};

const AnnouncementComponent = () => {
  return (
    <div className="announcement-container">
      <AnnouncementHeader />
      <AnnouncementCard Atitle="Outing schedule for every department" timestamp="5 Minutes ago" />
      <AnnouncementCard Atitle="Meeting HR Department" timestamp="Yesterday, 12:30 PM" />
      <AnnouncementCard Atitle="IT Department needs two more talents for UX/UI Designer position" timestamp="Yesterday, 09:15 AM" />
      <SeeAllAnnouncements />
    </div>
  );
};

export default AnnouncementComponent;
