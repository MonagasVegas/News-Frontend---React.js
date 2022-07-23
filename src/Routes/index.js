import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "../Components/Dashboard";
import CustomizedSelects from '../Components/CustomizedSelects';

class routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/das" element={<CustomizedSelects />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
export default routes;
