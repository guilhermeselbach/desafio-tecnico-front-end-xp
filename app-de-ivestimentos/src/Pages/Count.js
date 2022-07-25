import  React from "react";
import { useContext, useEffect, useState  } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../Context/UserContext";
import logo from "../Assets/logo.webp";

import { Img, Input, DivButtonsFoot, DivHeader, Div, H3, DivSaldo, H2, DivButtons, Button, DivInput, ButtonConfirm, ButtonBack, DivWrap } from "../StyleComponets/CountStyled";

function Count() {
  const { email, userMoney, setUserMoney } = useContext(UserContext);
  const [moneyValue, setMoneyValue] = useState(0);
  const [isDepositOrWithdraw, setIsDepositOrWithdraw] = useState("deposit");

  const navigate = useNavigate();

  useEffect(() => {
    const inputOfMoney = document.getElementById("inputMoney");
    inputOfMoney.value = "";
  }, [userMoney]);

  const handleChooseButton = ({ target }) => {
    const btnDeposit = document.getElementById("btnDeposit");
    const btnWithdraw = document.getElementById("btnWithdraw");
    if (target.id === "btnDeposit") {
      setIsDepositOrWithdraw("deposit");
      btnDeposit.classList.add("active");
      btnDeposit.style.backgroundColor = "#00a8ff";
      btnWithdraw.classList.remove("active");
      btnWithdraw.style.backgroundColor = "#fff";
    }
    if (target.id === "btnWithdraw") {
      setIsDepositOrWithdraw("withdraw");
      btnDeposit.classList.remove("active");
      btnDeposit.style.backgroundColor = "#fff";
      btnWithdraw.classList.add("active");
      btnWithdraw.style.backgroundColor = "#00a8ff";
    }
  };

  const handleConfirmBtn = () => {
    if (isDepositOrWithdraw === "withdraw" && moneyValue > userMoney) {
      alert("Saldo insuficiente");
    } else if (isDepositOrWithdraw === "deposit" && moneyValue > 0) {
      setUserMoney(Number(userMoney) + Number(moneyValue));
      setMoneyValue(0);
      alert("Depositado com sucesso!");
    } else if (isDepositOrWithdraw === "withdraw" && moneyValue > 0) {
      setUserMoney(Number(userMoney) - Number(moneyValue));
      setMoneyValue(0);
      alert("Retirado com sucesso!");
    };
  };


  return (
    <Div>
      <DivWrap>

      <DivHeader>
      <Img data-testid="logo" src={logo} alt="logo da empresa Xp.inc" />;
      <H3 data-testid="userName">{email ? email : "Usuário"}</H3>
      </DivHeader>

      <DivSaldo>
        <H2 data-testid="saldoTexto">Saldo em Conta:</H2><H2 data-testid="saldoValor">R$: {userMoney}</H2>
      </DivSaldo>

      <DivButtons>
      <Button
        data-testid="btnDeposit"
        id="btnDeposit"
        onClick={ (e) => handleChooseButton(e) }
      >
       Depositar
      </Button>

      <Button
        data-testid="btnWithdraw"
        id="btnWithdraw"
        className="btnWithdraw"
        type="button"
        value="Retirar"
        onClick={ (e) => handleChooseButton(e) }
      >
        Retirar
      </Button>
      </DivButtons>

      <br />
      <DivInput>
        <Input
          data-testid="inputValue"
          id="inputMoney"
          typeof="number"
          type="number"
          placeholder="Informe o Valor"
          onChange={ ({ target }) => setMoneyValue(target.value) }
        />
      </DivInput>
      <br />

      <DivButtonsFoot>
        <ButtonBack
          data-testid="btnBack"
          className="btnBack"
          type="button"
          value="Voltar"
          onClick={() => { navigate("/investments"); } }
          >
          Voltar
        </ButtonBack>
        <ButtonConfirm
          data-testid="btnConfirm"
          className="btnConfirm"
          type="button"
          value="Confirmar"
          onClick={handleConfirmBtn}
         >
          Confirmar
        </ButtonConfirm>
      </DivButtonsFoot>
      </DivWrap>
    </Div>
  );
}

export default Count;