// src/pages/Blog.jsx
import React from 'react';

const blogPosts = [
  {
    id: 1,
    title: "Top 5 Tips to Stay Fit",
    date: "June 1, 2025",
    summary: "Discover effective tips to maintain your fitness and energy levels, even with a busy schedule.",
  },
  {
    id: 2,
    title: "Benefits of Group Workouts",
    date: "May 25, 2025",
    summary: "Learn how group classes can boost your motivation and overall gym experience.",
  },
  {
    id: 3,
    title: "Beginner's Guide to Strength Training",
    date: "May 18, 2025",
    summary: "A helpful guide for those starting their journey into weight training.",
  },
];

function Blog() {
  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Fitness Blog</h2>
      <div className="row">
        {blogPosts.map((post) => (
          <div className="col-md-4 mb-4" key={post.id}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{post.date}</h6>
                <p className="card-text">{post.summary}</p>
                <a href="#" className="card-link text-primary">Read More</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
