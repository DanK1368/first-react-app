import "./App.css";
import { useState } from "react";
import Title from "./components/Title";
import Modal from "./components/Modal";
import EventList from "./components/EventList";
import NewEventForm from "./components/NewEventForm";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    setEvents((prevEvents) => {
      return [...prevEvents, event];
    });
    setShowModal(false);
  };

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id;
      });
    });
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const subtitle = "What's Happening??";

  return (
    <div className="App">
      <Title title="Events in your area" subtitle={subtitle} />
      {showEvents && (
        <>
          <button onClick={() => setShowEvents(false)}>Hide Events</button>
        </>
      )}
      {!showEvents && (
        <>
          <button onClick={() => setShowEvents(true)}>Show Events</button>
        </>
      )}
      {showEvents && <EventList events={events} handleClick={handleClick} />}

      <div>
        <button onClick={() => setShowModal(true)}>Add New Event</button>
      </div>
      {showModal && (
        <Modal handleClose={handleClose} isSalesModal={true}>
          <NewEventForm addEvent={addEvent} />
        </Modal>
      )}
    </div>
  );
}

export default App;
