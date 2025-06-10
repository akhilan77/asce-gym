// src/pages/Schedule.jsx
import React from 'react';

const schedule = [
  {
    day: 'Monday',
    sessions: [
      { time: '6:00 AM - 7:00 AM', activity: 'Yoga', trainer: 'Anjali' },
      { time: '7:30 AM - 8:30 AM', activity: 'HIIT', trainer: 'Rahul' },
      { time: '6:00 PM - 7:00 PM', activity: 'Zumba', trainer: 'Priya' },
    ],
  },
  {
    day: 'Tuesday',
    sessions: [
      { time: '6:00 AM - 7:00 AM', activity: 'Cardio Blast', trainer: 'Ravi' },
      { time: '7:00 PM - 8:00 PM', activity: 'Strength Training', trainer: 'Megha' },
    ],
  },
  {
    day: 'Wednesday',
    sessions: [
      { time: '7:00 AM - 8:00 AM', activity: 'Pilates', trainer: 'Sneha' },
      { time: '6:30 PM - 7:30 PM', activity: 'Kickboxing', trainer: 'Arjun' },
    ],
  },
  {
    day: 'Thursday',
    sessions: [
      { time: '6:00 AM - 7:00 AM', activity: 'Yoga', trainer: 'Anjali' },
      { time: '7:00 PM - 8:00 PM', activity: 'Weight Lifting', trainer: 'Rahul' },
    ],
  },
  {
    day: 'Friday',
    sessions: [
      { time: '6:00 PM - 7:00 PM', activity: 'CrossFit', trainer: 'Neeraj' },
      { time: '7:30 PM - 8:30 PM', activity: 'Dance Fitness', trainer: 'Priya' },
    ],
  },
  {
    day: 'Saturday',
    sessions: [
      { time: '8:00 AM - 9:00 AM', activity: 'Meditation', trainer: 'Anjali' },
      { time: '6:00 PM - 7:00 PM', activity: 'Core Workout', trainer: 'Ravi' },
    ],
  },
];

function Schedule() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Weekly Class Schedule</h2>
      <div className="accordion" id="scheduleAccordion">
        {schedule.map((daySchedule, index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header" id={`heading${index}`}>
              <button
                className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
                aria-expanded={index === 0 ? 'true' : 'false'}
                aria-controls={`collapse${index}`}
              >
                {daySchedule.day}
              </button>
            </h2>
            <div
              id={`collapse${index}`}
              className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
              aria-labelledby={`heading${index}`}
              data-bs-parent="#scheduleAccordion"
            >
              <div className="accordion-body">
                <ul className="list-group">
                  {daySchedule.sessions.map((session, i) => (
                    <li className="list-group-item d-flex justify-content-between align-items-center" key={i}>
                      <span>
                        <strong>{session.time}</strong> - {session.activity}
                      </span>
                      <span className="badge bg-primary">{session.trainer}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Schedule;
