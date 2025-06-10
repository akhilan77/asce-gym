// src/components/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <div className="container text-center">
        <p className="mb-1">&copy; {new Date().getFullYear()} ASCE Gym. All Rights Reserved.</p>
        <p className="mb-0">
          <small>
            Contact us: <a href="mailto:info@ascegym.com" className="text-light text-decoration-underline">info@ascegym.com</a>
          </small>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
