import React from "react";

//does what it says on the box

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 100, clear: "both", paddingTop: 60, textAlign: "center" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
