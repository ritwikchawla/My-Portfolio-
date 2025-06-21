import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="py-5 bg-light">
      <div className="container">
        <h3 className="text-primary fw-bold mb-4">Professional Experience</h3>

        {/* Logical Softech */}
        <div className="mb-4">
          <h5 className="fw-semibold">
            Trainee Fullstack Developer – Logical Softech Pvt. Ltd. (Jul '24 –
            Present)
          </h5>
          <ul>
            <li>
              Developed responsive ReactJS + Django apps (pet care, social
              media, civil portal).
            </li>
            <li>
              Integrated Formik + Yup for smooth validation & optimized UI
              performance.
            </li>
            <li>
              Worked with REST APIs (DRF, Postman, Axios); improved rendering
              time by 20%.
            </li>
          </ul>
        </div>

        {/* Jio Financial */}
        <div className="mb-4">
          <h5 className="fw-semibold">
            Software Development Engineer – Jio Financial Services (Dec '23 –
            Jun '24)
          </h5>
          <ul>
            <li>
              Led scalable loan platform in ReactJS + Django; improved
              engagement by 25%.
            </li>
            <li>Implemented MDM & DLP to secure 2,000+ mobile devices.</li>
            <li>
              Built secure intranet for 10,000+ employees with Google SSO & DRF
              APIs.
            </li>
          </ul>
        </div>

        {/* GE Vernova */}
        <div>
          <h5 className="fw-semibold">
            Intern IT - Software Developer – GE Vernova (Jan '23 – Jul '23)
          </h5>
          <ul>
            <li>
              Reverse engineered legacy systems to reduce downtime by 40%.
            </li>
            <li>Deployed apps on AWS AppStream; reduced ops cost by 15%.</li>
            <li>Managed CI/CD, built UI in ReactJS, and led Git repos.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
