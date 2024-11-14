import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faDocker } from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsFirst = [
  "React",
  "Redux",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "SASS",
  "Material-UI (MUI)",
  "Express",
  "Node.js",
  "Firebase",
  "SQL",
  "MySQL",
  "PostgreSQL",
  "Postman",
  "REST APIs",
  "Jest",
];

const labelsSecond = [
  "Git",
  "GitHub Actions",
  "CI/CD",
  "Docker",
  "AWS",
  "Azure",
  "Linux",
  "Terraform",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Full Stack Web Development</h3>
            <p>
              I have built a diverse array of web applications from scratch
              using modern technologies like React and Express. I possess strong
              proficiency in the Software Development Life Cycle (SDLC) and in
              both frontend and backend development.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faDocker} size="3x" />
            <h3>DevOps & Automation</h3>
            <p>
              After building the application, I assist clients in setting up
              DevOps testing, CI/CD pipelines, and deployment automation for a
              successful Go-Live.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
