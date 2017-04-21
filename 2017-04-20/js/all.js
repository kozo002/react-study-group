import React from "react";
import ReactDOM from "react-dom";

import Hello from "./components/hello";

function init() {
  const mountNode = document.getElementById("app");
  const component = (
    <Hello initialName="unko">
      <p>this is children</p>
      <p>this is children</p>
    </Hello>
  );
  ReactDOM.render(component, mountNode);
}

document.addEventListener("DOMContentLoaded", init);
