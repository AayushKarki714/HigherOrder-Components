import React, { Component } from "react";
import withFetch from "./withFetch";

const API = "https://firestore-673ce-default-rtdb.firebaseio.com/sales.json";

export class SaleList extends Component {
  render() {
    return (
      <div>
        <h1>Sales List</h1>
        {this.props.data.map(sale => (
          <li key={sale.id}>{sale.username}</li>
        ))}
      </div>
    );
  }
}

export default withFetch(SaleList, API);
