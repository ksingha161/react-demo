import React from "react";

function Main() {
  return (
    <main>
      <input type="checkbox" name="Learn" id="learn" value="Learn" />
      <label for="checkbox">I am learning react</label>
      <br />
      <input type="checkbox" name="Code" id="code" value="Code" />
      <label for="checkbox">I am coding react</label>
      <br />
      <input type="checkbox" name="Deploy" id="deploy" value="Deploy" />
      <label for="checkbox">I am deploying react</label>
      <br></br>
    </main>
  );
}

export default Main;
