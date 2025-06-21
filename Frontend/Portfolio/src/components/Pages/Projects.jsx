import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="py-5 bg-white">
      <div className="container">
        <h3 className="text-primary fw-bold mb-4">Projects</h3>

        <div className="mb-4">
          <h5 className="fw-semibold">Record My Care</h5>
          <p>
            A medical record system for secure management of prescriptions and
            vaccinations.
          </p>
          <p>
            <strong>Tech Stack:</strong> Django, ReactJS, MySQL, AWS, Postman
          </p>
          <p>
            <strong>Achievements:</strong> Winner – WCE Hackathon & Rakuten
            Hackathon
          </p>
        </div>

        <div className="mb-4">
          <h5 className="fw-semibold">Car Rental App</h5>
          <p>
            Platform for booking rental cars with secure OAuth authentication.
          </p>
          <p>
            <strong>Tech Stack:</strong> Django, DRF, ReactJS, MySQL, OAuth, MUI
          </p>
        </div>

        <div>
          <h5 className="fw-semibold">Connectopia</h5>
          <p>
            Social media app with JWT authentication and live updates using
            WebSockets.
          </p>
          <p>
            <strong>Tech Stack:</strong> Django, DRF, ReactJS, SQLite, CSS, MUI
            Icons
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
