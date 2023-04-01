import React from "react";
import { ButtonAdd, Slogan, Wrapper } from "./Header.styles";
import lampLogo from "../../assets/logo.jpg";

const Header = ({setShowForm}) => {
  return (
    <Wrapper>
      <img src={lampLogo} alt="Logo" className="logo-sm-app" />
      <Slogan>
        <h1>Connect</h1>
        <p>Social Meddia App</p>
      </Slogan>
      <ButtonAdd onClick={()=>setShowForm(true)}>+</ButtonAdd>
    </Wrapper>
  );
};

export default Header;
