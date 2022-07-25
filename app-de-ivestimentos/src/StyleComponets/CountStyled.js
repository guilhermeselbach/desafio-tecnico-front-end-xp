import styled from "styled-components";

export const Div = styled.div`
  width: 100%;
  min-width: 100vh;
  height: 100vh;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  padding: 15px;
  background-color: rgb(1, 1, 1);
`;

export const DivWrap = styled.div`
  justify-content: center;
  width: 80%;
  background-color: rgb(20, 20, 20);
  border-radius: 10px;
  overflow: hidden;
   padding: 100px 35px 33px 35px;
  box-shadow: 5px 5px 10px 5px rgba(187, 2, 249, 0.2);
  align-items: center;
  margin-bottom: 100px;
`;

export const H3 = styled.h3`
  display: box;
  font-size: 20px;
  line-height: 1.2;
  text-align: center;
  color: azure;
  width: 20%;
  padding: 5px 5px;
  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  background: -webkit-linear-gradient(to left,  #b721ff, #21d4fd);
  background: -o-linear-gradient(to left,  #b721ff, #21d4fd);
  background: -moz-linear-gradient(to left,  #b721ff, #21d4fd);
  background: linear-gradient(to left,  #b721ff, #21d4fd);
  border-radius: 15px;
  box-shadow: 5px 5px 10px 5px rgba(187, 2, 249, 0.2);
  justify-items: center;
  margin-bottom: 40px;
`;

export const DivSaldo = styled.div`
  display: flex;
  color: azure;
  width: 90%;
  height: auto;
  flex-direction: row;
  justify-content: space-around;
  border: 2px solid #000;
  border-radius: 5px;
  margin-top: 30px;
  margin-left: 50px;
  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  background: -webkit-linear-gradient(to left,  #b721ff, #21d4fd);
  background: -o-linear-gradient(to left,  #b721ff, #21d4fd);
  background: -moz-linear-gradient(to left,  #b721ff, #21d4fd);
  background: linear-gradient(to left,  #b721ff, #21d4fd);
  border-radius: 10px;
  box-shadow: 5px 5px 10px 5px rgba(187, 2, 249, 0.2);
`;

export const H2 = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  width: 100%;
  text-align: center;
  justify-content: space-around;
`;

export const DivButtons = styled.div`
  display: flex;
  width: 50%;
  height: auto;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-left: 25%;
  //margin-top: 20px;
`;


export const Button = styled.button`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 10px;
  display: flex;
  width: 150px;
  text-align: center;
  justify-content: space-around;
  align-items: center;
  border: 2px solid #000;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 5px 5px 50px 5px rgba(187, 2, 249, 0.2);
  border-radius: 5px;
  cursor: pointer;
  &:hover {
  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  background: -webkit-linear-gradient(to left,  #b721ff, #21d4fd);
  background: -o-linear-gradient(to left,  #b721ff, #21d4fd);
  background: -moz-linear-gradient(to left,  #b721ff, #21d4fd);
  background: linear-gradient(to left,  #b721ff, #21d4fd);
  border-radius: 15px;
  box-shadow: 0px 0px 5px 3px #21d4fd;
  }
  &:active {
    box-shadow: inset 0px 0px 0px 0px #21d4fd;
    color: linear-gradient(to left,  #b721ff, #21d4fd);
  }
`;

export const DivInput = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const Input = styled.input`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 30px;
  display: flex;
  width: 480px;
  text-align: center;
  justify-content: center;
  align-items: center;
  border: 2px solid #000;
  border-radius: 10px;
  padding: 5px;
  box-shadow: 5px 5px 100px 5px #21d4fd;
`;

export const ButtonConfirm = styled.button`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  width: 150px;
  text-align: center;
  justify-content: center;
  align-items: center;
  border: 2px solid #000;
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;
  &:hover {
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    background: -webkit-linear-gradient(to left,  #b721ff, #21d4fd);
    background: -o-linear-gradient(to left,  #b721ff, #21d4fd);
    background: -moz-linear-gradient(to left,  #b721ff, #21d4fd);
    background: linear-gradient(to left,  #b721ff, #21d4fd);
    border-radius: 15px;
    box-shadow: 0px 0px 5px 3px #21d4fd;

  }
  &:active {
    box-shadow: inset 0px 0px 0px 0px #21d4fd;
    color: linear-gradient(to left,  #b721ff, #21d4fd);
  }
`;

export const ButtonBack = styled.button`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  width: 150px;
  text-align: center;
  justify-content: center;
  align-items: center;
  border: 2px solid #000;
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;
  &:hover {
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    background: -webkit-linear-gradient(to left,  #b721ff, #21d4fd);
    background: -o-linear-gradient(to left,  #b721ff, #21d4fd);
    background: -moz-linear-gradient(to left,  #b721ff, #21d4fd);
    background: linear-gradient(to left,  #b721ff, #21d4fd);
    border-radius: 15px;
    box-shadow: 0px 0px 5px 3px #21d4fd;

  }
  &:active {
    box-shadow: inset 0px 0px 0px 0px #21d4fd;
    color: linear-gradient(to left,  #b721ff, #21d4fd);
  }
`;

export const Img = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  box-shadow: 2px 2px 50px 2px #21d4fd;
`;

export const DivHeader = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 70px;
`;

export const DivButtonsFoot = styled.div`
  display: flex;
  width: 50%;
  height: auto;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 25%;
  margin-top: 130px;
`;