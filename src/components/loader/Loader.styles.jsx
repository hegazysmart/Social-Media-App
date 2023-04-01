import styled from "styled-components";

export const Warper = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 0, 0.5);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  .loading-overlay {
    background: transparent !important;
    color: #fff;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 99999;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

  .reverse-spinner {
    position: relative;
    height: 150px;
    width: 150px;
    border: 6px solid transparent;
    border-top-color: #2d83c0;
    border-left-color: #1867a0;
    border-radius: 50%;
    -webkit-animation: spin 1.5s linear infinite;
    animation: spin 1.5s linear infinite;
  }

  .reverse-spinner::before {
    position: absolute;
    top: 15px;
    left: 15px;
    right: 15px;
    bottom: 15px;
    content: "";
    border: 6px solid transparent;
    border-top-color: #2a45b1;
    border-left-color: #3954bf;
    border-radius: 50%;
    -webkit-animation: spinBack 1s linear infinite;
    animation: spinBack 1s linear infinite;
  }

  @-webkit-keyframes spin {
    from {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }

    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes spin {
    from {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }

    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @-webkit-keyframes spinBack {
    from {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }

    to {
      -webkit-transform: rotate(-720deg);
      transform: rotate(-720deg);
    }
  }

  @keyframes spinBack {
    from {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }

    to {
      -webkit-transform: rotate(-720deg);
      transform: rotate(-720deg);
    }
  }
`;
