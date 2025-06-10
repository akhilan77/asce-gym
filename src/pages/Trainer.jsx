// src/pages/Trainer.jsx
import React from 'react';

const trainers = [
  {
    id: 1,
    name: "Rahul Mehra",
    specialization: "Strength Training",
    experience: "5 years",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Priya Sharma",
    specialization: "Zumba & Dance Fitness",
    experience: "4 years",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Ravi Kumar",
    specialization: "Cardio & CrossFit",
    experience: "6 years",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Anjali Verma",
    specialization: "Yoga & Meditation",
    experience: "7 years",
    image: "https://via.placeholder.com/150",
  },
];

function Trainer() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Meet Our Trainers</h2>
      <div className="row">
        {trainers.map((trainer) => (
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
        ))}
      </div>
    </div>
  );
}

export default Trainer;
