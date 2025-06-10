// src/pages/Contact.jsx
import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your message has been sent!');
    // Here, you can POST data to your Node.js backend using fetch/axios
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="container mt-5 mb-5">
      <h2 className="mb-4 text-center">Contact Us</h2>
      <div className="row">
        {/* Contact Info */}
        <div className="col-md-5 mb-4">
          <h5>ASCE Gym Headquarters</h5>
          <p>🏢 123 Fitness Avenue, Wellness City</p>
          <p>📞 +91 98765 43210</p>
          <p>📧 info@ascegym.com</p>
          <p>🕒 Mon - Sat: 6 AM to 10 PM</p>
        </div>

        {/* Contact Form */}
        <div className="col-md-7">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Subject</label>
              <input type="text" name="subject" className="form-control" value={formData.subject} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea name="message" rows="4" className="form-control" value={formData.message} onChange={handleChange} required />
            </div>
            <button type="submit" className="btn btn-primary w-100">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
