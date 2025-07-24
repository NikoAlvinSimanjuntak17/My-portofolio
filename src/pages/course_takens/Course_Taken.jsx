import React from "react";
import { Container } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import Coursera from "../../assets/imgs/courses/CourseraCertificate.jpg";
import UdemyCertificate from "../../assets/imgs/courses/UdemyCertificate.jpg";
import Skylabcertificate from "../../assets/imgs/courses/Skylabcertificate.jpg";
import CS400 from "../../assets/imgs/courses/compsci400.png";
import CS240 from "../../assets/imgs/courses/compsci240.png";
import CS354 from "../../assets/imgs/courses/compsci354.png";
import CS577 from "../../assets/imgs/courses/compsci577.png";
import STAT240 from "../../assets/imgs/courses/stat240.png";
import CS537 from "../../assets/imgs/courses/compsci537.png";
import CS559 from "../../assets/imgs/courses/compsci559.gif";
import CS540 from "../../assets/imgs/courses/compsci540.png";
import CS320 from "../../assets/imgs/courses/compsci320.png";
import CS564 from "../../assets/imgs/courses/compsci564.png";
import CS579 from "../../assets/imgs/courses/compsci579.gif";
import CS506 from "../../assets/imgs/courses/compsci506.png";
import CS407 from "../../assets/imgs/courses/compsci407.png";
import CS571 from "../../assets/imgs/courses/compsci571.gif";
import STAT340 from "../../assets/imgs/courses/stat340.png";
import CS544 from "../../assets/imgs/courses/compsci544.png";
import UWMadison_CS from "../../assets/imgs/uw-madison_cs.png";
import ITDel from "../../assets/imgs/ITDEL.png";


function Course_Taken() {
  const courses = [
    {
      id: "CS252",
      image: Coursera,
      title: "Google Advanced Data Analytics",
      provider: "Google via Coursera",
      rating: 5,
      semester: "May 2025",
      workload: 4,
      description:
        "Completed a comprehensive data analytics training program by Google, covering foundational and advanced topics including data science principles, Python programming, statistical analysis, regression techniques, and introductory machine learning. Developed skills to translate data into actionable insights and completed a capstone project to demonstrate practical application.",
    },
    {
      id: "CS300",
      image: Skylabcertificate,
      title: "Artificial Intelligence and CyberSecurity Training Program",
      provider: "SKYLAB X ASIX",
      rating: 5,
      semester: "May 2025",
      workload: 3,
      description:
        "Participated in a specialized training program focused on foundational concepts and practical applications of Artificial Intelligence and Cybersecurity, including threat detection, data protection, and AI-based security systems.",
    },
    {
      id: "CS220",
      image: UdemyCertificate,
      title: "Udemy Ultimate AWS Certified Developer Associate 2025 DVA-C02",
      provider: "Udemy",
      rating: 3,
      semester: "March 2025",
      workload: 3,
      description:
        "Completed a 32.5-hour training course preparing for the AWS Certified Developer – Associate (DVA-C02) exam. The course covered core AWS services, deployment, development tools, security, and best practices for building and deploying scalable applications on AWS.",
    },
  ];

  const renderStars = (count) => {
    return Array.from({ length: count }, (_, i) => (
      <AiFillStar key={i} className="star" />
    ));
  };

  return (
    <Container fluid className="course-section">
      <div className="course-header">
        <h1 className="project-heading">COURSES TAKEN</h1>
      </div>

      <div className="university-section">
        <h2 className="university-title">Del Institute of Technology</h2>
        <div className="university-logo-container">
          <a
            href="https://cdis.wisc.edu/"
            target="_blank"
            rel="noopener noreferrer"
            className="university-logo-link"
          >
             <div className="university-badge">Associate Degree</div>
            <img
              src={ITDel}
              alt="Del Institute of Technology"
              className="university-logo"
              width={80}
              height={80}
            />
            <div className="university-logo-text">
              <h3 className="university-main-label">Associate Degree in Information Technology</h3>
              <p className="university-sub-label">Faculty of Vocational Studies</p>
            </div>
          </a>
        </div>


        <div className="courses-grid">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className="course-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="semester-badge">{course.semester}</div>
              <div className="course-content">
                <div className="course-image-container">
                  <img
                    src={course.image}
                    alt={course.id}
                    className="course-image"
                  />
                </div>
                <div className="course-details">
                  <h3 className="course-title">{course.title}</h3>

                  <div className="course-meta">
                    <div className="meta-item">
                      <span className="meta-label">Provider:</span>
                      <span>{course.provider}</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-label">Rating:</span>
                      <div className="rating-stars">
                        {renderStars(course.rating)}
                      </div>
                    </div>
                    <div className="meta-item">
                      <span className="meta-label">Workload:</span>
                      <div className="workload-stars">
                        {renderStars(course.workload)}
                      </div>
                    </div>
                  </div>

                  <div className="course-description">
                    {course.description
                      .split(/(\*\*[^*]+\*\*)/g)
                      .map((part) => {
                        return part;
                      })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Course_Taken;
