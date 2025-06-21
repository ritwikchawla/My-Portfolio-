import axios from "axios";
import React, { useState } from "react";
import { data } from "react-router-dom";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://127.0.0.1:8000/contact/", {
        name,
        email,
        message,
      });
      console.log(res.data);
    } catch (error) {
      console.log("Cannot Post :", error);
    }
  };

  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <h3 className="text-primary fw-bold mb-4">Contact Me</h3>
        <form className="row g-3">
          <div className="col-md-6">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="col-12">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="4"
              value={message}
              required
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="col-12 text-end">
            <button
              type="submit"
              className="btn btn-primary px-4"
              onClick={handleSend}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
