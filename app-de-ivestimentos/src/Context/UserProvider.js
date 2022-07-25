import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import UserContext from "./UserContext";

const EMAIL_REGEX = /^\S+@\S+\.\S+$/;
const PASS_MIN_LENGTH = 6;

function UserProvider({ children }) {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  const [userMoney, setUserMoney] = useState(15300);
  const [userActives, setUserActives] = useState([{
    id: 1000,
    Acao: "XPBR31",
    Qtd: 250,
    Valor: "102.00",
  }]);
  useEffect(() => {
    if (password.length > PASS_MIN_LENGTH && EMAIL_REGEX.test(email)) {
      setIsBtnDisabled(false);
    } else {
      setIsBtnDisabled(true);
    }
  }, [email, password], [userActives]);

  

  const state = {
    email,
    setEmail,
    password,
    setPassword,
    isBtnDisabled,
    setIsBtnDisabled,
    userMoney,
    setUserMoney,
    userActives,
    setUserActives,
  };

  return (
    <UserContext.Provider value={state}>
      {children}
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserProvider;