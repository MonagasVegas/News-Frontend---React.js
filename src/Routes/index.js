import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "../Components/Dashboard";
import NewsLetters from "../Components/NewsLetters";

class routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/das" element={<NewsLetters />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
export default routes;
