import React from "react";
import Button from "../Button";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <div className="header-wraper">
        <h1>Where in the World?</h1>
        <Button />
      </div>
    </header>
  );
}
