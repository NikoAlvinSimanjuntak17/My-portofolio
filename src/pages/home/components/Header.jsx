import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Type from "./Type";
import BackgroundImage from "../../../assets/imgs/coding.png";

function Header() {
  return (
    <div
      className="header-section"
      style={{
        position: "relative",
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: 1,
      }}
    >
    <div className="header-overlay" />

      <Container className="home-content" style={{ position: "relative", zIndex: 2 }}>
        <Row>
          <Col md={7} className="home-header">
            <h1 style={{ paddingBottom: 15 }} className="heading">
              Hell0{" "}
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏻
              </span>
            </h1>

            <h1 className="heading-name">
              I'M
              <strong className="main-name"> Niko Alvin Simanjuntak</strong>
            </h1>

            <div style={{ padding: 50, textAlign: "left" }}>
              <Type />
            </div>
          </Col>

          <Col md={5} className="home-logo">
            {/* Kosongkan karena gambar sudah jadi background */}
          </Col>
        </Row>
      </Container>
    </div>
    
  );
}

export default Header;
