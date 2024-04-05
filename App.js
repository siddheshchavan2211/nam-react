import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  {
    className: "heading",
  },
  "Siddhesh"
);
const heading2 = React.createElement(
  "h2",
  {
    className: "heading",
  },
  "chavan"
);
const container = React.createElement(
  "div",
  {
    className: "root",
  },
  [heading, heading2]
);

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(container);
