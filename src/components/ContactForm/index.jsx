import React, { useState } from "react";
import "./index.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  function handleChange(e) {
    e.preventDefault();

    const key = e.target.name;
    const value = e.target.value;

    if (key && value) {
      setFormData({
        ...formData,
        [key]: value
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { name, email, message } = formData;
    if (name && email && message) {
      console.log("sending form...", formData);
    }
  }
  return (
    <div className="form-content">
      <form>
        <div className="group">
          <label htmlFor="name" className="label">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="input"
            onChange={handleChange}
          />
        </div>
        <div className="group">
          <label htmlFor="email" className="label">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="input"
            onChange={handleChange}
          />
        </div>
        <div className="group">
          <label htmlFor="message" className="label">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="input"
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <button className="button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
