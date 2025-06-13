import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section text-white position-relative">
        <div className="bg-dark position-absolute top-0 start-0 w-100 h-100 opacity-75"></div>
        <div className="container-fluid">
          <div className="row min-vh-75 align-items-center">
            <div className="col-lg-6 col-md-8 ps-md-5 p-4 position-relative">
              <h1 className="display-3 fw-bold mb-4">Transform Your Body, Transform Your Life</h1>
              <p className="lead mb-4">
                At ASCE Gym, we're committed to helping you achieve your fitness goals with expert trainers and personalized plans.
              </p>
              <div className="d-flex gap-3">
                <Link to="/register" className="btn btn-primary btn-lg">Join Now</Link>
                <Link to="/contact" className="btn btn-outline-light btn-lg">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Showcase */}
      <section className="py-5">
        <div className="container-fluid">
          <h2 className="text-center mb-5">Our World-Class Facilities</h2>
          <div className="row g-4 justify-content-center">
            {[
              {
                title: "Weight Training",
                desc: "State-of-the-art equipment for strength and resistance training.",
                img: "https://images.unsplash.com/photo-1744551612249-655d096b9f95?q=80&w=1974&auto=format&fit=crop"
              },
              {
                title: "Cardio Zone",
                desc: "Latest treadmills, ellipticals, and bikes for effective cardio workouts.",
                img: "https://plus.unsplash.com/premium_photo-1664475922946-d01445240652?q=80&w=1974&auto=format&fit=crop"
              },
              {
                title: "Yoga Studio",
                desc: "Peaceful space for yoga, pilates, and mindfulness practices.",
                img: "https://plus.unsplash.com/premium_photo-1661683706979-c349c21f79c8?q=80&w=1932&auto=format&fit=crop"
              },
            ].map((facility, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card h-100 border-0 shadow-sm">
                  <img src={facility.img} className="card-img-top" alt={facility.title} />
                  <div className="card-body text-center">
                    <h3 className="h5">{facility.title}</h3>
                    <p className="card-text">{facility.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-5 bg-light">
        <div className="container-fluid">
          <h2 className="text-center mb-5">Why Choose ASCE Gym?</h2>
          <div className="row g-4 justify-content-center">
            {[
              {
                icon: "bi bi-person-check-fill",
                title: "Expert Trainers",
                desc: "Our certified trainers create personalized workout plans tailored to your specific goals and fitness level."
              },
              {
                icon: "bi bi-gear-fill",
                title: "Modern Equipment",
                desc: "Access state-of-the-art fitness equipment and facilities designed for optimal performance and results."
              },
              {
                icon: "bi bi-calendar-check",
                title: "Flexible Classes",
                desc: "Choose from a variety of classes scheduled throughout the day to fit your busy lifestyle."
              },
            ].map((feature, index) => (
              <div key={index} className="col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center p-4">
                    <div className="feature-icon bg-primary text-white rounded-circle mb-3 mx-auto fs-3">
                      <i className={feature.icon}></i>
                    </div>
                    <h3 className="h4 mb-3">{feature.title}</h3>
                    <p className="card-text">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Trainers */}
      <section className="py-5">
        <div className="container-fluid">
          <h2 className="text-center mb-5">Meet Our Expert Trainers</h2>
          <div className="row g-4 justify-content-center">
            {[
              {
                name: "Rahul Sharma",
                area: "Strength & Conditioning",
                exp: "8 years",
                img: "https://plus.unsplash.com/premium_photo-1663050901483-ee8703cc8372?q=80&w=2070&auto=format&fit=crop"
              },
              {
                name: "Priya Patel",
                area: "Yoga & Pilates",
                exp: "6 years",
                img: "https://images.unsplash.com/photo-1589860518300-9eac95f784d9?q=80&w=2070&auto=format&fit=crop"
              },
              {
                name: "Arjun Singh",
                area: "CrossFit & HIIT",
                exp: "5 years",
                img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop"
              },
              {
                name: "Anjali Mehta",
                area: "Nutrition & Wellness",
                exp: "7 years",
                img: "https://images.unsplash.com/photo-1606902965551-dce093cda6e7?q=80&w=1974&auto=format&fit=crop"
              },
            ].map((trainer, index) => (
              <div key={index} className="col-lg-3 col-md-6 mb-4">
                <div className="card h-100 border-0 shadow-sm text-center">
                  <img src={trainer.img} className="card-img-top" alt={trainer.name} />
                  <div className="card-body">
                    <h5 className="card-title">{trainer.name}</h5>
                    <p className="card-text text-muted">{trainer.area}</p>
                    <p className="card-text">Experience: {trainer.exp}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link to="/trainers" className="btn btn-outline-primary">View All Trainers</Link>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-5 bg-light">
        <div className="container-fluid">
          <h2 className="text-center mb-5">Our Programs</h2>
          <div className="row g-4 justify-content-center">
            {[
              {
                title: "Personal Training",
                desc: "One-on-one sessions with our expert trainers to accelerate your fitness journey with personalized attention.",
                link: "/pricing",
                img: "https://plus.unsplash.com/premium_photo-1672862927484-cfc92dd88081?q=80&w=2070&auto=format&fit=crop"
              },
              {
                title: "Group Classes",
                desc: "Energetic group sessions including HIIT, yoga, spinning, and more for motivation and community.",
                link: "/schedule",
                img: "https://plus.unsplash.com/premium_photo-1661670892906-b1cffa07584d?q=80&w=2070&auto=format&fit=crop"
              },
              {
                title: "Nutrition Coaching",
                desc: "Expert guidance on nutrition and diet planning to complement your fitness routine and maximize results.",
                link: "/pricing",
                img: "https://plus.unsplash.com/premium_photo-1661393458386-4101ce49c82f?q=80&w=2070&auto=format&fit=crop"
              },
            ].map((program, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100 border-0 shadow-sm">
                  <img src={program.img} className="card-img-top" alt={program.title} />
                  <div className="card-body text-center">
                    <h3 className="h4 mb-3">{program.title}</h3>
                    <p className="card-text">{program.desc}</p>
                    <Link to={program.link} className="btn btn-sm btn-outline-primary">View Details</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-primary text-white">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <h2 className="mb-4">Ready to Start Your Fitness Journey?</h2>
              <p className="lead mb-4">Join ASCE Gym today and take the first step towards a healthier, stronger you.</p>
              <Link to="/register" className="btn btn-light btn-lg px-4">Sign Up Now</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
