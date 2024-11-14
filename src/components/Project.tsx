import React from "react";
import mock05 from "../assets/images/mock05.png";
import mock06 from "../assets/images/mock06.png";
import mock07 from "../assets/images/mock07.png";
import mock08 from "../assets/images/mock08.png";
import mock09 from "../assets/images/mock09.png";
import mock10 from "../assets/images/mock10.png";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a
            href="https://omniintelligence.online/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock10} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://omniintelligence.online/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Omni Intelligence</h2>
          </a>
          <p>
            “Omni Intelligence is a responsive, professional website built with
            React and Docusaurus, showcasing data-driven solutions and services.
            Designed for easy navigation and seamless user experience, it
            highlights the client’s expertise through an intuitive layout that’s
            both modern and accessible across devices.
          </p>
        </div>
        <div className="project">
          <a
            href="https://tracking-wallet.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock09} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://tracking-wallet.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Track Wallet</h2>
          </a>
          <p>
            TrackWallet is a comprehensive expense tracking app built as a PWA
            using React, TypeScript, and Express. It features Google OAuth
            authentication, monthly budgeting, recurring expense tracking, and a
            user-friendly interface. With a monorepo structure, it seamlessly
            integrates frontend and backend, offering a smooth and responsive
            experience across devices.
          </p>
        </div>
        <div className="project">
          <a
            href="https://cddlanding.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock08} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://cddlanding.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Cyber DDos</h2>
          </a>
          <p>
            Cyber DDoS is a global leader in DDoS protection and content
            delivery, offering robust, proprietary traffic scrubbing solutions
            through an extensive network of scrubbing centers. Built with a
            Django backend, the platform ensures over 99.5% uptime SLA,
            leveraging high-performance computing and advanced algorithms to
            protect against diverse and evolving cyber threats. My role involved
            developing a secure, scalable backend to support Cyber DDoS’s
            mission of delivering reliable, high-capacity protection.
          </p>
        </div>
        <div className="project">
          <a
            href="https://glu-stage.antino.io/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock07} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://glu-stage.antino.io/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>GLU</h2>
          </a>
          <p>
            GLU is an online school platform developed with React and Express,
            designed to facilitate seamless interaction between students and
            teachers. The application offers an intuitive interface for
            learning, teaching, and communication, creating a dynamic
            educational environment accessible from anywhere.
          </p>
        </div>
        <div className="project">
          <a
            href="https://www.smart-retina.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock06} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://www.smart-retina.com/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Smart Retina</h2>
          </a>
          <p>
            Smart Retina is a medical technology app developed with React and
            Django REST, offering fast, AI-driven eye screening that accurately
            diagnoses eye conditions without the need for a doctor. This
            innovative solution enhances accessibility and affordability in eye
            care, aligning with the company’s mission to make healthcare more
            accessible for all.
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/atikmahbub/dataCompression"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock05} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/atikmahbub/dataCompression"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Sensor Data Compression</h2>
          </a>
          <p>
            Improvisation of model-based Data Compression Technique (Piecewise
            Linear Algorithm) to get better performance by reducing data points
            project & thesis based on Python.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
