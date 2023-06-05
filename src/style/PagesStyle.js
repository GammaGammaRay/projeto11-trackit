import styled from "styled-components";

export const HabitosPageContainer = styled.div`
  font-family: "Lexend Deca";
  block-size: fit-content;
  height: calc(100vh - 140px);
  margin-top: 70px;
  background-color: #e5e5e5;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  .habitsHeader {
    margin-top: 26px;
    margin-bottom: 20px;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    color: #126ba5;
    width: 80vw;
    max-width: 600px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      cursor: pointer;
      width: 40px;
      height: 40px;
    }
  }

  .habitsListContainer {
    display: flex;
    flex-direction: column;
    width: 80vw;
    max-width: 600px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #666666;
    margin-top: 16px;
  }
  .emptyHabits{
    width: 100px;
  }
`;

export const RegisterPageContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 10vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .formDiv {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
    button {
      width: 100%;
    }
  }
`;
