import React from "react";
import styles from "./EventList.module.css";

export default function EventList({ events, handleClick }) {
  return (
    <div>
      {events.map((event, index) => (
        <div className={styles.card} key={event.id}>
          <h2>
            {index + 1}. - {event.title}
          </h2>
          <p>Date: {event.date}</p>
          <p>Location: {event.location}</p>
          <button onClick={() => handleClick(event.id)}>delete event</button>
        </div>
      ))}
    </div>
  );
}
