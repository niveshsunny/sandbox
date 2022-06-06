//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
import React from "react";
import ReactDom from "react-dom";
const name = "Nivesh Reddy";
const date = new Date();
let year = date.getFullYear();

ReactDom.render(
  <div>
    <h1>Created by {name}</h1>
    <p>Copyright {year} </p>
  </div>,
  document.getElementById("root")
);
