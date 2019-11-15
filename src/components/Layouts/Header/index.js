import React from "react";
import NavigationItems from "../../Navigation/NavigationItems";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  border-bottom: 1px solid lightgray;
  margin: 15px 0;
`;
const Title = styled.p`
  font-family: "Ma Shan Zheng", cursive;
  font-size: 50px;
  margin: 0;
`;
const Header = () => {
  return (
    <HeaderWrapper>
      <Title>{"Arthur's Toys"}</Title>
      <NavigationItems />
    </HeaderWrapper>
  );
};

export default Header;
