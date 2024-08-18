import React from "react";
import "./Schedule.css";
import { GoDotFill } from "react-icons/go";
import { MdEvent } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

// eslint-disable-next-line react/prop-types
function DisplaySchedule({ venue, description, date, location }) {
  return (
    <React.Fragment>
      <div className="event_card">
        <div className="event_timeline">
          <GoDotFill className="timeline_dot" />
        </div>
        <div className="event_content">
          <h2>{venue}</h2>
          <p>{description}</p>
          <div className="event_details">
            <div className="details">
              <MdEvent />
              <p>{date}</p>
            </div>
            <div className="details">
              <FaLocationDot />
              <p>{location}</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

function Schedule() {
  const schedule = [
    {
      venue: "Muranga High School",
      description:
        "Muranga High we shall have leadership mentorship session and this sha;ll be made available through the help of the Muranga High Administration.",
      date: "29th August 2024",
      location: "Muranga, Kiharu",
    },
    {
      venue: "Muranga High School",
      description:
        "Muranga High we shall have leadership mentorship session and this sha;ll be made available through the help of the Muranga High Administration.",
      date: "29th August 2024",
      location: "Muranga, Kiharu",
    },
    {
      venue: "Muranga High School",
      description:
        "Muranga High we shall have leadership mentorship session and this sha;ll be made available through the help of the Muranga High Administration.",
      date: "29th August 2024",
      location: "Muranga, Kiharu",
    },
    {
      venue: "Muranga High School",
      description:
        "Muranga High we shall have leadership mentorship session and this sha;ll be made available through the help of the Muranga High Administration.",
      date: "29th August 2024",
      location: "Muranga, Kiharu",
    },
    {
      venue: "Muranga High School",
      description:
        "Muranga High we shall have leadership mentorship session and this sha;ll be made available through the help of the Muranga High Administration.",
      date: "29th August 2024",
      location: "Muranga, Kiharu",
    },
  ];
  return (
    <section className="schedule_section">
      <div className="schedule_container">
        <div className="schedule_header">
          <h1>Schedule</h1>
        </div>
        <div className="schedule_wrapper">
          <h1>Upcoming Events</h1>
          <p className="subtitle">We could be near you...</p>
          <div className="schedule_events">
            {schedule.map((currentSchedule) => (
              <DisplaySchedule
                key={currentSchedule.id}
                venue={currentSchedule.venue}
                description={currentSchedule.description}
                date={currentSchedule.date}
                location={currentSchedule.location}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Schedule;
