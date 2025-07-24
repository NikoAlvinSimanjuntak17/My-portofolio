import React from "react";
import { Col, Row } from "react-bootstrap";
import { Tooltip } from "react-tooltip";

import Figma from "../../../../assets/imgs/techstack/figma.png";
import Canva from "../../../../assets/imgs/techstack/canva.png";

const other = [
  { src: Figma, alt: "Figma", tooltipContent: "Figma" },
  { src: Canva, alt: "Canva", tooltipContent: "Canva" },
];

function OtherStack() {
  return (
    <Row
      style={{ justifyContent: "center", paddingBottom: "50px" }}
      className="stagger-children"
    >
      {other.map((os) => (
        <Col key={os.alt} xs={4} md={2} className="tech-icons">
          <img
            src={os.src}
            width={100}
            alt={os.alt}
            className="tech-icon-images"
            data-tooltip-id="other-tech-tooltip"
            data-tooltip-content={os.tooltipContent}
          />
        </Col>
      ))}
      <Tooltip id="other-tech-tooltip" />
    </Row>
  );
}

export default OtherStack;
