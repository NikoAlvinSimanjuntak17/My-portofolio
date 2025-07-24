import React, { useState, useCallback } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { motion } from "motion/react";
import Tilt from "react-parallax-tilt";
import { Document, Page } from "react-pdf";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import BadgerCS from "../../../../assets/imgs/niko.png";
import UWMadisonDiploma from "../../../../assets/diploma/UW-Madison Diploma.pdf";
import UWMadisonDiplomaPreview from "../../../../assets/diploma/UW-Madison Diploma Preview.png";

function AboutMe() {
  const [pdfState, setPdfState] = useState({
    numPages: null,
    currentPage: 1,
  });

  const [modalState, setModalState] = useState({
    showDiplomaModal: false,
    isPreviewVisible: false,
  });

const config = {
  title: "ABOUT ME",
  universities: {
    uwMadison: {
      name: "University of Wisconsin - Madison",
      color: "#C5050C",
      diploma: UWMadisonDiploma,
      preview: UWMadisonDiplomaPreview,
      modalTitle: "My UW-Madison Diploma",
    },
  },
  aboutText: {
    simple:
<p>
  I am a Computer Science graduate from{" "}
  <a href="https://www.del.ac.id/" target="_blank" rel="noopener noreferrer">
    Institut Teknologi Del
  </a>
  , highly enthusiastic and dedicated to achieving impactful results. I possess strong skills in software development, data analysis, and technology-driven problem solving. With a solid background in organizational activities, I have developed excellent communication and teamwork abilities, allowing me to contribute effectively in both individual and group-based projects. I am eager to continue learning and growing through new challenges and opportunities. My goal is to leverage my skills as a Software Developer to build applications that make a meaningful difference in the world.
</p>
  },
};


  const onDocumentLoadSuccess = useCallback(({ numPages }) => {
    setPdfState((prev) => ({ ...prev, numPages }));
  }, []);

  const goToPreviousPage = useCallback(() => {
    setPdfState((prev) => ({
      ...prev,
      currentPage: Math.max(1, prev.currentPage - 1),
    }));
  }, []);

  const goToNextPage = useCallback(() => {
    setPdfState((prev) => ({
      ...prev,
      currentPage: Math.min(prev.numPages || 1, prev.currentPage + 1),
    }));
  }, []);

  const showPreview = useCallback(() => {
    setModalState((prev) => ({ ...prev, isPreviewVisible: true }));
  }, []);

  const hidePreview = useCallback(() => {
    setModalState((prev) => ({ ...prev, isPreviewVisible: false }));
  }, []);

  const openModal = useCallback(() => {
    setModalState((prev) => ({ ...prev, showDiplomaModal: true }));
    setPdfState((prev) => ({ ...prev, currentPage: 1 }));
  }, []);

  const closeModal = useCallback(() => {
    setModalState((prev) => ({ ...prev, showDiplomaModal: false }));
  }, []);

  const renderUniversityLink = (university) => (
    <span
      className="university-link-container"
      style={{ position: "relative", display: "inline-block" }}
    >
      <span
        onMouseEnter={showPreview}
        onMouseLeave={hidePreview}
        onClick={openModal}
        className="university-link"
        style={{
          textDecoration: "underline",
          cursor: "pointer",
          color: university.color,
          fontWeight: "bold",
        }}
      >
        {university.name}
      </span>
      {modalState.isPreviewVisible && (
        <div
          className="diploma-preview"
          style={{
            position: "absolute",
            top: "100%",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 1000,
            backgroundColor: "white",
            border: "2px solid #ddd",
            borderRadius: "8px",
            padding: "10px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            maxWidth: "300px",
            marginTop: "10px",
          }}
          onMouseEnter={showPreview}
          onMouseLeave={hidePreview}
        >
          <img
            src={university.preview}
            alt="Diploma Preview"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "4px",
            }}
          />
          <p
            style={{
              textAlign: "center",
              margin: "8px 0 0 0",
              fontSize: "12px",
              color: "#666",
            }}
          >
            Click to view full diploma
          </p>
        </div>
      )}
    </span>
  );

  const getAboutTextWithLink = () => (
    <>
      I am a student majoring in Information Technology, highly enthusiastic 
      and dedicated to my goals. I possess skills in software development, 
      data analysis, and other technology- related problem- solving. I have 
      strong communication skills and can work effectively on projects involving 
      both individuals and groups, thanks to my organizational experience. 
      I am eager to seek new experiences and knowledge through various programs and activities. 
      I graduated from {renderUniversityLink(config.universities.uwMadison)} with
      a degree in Computer Science. I would like to utilize my skills as a
      Software Developer to create applications that create an impact in the
      world.
    </>
  );

  const animations = {
    container: {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.6 },
    },
    title: {
      initial: { opacity: 0, x: -20 },
      whileInView: { opacity: 1, x: 0 },
      viewport: { once: true },
      transition: { duration: 0.5, delay: 0.2 },
    },
    text: {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.5, delay: 0.4 },
    },
    avatar: {
      initial: { opacity: 0, scale: 0.9 },
      whileInView: { opacity: 1, scale: 1 },
      viewport: { once: true },
      transition: { duration: 0.5, delay: 0.6 },
    },
  };

  const renderPdfNavigation = () => (
    <div className="pdf-viewer-container">
      {pdfState.currentPage > 1 && (
        <AiOutlineLeft
          className="pdf-nav-arrow left-arrow"
          onClick={goToPreviousPage}
          role="button"
          aria-label="Previous page"
        />
      )}

      <Document
        file={config.universities.uwMadison.diploma}
        onLoadSuccess={onDocumentLoadSuccess}
        loading={<div className="pdf-loading">Loading diploma...</div>}
        error={<div className="pdf-error">Failed to load diploma</div>}
      >
        <Page
          pageNumber={pdfState.currentPage}
          renderTextLayer={false}
          renderAnnotationLayer={false}
        />
      </Document>

      {pdfState.currentPage < pdfState.numPages && (
        <AiOutlineRight
          className="pdf-nav-arrow right-arrow"
          onClick={goToNextPage}
          role="button"
          aria-label="Next page"
        />
      )}

      {pdfState.numPages && (
        <div className="pdf-page-info">
          Page {pdfState.currentPage} of {pdfState.numPages}
        </div>
      )}
    </div>
  );

  const renderDiplomaModal = () => (
    <Modal
      show={modalState.showDiplomaModal}
      onHide={closeModal}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>{config.universities.uwMadison.modalTitle}</Modal.Title>
      </Modal.Header>

      <Modal.Body>{renderPdfNavigation()}</Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );

  const renderAboutContent = () => (
    <Col md={8} className="home-about-description">
      <motion.h1 {...animations.title} style={{ fontSize: "2.6em" }}>
        {config.title}
      </motion.h1>

      <motion.p {...animations.text} className="home-about-body">
        {config.aboutText.simple}
        {/* {getAboutTextWithLink()} */}
        <br />
      </motion.p>
    </Col>
  );

  const renderAvatar = () => (
    <Col md={4} className="myAvatar">
      <motion.div {...animations.avatar}>
        <Tilt>
          <img src={BadgerCS} alt="Badger CS Avatar" className="img-fluid" style={{ maxHeight: "300px"}}/>
        </Tilt>
      </motion.div>
    </Col>
  );

  return (
    <motion.div {...animations.container}>
      <Container fluid className="home-about-section" id="about_me">
        <Container>
          <Row>
            {renderAboutContent()}
            {renderAvatar()}
          </Row>
        </Container>
      </Container>

      {renderDiplomaModal()}
    </motion.div>
  );
}

export default AboutMe;
