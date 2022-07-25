import React from "react";
import { createMemoryHistory } from "history";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";

const renderWithRouter = (comp) => {
  const history = createMemoryHistory();
  return ({
    ...render(<Router history={ history }>{comp}</Router>), history,
  });
};

export default renderWithRouter;
