import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { IoLogoGithub } from "react-icons/io";
import Particle from "../../../../components/Particle";
import ProjectCard from "../../../projects/ProjectCards";

// Import project images and assets
import Andaliman from "../../../../assets/imgs/projects/proyek-andaliman.png";
import Baak from "../../../../assets/imgs/projects/baak.png";
import SIPTA from "../../../../assets/imgs/projects/SIPTA.png";
import TSTH from "../../../../assets/imgs/projects/tsth.png";
import FesesDetection from "../../../../assets/imgs/projects/fesesdetection.png";
import minimarket from "../../../../assets/imgs/projects/minimarket.png";
import Portofolio from "../../../../assets/imgs/projects/portofolio.png";


function Projects() {
  const projectsData = [
    {
      id: "Andaliman",
      imgPath: Andaliman,
      title: "Development of Pizza-Andaliman Online Marketplace with Midtrans Payment Gateway",
      ghLink: "https://github.com/NikoAlvinSimanjuntak17/PA2-Kel3",
      
    },
    {
      id: "Baak",
      imgPath: Baak,
      title: "Office of Academic Affairs and Student Services App",
      ghLink: "https://github.com/NikoAlvinSimanjuntak17/proyek-pam",
    },
    {
      id: "SIPTA",
      imgPath: SIPTA,
      title: "Inventory Management System with Stock In/Out and Item Transfer Features",
      ghLink: "https://github.com/NikoAlvinSimanjuntak17/SIPTA",
    },
    {
      id: "TSTH",
      imgPath: TSTH,
      title: "Development of an Event Management and Research data Marketplace Information System for TSTH2 Research Center",
      ghLink: "https://github.com/NikoAlvinSimanjuntak17/research-center",
    },
    {
      id: "Minimarket",
      imgPath: minimarket,
      title: "Minimarket POS and Inventory Application with Sales and Stock Reporting",
      ghLink: "https://github.com/NikoAlvinSimanjuntak17/JavaFX",
    },
    {
      id: "FesesDetection",
      imgPath: FesesDetection,
      title: "Application for Disease Detection from Fecal Images Using Machine Learning with Accuracy Evaluation",
      ghLink: "https://github.com/NikoAlvinSimanjuntak17/FesesDetection",
    },
    {
      id: "Portofolio",
      imgPath: Portofolio,
      title: " Build Personal Portfolio Web includes sections for Skills, Projects, Resume, and more, with responsive layout and animations.",
      ghLink: "https://github.com/NikoAlvinSimanjuntak17/FesesDetection",
    },

  ];

  const githubSection = {
    title: "To visit more of my projects",
    buttonText: "Visit My GitHub",
    url: "https://github.com/NikoAlvinSimanjuntak17/",
  };

  const renderProjectCard = (project, index) => (
    <Col md={4} className="project-card" key={project.id}>
      <ProjectCard
        imgPath={project.imgPath}
        isBlog={false}
        title={project.title}
        ghLink={project.ghLink}
        demoLinks={project.demoLinks}
        demoName={project.demoName}
        demoLinkIsVideo={project.demoLinkIsVideo}
        animationDelay={`${index * 0.1}s`}
      />
    </Col>
  );

  const renderGitHubSection = () => (
    <div className="github-section text-center mt-5">
      <h2 className="github-title">{githubSection.title}</h2>
      <a
        href={githubSection.url}
        className="btn btn-xl btn-dark github-btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        {githubSection.buttonText} &nbsp; <IoLogoGithub />
      </a>
    </div>
  );

  return (
    <Container fluid className="project-section" id="projects">
      <Container>
        <div className="project-header">
          <h1 className="project-heading">
            MY PROJECTS
            <span className="project-count">({projectsData.length})</span>
          </h1>
          <p className="project-subtitle">
            A showcase of my technical projects and creative solutions
          </p>
        </div>

        <Particle />

        <Row className="project-grid">
          {projectsData.map((project, index) =>
            renderProjectCard(project, index),
          )}
        </Row>

        {renderGitHubSection()}
      </Container>
    </Container>
  );
}

export default Projects;
