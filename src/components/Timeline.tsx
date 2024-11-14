import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="July,2022 - present"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Software Engineer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Snickerdoodle Labs, USA (Remote)
            </h4>
            <p>
              Frontend Engineer at Snickerdoodle Labs, a Web3 company, creating
              user-friendly interfaces for decentralized apps. Focused on API
              integration and backend support with React, TypeScript, Express,
              and Moleculer.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="February,2022 - June,2022"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Software Engineer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Hypernet Labs, USA (Remote)
            </h4>
            <p>
              Frontend Engineer at Hypernet Labs, a Web3 company, focused on
              building intuitive interfaces for decentralized apps. Collaborated
              with backend teams to improve API integration and data flow using
              React, TypeScript, and blockchain principles.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="February,2021 - December,2021"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">React Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Antino Labs, India (Remote)
            </h4>
            <p>
              Worked as a React Developer at Antino Labs, building responsive
              web apps with reusable components and collaborating with teams to
              deliver seamless user interfaces using Redux, React Router, and
              REST APIs
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="November, 2019 - 2021"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Full Stack Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Smart Retina, Dhaka, Bangladesh
            </h4>
            <p>
              Worked as a Full Stack Developer at Smart Retina, focusing on
              React for frontend and Django REST Framework for backend.
              Developed end-to-end features, creating responsive interfaces and
              robust APIs for seamless user experiences.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
