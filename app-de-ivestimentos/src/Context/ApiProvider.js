import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ApiContext from "./ApiContext";
import { fetchActives } from "../Services/requestApi";


function ApiProvider({ children }) {
  const [actives, setActives] = useState([]);
  const [activeValue, setActiveValue] = useState([]);
  const [activesQtd, setActivesQtd] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  

  const getActives = async () => {
    const allActives = await fetchActives();
    setActives(allActives);
    allActives.map((active) => {
      return setActivesQtd(prevState => [...prevState, active.qtd_teorica]);
    });
  };
  useEffect(() => {
    getActives();
    setIsLoading(false);
}, [actives, activesQtd]);

  const state = {
    actives,
    setActives,
    activeValue,
    setActiveValue,
    isLoading,
    setIsLoading,
    activesQtd,
    setActivesQtd,
  };

  return (
    <ApiContext.Provider value={state}>
      {children}
    </ApiContext.Provider>
  );

}

ApiProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ApiProvider;