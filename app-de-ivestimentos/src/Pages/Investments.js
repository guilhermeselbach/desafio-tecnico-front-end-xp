import React, { useContext } from "react";
import ApiContext from "../Context/ApiContext";
import InvestmentsTable from "../Components/InvestmentsTable";


function Investments() {
  const { isLoading } = useContext(ApiContext);


  return (
    isLoading ? <h1>Carregando...</h1> : <InvestmentsTable />
  );
}

export default Investments;