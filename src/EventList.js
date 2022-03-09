import React, { Component } from "react";
import withFetch from "./withFetch";

const API = "https://firestore-673ce-default-rtdb.firebaseio.com/events.json";

export class EventList extends Component {
  render() {
    return (
      <div>
        <h1>Event List</h1>
        {this.props.data.map(event => (
          <li key={event.id}>{event.title}</li>
        ))}
      </div>
    );
  }
}

export default withFetch(EventList, API);
