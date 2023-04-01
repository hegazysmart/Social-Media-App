import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 12vh;
  padding: 1vh 3vw;
  background-color: #0b0b4a;
  img.logo-sm-app {
    max-height: 100%;
  }
`;

export const Slogan = styled.div`
  text-align: center;
  color: #fff;
  h1 {
    letter-spacing: 5px;
  }
`;

export const ButtonAdd = styled.button`
  color: #0b0b4a;
  background-color: #fff;
  width: 50px;
  height: 50px;
  margin: 0 24px;
  border-radius: 50%;
  font-weight: 600;
  font-size: 40px;
  cursor: pointer;
  :active{
    background-color: #494fc1;

  }
`;
