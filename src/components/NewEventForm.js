import "./NewEventForm.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";

export default function NewEventForm({ addEvent }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("Zurich");

  const resetForm = () => {
    setTitle("");
    setDate("");
    setLocation("Zürich");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const event = {
      title: title,
      date: date,
      location: location,
      id: Math.floor(Math.random() * 100000),
    };
    addEvent(event);
    resetForm();
  };

  return (
    <form className="new-event-form" onSubmit={handleSubmit}>
      <label>
        <span>Event Title:</span>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </label>
      <label>
        <span>Event Date:</span>
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </label>
      <label>
        <span>Event location: </span>
        <select onChange={(e) => setLocation(e.target.value)}>
          <option value="Zurich">Zürich</option>
          <option value="Basel">Basel</option>
          <option value="Bern">Bern</option>
        </select>
      </label>
      <button>Submit</button>
      <p>
        Title - <span className="user-data-input">{title}</span>
      </p>
      <p>
        Date - <span className="user-data-input">{date}</span>
      </p>
      <button className="refresh-btn" type="button" onClick={resetForm}>
        <FontAwesomeIcon className="form-reset-icon" icon={faRefresh} />
      </button>
    </form>
  );
}
