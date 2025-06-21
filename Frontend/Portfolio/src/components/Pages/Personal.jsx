// PersonalInfo.jsx
import React from "react";

const Personal = () => {
  return (
    <section id="personal-info" className="py-5 bg-white">
      <div className="container">
        <h2 className="text-center text-primary fw-bold mb-4">Ritwik Chawla</h2>
        <p className="text-center text-muted mb-5">
          Software Development Engineer
        </p>

        <div className="row mb-4">
          <div className="col-md-6 mb-3">
            <h5 className="fw-semibold">Phone</h5>
            <p>+91-9993109026</p>
          </div>
          <div className="col-md-6 mb-3">
            <h5 className="fw-semibold">Email</h5>
            <p>chawla.ritwik@gmail.com</p>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-6 mb-3">
            <h5 className="fw-semibold">GitHub</h5>
            <a
              href="https://github.com/ritwikchawla"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/ritwikchawla
            </a>
          </div>
          <div className="col-md-6 mb-3">
            <h5 className="fw-semibold">LinkedIn</h5>
            <a
              href="https://www.linkedin.com/in/ritwikchawla/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/ritwikchawla
            </a>
          </div>
        </div>

        <div className="mb-4">
          <h4 className="fw-bold text-secondary">Education</h4>
          <p className="mb-1">
            <strong>VIT University, Bhopal</strong> (2019 - 2023)
          </p>
          <p>B.Tech in CSE with AI & ML | GPA: 8.03 / 10.00</p>
        </div>

        <div className="mb-4">
          <h4 className="fw-bold text-secondary">Technical Skills</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              Languages: JavaScript, Python, SQL
            </li>
            <li className="list-group-item">
              Frontend: ReactJS, HTML5, CSS3 (Bootstrap, Tailwind)
            </li>
            <li className="list-group-item">
              Backend & Databases: Django, PostgreSQL, MySQL
            </li>
            <li className="list-group-item">
              Tools: Git/GitHub, Postman, Figma, Confluence Blasmiq
            </li>
            <li className="list-group-item">
              Other: Agile, LEAN, MDM, DLP, OOPs, DBMS, SCRUM
            </li>
          </ul>
        </div>

        <div>
          <h4 className="fw-bold text-secondary">Certificates</h4>
          <ul className="list-unstyled mb-0">
            <li>Front End Development Externship – ProGrad, 2022</li>
            <li>Web Developer Course – Coursera (John Hopkins), 2021</li>
            <li>Master in Programming in C – Udemy, 2021</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Personal;
