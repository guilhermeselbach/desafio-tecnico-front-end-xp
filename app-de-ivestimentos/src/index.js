import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import UserProvider from "./Context/UserProvider";
import ApiProvider from "./Context/ApiProvider";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApiProvider>
    <UserProvider>
      <Router>
        <App />
      </Router>
    </UserProvider>
    </ApiProvider>
  </React.StrictMode>
);
