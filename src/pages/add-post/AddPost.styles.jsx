import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
`;
export const Container = styled.div`
  height: 88vh;
  display: flex;
  justify-content: center;
  align-items: center;
  button.add {
    border-radius: 25px;
    width: 40px;
    height: 40px;
    border: 1px solid rgb(11, 11, 74);
    background-color: rgb(255, 255, 255);
    display: inline-block;
    padding: 0px 10px;
    margin: 0 0.4rem;
    font-size: 1.5rem;
  }
`;

export const FormContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00000065;
  display: flex;
  justify-content: center;
  align-items: center;
  form.add-form {
    display: flex;
    flex-direction: column;
    padding: 3rem 2rem;
    background-color: #fff;
    border-radius: 1rem;
    input,
    button,
    textarea {
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
    }
    textarea {
      resize: none;
    }
    button,
    label {
      margin: 1rem 0 0.2rem;
    }

    span.error {
      color: #e02e2e;
    }
  }
`;
