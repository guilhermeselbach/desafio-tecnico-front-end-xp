import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import UserContext from "../Context/UserContext";
import ApiContext from "../Context/ApiContext";
import { buyOrSales, /* handleConfirmBtn */ } from "../Helpers/FuncForModal";
import { fetchActiveValue } from "../Services/requestApi";
import logo1 from "../Assets/logo1.jpeg";

// Css Tabela
import { TDBody1, TDBody2, Img, TBody1, TR2, THHead1, TR1, Table1, THead1, DivTable1, DivTable2, DivActivesAvaliable, P, DivP, Buttons, ButtonFoot, DivContainer, H3T, DivContainertables, DivMineActives } from "../StyleComponets/InvestmentsTable";

// Css Modal
import { DivTableAndButtons, Span, DivButtonsFoot, DivBtnAndInput, Input, ButtonBack, ButtonConfirm, DivContainerModal, DivWrap, DivWrap2, H2, H3, DivTable, Table, THeadTable, THTable, TRTable, TBodyTable, TDBodyTable, Button, DivButtons} from "../StyleComponets/ModalStyled";

Modal.setAppElement(document.getElementById("root"));

export default function InvestmentsTable() {
  const { email, userMoney, setUserMoney, userActives, setUserActives } = useContext(UserContext);
  const { actives, setIsLoading, activeValue, setActiveValue, activesQtd, setActivesQtd } = useContext(ApiContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeModal, setActiveModal] = useState([]);
  const [activeValueModal, setActiveValueModal] = useState(1);
  const [actionType, setActionType] = useState("buy");
  const [idOfActiveQtd, setIdOfActiveQtd] = useState("");


  function handleModalOpen({ target }) {
    const parent = target.parentElement.parentElement;
    const activeArr = [parent.children[0].innerText, parent.children[1].innerText, parent.children[2].innerText];
    setIsLoading(true);
    setActiveModal(activeArr);
    setIdOfActiveQtd(target.id);
    setIsLoading(false);
    setIsModalOpen(true);
  }

  function handleModalClose() {
    setActiveModal([]);
    setIdOfActiveQtd("");
    setIsModalOpen(false);
  }

  const handleConfirmBtn = () => {
    const totalValue = Number(activeValueModal) * Number(activeModal[2]);
  
    if (actionType === "buy" && activeValueModal > 0) {
      setUserMoney(Number(userMoney) - Number(totalValue));
      setActivesQtd(Number(activesQtd[idOfActiveQtd]) - Number(activeValueModal));
      setUserActives(prevState => [...prevState, { id: idOfActiveQtd, Acao: activeModal[0], Qtd: activeValueModal, Valor: activeModal[2]}]);
      const test = Number(activesQtd[idOfActiveQtd]) - Number(activeValueModal);
      setActiveValueModal(0);
      alert("Compra realizada com sucesso!");
    } else if (actionType === "sale" && activeValueModal > 0 && activeValueModal < userMoney) {
      setUserMoney(Number(userMoney) + Number(totalValue));
      setActivesQtd(Number(activesQtd[idOfActiveQtd]) + Number(activeValueModal));
      setUserActives(prevState => prevState.filter(item => item.id !== idOfActiveQtd));
      setActiveValueModal(0);
      alert("Venda realizada com sucesso!");
    } else {
       alert("Valor inválido");
    }
  };

  useEffect(() => {
    actives.map(async (active) => {
      setTimeout(async () => {
        const value = await fetchActiveValue(active.cd_acao);
        await setActiveValue(prevState => [...prevState, value]);
      } , 10000);
      });
  },[setActiveValue]);

  useEffect(() => {
  } , [activesQtd, setActivesQtd]);

  const navigate = useNavigate();

  return (
    <DivContainer>
        <Img data-testid="logo" src={logo1} alt="logo da empresa Xp.inc" />
      <H3T data-testid="userName">{ email }</H3T>
      <DivContainertables>
      <DivMineActives>
        <DivP>
          <P data-testid="myActives">Minhas Ações</P>
        </DivP>
        <DivTable1>
        <Table1 data-testid="firstTable">
          <THead1>
            <TR1>
              <THHead1 data-testid="activeTh1">Ação</THHead1>
              <THHead1 data-testid="qtdTh1">Quantidade</THHead1>
              <THHead1 data-testid="valueTh1">Valor Und</THHead1>
              <THHead1 data-testid="btnsTh1">Negociar</THHead1>
            </TR1>
          </THead1>

          <TBody1>
            {userActives && userActives.map((active, index) => (
            <TR1
              key={index}
            >
              <TDBody1 data-testid="activeTb1">{active.Acao}</TDBody1>
              <TDBody1 data-testid="qtdTb1">{active.Qtd}</TDBody1>
              <TDBody1 data-testid="valueTb1">{active.Valor}</TDBody1>
              <TDBody2 data-testid="btnsTb1"> <Buttons data-testid="btnC1" id={userActives.id} onClick={(e) => handleModalOpen(e) }>C</Buttons>
              <Buttons data-testid="btnV1" id={active.id} onClick={(e) => handleModalOpen(e) }>V</Buttons> </TDBody2>
            </TR1>
            ))}
          </TBody1>
        </Table1>
        </DivTable1>
      </DivMineActives>

      <hr />

      <DivActivesAvaliable>
      <DivP>
        <P data-testid="activesAbles">Ações Disponíveis Para Investir</P>
      </DivP>
      <DivTable2>
      <Table1 data-testid="secondTable">
        <THead1>
          <TR1>
            <THHead1 data-testid="activeTh2">Ação</THHead1>
            <THHead1 data-testid="qtdTh2">Quantidade</THHead1>
            <THHead1 data-testid="valueTh2">Valor Und</THHead1>
            <THHead1 data-testid="btnsTh2">Negociar</THHead1>
          </TR1>
        </THead1>

            {actives && actives.map((active, index) => (
        <TBody1 key={active + index}>
        <TR2
            >
              <TDBody1 data-testid="activeTb2" id={active.id + index}>{active.cd_acao}</TDBody1>
              <TDBody1 data-testid="qtsTb2" id={active.id + index}>{activesQtd[index]}</TDBody1>
              <TDBody1 data-testid="valueTb2" id={active.id + index}>{activeValue[index]}</TDBody1>
              <TDBody2 data-testid="btnsTb2">
                <Buttons data-testid="btnC2" id={active.id} onClick={(e) => handleModalOpen(e) }>C</Buttons>
                <Buttons data-testid="btnV2" disabled={true}>V</Buttons>
              </TDBody2>
        
            </TR2>
        </TBody1>
              ))}
      </Table1>
      </DivTable2>
      </DivActivesAvaliable>
    </DivContainertables>
      <Modal
        data-testid="modal"
        ariaHideApp={false}
        isOpen={isModalOpen}
        onRequestClose={handleModalClose}
        >
        <DivContainerModal>
          <DivWrap>
          <DivWrap2>
            <H2>R$:{ userMoney },00</H2> <H3>{email}</H3>
            <DivTableAndButtons>
            <DivTable
            data-testid="modalTable">
            <Table>
              <THeadTable>
                <TRTable>
                  <THTable>Ação</THTable>
                  <THTable>Quantidade</THTable>
                  <THTable>Valor Und</THTable>
                </TRTable>
              </THeadTable>

              <TBodyTable>
                <TRTable id={idOfActiveQtd}>
                  <TDBodyTable id={idOfActiveQtd}>{activeModal[0]}</TDBodyTable>
                  <TDBodyTable id={idOfActiveQtd}>{activeModal[1]}</TDBodyTable>
                  <TDBodyTable id={idOfActiveQtd}>{activeModal[2]}</TDBodyTable>
                </TRTable>
              </TBodyTable>
            </Table>
            </DivTable>
            <DivButtons>
            <DivBtnAndInput>
            <Button
              id="btnBuy"
              onClick={({ target }) => { buyOrSales(target, setActionType); }}
            >
              Comprar
            </Button><Span>Valor Total = {Number(activeValueModal) * Number(activeModal[2])}</Span>
            <Input
              id="inputBuy"
              type="number"
              placeholder="Informe Quantidade"
              onChange={(e) => setActiveValueModal(e.target.value)}
            />
            <br />
            </DivBtnAndInput>
            <DivBtnAndInput>
            <Button
              id="btnSale"
              onClick={({ target }) => { buyOrSales(target, setActionType); }}
            >
              Vender
            </Button><Span>Valor Total = {Number(activeValueModal) * Number(activeModal[2])}</Span>
            <Input
              id="inputSale"
              type="number"
              placeholder="Informe Quantidade"
              onChange={(e) => setActiveValueModal(e.target.value)}
            />
            </DivBtnAndInput>
            <br />
            <DivButtonsFoot>
            <ButtonBack onClick={handleModalClose}> Voltar </ButtonBack>

            <ButtonConfirm
              onClick={() => handleConfirmBtn(
                actionType,
                activeModal,
                activeValueModal,
                setActiveValueModal,
                userMoney,
                setUserMoney,
                setActivesQtd,
                userActives,
                setUserActives,
                activesQtd,
                idOfActiveQtd,
              ) }
            >
              Confirmar
            </ButtonConfirm>
            </DivButtonsFoot>
            </DivButtons>
            </DivTableAndButtons>
          </DivWrap2>
          </DivWrap>
        </DivContainerModal>
      </Modal>
    <br />

    <ButtonFoot
      data-testid="btnAdmCount"
      onClick={ () => navigate("/conta") }
    >
      Gerenciar Conta
    </ButtonFoot>

  </DivContainer>
  );
}
