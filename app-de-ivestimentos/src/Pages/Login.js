import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../Context/UserContext";
import { addUserToStorage } from "../Services/localStorage";
import logo1 from "../Assets/logo1.jpeg";
import "../Css/LoginStyle.css";

function Login() {
  const {
    email,
    setEmail,
    setPassword,
    password,
    isBtnDisabled,
    setIsBtnDisabled,
  } = useContext(UserContext);

  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    setIsBtnDisabled(true);
    const user = email.split("@")[0];
    addUserToStorage(email);
    setEmail(user);
    navigate("/investments");
  };

  return (
    <div className="container">

      <div className="loginContainer">
        <div className="wrapLogin">
          <form className="loginForm" onSubmit={handleClick}>


            <span className="loginTitle">
              <img src={logo1} alt="logo da empresa Xp.inc" />
            </span>
            <span id="bemVindo" className="loginTitle">Bem Vindo!</span>

            <span className="loginSubtitle">Para continuar, digite seu e-mail e senha</span>

            <div className="wrap-input">
              <input
                data-testid="email"
                className={email !== "" ? "has-val input" : "input"}
                type="email"
                onChange={ ({ target }) => setEmail(target.value) }
              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input">
              <input
                data-testid="password"
                className={password !== "" ? "has-val input" : "input"}
                type="password"
                onChange={ ({ target }) => setPassword(target.value) }
              />
              <span className="focus-input" data-placeholder="Senha"></span>
            </div>
         
            <div className="container-login-form-btn">
              <button
                data-testid="loginBtn"
                className="login-form-btn"
                type="submit"
                onClick={ () => handleClick }
                disabled={ isBtnDisabled }
              >
                Login
              </button>
            </div>
            <div className="text-center">
              <span className="loginSubtitle1">Ainda não possui conta?</span>
              <a className="loginSubtitle2" href="https://cadastro.xpi.com.br/desktop/step/1">Criar conta.</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;