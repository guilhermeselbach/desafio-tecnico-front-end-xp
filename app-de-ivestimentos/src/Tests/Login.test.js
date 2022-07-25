import React from "react";
import "@testing-library/jest-dom";
import renderWithRouter from "./renderWithRouter";
import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import Login from "../Pages/Login";
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

describe("1. Verifica o componente <Login.js />", () => {
  test("1.1. O componente <Login.js /> renderiza corretamente", () => {
    render(<Login />);
  });
});

describe("2. Verifica se renderiza os componentes", () => {
  test("2.2. Será validado se existe um `input de email`", () => {
    render(<Login />);
    const inputEmail = screen.getByTestId("email");
    expect(inputEmail).toBeInTheDocument();
  });

  test("2.3. Será validado se existe um `input de password`", () => {
    render(<Login />);
    const inputPassword = screen.getByTestId("password");
    expect(inputPassword).toBeInTheDocument();
  });

  test("2.4. Será validado se existe um `botao de login`", () => {
    render(<Login />);
    const submitButton = screen.getByTestId("loginBtn");
    expect(submitButton).toBeInTheDocument();
  });
});

describe("2 - Verificar se é possível escrever no input de email", () => {
  test("2.1. Será validado se é possível escrever no input de email", () => {
    render(<Login />);
    const inputEmail = screen.getByTestId("email");
    userEvent.type(inputEmail, "teste1@teste.com");
    expect(inputEmail).toHaveValue("teste1@teste.com");
  });
});

describe("3 - Verificar se é possível escrever no input de senha", () => {
  it("3.1. Será validado se é possível escrever no input de senha", () => {
    render(<Login />);
    const inputPassword = screen.getByTestId("password");
    userEvent.type(inputPassword, "12345678");
    expect(inputPassword).toHaveValue("12345678");
  });
});

describe("4 - Verificar se o botão está desativado ao renderizar a tela Login", () => {
  it("4.1. Será validado se o botão será ativado após preenchimento dos campos", () => {
    render(<Login />);
    const inputEmail = screen.getByTestId("email");
    const inputPassword = screen.getByTestId("password");
    const submitButton = screen.getByTestId("loginBtn");

    expect(submitButton).toBeDisabled();
    userEvent.type(inputEmail, "teste@teste");
    expect(submitButton).toBeDisabled();
    userEvent.type(inputEmail, "teste@teste.com");
    userEvent.type(inputPassword, "1234567");
    expect(submitButton).not.toBeDisabled();
  });
});