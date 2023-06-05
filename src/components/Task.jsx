import React from "react";
import styled from "styled-components";
import { useState } from "react";

function Task() {
  const [completed, setCompleted] = useState(false)

  function toggleComplete () {
    setCompleted(!completed);
  }

  return (
    <TaskContainer>
      <TaskTextContainer>
        <TaskTitle>Task Title</TaskTitle>
        <TaskStatsText>
          Sequência atual: <br />
          Seu recorde:
        </TaskStatsText>
      </TaskTextContainer>
      <TaskButton onClick={toggleComplete} completed={completed}>✔</TaskButton>
    </TaskContainer>
  );
}

export default Task;

const TaskContainer = styled.div`
  font-family: "Lexend Deca", sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80vw;
  max-width: 600px;
  height: 95px;
  background-color: white;
  border-radius: 5px;
  padding-top: 1px;
  margin-bottom: 8px;
`;

const TaskTextContainer = styled.div`
  font-style: normal;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  color: #666666;
  margin: 12px;
`;

const TaskTitle = styled.h2`
  font-weight: 400;
  font-size: 19.976px;
  line-height: 25px;
  margin-bottom: 6px;
`;

const TaskStatsText = styled.p`
  font-weight: 400;
  font-size: 12.976px;
  line-height: 16px;
`;

const TaskButton = styled.div`
  font-size: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75%;
  margin-right: 12px;
  aspect-ratio: 1 / 1;
  background: ${props => (props.completed ? "green" : "#ebebeb")};
  color: white;
  border: 1px solid #e7e7e7;
  border-radius: 5px;
  user-select: none;
  &:hover {
    scale: 1.1;
  }
`;
