// Require the REACT and REACTDOM modules
import React from "react";
import ReactDOM from "react-dom";

// Example Data
const name = "Ben";

// What to show, Where to show it
// {TEMPLATE LITERALS} EXPRESSIONS IS EQUAL TO A VALUE
ReactDOM.render(
  <div>
    <h1>Hello {name}!</h1>
    <p>Your lucky number is {3 + 4}</p>
  </div>,
  document.getElementById("root")
);
