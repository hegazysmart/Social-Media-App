import styled from "styled-components";

export const CardContainer = styled.div`
  width: 23%;
  min-width: 240px;
  margin: 1rem 1%;
  background-color: rgba(128, 128, 128, 0.21);
  padding: 0.5rem;
  border-radius: 1rem;
  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-decoration: none;
    color: #000;
    img {
      max-width: 100%;
      height: 200px;
      border-radius: 1rem;
    }
    h4 {
      height: 65px;
      margin: 0.5rem 0;
    }
    p {
      height: 130px;
      overflow-y: auto;
    }
  }
`;
