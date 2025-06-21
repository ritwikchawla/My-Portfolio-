import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="py-5 bg-white">
      <div className="container">
        <h3 className="text-primary fw-bold mb-4">Technical Skills</h3>
        <div className="row">
          <div className="col-md-6 mb-3">
            <h5>Languages & Frameworks</h5>
            <ul>
              <li>JavaScript, Python, SQL</li>
              <li>Django, FastAPI, ReactJS</li>
            </ul>
          </div>
          <div className="col-md-6 mb-3">
            <h5>Frontend & Backend</h5>
            <ul>
              <li>HTML5, CSS3, Bootstrap, Tailwind</li>
              <li>PostgreSQL, MySQL, REST APIs</li>
            </ul>
          </div>
          <div className="col-md-6 mb-3">
            <h5>Tools & Platforms</h5>
            <ul>
              <li>Git/GitHub, Postman, Figma, Confluence</li>
              <li>Tableau, Power BI, Google Sheets, Excel</li>
            </ul>
          </div>
          <div className="col-md-6 mb-3">
            <h5>Other Skills</h5>
            <ul>
              <li>Agile, SCRUM, OOPs, SOLID, MDM, DLP</li>
              <li>Problem Solving, Communication</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
