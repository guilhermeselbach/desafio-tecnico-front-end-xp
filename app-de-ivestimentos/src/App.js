import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./Pages/Login";
import Investments from "./Pages/Investments";
import Count from "./Pages/Count";

function App() {

  return (
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace={false} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/investments" element={<Investments />} />
        <Route path="/conta" element={<Count />} />
      </Routes>
  );
}

export default App;
