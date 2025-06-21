// Home.jsx
import React from "react";

const Home = () => {
  return (
    <section id="personal-info" className="py-5 bg-white">
      <div className="container">
        <h1 className="text-center text-primary fw-bold mb-4">
          Hi, I'm Ritwik Chawla
        </h1>
        <p className="lead text-center mb-5">
          B.Tech graduate in CSE with AI & ML specialization from VIT University
          (2023). I specialize in full-stack development and data analytics.
        </p>

        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h3 className="fw-semibold mb-3">What I Bring to the Table</h3>
            <ul className="list-group list-group-flush mb-4">
              <li className="list-group-item">
                Expertise in <strong>Python</strong>,{" "}
                <strong>Django/FastAPI</strong>, and <strong>REST API</strong>{" "}
                development.
              </li>
              <li className="list-group-item">
                Proficient in <strong>SQL (MySQL, PostgreSQL)</strong> for data
                management and backend integration.
              </li>
              <li className="list-group-item">
                Full-stack development with <strong>ReactJS</strong>, HTML/CSS,
                and JavaScript.
              </li>
              <li className="list-group-item">
                Skilled in data analysis using{" "}
                <strong>Pandas, NumPy, Matplotlib</strong>.
              </li>
              <li className="list-group-item">
                Comfortable with analytics tools:{" "}
                <strong>Excel, Google Sheets, Tableau, Power BI</strong>.
              </li>
              <li className="list-group-item">
                1+ year of hands-on experience at a top NBFC and global MNC
                (GE).
              </li>
            </ul>

            <h4 className="fw-medium">Availability</h4>
            <p>Open to relocation and available for immediate joining.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
