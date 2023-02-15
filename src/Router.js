import React from "react";

import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import Resume from "./Resume";
import Instructions from "./Instructions";
import BlendedLearning from "./BlendedLearning";
import Workshop from "./Workshop";
import CGIMath from "./CGIMath";

const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/resume" element={<Resume />} />
    <Route path="/instructions" element={<Instructions />} />
    <Route path="/blended-learning" element={<BlendedLearning />} />
    <Route path="/workshop" element={<Workshop />} />
    <Route path="/cgi-math" element={<CGIMath />} />
  </Routes>
);
export default Router;
