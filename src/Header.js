import React from "react";

function Header() {
  let name = "Smith";
  return (
    <header className="header">
      <h1>John{` ${name}`}</h1>
    </header>
  );
}

export default Header;
