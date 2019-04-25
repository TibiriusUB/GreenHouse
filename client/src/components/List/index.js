import React from "react";
import "./style.css";

// This file exports both the List and ListItem components
// This is a basic setup for any list needs, use List as a wrapper for an array of ListItems. 

export function List({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export function ListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}
