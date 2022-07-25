import React from "react";
import "@testing-library/jest-dom";
import renderWithRouter from "./renderWithRouter";
import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import Investments from "../Pages/Investments";
import UserProvider from "../Context/UserProvider";
import ApiProvider from "../Context/ApiProvider";

const render = (component) => {
  return renderWithRouter(
    <UserProvider>
      <ApiProvider>
        {component}
      </ApiProvider>
    </UserProvider>
  );
};

describe("1. Teste o componente <Count.js />", () => {
  test("1.1. O componente <Count.js /> renderiza corretamente", () => {
    render(<Investments />);
  });
});

describe("2. Teste se renderiza os componentes", () => {
  test("2.1. Será validado se existe um `logo XP`", () => {
    render(<Investments />);
    const logoXp = screen.getByTestId("logo");
    expect(logoXp).toBeInTheDocument();
  }),
  test("2.2. Será validado se existe um `nome de usuário na tela`", () => {
    render(<Investments />);
    const userName = screen.getByTestId("userName");
    expect(userName).toBeInTheDocument();
  }),
  test("2.3. Será validado se existe um tag `p com texo Minhas ações`", () => {
    render(<Investments />);
    const myAct = screen.getByTestId("myActives");
    expect(myAct).toBeInTheDocument();
    expect(myAct).toHaveTextContent("Minhas Ações");
  }),
  test("2.4. Será validado se existe uma `Primeira tabaela com as infos dos ativos do usuario`", () => {
    render(<Investments />);
    const table = screen.getByTestId("firstTable");
    expect(table).toBeInTheDocument();
    expect(table).toHaveTextContent("Ação");
    expect(table).toHaveTextContent("Quantidade");
    expect(table).toHaveTextContent("Valor Und");
    expect(table).toHaveTextContent("Negociar");
  }),
  test("2.5. Será validado se existe uma `Segunda tabela com as infos dos ativos do mercado`", () => {
    render(<Investments />);
    const table = screen.getByTestId("secondTable");
    expect(table).toBeInTheDocument();
    expect(table).toHaveTextContent("Ação");
    expect(table).toHaveTextContent("Quantidade");
    expect(table).toHaveTextContent("Valor Und");
    expect(table).toHaveTextContent("Negociar");
  }),
  test("2.6. Será validado se existe uma `tabela com as infos dos ativos do que quer ser negociado`", () => {
    render(<Investments />);

    const buyButton = screen.getByTestId("btnC1");
    expect(buyButton).toBeInTheDocument();

    userEvent.click(buyButton);
    
    setTimeout(3000);

    const table = screen.getByTestId("modalTable");
    expect(table).toBeInTheDocument();
    expect(table).toHaveTextContent("Ação");
    expect(table).toHaveTextContent("Quantidade");
    expect(table).toHaveTextContent("Valor Und");
  }),
  test("2.7. Será validado se existe tem os `botao de compra e venda na primeira tabela e se abre o modal`", () => {
    render(<Investments />);
    const buyButton = screen.getByTestId("btnC1");
    expect(buyButton).toBeInTheDocument();

    const sellButton = screen.getByTestId("btnV1");
    expect(sellButton).toBeInTheDocument();
    
    
    userEvent.click(buyButton);

    setTimeout(3000);

    const modal = screen.getByTestId("modalTable");
    expect(modal).toBeInTheDocument();
  }),
  test("2.8. Será validado se existe tem os `botao de venda na primeira tabela e se abre o modal`", () => {
    render(<Investments />);
    const sellButton = screen.getByTestId("btnV1");
    expect(sellButton).toBeInTheDocument();

    userEvent.click(sellButton);

    setTimeout(3000);

    const modal = screen.getByTestId("modalTable");
    expect(modal).toBeInTheDocument();
  }),
  test("2.9. Será validado se existe tem os `botao de compra na segunda tabela e se abre o modal`", () => {
    render(<Investments />);
    setTimeout(() => {
      const buyButton = screen.getByTestId("btnc2");
      expect(buyButton).toBeInTheDocument();
      expect(buyButton).toBeDisabled();
    }
    , 30000);

    setTimeout(() => {
      const modal = screen.getByTestId("modalTable");
      expect(modal).toBeInTheDocument();
      expect(modal).toBeDisabled();
    }
    , 30000);
  }),
  test("2.10. Será validado se existe tem os `botao de venda na segunda tabela está bloqueado`", () => {
    render(<Investments />);

    setTimeout(() => {
      const sellButton = screen.getByTestId("btnV2");
      expect(sellButton).toBeInTheDocument();
      expect(sellButton).toBeDisabled();
    }
    , 30000);
  }),
  test("2.11. Será validado se existe tem o `botao de Gerenciar conta e se ele te encaminha para /conta`", () => {
    render(<Investments />);
    
    const manageAccount = screen.getByTestId("btnAdmCount");
    expect(manageAccount).toBeInTheDocument();

    userEvent.click(manageAccount);
    expect(window.location.pathname).toBe("/conta");
  });
});