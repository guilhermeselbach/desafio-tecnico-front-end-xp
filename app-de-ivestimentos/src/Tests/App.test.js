import React from "react";
import App from "../App";
import renderWithRouter from "./renderWithRouter";
import UserProvider from "../Context/UserProvider";
import ApiProvider from "../Context/ApiProvider";

// ESTOU TENDO PRBLEMAS COM O ROUTER
// RETORNA O SEGUINTE ERRO:
// he above error occurred in the <Router> component:
//at Router (/Users/guils/Documents/Projeto XP/packages/react-router/lib/components.tsx:173:13)
// 
// O ROUTER ESTA FUNCIONANDO CORRETAMENTE
// MAS O TESTE DE RENDERIZACAO ESTA DANDO ERRO
//
// POR CAUSA DO ERRO, TIVE QUE DEIXAR OS TESTES, POIS NAO CONSIGO TESTAR OS COMPONENTES

describe('1. Teste o componente <App.js />', () => {
  test("1.1. O componente <App.js /> renderiza corretamente", () => {
    renderWithRouter(
      <UserProvider>
        <ApiProvider>
          <App />
        </ApiProvider>
      </UserProvider>
    );
  });
});