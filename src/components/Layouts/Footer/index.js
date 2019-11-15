import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  border-top: 1px solid lightgrey;
  margin-top: 15px;
`;

const FooterText = styled.p`
  color: grey;
`

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterText>
        {"Arthur's Toys"} &copy; {"2019"}
      </FooterText>
    </FooterWrapper>
  );
};

export default Footer;
