// src/pages/Trainer.jsx

/**
 * 📄 Trainer Page
 * -------------------------
 * This page fetches and displays a list of gym trainers from the backend API.
 * Each trainer card shows their name, specialization, years of experience, and a profile image.
 * Data is loaded dynamically using Axios from: http://localhost:5000/api/trainers
 */

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Trainer() {
  const [trainers, setTrainers] = useState([]);

  // Fetch trainer data from backend on component mount
  useEffect(() => {
    axios
      .get('http://localhost:5000/api/trainers')
      .then((response) => {
        setTrainers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching trainers:', error);
      });
  }, []);

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Meet Our Trainers</h2>
      <div className="row">
        {trainers.length > 0 ? (
          trainers.map((trainer) => (
            <div className="col-md-3 mb-4" key={trainer.id}>
              <div className="card h-100 text-center shadow">
                <img
                  src={trainer.image}
                  className="card-img-top"
                  alt={trainer.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{trainer.name}</h5>
                  <p className="card-text text-muted">{trainer.specialization}</p>
                  <p className="card-text">Experience: {trainer.experience}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 text-center">
            <p>No trainers available at the moment.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Trainer;
