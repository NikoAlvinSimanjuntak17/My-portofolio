import React from "react";
import { Container } from "react-bootstrap";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdDateRange, MdLocationOn, MdWorkOutline } from "react-icons/md";

import UNFCU from "../../../../assets/imgs/timeline/UNFCU.png";
import Rockitcoin from "../../../../assets/imgs/timeline/Rockitcoin.png";
import NorthernTrust from "../../../../assets/imgs/timeline/NorthernTrust.png";
import SPMT from "../../../../assets/imgs/timeline/spmt.png";

function Timeline() {
  const timelineData = [
    {
      id: "SPMT",
      company: "PT.Pelindo Multi Terminal",
      role: "IT Engineer Intern",
      department: "IT Department",
      location: "Medan Kota Belawan, Kota Medan, Sumatera Utara",
      duration: "Aug 2024 - Jan 2025",
      logo: SPMT,
      website: "https://pelindomultiterminal.co.id/",
      position: "right",
      achievements: [
        "Internship at PT SPMT, assisting in the development of internal web-based application for data management, operational dashboards, and inventory systems to support the company’s internal workflows and actively supporting the IT Care Helpdesk team. Handled technical issues involving software (installations, troubleshooting, internal app support) and hardware (device repair, component replacement, network setup). Strengthened skills in system development, technical support, and user communication.",
      ],
      // technologies: ["Groovy", "Kafka"],
    },
  ];

  const cardStyles = {
    contentStyle: {
      border: "none",
      borderRadius: "20px",
      boxShadow: "0 8px 32px rgba(117, 170, 219, 0.2)",
      background: "rgba(255, 255, 255, 0.95)",
      backdropFilter: "blur(10px)",
      padding: "2rem",
      position: "relative",
      overflow: "hidden",
    },
    contentArrowStyle: {
      borderRight: "7px solid rgba(255, 255, 255, 0.95)",
    },
    iconStyle: {
      background: "linear-gradient(135deg, #75aadb, #accce6)",
      color: "#fff",
      boxShadow: "0 4px 16px rgba(117, 170, 219, 0.4)",
    },
  };

  const renderTimelineElement = (experience) => {
    if (experience.isActive === false) return null;

    return (
      <VerticalTimelineElement
        key={experience.id}
        className="vertical-timeline-element--work enhanced-timeline-card"
        contentStyle={cardStyles.contentStyle}
        contentArrowStyle={cardStyles.contentArrowStyle}
        iconStyle={cardStyles.iconStyle}
        position={experience.position}
        icon={<MdWorkOutline />}
      >
        <div className="timeline-card-content">
          {/* Company Header */}
          <div className="company-header">
            <img
              className="company-logo"
              src={experience.logo}
              height={60}
              alt={experience.company}
            />
            <div className="company-info">
              <h3 className="role-title">{experience.role}</h3>
              <a
                href={experience.website}
                className="company-name"
                target="_blank"
                rel="noopener noreferrer"
              >
                {experience.company}
              </a>
            </div>
          </div>

          <div className="location-date">
            <span className="location">
              <MdLocationOn /> {experience.location}
            </span>
            <span className="duration">
              <MdDateRange /> {experience.duration}
            </span>
          </div>

          <div className="department">{experience.department}</div>

          {experience.achievements.length > 0 && (
            <div className="achievements">
              {experience.achievements.map((achievement, index) => (
                <div key={index} className="achievement-item">
                  <p>{achievement}</p>
                </div>
              ))}
            </div>
          )}

          {/* <div className="tech-stack">
            {experience.technologies.map((tech, index) => (
              <span key={index} className="tech-tag">
                {tech}
              </span>
            ))}
          </div> */}
        </div>
      </VerticalTimelineElement>
    );
  };

  const headerConfig = {
    title: "PROFESSIONAL TIMELINE",
    subtitle: "My journey through the tech industry",
  };

  return (
    <Container id="timeline" className="timeline-section">
      <div className="timeline-header">
        <h1 className="project-heading">{headerConfig.title}</h1>
        <p className="timeline-subtitle">{headerConfig.subtitle}</p>
      </div>

      <VerticalTimeline lineColor="#F5F5F5">
        {timelineData.map(renderTimelineElement)}
      </VerticalTimeline>

      <div className="timeline-stats">
        <div className="stat-item">
          <span className="stat-number">
            {timelineData.filter((exp) => exp.isActive !== false).length}
          </span>
          <span className="stat-label">Experiences</span>
        </div>
        {/* <div className="stat-item">
          <span className="stat-number">
            {
              [...new Set(timelineData.flatMap((exp) => exp.technologies))]
                .length
            }
          </span>
          <span className="stat-label">Technologies</span>
        </div> */}
        <div className="stat-item">
          <span className="stat-number">
            {[...new Set(timelineData.map((exp) => exp.location))].length}
          </span>
          <span className="stat-label">Cities</span>
        </div>
      </div>
    </Container>
  );
}

export default Timeline;
