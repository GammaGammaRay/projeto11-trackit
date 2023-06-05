import styled from "styled-components";

export const NavbarContainer = styled.div`
  width: 100vw;
  height: 70px;
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: white;

  top: 0px;
  left: 0px;
  z-index: 10;
  background-color: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  img {
    height: 40px;
    margin-left: 30px;
  }

  .navbarRightDiv {
    display: flex;
    justify-content: end;
    align-items: center;
    img {
      height: 40px;
      margin-right: 30px;
      margin-left: 10px;
      border-radius: 50%;
      height: 50px;
      width: 50px;
      background-color: white;
    }
  }
`;

export const DropdownMenu = styled.div`
  position: fixed;
  right: 10px;
  top: 80px;
  border-radius: 5px;
  background-color: white;
`;
