import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/nav/nav";
import Main from './components/pages/main-page/main-page';
import CurrentsValutes from './components/pages/currents-valutes/currents-values';
import "./css/reset.css";
import "./css/index.css";
function App() {
  return (
    <div className="App">
      <Router>
          <Nav /> 
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/currentsValutes" element={<CurrentsValutes />} />
          </Routes>
        </Router>
      
    </div>
  );
}

export default App;
