import styled from "styled-components";

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 12vh;
  padding: 1vh 3vw;
  background-color: #0b0b4a;
  img.logo-sm-app {
    max-height: 100%;
  }
  .navigate{
    color:#fff;
    text-decoration: none;
    :hover{
        color: #a9dbff;
    }
  }
`;

export const Slogan = styled.div`
  text-align: center;
  color: #fff;
  h1 {
    letter-spacing: 5px;
  }
`;

export const CommentsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 5vh 5vw;


`