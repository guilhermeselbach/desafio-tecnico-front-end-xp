import React from "react";
import "@testing-library/jest-dom";
import renderWithRouter from "./renderWithRouter";
import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import Count from "../Pages/Count";
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
    render(<Count />);
  })
});

describe("2. Teste se renderiza os componentes", () => {
  test("2.1. Será validado se existe um `logo XP`", () => {
    render(<Count />);
    const logoXp = screen.getByTestId("logo");
    expect(logoXp).toBeInTheDocument();
  }),
  test("2.2. Será validado se existe um `nome de usuário na tela`", () => {
    render(<Count />);
    const userName = screen.getByTestId("userName");
    expect(userName).toBeInTheDocument();
  }),
  test("2.3. Será validado se existe um `H2 com texo Saldo em Conta:`", () => {
    render(<Count />);
    const saldoText = screen.getByTestId("saldoTexto");
    expect(saldoText).toBeInTheDocument();
    expect(saldoText).toHaveTextContent("Saldo em Conta:");
  }),
  test("2.5. Será validado se existe um `H2 com o valor da conta do usaurio`", () => {
    render(<Count />);
    const saldoValue = screen.getByTestId("saldoValor");
    expect(saldoValue).toBeInTheDocument();
    expect(saldoValue).toHaveTextContent("15300");
  })

  test("2.6. Será validado se existe um `botão com opção depositar`", () => {
    render(<Count />);
    const btnDeposit = screen.getByTestId("btnDeposit");
    expect(btnDeposit).toBeInTheDocument();
    expect(btnDeposit).toHaveTextContent("Depositar");
  }),
  test("2.7. Será validado se existe um `botao com opção retirar`", () => {
    render(<Count />);
    const btnWithdraw = screen.getByTestId("btnWithdraw");
    expect(btnWithdraw).toBeInTheDocument();
    expect(btnWithdraw).toHaveTextContent("Retirar");
  }),
  test("2.8. Será validado se existe um `input`", () => {
    render(<Count />);
    const inputValue = screen.getByTestId("inputValue");
    expect(inputValue).toBeInTheDocument();
  }),
  test("2.9. Será validado se existe um `botao para voltar`", () => {
    render(<Count />);
    const btnBack = screen.getByTestId("btnBack");
    expect(btnBack).toBeInTheDocument();
  }),
  test("2.10. Será validado se existe um `botao para confirmar`", () => {
    render(<Count />);
    const btnConfirm = screen.getByTestId("btnConfirm");
    expect(btnConfirm).toBeInTheDocument();
  });
});

describe("3. Teste se os botões de opção de 'Depositar ou Retirar' funcionam", () => {
  test("3.1. Será validado se o botão de opção de 'Depositar' funciona", () => {
    render(<Count />);
    const btnDeposit = screen.getByTestId("btnDeposit");
    expect(btnDeposit).toBeInTheDocument();
    userEvent.click(btnDeposit);
    expect(btnDeposit).toHaveClass("active");
  });

  test("3.2. Será validado se o botão de opção de 'Retirar' funciona", () => {
    render(<Count />);
    const btnWithdraw = screen.getByTestId("btnWithdraw");
    expect(btnWithdraw).toBeInTheDocument();
    userEvent.click(btnWithdraw);
    expect(btnWithdraw).toHaveClass("active");
  });
});

describe("4. Teste se o input funciona", () => {
  test("4.1. Será validado se o input funciona com valores numericos", () => {
    render(<Count />);
    const inputValue = screen.getByTestId("inputValue");
    expect(inputValue).toBeInTheDocument();
    userEvent.type(inputValue, "100");
    expect(inputValue).toHaveValue.toString("100");
  }),

  test("4.2. Será validado se o input não funciona com valores alfanumericos", () => {
    render(<Count />);
    const inputValue = screen.getByTestId("inputValue");
    expect(inputValue).toBeInTheDocument();
    userEvent.type(inputValue, "abc");
    expect(inputValue).toHaveValue(null);
  });
});

describe("5. Teste se o botão de voltar funciona", () => {
  test("5.1. Será validado se o botão de voltar funciona", () => {
    render(<Count />);
    const btnBack = screen.getByTestId("btnBack");
    expect(btnBack).toBeInTheDocument();
    userEvent.click(btnBack);
    expect(location.pathname).toBe("/investments");
  });
});

describe("6. Teste se o botão de confirmar funciona", () => {
  test("6.1. Será validado se o botão de confirmar funciona apos escolher uma opçao e informar um valor", () => {
    render(<Count />);
   
    const saldoValor = screen.getByTestId("saldoValor");
    const btnDeposit = screen.getByTestId("btnDeposit");
    const inputValue = screen.getByTestId("inputValue");
    const btnConfirm = screen.getByTestId("btnConfirm");
    
    expect(btnDeposit).toBeInTheDocument();
    expect(inputValue).toBeInTheDocument();
    expect(btnConfirm).toBeInTheDocument();
    
    userEvent.click(btnDeposit);
    expect(btnDeposit).toHaveClass("active");
    userEvent.type(inputValue, "100");

    userEvent.click(btnConfirm);

    
    expect(saldoValor).toHaveTextContent("R$: 15400");
    expect(window.alert).toBeTruthy();
  });
});