import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <Link to={`/habitos`}>
          <span>Hábitos</span>
        </Link>
        <CircleProgressBarContainer>
          <span>Hoje</span> 
          <div style={{ width: "90%", height: "90%" }}>
            <CircularProgressbar
              value="50"
              styles={{
                path: {
                  stroke: `rgba(255, 255, 255)`,
                  // stroke: `rgba(62, 152, 199, ${percentage / 100})`,
                  strokeLinecap: "round",
                },
              }}
            />
          </div>
        </CircleProgressBarContainer>
        <Link to={`/historico`}>
          <span>Histórico</span>
        </Link>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.div`
  font-family: "Lexend Deca", sans-serif;
  color: white;
  width: 100vw;
  height: 70px;
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  bottom: 0px;
  left: 0px;
  z-index: 10;
  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  a:visited {
    color: #52b6ff;
  }
  a:hover {
    scale: 1.1;
  }

  img {
    height: 40px;
    margin-left: 16px;
    margin-right: 16px;
  }
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-width: 300px;
  max-width: 600px;
  width: 80vw;
`;

const CircleProgressBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #52b6ff;
  border-radius: 50%;
  position: relative;
  height: 100px;
  width: 100px;
  bottom: calc(20vh - 125px);
  text-align: center;
  span{
    position: absolute;
  }
`;
