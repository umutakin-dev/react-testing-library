import React from "react";
import "./Header.css";

export default function Header({ title }) {
  return (
    <React.Fragment>
      <h1 className="header" data-testid="header-one">{title}</h1>
      <h3 title="Header" className="header">Cats</h3>
    </React.Fragment>
  );
}
