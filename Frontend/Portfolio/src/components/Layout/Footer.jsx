// Footer.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-light text-dark py-4 mt-auto border-top sticky-footer">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <p className="mb-2 mb-md-0 fw-semibold">
          © {new Date().getFullYear()} Ritwik Chawla. All rights reserved.
        </p>
        <div className="d-flex gap-3 fs-5">
          <a
            href="mailto:chawla.ritwik@gmail.com"
            className="text-dark"
            title="Email"
          >
            <FaEnvelope />
          </a>
          <a href="tel:+919993109026" className="text-dark" title="Phone">
            <FaPhone />
          </a>
          <a
            href="https://github.com/ritwikchawla"
            className="text-dark"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ritwikchawla/"
            className="text-dark"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
