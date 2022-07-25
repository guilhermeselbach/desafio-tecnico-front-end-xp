import styled from "styled-components";

export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(11, 11, 11);
  overflow: hidden;
  padding: 30px;
`;

export const H3T = styled.h3`
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
  box-shadow: 0px 0px 5px 2px #21d4fd;
  justify-items: center;
  margin-left: 50%;
  margin-top: 1%;
`;

export const DivContainertables = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(25, 25, 25);
  border-radius: 5px;
  overflow: hidden;
  margin-top: 2%;
  box-shadow: 1px 10px 15px 10px rgba(187, 2, 249, 0.2);
`;

export const DivMineActives = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(11, 11, 11);
  overflow: hidden;
`;

export const Buttons = styled.button`
  font-size: 1.0rem;
  font-weight: bold;
  margin-top: 5px;
  margin-bottom: 5px;
  width: 30px;
  text-align: center;
  justify-content: space-around;
  align-items: center;
  border: 2px solid #000;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 1px 1px 5px 5px rgba(187, 2, 249, 0.2);
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
  box-shadow: 1px 1px 10px 1px #21d4fd;
  }
  &:active {
    box-shadow: inset 0px 0px 0px 0px #21d4fd;
    color: linear-gradient(to left, #b721ff, #21d4fd);
  }
`;

export const ButtonFoot = styled.button`
  font-size: 1.3rem;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 180px;
  height: 30px;
  text-align: center;
  justify-content: space-around;
  align-items: center;
  border: 2px solid #000;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 1px 1px 10px 5px rgba(187, 2, 249, 0.2);
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
  box-shadow: 1px 1px 10px 5px #21d4fd;
  }
  &:active {
    box-shadow: inset 0px 0px 0px 0px #21d4fd;
    color: linear-gradient(to left, #b721ff, #21d4fd);
  }
`;

export const DivP = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  background: -webkit-linear-gradient(to left, #b721ff, #21d4fd);
  background: -o-linear-gradient(to left, #b721ff, #21d4fd);
  background: -moz-linear-gradient(to left, #b721ff, #21d4fd);
  background: linear-gradient(to left, #b721ff, #21d4fd);
  box-shadow: 1px 0px 5px 2px azure;
`;

export const P = styled.p`
  margin-left: 15px;
  font-size: 1.3rem;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
  text-align: start;
  justify-content: space-around;
  align-items: center;
  color: azure;
`;

export const DivTable1 = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: azure;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 20px;
  box-shadow: 1px 2px 5px 2px azure;
`;

export const DivActivesAvaliable = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(11, 11, 11);
  border-radius: 5px;
  overflow: hidden;
  //padding: 100px 100px 100px 100px;
`;

export const DivTable2 = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: azure;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 20px;
  box-shadow: 1px 2px 5px 2px azure;
`;

export const Table1 = styled.table`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const THead1 = styled.thead`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  background-color: azure;
  margin-left: 0px;
`;

export const TR1 = styled.tr`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  background-color: azure;
  justify-content: space-around;
  margin-top: 5px;
`;

export const THHead1 = styled.th`
  font-size: 1.2rem;
  font-weight: bold;
  width: 20%;
  height: 50px;
  display: flex;
  flex-direction: column;
  background-color: azure;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  border: 2px solid #000;
`;

export const TBody1 = styled.tbody`
   width: 100%;
  height: 100%;
  display: table-column;
  flex-direction: column;
  background-color: azure;
  margin-left: 0px;
  align-items: center;
  justify-content: center;
`;

export const TDBody1 = styled.td`
  font-size: 1.0rem;
  font-weight: bold;
  width: 20%;
  height: auto;
  display: flex;
  flex-direction: row;
  background-color: azure;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
`;

export const TR2 = styled.tr`
  height: 100%;
  display: flex;
  flex-direction: row;
  background-color: azure;
  justify-content: space-around;
  // border: 1px solid #000;
  margin-top: 5px;
`;

export const Img = styled.img`
  width: 70%;
  height: 100px;
  display: flex;
  flex-direction: row;
  box-shadow: 1px 1px 15px 10px rgba(187, 2, 249, 0.2);
`;

export const TDBody2 = styled.td`
  font-size: 1.0rem;
  font-weight: bold;
  width: 20%;
  height: auto;
  display: flex;
  flex-direction: row;
  background-color: azure;
  justify-content: space-around;
  align-items: center;
`;