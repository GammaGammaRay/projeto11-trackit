import React from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import GlobalStyle from "../style/GlobalStyle";
import ResetStyle from "../style/ResetStyle";

import Task from "../components/Task";

function Hoje() {
  dayjs.locale("pt-br");
  var now = dayjs().format("dddd, DD/MM").toString();
  var capitalizedNow = now.charAt(0).toUpperCase() + now.slice(1);

  return (
    <React.Fragment>
      <ResetStyle />
      <GlobalStyle />

      <PageContainer>
        <ContentContainer>
          <DateContainer>
            <div>{capitalizedNow}</div>
            <HojeStatus>Nenhum hábito concluído ainda</HojeStatus>
          </DateContainer>
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
        </ContentContainer>
      </PageContainer>
    </React.Fragment>
  );
}

export default Hoje;

const PageContainer = styled.div`
  height: 100%;
  margin-top: 70px;
  margin-bottom: 70px;
  background-color: #e5e5e5;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;

const ContentContainer = styled.div`
  margin-left: 16px;
`;

const DateContainer = styled.div`
  margin-top: 26px;
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #126ba5;
`;

const HojeStatus = styled.div`
  font-weight: 500;
  font-size: 18px;
  color: #bababa;
  line-height: 22px;
`;
