import styled from "styled-components";

export const CreateHabitContainer = styled.div`
  font-family: "Lexend Deca", sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80vw;
  max-width: 600px;
  height: 175px;
  background-color: white;
  border-radius: 5px;
  margin-bottom: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  form {
    width: 100%;
    outline: none;

    input {
      &:active,
      &:focus {
        outline: none;
        background-color: #ffffff;
        border: 3px solid #52b6ff;
        border-color: #52b6ff;
      }
    }
  }
  
  .handleNewHabitButtonsContainer {
    display: flex;
    justify-content: end;
    outline: none;

    button {
      margin-left: 16px;
      cursor: pointer;
    }
    #cancelButton {
      background: none;
      color: #52b6ff;
      &:hover {
        color: #0f9aff;
      }
    }

    #submitButton {
      background: none;
      color: #ffffff;
      background-color: #52b6ff;
      padding: 8px 16px;
      border: none;
      border-radius: 5px;
      cursor: pointer;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;
