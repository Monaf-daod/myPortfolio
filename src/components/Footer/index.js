import React from "react";
import { FooterSection, P } from "./Style.js";

const Footer = () => {

  const currentYear = new Date().getFullYear();
  return (
    <FooterSection>
      <P> Copyright &copy;{currentYear} | Monaf Daod </P>
    </FooterSection>
  );
};

export default Footer;
