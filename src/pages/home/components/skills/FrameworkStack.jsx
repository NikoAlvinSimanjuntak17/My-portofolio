import React from "react";
import { Col, Row } from "react-bootstrap";
import { Tooltip } from "react-tooltip";

import React_Image from "../../../../assets/imgs/techstack/react.png";
import Vue from "../../../../assets/imgs/techstack/vue.png";
import Codeigniter from "../../../../assets/imgs/techstack/codeigniter.png";
import Nodejs from "../../../../assets/imgs/techstack/nodejs.png";
import Laravel from "../../../../assets/imgs/techstack/laravel.png";
import Django from "../../../../assets/imgs/techstack/django.png";

const frameworks = [
  { src: React_Image, alt: "React", tooltipContent: "React" },
  { src: Laravel, alt: "Laravel", tooltipContent: "Laravel" },
  { src: Nodejs, alt: "Node.js", tooltipContent: "Node.js" },
  { src: Codeigniter, alt: "Codeigniter", tooltipContent: "Codeigniter" },
  // { src: Vue, alt: "Vue", tooltipContent: "Vue" },
  // { src: Django, alt: "Django", tooltipContent: "Django" },
];

function FrameworkStack() {
  return (
    <Row
      style={{ justifyContent: "center", paddingBottom: "50px" }}
      className="stagger-children"
    >
      {frameworks.map((fw) => (
        <Col key={fw.alt} xs={4} md={2} className="tech-icons">
          <img
            src={fw.src}
            width={100}
            alt={fw.alt}
            className="tech-icon-images"
            data-tooltip-id="framework-tech-tooltip"
            data-tooltip-content={fw.tooltipContent}
          />
        </Col>
      ))}
      <Tooltip id="framework-tech-tooltip" />
    </Row>
  );
}

export default FrameworkStack;
