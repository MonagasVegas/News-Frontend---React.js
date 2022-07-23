import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "../Components/Dashboard";
import PaginationNews from "../Components/PaginationNews";

class routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/das" element={<PaginationNews />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
export default routes;
