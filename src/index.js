// Require the REACT and REACTDOM modules
import React from "react";
import ReactDOM from "react-dom";

// Example Data
const fname = "Ben";
const lname = "Chan";

// What to show, Where to show it
// {TEMPLATE LITERALS} EXPRESSIONS IS EQUAL TO A VALUE
ReactDOM.render(
  <div>
    <h1>
      Hello {fname} {lname}!
    </h1>
    <h2>Goodbye {`${fname} ${lname}`}</h2>
    <p>Your lucky number is {3 + 4}</p>
  </div>,
  document.getElementById("root")
);
