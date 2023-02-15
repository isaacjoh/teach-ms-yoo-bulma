import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

document.addEventListener("DOMContentLoaded", function () {
  var $navbarMenu = document.querySelector(".navbar-menu");
  var $navbarBurger = document.querySelector(".navbar-burger");

  var $body = document.querySelector("body");
  $body.addEventListener("click", function () {
    $navbarMenu.classList.remove("is-active");
    $navbarBurger.classList.remove("is-active");
  });

  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener("click", function (e) {
        $navbarMenu.classList.toggle("is-active");
        $el.classList.toggle("is-active");
        e.stopPropagation();
      });
    });
  }
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
