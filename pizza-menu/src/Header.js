import React from "react";

export function Header() {
  /*
  const styleHeader = {
    color: "Blue",
    fontSize: "40px",
    textTransform: "uppercase",
  }; */
  const styleHeader = {};

  return (
    <header className="header">
      <h1 style={styleHeader}>Connex Co.</h1>
    </header>
  );
}
