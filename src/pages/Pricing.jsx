// src/pages/Pricing.jsx
import React from 'react';

const plans = [
  {
    name: "Basic",
    price: "₹999/month",
    features: ["Gym Access", "1 Personal Training Session", "Locker Access"],
    highlight: false,
  },
  {
    name: "Standard",
    price: "₹1,499/month",
    features: ["Gym + Cardio Access", "5 Personal Training Sessions", "Locker & Shower Access", "Diet Plan"],
    highlight: true,
  },
  {
    name: "Premium",
    price: "₹2,499/month",
    features: ["All Access Pass", "Unlimited Personal Training", "Dedicated Coach", "Custom Diet + Wellness Plan"],
    highlight: false,
  },
];

function Pricing() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Membership Pricing</h2>
      <div className="row justify-content-center">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`col-md-4 mb-4 ${plan.highlight ? 'border border-primary rounded shadow-lg' : ''}`}
          >
            <div className="card h-100 text-center">
              <div className={`card-header ${plan.highlight ? 'bg-primary text-white' : 'bg-light'}`}>
                <h4 className="my-2">{plan.name}</h4>
              </div>
              <div className="card-body">
                <h5 className="card-title">{plan.price}</h5>
                <ul className="list-unstyled">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="mb-2">✅ {feature}</li>
                  ))}
                </ul>
              </div>
              <div className="card-footer">
                <button className={`btn ${plan.highlight ? 'btn-light text-primary' : 'btn-primary'} w-100`}>
                  Choose {plan.name}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pricing;
