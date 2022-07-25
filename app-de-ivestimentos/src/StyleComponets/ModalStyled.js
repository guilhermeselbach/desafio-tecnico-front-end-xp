import styled from "styled-components";

export const DivContainerModal = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(1, 1, 1);
`;

export const DivWrap = styled.div`
  width: 90%;
  height: 90%;
  background-color: rgb(20, 20, 20);
  border-radius: 5px;
  overflow: hidden;
  //padding: 50px 35px 33px 35px;
  box-shadow: 0px 0px 15px 10px #21d4fd;
  justify-content: center;
  align-items: center;
  display: flex;
  margin-right: 5px;
`;

export const DivWrap2 = styled.div`
  width: 99%;
  height: 98%;
  background-color: rgb(20, 20, 20);
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 0px 10px 10px #b721ff;
  justify-content: center;
  align-items: center;
  margin-top: 3px;
  margin-left: 2px;
`;

export const H2 = styled.h2`
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
  background: -webkit-linear-gradient(to left, #b721ff, #21d4fd);
  background: -o-linear-gradient(to left, #b721ff, #21d4fd);
  background: -moz-linear-gradient(to left, #b721ff, #21d4fd);
  background: linear-gradient(to left, #b721ff, #21d4fd);
  border-radius: 15px;
  box-shadow: 5px 5px 10px 5px rgba(187, 2, 249, 0.2);
  justify-items: center;
  margin-bottom: 50px;
  margin-top: 15px;
  margin-left: 30px;
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
  background: -webkit-linear-gradient(to left, #b721ff, #21d4fd);
  background: -o-linear-gradient(to left, #b721ff, #21d4fd);
  background: -moz-linear-gradient(to left, #b721ff, #21d4fd);
  background: linear-gradient(to left, #b721ff, #21d4fd);
  border-radius: 15px;
  box-shadow: 5px 5px 10px 5px rgba(187, 2, 249, 0.2);
  justify-items: center;
  margin-top: -50px;
  margin-left: 77%;
`;

export const DivTable = styled.div`
  width: 50%;
  height: 300px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: azure;
  border-radius: 5px;
  overflow: hidden;
  margin-left: 13%;
  margin-bottom: 120px;
  box-shadow: 0px 0px 10px 3px #21d4fd;
`;

export const Table = styled.table`
  width: 99.5%;
  height: 99%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(0, 0, 0);
  border-radius: 5px;
  overflow: hidden;
  border: 1px solid black;
`;

export const THeadTable = styled.thead`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: rgb(20, 20, 20);
  // border-radius: 5px;
  overflow: hidden;
  border: 1px solid white;
`;

export const TRTable = styled.tr`
  width: 100%;
  font-size: 19px;
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: black;
  // border-radius: 5px;
  overflow: hidden;
  //border: 1px solid #21d4fd;
  box-shadow: 0px 0px 10px 3px azure
`;

export const THTable = styled.th`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: black;
  //border-radius: 5px;
  overflow: hidden;
  margin-bottom: 100px;
  background-color: azure;
  margin-bottom: 0px;
  border: 1px solid black;
`;

export const TBodyTable = styled.tbody`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(20, 20, 20);
  // border-radius: 5px;
  overflow: hidden;
  border: 1px solid white;
`;

export const TDBodyTable = styled.td`
  width: 50.5%;
  height: 50%;
  display: flex;
  font-weight: bold;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: black;
  // border-radius: 5px;
  overflow: hidden;
  margin-bottom: 100px;
  background-color: azure;
  margin-bottom: 0px;
  border: 1px solid ;
`;

export const DivButtons = styled.div`
  display: table-column;
  width: 30%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  margin-bottom: auto;
  margin-left: 5%;
  //margin-top: 20px;
`;

export const Button = styled.button`
  font-size: 1.3rem;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 10px;
  display: flex;
  width: 120px;
  text-align: center;
  justify-content: space-around;
  align-items: center;
  border: 2px solid #000;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 1px 1px 50px 5px rgba(187, 2, 249, 0.2);
  border-radius: 5px;
  cursor: pointer;
  &:hover {
  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  background: -webkit-linear-gradient(to left, #b721ff, #21d4fd);
  background: -o-linear-gradient(to left, #b721ff, #21d4fd);
  background: -moz-linear-gradient(to left, #b721ff, #21d4fd);
  background: linear-gradient(to left, #b721ff, #21d4fd);
  border-radius: 15px;
  }
  &:active {
    box-shadow: inset 0px 0px 0px 0px #21d4fd;
    color: linear-gradient(to left, #b721ff, #21d4fd);
  }
`;

export const DivTableAndButtons = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  margin-left: -10%;
`;

export const ButtonConfirm = styled.button`
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  width: 150px;
  height: 40px;
  text-align: center;
  justify-content: center;
  align-items: center;
  border: 2px solid #000;
  border-radius: 10px;
  background-color: #fff;
  margin-left: 15px;
  cursor: pointer;
  &:hover {
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    background: -webkit-linear-gradient(to left, #b721ff, #21d4fd);
    background: -o-linear-gradient(to left, #b721ff, #21d4fd);
    background: -moz-linear-gradient(to left, #b721ff, #21d4fd);
    background: linear-gradient(to left, #b721ff, #21d4fd);
    border-radius: 10px;
  }
  &:active {
    box-shadow: inset 1px 1px 10px 5px #21d4fd;
    color: linear-gradient(to left, #b721ff, #21d4fd);
  }
`;

export const ButtonBack = styled.button`
  font-size: 1.2rem;
  font-weight: bold;
  display: flex;
  width: 250%;
  height: 40px;
  text-align: center;
  justify-content: center;
  align-items: center;
  border: 2px solid #000;
  border-radius: 10px;
  background-color: #fff;
  margin-left: 120%;
  cursor: pointer;
  &:hover {
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    background: -webkit-linear-gradient(to left, #b721ff, #21d4fd);
    background: -o-linear-gradient(to left, #b721ff, #21d4fd);
    background: -moz-linear-gradient(to left, #b721ff, #21d4fd);
    background: linear-gradient(to left, #b721ff, #21d4fd);
    border-radius: 10px;
  }
  &:active {
    box-shadow: inset 1px 1px 10px 5px #21d4fd;
    color: linear-gradient(to left, #b721ff, #21d4fd);
  }
`;

export const Input = styled.input`
  font-size: 1.3rem;
  font-weight: bold;
  display: flex;
  width: 280px;
  text-align: center;
  justify-content: center;
  align-items: center;
  border: 2px solid #000;
  border-radius: 10px;
  padding: 5px;
  box-shadow: 5px 5px 100px 5px #21d4fd;
`;

export const DivBtnAndInput = styled.div`
  display: inline;
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  margin-bottom: 220px;  
  margin-left: -10%;
`;

export const DivButtonsFoot = styled.div`
  display: flex;
  width: 50px;
  height: auto;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-left: 25%;
  margin-top: 15%;
`;

export const Span = styled.span`
  font-size: 1.3rem;
  font-weight: bold;
  display: flex;
  width: auto;
  text-align: center;
  justify-content: center;
  align-items: center;
  border: 2px solid #000;
  border-radius: 10px;
  background-color: #fff;
  margin-left: 15px;
`;  